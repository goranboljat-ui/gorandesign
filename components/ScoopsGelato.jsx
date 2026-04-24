"use client";
import { useState, useEffect, useRef } from "react";

// SCOOPS GELATO — Cobh, Cork
// Palette: Bright white + pastel coral + deep raspberry + pistachio
// Layout: Magazine-style, Baker's Son rhythm, playful twist

const WHITE = "#fffaf8";
const RASPBERRY = "#c41a5a";
const CORAL = "#f08060";
const PISTACHIO = "#6a9a5a";
const DARK = "#1a0a12";

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

const flavours = {
  classic: [
    { name: "Stracciatella", price: "€3.50 / scoop", desc: "Sweet cream, dark chocolate shards — a timeless Italian favourite" },
    { name: "Pistachio", price: "€3.50 / scoop", desc: "Sicilian pistachios, rich and nutty" },
    { name: "Salted Caramel", price: "€3.50 / scoop", desc: "Smooth caramel, fleur de sel finish" },
    { name: "Dark Chocolate", price: "€3.50 / scoop", desc: "70% cocoa, intense and velvety" },
    { name: "Vanilla Bean", price: "€3.50 / scoop", desc: "Madagascar vanilla, three-milk base" },
    { name: "Strawberry Sorbet", price: "€3.00 / scoop", desc: "Dairy-free, pure Irish strawberry" },
  ],
  seasonal: [
    { name: "Raspberry & Rose", price: "€3.80 / scoop", desc: "Fresh raspberry, hint of rose water" },
    { name: "Mango Passionfruit", price: "€3.80 / scoop", desc: "Tropical sorbet, completely dairy-free" },
    { name: "Honeycomb Crunch", price: "€3.80 / scoop", desc: "Vanilla base, caramelised honeycomb" },
    { name: "Lemon & Thyme", price: "€3.80 / scoop", desc: "Zesty sorbet, fresh garden thyme" },
  ],
  treats: [
    { name: "Waffle Cone", price: "€1.00", desc: "Fresh-baked, golden, crispy" },
    { name: "Affogato", price: "€5.50", desc: "Vanilla gelato, hot espresso shot" },
    { name: "Gelato Sundae", price: "€8.50", desc: "3 scoops, sauce, whipped cream, wafer" },
    { name: "Gelato Float", price: "€6.50", desc: "2 scoops + sparkling lemonade" },
  ],
};

const reviews = [
  { name: "Maeve O'B.", text: "The best gelato outside of Italy. The pistachio is extraordinary — I'd drive to Cobh just for this. My kids are completely obsessed.", stars: 5 },
  { name: "Tomás R.", text: "Stracciatella is the real deal. Proper Italian technique, brilliant ingredients. This place is a gem — Cobh is lucky to have it.", stars: 5 },
  { name: "Emma J.", text: "Salted caramel gelato changed my life. I'm not joking. Dense, creamy, with a perfect salty hit. Honestly exceptional.", stars: 5 },
];

export default function ScoopsGelato() {
  const [activeTab, setActiveTab] = useState("classic");
  const [rev, setRev] = useState(0);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: WHITE, color: DARK, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,250,248,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(196,26,90,0.1)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 1, fontStyle: "italic", color: RASPBERRY }}>Scoops</div>
            <div style={{ fontSize: 9, color: PISTACHIO, letterSpacing: "0.4em", textTransform: "uppercase" }}>Artisan Gelato · Cobh · Co. Cork</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {["flavours", "about", "find us"].map(s => (
              <a key={s} href={`#${s.replace(" ", "")}`} style={{ color: "rgba(26,10,18,0.4)", textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => e.target.style.color = RASPBERRY} onMouseLeave={e => e.target.style.color = "rgba(26,10,18,0.4)"}>{s}</a>
            ))}
          </div>
          <a href="tel:0214815000" style={{ background: RASPBERRY, color: WHITE, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>021 481 5000</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ paddingTop: 62, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "90vh" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px 60px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: PISTACHIO }} />
            <span style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.5em", textTransform: "uppercase" }}>Artisan Gelato · Made Fresh Daily</span>
          </div>
          <h1 style={{ fontSize: "clamp(52px,9vw,96px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 6px", letterSpacing: -2, fontStyle: "italic", color: RASPBERRY }}>Scoops.</h1>
          <h2 style={{ fontSize: "clamp(20px,3.5vw,36px)", fontWeight: 300, lineHeight: 1.2, margin: "12px 0 28px", letterSpacing: 2, textTransform: "uppercase", color: "rgba(26,10,18,0.5)" }}>Artisan Gelato<br />Cobh, Cork</h2>
          <p style={{ color: "rgba(26,10,18,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 400 }}>
            Slow-churned Italian-style gelato made fresh every morning. Real ingredients. Honest flavours. Cobh's sweetest spot.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#flavours" style={{ background: RASPBERRY, color: WHITE, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>See Flavours</a>
            <a href="tel:0214815000" style={{ border: "2px solid rgba(196,26,90,0.2)", color: DARK, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Find Us</a>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(196,26,90,0.1)" }}>
            {[["20+", "Flavours"], ["Fresh", "Made Daily"], ["Cobh", "Since 2019"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: 18, fontWeight: 900, color: RASPBERRY }}>{v}</div>
                <div style={{ fontSize: 9, color: "rgba(26,10,18,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f85e1be38_generated_image.png" alt="Scoops Gelato" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 32, left: 32, background: WHITE, padding: "14px 22px", borderLeft: `4px solid ${RASPBERRY}` }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: DARK }}>Today's Special</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: RASPBERRY }}>Raspberry & Rose</div>
            <div style={{ fontSize: 12, color: "rgba(26,10,18,0.55)" }}>Seasonal flavour · €3.80 / scoop</div>
          </div>
        </div>
      </section>

      {/* GELATO BANNER */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/253a775fe_generated_image.png" alt="Gelato" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(196,26,90,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, color: "rgba(255,250,248,0.7)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 8 }}>Slow-Churned · Italian Method</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: WHITE, fontStyle: "italic" }}>Every scoop is made with love.</div>
          </div>
        </div>
      </div>

      {/* FLAVOURS */}
      <section id="flavours" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Freshly Churned</div>
            <h2 style={{ fontSize: 46, fontWeight: 900, margin: 0 }}>The Flavours</h2>
          </Fade>
          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: "2px solid rgba(196,26,90,0.1)" }}>
            {[["classic", "🍦 Classic"], ["seasonal", "🌸 Seasonal"], ["treats", "🧁 Treats"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{ flex: 1, padding: "13px 8px", background: "none", border: "none", borderBottom: activeTab === k ? `2px solid ${RASPBERRY}` : "2px solid transparent", color: activeTab === k ? RASPBERRY : "rgba(26,10,18,0.4)", fontSize: 12, letterSpacing: "0.15em", cursor: "pointer", fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400, transition: "all .3s" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {flavours[activeTab].map((item, i) => (
              <Fade key={i} delay={i * 50} style={{ background: "rgba(196,26,90,0.03)", borderBottom: "1px solid rgba(196,26,90,0.07)", padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(26,10,18,0.5)", fontStyle: "italic" }}>{item.desc}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 14, color: RASPBERRY, marginLeft: 16, whiteSpace: "nowrap" }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: RASPBERRY, padding: "90px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: "rgba(255,250,248,0.6)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: WHITE, margin: "0 0 52px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🍦</div>
            <div style={{ color: "#ffd700", fontSize: 22, marginBottom: 20 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(255,250,248,0.85)", fontSize: 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>"{reviews[rev].text}"</p>
            <div style={{ color: "rgba(255,250,248,0.6)", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? WHITE : "rgba(255,250,248,0.3)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* ABOUT + FIND US */}
      <section id="about" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>Our Story</div>
            <h2 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>Made fresh,<br /><span style={{ color: RASPBERRY }}>every morning.</span></h2>
            <p style={{ color: "rgba(26,10,18,0.6)", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>We make our gelato the Italian way — slowly churned, denser and creamier than ice cream, with no artificial flavours. Every batch starts with the best ingredients we can find.</p>
            <p style={{ color: "rgba(26,10,18,0.6)", lineHeight: 1.9, fontSize: 15 }}>From classic pistachio and stracciatella to seasonal surprises that change with what's best, there's always something worth trying. Come in, take your time, and try a few.</p>
          </Fade>
          <Fade delay={150} style={{ position: "relative" }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/d7feeddd5_generated_image.png" alt="Gelato cone" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: -20, right: -20, background: RASPBERRY, color: WHITE, padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>4.9★</div>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>Google Rating</div>
            </div>
          </Fade>
        </div>
      </section>

      {/* FIND US */}
      <section id="findus" style={{ background: DARK, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Come Visit</div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: WHITE, margin: 0 }}>Find Us in Cobh</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <Fade>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Address</div>
                <div style={{ color: WHITE, fontSize: 16, lineHeight: 1.7 }}>West Beach, Cobh<br />Co. Cork, P24 YD80</div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: PISTACHIO, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Opening Hours</div>
                {[["Mon – Fri", "11:00 – 19:00"], ["Sat – Sun", "10:00 – 20:00"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,250,248,0.08)" }}>
                    <span style={{ color: "rgba(255,250,248,0.45)", fontSize: 14 }}>{d}</span>
                    <span style={{ color: WHITE, fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0214815000" style={{ display: "inline-block", background: RASPBERRY, color: WHITE, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>📞 021 481 5000</a>
            </Fade>
            <Fade delay={150}>
              <div style={{ borderRadius: 4, overflow: "hidden" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d-8.2970!3d51.8490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2sCobh%2C+Co.+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="320" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Scoops Gelato" />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <footer style={{ background: "#100408", padding: "2rem 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,250,248,0.25)", fontSize: 12, letterSpacing: "0.2em" }}>© 2025 SCOOPS GELATO · COBH, CO. CORK · 021 481 5000</p>
      </footer>
    </div>
  );
}
