"use client";

import { useState, useEffect, useRef } from "react";

// TOTU DELIKATESY — Cork (Polish/Eastern European deli)
// Palette: Red + white (Polish flag nod) + warm cream. Layout: Deli warmth, food-focused grid

const RED = "#b01020";
const RED2 = "#d01830";
const CREAM = "#f8f2e8";
const DARK = "#18120a";
const DARK2 = "#221a10";
const SMOKE = "#9a8a78";

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

const products = [
  { cat: "🥩 Wędliny / Meats", items: ["Kabanosy", "Kiełbasa Krakowska", "Szynka Gotowana", "Salami Węgierskie", "Boczek Wędzony", "Pasztet Drobiowy"] },
  { cat: "🧀 Nabiał / Dairy", items: ["Twaróg Półtłusty", "Śmietana 18%", "Kefir Polski", "Ser Żółty Gouda", "Masło Polskie", "Jogurt Naturalny"] },
  { cat: "🍞 Pieczywo / Bread", items: ["Chleb Żytni", "Bułki Kajzerki", "Chleb Na Zakwasie", "Pierogi Mrożone", "Naleśniki", "Kopytka"] },
  { cat: "🛒 Produkty Suche", items: ["Mąka Tortowa", "Kasza Gryczana", "Ryż Długoziarnisty", "Makaron Polski", "Bigos w Słoiku", "Żurek Instant"] },
];

const reviews = [
  { name: "Katarzyna W.", text: "Nareszcie coś z domu w Cork! Wszystko świeże, smaczne i w dobrej cenie. Polecam serdecznie.", stars: 5 },
  { name: "Michał P.", text: "The best Polish deli in Cork — hands down. Feels like being back in Poland.", stars: 5 },
  { name: "Agnieszka R.", text: "The kabanosy are exactly like my grandmother used to buy. So happy to have Totu here.", stars: 5 },
];

export default function TotuDelikatesy() {
  const [rev, setRev] = useState(0);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4200); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: DARK, color: CREAM, fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, background: "rgba(24,18,10,0.97)", borderBottom: `1px solid ${RED}40`, padding: "0 28px", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>🇵🇱</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase" }}>TOTU</div>
              <div style={{ fontSize: 9, color: RED2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Delikatesy Polskie · Cork</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase" }} className="tt-dn">
            {["home", "produkty", "contact"].map(s => <a key={s} href={`#${s}`} style={{ color: SMOKE, textDecoration: "none" }} onMouseEnter={e => e.target.style.color = RED2} onMouseLeave={e => e.target.style.color = SMOKE}>{s}</a>)}
          </div>
          <a href="tel:" style={{ background: RED, color: CREAM, border: "none", padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>Zadzwoń</a>
        </div>
      </nav>

      {/* HERO — bold red stripe, warm food colours */}
      <section id="home" style={{ paddingTop: 62, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: `linear-gradient(to right, ${RED}, ${RED2})` }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 70% 50%, rgba(176,16,32,0.12) 0%, transparent 55%)` }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }} className="tt-hero">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: RED, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ fontSize: 14 }}>🇵🇱</span>
              <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 800 }}>Polskie Delikatesy · Cork City</span>
            </div>
            <h1 style={{ fontSize: "clamp(56px,9vw,100px)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: -3 }}>TOTU</h1>
            <h2 style={{ fontSize: "clamp(20px,3vw,32px)", fontWeight: 400, margin: "0 0 24px", color: RED2, letterSpacing: 4, textTransform: "uppercase" }}>Delikatesy</h2>
            <p style={{ color: SMOKE, fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 420 }}>
              Smak domu w samym sercu Cork. Świeże wędliny, nabiał, pieczywo i wszystko co potrzebujesz z Polski.
            </p>
            <p style={{ color: SMOKE, fontSize: 15, lineHeight: 1.6, marginBottom: 36, maxWidth: 420, fontStyle: "italic" }}>
              The taste of home, right here in Cork. Fresh Polish meats, dairy, bread and everything in between.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="#produkty" style={{ background: RED, color: CREAM, padding: "15px 32px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>Nasze Produkty</a>
              <a href="#contact" style={{ border: "1px solid rgba(248,242,232,0.25)", color: CREAM, padding: "15px 32px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Znajdź Nas</a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9a5d2ce87_generated_image.png" alt="Totu" style={{ width: "100%", height: 460, objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: RED }} />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produkty" style={{ padding: "90px 24px", background: DARK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, color: RED2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Co Oferujemy</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Produkty</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))", gap: 3 }}>
            {products.map((cat, i) => (
              <Fade key={i} delay={i * 80} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(176,16,32,0.15)`, padding: 24 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: RED2, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{cat.cat}</div>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: j < cat.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: RED, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "rgba(248,242,232,0.75)" }}>{item}</span>
                  </div>
                ))}
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Fade><div style={{ fontSize: 10, color: RED2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Opinie Klientów</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 48px", textTransform: "uppercase" }}>Reviews</h2></Fade>
          <div style={{ position: "relative", minHeight: 160 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ position: i === rev ? "relative" : "absolute", inset: 0, opacity: i === rev ? 1 : 0, transition: "opacity .6s" }}>
                <div style={{ color: RED2, fontSize: 20, letterSpacing: 4, marginBottom: 16 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize: 18, color: "rgba(248,242,232,0.82)", lineHeight: 1.7, margin: "0 0 16px", fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ color: SMOKE, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }}>— {r.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, background: i === rev ? RED : "rgba(176,16,32,0.2)", border: "none", borderRadius: 4, cursor: "pointer", transition: "all .4s" }} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: DARK2 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 36px", textTransform: "uppercase" }}>Znajdź Nas / Find Us</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginBottom: 24 }}>
              {[["📍", "Adres", "Cork City\nCo. Cork"], ["🇵🇱", "Języki", "Polski & English"], ["🕐", "Godziny", "Pon–Sob: 8am–8pm\nNiedz: 9am–5pm"]].map(([ic, lb, vl], i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: `1px solid rgba(176,16,32,0.12)`, padding: 20 }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{ic}</div>
                  <div style={{ fontSize: 9, color: RED2, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6 }}>{lb}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-line", color: SMOKE }}>{vl}</div>
                </div>
              ))}
            </div>
            <a href="tel:" style={{ display: "block", background: RED, color: CREAM, padding: "16px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>🇵🇱 Zadzwoń / Call Us</a>
          </Fade>
        </div>
      </section>
      <footer style={{ borderTop: `1px solid rgba(176,16,32,0.15)`, padding: "20px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(154,138,120,0.35)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", margin: 0 }}>© 2025 Totu Delikatesy · Cork City · Polskie Delikatesy</p>
      </footer>

      <div className="tt-mn" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(24,18,10,0.97)", borderTop: `1px solid ${RED}40`, display: "flex" }}>
        {[["🏠", "Home", "home"], ["🛒", "Produkty", "produkty"], ["📍", "Find Us", "contact"]].map(([ic, lb, id]) => (
          <a key={id} href={`#${id}`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: SMOKE, textDecoration: "none", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>
      <style>{`.tt-dn{display:flex!important}.tt-mn{display:none!important}@media(max-width:768px){.tt-dn{display:none!important}.tt-mn{display:flex!important}.tt-hero{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
