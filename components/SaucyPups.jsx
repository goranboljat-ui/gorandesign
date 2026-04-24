"use client";

import { useState, useEffect, useRef } from "react";

const BLUSH = "#fdf0f4";
const CHARCOAL = "#1a1018";
const CHARCOAL2 = "#241820";
const ROSE = "#c8406a";
const ROSE2 = "#e8608a";
const SMOKE = "#8a7a80";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(22px)", transition: `opacity .7s ${delay}ms, transform .7s ${delay}ms` }}>{children}</div>;
}

const services = [
  { name: "Full Groom", price: "from €55", desc: "Bath, blow-dry, cut, nail trim, ear clean — the works", icon: "✂️" },
  { name: "Bath & Blow-Dry", price: "from €35", desc: "Shampoo, conditioner, professional dry, brush out", icon: "🛁" },
  { name: "Puppy's First Groom", price: "€30", desc: "Gentle introduction — bath, dry, light tidy", icon: "🐾" },
  { name: "Nail Trim", price: "€15", desc: "Clip, file and smooth — quick and stress-free", icon: "💅" },
  { name: "Teeth Brushing", price: "€12", desc: "Dog-safe paste, keeps breath fresh", icon: "🦷" },
  { name: "De-Shed Treatment", price: "from €45", desc: "Deep wash + blow-out to reduce shedding significantly", icon: "🌟" },
];

const reviews = [
  { name: "Karen M.", text: "My golden retriever comes out looking like a show dog every single time. The team here genuinely love dogs — you can tell from the moment you walk in. Best in Cork.", stars: 5 },
  { name: "Brian O'L.", text: "Our Westie is notoriously difficult with groomers. Saucy Pups are the first to handle her without any stress. Brilliant, patient, professional.", stars: 5 },
  { name: "Aoife N.", text: "Booked the puppy's first groom and they were so gentle and reassuring. Louie came home happy, fluffy, and smelling incredible. Couldn't recommend more.", stars: 5 },
];

export default function SaucyPups() {
  const isMobile = useIsMobile();
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: BLUSH, color: CHARCOAL, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(253,240,244,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,64,106,0.12)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 1, color: ROSE }}>🐾 Saucy Pups</div>
            <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Dog Grooming · Cork</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: CHARCOAL, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#services" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Services</a>
              <a href="#book" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Book</a>
              <a href="tel:0214272400" style={{ background: ROSE, color: "#fff", padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>021 427 2400</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid rgba(200,64,106,0.1)", padding: "0.5rem 0" }}>
            {[["Our Services", "#services"], ["Book Now", "#book"], ["📞 021 427 2400", "tel:0214272400"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: CHARCOAL, textDecoration: "none", borderBottom: "1px solid rgba(200,64,106,0.08)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "55vh" : "62vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8ae1262ee_generated_image.png" alt="Saucy Pups" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(253,240,244,0.1) 0%, rgba(26,16,24,0.82) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: ROSE2 }} />
              <span style={{ fontSize: 10, color: ROSE2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Professional Dog Grooming · Cork</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(44px,13vw,70px)" : "clamp(52px,9vw,96px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 20px", letterSpacing: -2, color: ROSE2 }}>Saucy Pups.</h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 24, maxWidth: 460 }}>
              Professional grooming with genuine love for every dog that comes through the door. Your pup deserves the best.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#services" style={{ background: ROSE, color: "#fff", padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>Our Services</a>
              <a href="tel:0214272400" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Book Now</a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", borderBottom: "1px solid rgba(200,64,106,0.1)", padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 28 : 56 }}>
          {[["All Breeds", "Welcome"], ["Gentle", "Stress-Free"], ["5★", "Google Rating"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: ROSE }}>{v}</div>
              <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We Offer</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>Our Services</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: 3 }}>
            {services.map((s, i) => (
              <Fade key={s.name} delay={i * 50} style={{ background: BLUSH, borderBottom: "1px solid rgba(200,64,106,0.08)", padding: "22px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{s.desc}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 14, color: ROSE, marginLeft: 12, whiteSpace: "nowrap" }}>{s.price}</div>
              </Fade>
            ))}
          </div>
          <Fade style={{ marginTop: 24, textAlign: "center" }}>
            <p style={{ color: SMOKE, fontSize: 13 }}>Prices vary by breed, size and coat. Contact us for a quote.</p>
          </Fade>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: ROSE, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What Pet Owners Say</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: "#fff", margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🐾</div>
            <div style={{ color: "#ffd700", fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? "#fff" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all .3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* DOG PHOTO */}
      <div style={{ position: "relative", height: isMobile ? 200 : 260, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5adf92686_generated_image.png" alt="Happy dog" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(200,64,106,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 1rem" }}>
            <div style={{ fontSize: isMobile ? 22 : 32, fontWeight: 900, color: "#fff", fontStyle: "italic" }}>Every dog deserves to feel good.</div>
          </div>
        </div>
      </div>

      {/* BOOK */}
      <section id="book" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40, textAlign: isMobile ? "left" : "center" }}>
            <div style={{ fontSize: 10, color: ROSE2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Get in Touch</div>
            <h2 style={{ fontSize: isMobile ? 34 : 44, fontWeight: 900, color: "#fff", margin: 0 }}>Book an Appointment</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 48 }}>
            <Fade>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: ROSE2, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 10 }}>Location</div>
                <div style={{ color: "#fff", fontSize: 15 }}>Cork City</div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 10, color: ROSE2, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Opening Hours</div>
                {[["Mon – Fri", "09:00 – 17:30"], ["Saturday", "09:00 – 16:00"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: SMOKE, fontSize: 14 }}>{d}</span>
                    <span style={{ color: h === "Closed" ? "rgba(255,255,255,0.15)" : "#fff", fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0214272400" style={{ display: "inline-block", background: ROSE, color: "#fff", padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>📞 021 427 2400</a>
            </Fade>
            <Fade delay={isMobile ? 0 : 150}>
              <div style={{ background: CHARCOAL2, borderRadius: 4, padding: "28px", border: "1px solid rgba(200,64,106,0.15)" }}>
                <div style={{ fontSize: 10, color: ROSE2, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 20 }}>Why Saucy Pups?</div>
                {[["🐾", "All breeds welcome — small to large"], ["🛁", "Premium shampoos and conditioners"], ["✂️", "Breed-specific grooming expertise"], ["💝", "Genuinely dog-obsessed team"]].map(([icon, text]) => (
                  <div key={text} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 20 }}>{icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{text}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>


      {/* GALLERY */}
      <section style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {[
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8ae1262ee_generated_image.png", label: "The Salon" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5adf92686_generated_image.png", label: "Happy Clients" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/55e5630f7_generated_image.png", label: "After the Groom" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8ae1262ee_generated_image.png", label: "Full Groom Results" },
          ].map((img, i) => (
            <div key={i} style={{ position: "relative", height: 240, overflow: "hidden" }}>
              <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 16px 14px", background: "linear-gradient(to top, rgba(26,16,24,0.85), transparent)" }}>
                <span style={{ color: "#fdf0f4", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "#100810", borderTop: "2px solid rgba(200,64,106,0.15)", padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ color: "rgba(253,240,244,0.2)", fontSize: 12, letterSpacing: "0.15em" }}>© 2025 SAUCY PUPS · CORK CITY · 021 427 2400 · 🐾</p>
      </footer>
    </div>
  );
}
