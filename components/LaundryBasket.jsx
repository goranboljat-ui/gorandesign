"use client";
import { useState, useEffect, useRef } from "react";

const WHITE = "#f8fafc";
const BLUE = "#1a3a5c";
const BLUE2 = "#244870";
const SKY = "#4a9ac8";
const SKY2 = "#6ab8e0";
const SMOKE = "#7a8898";

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
  { name: "Wash & Fold", price: "€12 / 5kg", desc: "Washed, dried, and neatly folded — ready same day", icon: "🧺" },
  { name: "Dry Cleaning", price: "from €8", desc: "Suits, dresses, delicates — professional care", icon: "👔" },
  { name: "Ironing / Press", price: "€3 / item", desc: "Shirts, trousers, dresses — crisp finish", icon: "👕" },
  { name: "Duvet & Bedding", price: "from €18", desc: "Single to king size, washed and dried", icon: "🛏️" },
  { name: "Curtains & Linens", price: "from €15", desc: "Household fabrics, large load service", icon: "🏠" },
  { name: "Express Service", price: "+€5", desc: "Same-hour turnaround when available", icon: "⚡" },
];

const reviews = [
  { name: "Joan M.", text: "Brilliant service every single time. My suits come back perfectly pressed and the turnaround is always fast. Wouldn't go anywhere else for dry cleaning in Cork.", stars: 5 },
  { name: "Tom R.", text: "Used them for a wedding suit emergency — needed it same day and they delivered without any fuss. Absolute lifesavers. Excellent quality.", stars: 5 },
  { name: "Sarah B.", text: "The wash and fold service is a complete game-changer. Everything comes back clean, folded, and smelling great. Saves me hours every week.", stars: 5 },
];

export default function LaundryBasket() {
  const isMobile = useIsMobile();
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: WHITE, color: BLUE, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,252,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(26,58,92,0.12)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, letterSpacing: 1, textTransform: "uppercase" }}>🧺 The Laundry Basket</div>
            <div style={{ fontSize: 9, color: SKY, letterSpacing: "0.4em", textTransform: "uppercase" }}>Laundry & Dry Cleaning · Cork</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: BLUE, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#services" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Services</a>
              <a href="#about" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>About</a>
              <a href="tel:0214272900" style={{ background: BLUE, color: WHITE, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>021 427 2900</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid rgba(26,58,92,0.1)", padding: "0.5rem 0" }}>
            {[["Services", "#services"], ["About", "#about"], ["📞 021 427 2900", "tel:0214272900"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: BLUE, textDecoration: "none", borderBottom: "1px solid rgba(26,58,92,0.08)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "55vh" : "62vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/33bbc7b5a_generated_image.png" alt="The Laundry Basket" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,58,92,0.2) 0%, rgba(26,58,92,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: SKY2 }} />
              <span style={{ fontSize: 10, color: SKY2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Laundry & Dry Cleaning · Cork</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(38px,11vw,66px)" : "clamp(46px,7.5vw,88px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 20px", letterSpacing: -2, color: WHITE }}>The Laundry<br /><span style={{ color: SKY2 }}>Basket.</span></h1>
            <p style={{ color: "rgba(248,250,252,0.75)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 24, maxWidth: 460 }}>
              Professional laundry and dry cleaning in Cork. Fast, affordable, and done properly — every time.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#services" style={{ background: SKY, color: WHITE, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>Our Services</a>
              <a href="tel:0214272900" style={{ border: "2px solid rgba(248,250,252,0.4)", color: WHITE, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Call Us</a>
            </div>
          </div>
        </div>
        <div style={{ background: BLUE, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 28 : 56 }}>
          {[["Same Day", "Service"], ["Dry Clean", "Specialists"], ["Drop & Go", "Easy"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: SKY2 }}>{v}</div>
              <div style={{ fontSize: 9, color: "rgba(248,250,252,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: SKY, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We Do</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>Services & Prices</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: 3 }}>
            {services.map((s, i) => (
              <Fade key={s.name} delay={i * 50} style={{ background: WHITE, borderBottom: "1px solid rgba(26,58,92,0.08)", padding: "22px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                  <span style={{ fontSize: 24 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{s.desc}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 14, color: SKY, marginLeft: 12, whiteSpace: "nowrap" }}>{s.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: BLUE, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SKY2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: WHITE, margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🧺</div>
            <div style={{ color: SKY2, fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(248,250,252,0.8)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: "rgba(248,250,252,0.45)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? SKY2 : "rgba(248,250,252,0.25)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: WHITE }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 36 : 72, alignItems: "start" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SKY, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>About Us</div>
            <h2 style={{ fontSize: isMobile ? 34 : 42, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>Clean clothes.<br /><span style={{ color: SKY }}>No fuss.</span></h2>
            <p style={{ color: "rgba(26,58,92,0.55)", lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>The Laundry Basket has been taking the hassle out of laundry for Cork residents and businesses for years. Drop it in, we'll take care of the rest — wash, dry, fold or press, ready when you need it.</p>
            <p style={{ color: "rgba(26,58,92,0.55)", lineHeight: 1.9, fontSize: 15, marginBottom: 24 }}>From wedding suits to weekly bedding, we treat every item with care. Same-day service available on most items.</p>
            <a href="tel:0214272900" style={{ display: "inline-block", background: BLUE, color: WHITE, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>📞 021 427 2900</a>
          </Fade>
          <Fade delay={isMobile ? 0 : 150}>
            <div style={{ background: "#fff", borderRadius: 4, border: "1px solid rgba(26,58,92,0.1)", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: 10, color: SKY, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16 }}>Opening Hours</div>
                {[["Mon – Fri", "08:00 – 18:00"], ["Saturday", "09:00 – 16:00"], ["Sunday", "Closed"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(26,58,92,0.07)" }}>
                    <span style={{ color: SMOKE, fontSize: 14 }}>{d}</span>
                    <span style={{ color: h === "Closed" ? "rgba(26,58,92,0.2)" : BLUE, fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: 10, color: SKY, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 10 }}>Location</div>
                  <div style={{ color: "rgba(26,58,92,0.6)", fontSize: 14 }}>📍 Cork City</div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>


      {/* GALLERY */}
      <section style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {[
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/33bbc7b5a_generated_image.png", label: "The Shop" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ae10917eb_generated_image.png", label: "Dry Cleaning" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/33bbc7b5a_generated_image.png", label: "Wash & Fold" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ae10917eb_generated_image.png", label: "Ready to Collect" },
          ].map((img, i) => (
            <div key={i} style={{ position: "relative", height: 240, overflow: "hidden" }}>
              <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 16px 14px", background: "linear-gradient(to top, rgba(26,58,92,0.85), transparent)" }}>
                <span style={{ color: "#f8fafc", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: BLUE2, borderTop: "2px solid rgba(74,154,200,0.2)", padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ color: "rgba(248,250,252,0.25)", fontSize: 12, letterSpacing: "0.15em" }}>© 2025 THE LAUNDRY BASKET · CORK CITY · 021 427 2900</p>
      </footer>
    </div>
  );
}
