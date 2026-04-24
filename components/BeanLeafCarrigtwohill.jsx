"use client";

import { useState, useEffect, useRef } from "react";

// BEAN & LEAF — Carrigtwohill
// Palette: Deep forest green + warm cream + copper accent
// Layout: Magazine-style, Baker's Son rhythm

const CREAM = "#f8f4ee";
const GREEN = "#1a2e1a";
const GREEN2 = "#2a4a2a";
const COPPER = "#b8742a";
const SAGE = "#6a9a6a";

function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `opacity .7s ${delay}ms, transform .7s ${delay}ms` }}>{children}</div>;
}

const menu = {
  coffee: [
    { name: "Flat White", price: "€3.60", desc: "Double ristretto, silky microfoam" },
    { name: "Pour Over", price: "€4.20", desc: "Single origin, filter brewed to order" },
    { name: "Oat Latte", price: "€4.00", desc: "Seasonal espresso blend, oat milk" },
    { name: "Cold Brew", price: "€4.50", desc: "24-hour steep, served over ice" },
    { name: "Matcha Latte", price: "€4.20", desc: "Ceremonial grade Japanese matcha" },
    { name: "Americano", price: "€3.00", desc: "Double shot, hot water on the side" },
  ],
  food: [
    { name: "Avocado Toast", price: "€10.50", desc: "Sourdough, poached egg, chilli, seeds" },
    { name: "Granola Bowl", price: "€8.00", desc: "House granola, Greek yoghurt, berries" },
    { name: "Toasted Focaccia", price: "€9.50", desc: "Brie, fig jam, walnuts, rocket" },
    { name: "Soup of the Day", price: "€6.50", desc: "Homemade daily, with sourdough" },
    { name: "Smashed Eggs", price: "€11.00", desc: "Feta, spinach, roasted tomato on sourdough" },
    { name: "Banana Bread", price: "€3.50", desc: "Walnut, brown sugar, baked in-house" },
  ],
  pastry: [
    { name: "Butter Croissant", price: "€3.20", desc: "All-butter, laminated, golden" },
    { name: "Cinnamon Roll", price: "€3.80", desc: "Brown sugar, cream cheese glaze" },
    { name: "Almond Croissant", price: "€3.50", desc: "Frangipane filled, flaked almonds" },
    { name: "Seasonal Tart", price: "€4.00", desc: "Changes daily — ask at the counter" },
  ],
};

const reviews = [
  { name: "Niamh B.", text: "Best coffee I've had outside of Dublin. The pour over is exceptional and the space is just beautiful. My new favourite spot.", stars: 5 },
  { name: "Ciarán F.", text: "Popped in on a whim and stayed for an hour. The avocado toast is the real deal — and the oat latte was perfect. Will be back.", stars: 5 },
  { name: "Sarah K.", text: "So glad Carrigtwohill finally has a proper specialty coffee shop. The quality is consistently amazing, every single visit.", stars: 5 },
];

export default function BeanLeafCarrigtwohill() {
  const [activeTab, setActiveTab] = useState("coffee");
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: CREAM, color: GREEN, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,244,238,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(26,46,26,0.1)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 1 }}>Bean & Leaf</div>
            <div style={{ fontSize: 9, color: SAGE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Carrigtwohill · Speciality Coffee</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {["menu", "about", "find us"].map(s => (
              <a key={s} href={`#${s.replace(" ", "")}`} style={{ color: "rgba(26,46,26,0.45)", textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => e.target.style.color = COPPER} onMouseLeave={e => e.target.style.color = "rgba(26,46,26,0.45)"}>{s}</a>
            ))}
          </div>
          <a href="tel:0214854000" style={{ background: GREEN, color: CREAM, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>021 485 4000</a>
        </div>
      </nav>

      {/* HERO — Magazine 2-col */}
      <section id="home" style={{ paddingTop: 62, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "90vh" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px 60px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: SAGE }} />
            <span style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase" }}>Open Daily · 7:30am</span>
          </div>
          <h1 style={{ fontSize: "clamp(42px,7vw,82px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 6px", letterSpacing: -2 }}>Bean</h1>
          <h1 style={{ fontSize: "clamp(42px,7vw,82px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 6px", letterSpacing: -2 }}>&</h1>
          <h1 style={{ fontSize: "clamp(42px,7vw,82px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 28px", letterSpacing: -2, color: COPPER }}>Leaf.</h1>
          <p style={{ color: "rgba(26,46,26,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 400 }}>
            Speciality coffee and honest food, brewed and baked with care every morning in Carrigtwohill.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#menu" style={{ background: GREEN, color: CREAM, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>See Menu</a>
            <a href="tel:0214854000" style={{ border: "2px solid rgba(26,46,26,0.2)", color: GREEN, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Call Us</a>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(26,46,26,0.1)" }}>
            {[["7:30am", "Opens Daily"], ["Single", "Origin Coffee"], ["Fresh", "Baked Daily"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: 16, fontWeight: 900, color: COPPER }}>{v}</div>
                <div style={{ fontSize: 9, color: "rgba(26,46,26,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/44754dea6_generated_image.png" alt="Bean and Leaf" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 32, left: 32, background: CREAM, padding: "14px 22px", borderLeft: `4px solid ${COPPER}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: GREEN }}>Today's Roast</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: COPPER }}>Ethiopian Yirgacheffe</div>
            <div style={{ fontSize: 12, color: "rgba(26,46,26,0.55)" }}>Single origin · Notes of berry & citrus</div>
          </div>
        </div>
      </section>

      {/* COFFEE BANNER */}
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4b6bcf7fb_generated_image.png" alt="Coffee" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,46,26,0.72)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 8 }}>Single Origin · Freshly Roasted</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: CREAM, fontStyle: "italic" }}>Coffee the way it should taste.</div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <section id="menu" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Fresh Every Day</div>
            <h2 style={{ fontSize: 46, fontWeight: 900, margin: 0 }}>The Menu</h2>
          </Fade>
          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: "2px solid rgba(26,46,26,0.1)" }}>
            {[["coffee", "☕ Coffee"], ["food", "🍳 Food"], ["pastry", "🥐 Pastries"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{ flex: 1, padding: "13px 8px", background: "none", border: "none", borderBottom: activeTab === k ? `2px solid ${COPPER}` : "2px solid transparent", color: activeTab === k ? COPPER : "rgba(26,46,26,0.4)", fontSize: 12, letterSpacing: "0.15em", cursor: "pointer", fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400, transition: "all .3s" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {menu[activeTab].map((item, i) => (
              <Fade key={i} delay={i * 50} style={{ background: "rgba(26,46,26,0.04)", borderBottom: "1px solid rgba(26,46,26,0.07)", padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(26,46,26,0.5)", fontStyle: "italic" }}>{item.desc}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 15, color: COPPER, marginLeft: 16, whiteSpace: "nowrap" }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: GREEN, padding: "90px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: CREAM, margin: "0 0 52px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 160, transition: "all .5s" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>☕</div>
            <div style={{ color: COPPER, fontSize: 22, marginBottom: 20 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(248,244,238,0.75)", fontSize: 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>"{reviews[rev].text}"</p>
            <div style={{ color: SAGE, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? COPPER : "rgba(248,244,238,0.25)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>Our Story</div>
            <h2 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>Coffee<br /><span style={{ color: COPPER }}>done right.</span></h2>
            <p style={{ color: "rgba(26,46,26,0.6)", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>We opened Bean & Leaf because Carrigtwohill deserved a proper coffee shop — one that takes its beans seriously, bakes fresh every morning, and actually knows your name.</p>
            <p style={{ color: "rgba(26,46,26,0.6)", lineHeight: 1.9, fontSize: 15 }}>Every cup is made with single origin beans, freshly roasted and brewed to order. No shortcuts. No compromises. Just really good coffee in a really nice space.</p>
            <div style={{ marginTop: 32, display: "flex", gap: 40 }}>
              {[["☕", "Speciality Coffee"], ["🥐", "Baked Fresh"], ["🌱", "Plant-based Options"]].map(([icon, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontSize: 10, color: "rgba(26,46,26,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </Fade>
          <Fade delay={150} style={{ position: "relative" }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/71b867972_generated_image.png" alt="Bean and Leaf" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: -20, right: -20, background: COPPER, color: "#fff", padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>4.9</div>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>Google Rating</div>
            </div>
          </Fade>
        </div>
      </section>

      {/* FIND US */}
      <section id="findus" style={{ background: GREEN, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Come Visit</div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: CREAM, margin: 0 }}>Find Us</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <Fade>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Address</div>
                <div style={{ color: CREAM, fontSize: 16, lineHeight: 1.7 }}>Main Street, Carrigtwohill<br />Co. Cork</div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Opening Hours</div>
                {[["Mon – Fri", "07:30 – 17:00"], ["Saturday", "08:00 – 16:00"], ["Sunday", "09:00 – 15:00"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(248,244,238,0.08)" }}>
                    <span style={{ color: "rgba(248,244,238,0.5)", fontSize: 14 }}>{d}</span>
                    <span style={{ color: CREAM, fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0214854000" style={{ display: "inline-block", background: COPPER, color: "#fff", padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>📞 021 485 4000</a>
            </Fade>
            <Fade delay={150}>
              <div style={{ borderRadius: 4, overflow: "hidden" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461!2d-8.2390!3d51.9090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484462df3e6b2e1b%3A0x1!2sCarrigtwohill%2C+Co.+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="320" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Bean and Leaf" />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0f1a0f", padding: "2rem 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(248,244,238,0.3)", fontSize: 12, letterSpacing: "0.2em" }}>© 2025 BEAN & LEAF · CARRIGTWOHILL, CO. CORK</p>
      </footer>
    </div>
  );
}
