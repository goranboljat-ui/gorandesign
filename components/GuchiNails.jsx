"use client";

import { useState, useEffect, useRef } from "react";

const BLACK = "#0c0810";
const BLACK2 = "#161018";
const ROSEGOLD = "#c8826a";
const ROSEGOLD2 = "#e8a888";
const BLUSH = "#fdf0ee";
const SMOKE = "#8a7880";

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

const services = {
  nails: [
    { name: "Gel Manicure", price: "€40", desc: "Long-lasting gel polish, shape and cuticle care" },
    { name: "Acrylic Full Set", price: "€55", desc: "Sculpted acrylic, shaped and finished to perfection" },
    { name: "Gel Infill", price: "€35", desc: "2–3 week maintenance, shape and polish refresh" },
    { name: "Nail Art", price: "from €5", desc: "Per nail — patterns, gems, chrome, custom designs" },
    { name: "Pedicure", price: "€45", desc: "Soak, scrub, shape, gel polish finish" },
    { name: "Nail Removal", price: "€20", desc: "Safe soak-off, nourishing treatment after" },
  ],
  lashes: [
    { name: "Classic Full Set", price: "€60", desc: "One extension per natural lash — natural, elegant look" },
    { name: "Hybrid Full Set", price: "€75", desc: "Mix of classic and volume — textured and full" },
    { name: "Volume Full Set", price: "€85", desc: "Mega-volume fans — dramatic and glamorous" },
    { name: "Lash Infill", price: "from €45", desc: "2–3 week top-up, keeps your lashes fresh" },
    { name: "Lash Lift & Tint", price: "€55", desc: "Natural lash curl, lift and darkening — no extensions" },
    { name: "Lash Removal", price: "€15", desc: "Gentle, safe removal with no damage" },
  ],
};

const reviews = [
  { name: "Rachel O'B.", text: "My nails have never looked so good. The attention to detail is something else — she takes her time, gets the shape perfect, and the gel lasts weeks without chipping.", stars: 5 },
  { name: "Sophie K.", text: "Came in for hybrid lashes and I'm obsessed. They look so natural but make such a difference. The studio is beautiful, the service is lovely.", stars: 5 },
  { name: "Niamh C.", text: "Best nail salon in Cork. The nail art here is genuinely artistic — I send her reference photos and she always outdoes them. Couldn't recommend highly enough.", stars: 5 },
];

export default function GuchiNails() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("nails");
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: BLACK, color: BLUSH, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(12,8,16,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,130,106,0.2)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, fontStyle: "italic", color: ROSEGOLD2 }}>Guchi Nails</div>
            <div style={{ fontSize: 9, color: ROSEGOLD, letterSpacing: "0.4em", textTransform: "uppercase" }}>Beauty & Lashes · Cork</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: BLUSH, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#services" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Services</a>
              <a href="#book" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Book</a>
              <a href="tel:0214272500" style={{ background: ROSEGOLD, color: BLACK, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>021 427 2500</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: BLACK2, borderTop: "1px solid rgba(200,130,106,0.15)", padding: "0.5rem 0" }}>
            {[["Our Services", "#services"], ["Book Now", "#book"], ["📞 021 427 2500", "tel:0214272500"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: BLUSH, textDecoration: "none", borderBottom: "1px solid rgba(200,130,106,0.08)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "55vh" : "62vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/46b9255a8_generated_image.png" alt="Guchi Nails" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,8,16,0.3) 0%, rgba(12,8,16,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: ROSEGOLD }} />
              <span style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.4em", textTransform: "uppercase" }}>Nails · Lashes · Beauty · Cork</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(42px,13vw,70px)" : "clamp(50px,9vw,90px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 8px", letterSpacing: -2, fontStyle: "italic", color: ROSEGOLD2 }}>Guchi Nails</h1>
            <p style={{ color: "rgba(253,240,238,0.5)", fontSize: isMobile ? 13 : 16, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>Beauty & Lashes</p>
            <p style={{ color: "rgba(253,240,238,0.75)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 24, maxWidth: 460 }}>
              Precision nails, stunning lashes, and beauty treatments in a luxurious studio in the heart of Cork City.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#services" style={{ background: ROSEGOLD, color: BLACK, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>Our Services</a>
              <a href="tel:0214272500" style={{ border: "2px solid rgba(200,130,106,0.35)", color: BLUSH, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Book Now</a>
            </div>
          </div>
        </div>
        <div style={{ background: BLACK2, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 28 : 56 }}>
          {[["Nails", "& Lashes"], ["Luxury", "Studio"], ["5★", "Google Rated"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: ROSEGOLD2 }}>{v}</div>
              <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NAILS BANNER */}
      <div style={{ position: "relative", height: 150, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/e242b80ef_generated_image.png" alt="Beautiful nails" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,8,16,0.72)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: isMobile ? 18 : 24, fontWeight: 900, color: BLUSH, fontStyle: "italic" }}>Every detail, done beautifully.</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We Do</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>Services</h2>
          </Fade>
          <div style={{ display: "flex", marginBottom: 36, borderBottom: "2px solid rgba(200,130,106,0.12)" }}>
            {[["nails", "💅 Nails"], ["lashes", "👁️ Lashes"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{ flex: 1, padding: "13px 8px", background: "none", border: "none", borderBottom: activeTab === k ? `2px solid ${ROSEGOLD}` : "2px solid transparent", color: activeTab === k ? ROSEGOLD2 : SMOKE, fontSize: 13, letterSpacing: "0.15em", cursor: "pointer", fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400, transition: "all .3s" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {services[activeTab].map((s, i) => (
              <Fade key={s.name} delay={i * 50} style={{ background: BLACK, borderBottom: "1px solid rgba(200,130,106,0.08)", padding: "20px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, paddingRight: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{s.desc}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 15, color: ROSEGOLD2, whiteSpace: "nowrap" }}>{s.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: BLACK, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Client Love</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: BLUSH, margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>💅</div>
            <div style={{ color: ROSEGOLD, fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(253,240,238,0.75)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: SMOKE, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? ROSEGOLD : "rgba(253,240,238,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40, textAlign: isMobile ? "left" : "center" }}>
            <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Ready?</div>
            <h2 style={{ fontSize: isMobile ? 34 : 44, fontWeight: 900, color: BLUSH, margin: 0 }}>Book Your Appointment</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 48 }}>
            <Fade>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 10 }}>Location</div>
                <div style={{ color: BLUSH, fontSize: 15 }}>Cork City Centre</div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Hours</div>
                {[["Mon – Fri", "09:30 – 18:30"], ["Saturday", "09:00 – 17:00"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(200,130,106,0.08)" }}>
                    <span style={{ color: SMOKE, fontSize: 14 }}>{d}</span>
                    <span style={{ color: h === "Closed" ? "rgba(253,240,238,0.15)" : BLUSH, fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0214272500" style={{ display: "inline-block", background: ROSEGOLD, color: BLACK, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>📞 021 427 2500</a>
            </Fade>
            <Fade delay={isMobile ? 0 : 150}>
              <div style={{ background: BLACK, borderRadius: 4, padding: "28px", border: "1px solid rgba(200,130,106,0.15)" }}>
                <div style={{ fontSize: 10, color: ROSEGOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 20 }}>Why Choose Guchi?</div>
                {[["💅", "Fully qualified and insured nail technician"], ["👁️", "Certified lash artist — classic, hybrid, volume"], ["✨", "Premium products only — no shortcuts"], ["💝", "Intimate, relaxed studio — you'll feel at ease"]].map(([icon, text]) => (
                  <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 18, marginTop: 2 }}>{icon}</span>
                    <span style={{ color: "rgba(253,240,238,0.6)", fontSize: 14, lineHeight: 1.5 }}>{text}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <footer style={{ background: "#080408", borderTop: "2px solid rgba(200,130,106,0.15)", padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ color: "rgba(253,240,238,0.18)", fontSize: 12, letterSpacing: "0.15em" }}>© 2025 GUCHI NAILS BEAUTY & LASHES · CORK CITY · 021 427 2500</p>
      </footer>
    </div>
  );
}
