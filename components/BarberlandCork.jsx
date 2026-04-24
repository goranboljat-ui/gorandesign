"use client";

import { useState, useEffect, useRef } from "react";

const GOLD = "#b8960c";
const GOLD_LIGHT = "#d4ae28";
const BLACK = "#060606";
const CHARCOAL = "#0d0d0d";
const WHITE = "#f4f0e8";

function AnimFade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const styles = [
  { name: "Skin Fade", desc: "Zero to length. Razor-sharp lines every time.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/89407fc00_generated_image.png" },
  { name: "Classic Taper", desc: "Sharp, clean, never out of style.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/038ac8ff7_generated_image.png" },
  { name: "Beard Sculpt", desc: "Precision beard work. Defined and dialed in.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/87b3748aa_generated_image.png" },
  { name: "Hot Towel Shave", desc: "Straight razor, hot foam, total luxury.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a36971525_generated_image.png" },
];

const services = [
  { name: "Haircut", desc: "Scissor or clipper, blowdry included", price: "€15", duration: "30 min", icon: "✂️" },
  { name: "Skin Fade", desc: "Precision fade, sharp lines & finish", price: "€18", duration: "35 min", icon: "💈" },
  { name: "Beard Trim", desc: "Shape, line up, and finish", price: "€10", duration: "20 min", icon: "🪒" },
  { name: "Cut & Beard", desc: "Full cut + beard combo — our bestseller", price: "€25", duration: "50 min", icon: "⭐", popular: true },
  { name: "Kids Cut", desc: "Under 12, calm & careful", price: "€12", duration: "25 min", icon: "👦" },
  { name: "Premium Package", desc: "Cut + beard + hot towel + scalp treatment", price: "€40", duration: "75 min", icon: "👑" },
];

const team = [
  { name: "Aidan", role: "Master Barber", spec: "Skin fades & textured styles", exp: "10 years", emoji: "✂️" },
  { name: "Ronan", role: "Senior Barber", spec: "Hot towel shaves & beard work", exp: "6 years", emoji: "🪒" },
  { name: "Cian", role: "Barber", spec: "Modern fades & scissor cuts", exp: "4 years", emoji: "💈" },
];

const reviews = [
  { name: "Cormac L.", stars: 5, text: "Barberland is on another level. Walk out looking like a completely different person — in the best way." },
  { name: "Niall B.", stars: 5, text: "The premium package is worth every cent. Hot towel, scalp massage, perfect fade. Incredible." },
  { name: "Evan M.", stars: 5, text: "Went in for a quick cut, got talking to Aidan for an hour. The best barbershop experience I've had." },
];

const gallery = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcb4b44dd_generated_image.png", label: "The Shop" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/89407fc00_generated_image.png", label: "Skin Fade" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a36971525_generated_image.png", label: "Hot Shave" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3957bba13_generated_image.png", label: "Interior" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/87b3748aa_generated_image.png", label: "Beard Work" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/038ac8ff7_generated_image.png", label: "Taper Cut" },
];

export default function BarberlandCork() {
  const [activeNav, setActiveNav] = useState("home");
  const [showBook, setShowBook] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setReviewIdx(i => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: BLACK, color: WHITE, fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, transition: "all 0.4s", background: scrolled ? "rgba(6,6,6,0.98)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid rgba(184,150,12,0.2)` : "none", padding: "0 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", items: "center", gap: 12 }}>
            <span style={{ fontSize: 10, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", marginRight: 8 }}>✦</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase" }}>BARBERLAND</div>
              <div style={{ fontSize: 8, color: GOLD, letterSpacing: "0.6em", textTransform: "uppercase", marginTop: -2 }}>Cork City · Premium Barbershop</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 36, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }} className="bl-desktop-nav">
            {["home","services","gallery","contact"].map(s => (
              <a key={s} href={`#${s}`} style={{ color: activeNav === s ? GOLD : "rgba(244,240,232,0.4)", textDecoration: "none", transition: "color 0.3s" }}>{s}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={() => setShowBook(true)} className="bl-desktop-nav" style={{ background: "none", border: `1px solid ${GOLD}`, color: GOLD, padding: "11px 26px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.background = GOLD; e.target.style.color = BLACK; }}
              onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = GOLD; }}>
              Book Now
            </button>
            {/* Hamburger */}
            <button className="bl-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: `1px solid rgba(184,150,12,0.3)`, cursor: "pointer", padding: "8px 10px", display: "none" }}>
              <div style={{ width: 22, height: 2, background: GOLD, marginBottom: 5 }} />
              <div style={{ width: 22, height: 2, background: GOLD, marginBottom: 5 }} />
              <div style={{ width: 22, height: 2, background: GOLD }} />
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="bl-hamburger" style={{ background: "rgba(6,6,6,0.98)", borderTop: `1px solid rgba(184,150,12,0.15)`, padding: "16px 24px" }}>
            {["home","services","gallery","contact"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMobileMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: GOLD, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", borderBottom: "1px solid rgba(184,150,12,0.08)" }}>{s}</a>
            ))}
            <button onClick={() => { setShowBook(true); setMobileMenuOpen(false); }} style={{ width: "100%", marginTop: 12, background: GOLD, color: BLACK, border: "none", padding: "14px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer" }}>Book Appointment</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3957bba13_generated_image.png" alt="Barberland" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.22) contrast(1.15) grayscale(0.15)" }} />
        {/* Dramatic center vignette + gold accent */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 30%, rgba(184,150,12,0.15) 0%, transparent 50%), linear-gradient(to top, rgba(6,6,6,1) 0%, rgba(6,6,6,0.6) 35%, rgba(6,6,6,0.15) 100%)" }} />
        {/* Diagonal gold line */}
        <div style={{ position: "absolute", right: "10%", top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent 10%, ${GOLD}40 40%, ${GOLD}40 60%, transparent 90%)`, transform: "rotate(5deg)", transformOrigin: "top" }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 48px 100px" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ fontSize: 10, color: GOLD, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span>✦</span><span>Cork City · Premium Grooming</span><span>✦</span>
            </div>
            <h1 style={{ fontSize: "clamp(52px, 10vw, 108px)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 6px", letterSpacing: -3, textTransform: "uppercase" }}>BARBER</h1>
            <h1 style={{ fontSize: "clamp(52px, 10vw, 108px)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 30px", letterSpacing: -3, textTransform: "uppercase" }}>
              <span style={{ WebkitTextStroke: `2px ${GOLD}`, color: "transparent" }}>LAND.</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(244,240,232,0.55)", fontWeight: 300, lineHeight: 1.7, marginBottom: 48, maxWidth: 460, letterSpacing: 0.3 }}>
              Where precision meets artistry. Cork's premium barbershop — because how you look is how you feel.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => setShowBook(true)} style={{ background: GOLD, color: BLACK, border: "none", padding: "18px 44px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => e.target.style.background = GOLD_LIGHT}
                onMouseLeave={e => e.target.style.background = GOLD}>
                Book Appointment
              </button>
              <a href="#services" style={{ border: `1px solid rgba(244,240,232,0.25)`, color: WHITE, padding: "18px 44px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", transition: "all 0.3s" }}
                onMouseEnter={e => { e.target.style.borderColor = GOLD; e.target.style.color = GOLD; }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(244,240,232,0.25)"; e.target.style.color = WHITE; }}>
                View Services
              </a>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 48, marginTop: 60, paddingTop: 40, borderTop: `1px solid rgba(184,150,12,0.2)` }}>
              {[["5 ★", "Google Rating"], ["2,000+", "Happy Clients"], ["Walk-ins", "Always Welcome"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: GOLD }}>{v}</div>
                  <div style={{ fontSize: 10, color: "rgba(244,240,232,0.35)", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STYLE SHOWCASE */}
      <section style={{ padding: "100px 0" }}>
        <AnimFade style={{ textAlign: "center", marginBottom: 60, padding: "0 24px" }}>
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Signature Styles</div>
          <h2 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>The Cuts</h2>
        </AnimFade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, padding: "0 24px" }} className="bl-cuts-grid">
          {styles.map((s, i) => (
            <AnimFade key={i} delay={i * 80} style={{ position: "relative", height: 320, overflow: "hidden", cursor: "pointer" }} className="bl-cut-item">
              <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.45) grayscale(0.3)", transition: "transform 0.7s ease, filter 0.4s ease" }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.07)"; e.target.style.filter = "brightness(0.7) grayscale(0)"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.45) grayscale(0.3)"; }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,6,1) 0%, rgba(6,6,6,0.3) 50%, transparent 80%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 20, left: 20 }}>
                <span style={{ background: GOLD, color: BLACK, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, padding: "5px 10px" }}>
                  {["Popular","Classic","Premium","Luxury"][i]}
                </span>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 22px" }}>
                <div style={{ width: 24, height: 2, background: GOLD, marginBottom: 10 }} />
                <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(244,240,232,0.5)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </AnimFade>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</div>
            <h2 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Services & Prices</h2>
          </AnimFade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 2 }}>
            {services.map((svc, i) => (
              <AnimFade key={i} delay={i * 70} style={{ background: svc.popular ? `rgba(184,150,12,0.08)` : "rgba(255,255,255,0.02)", border: svc.popular ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.05)", padding: 32, cursor: "default", transition: "transform 0.3s, border-color 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; if (!svc.popular) e.currentTarget.style.borderColor = `rgba(184,150,12,0.4)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; if (!svc.popular) e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
                {svc.popular && (
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ background: GOLD, color: BLACK, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, padding: "4px 10px" }}>✦ Most Popular</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{svc.icon}</span>
                  <span style={{ fontSize: 30, fontWeight: 900, color: svc.popular ? GOLD_LIGHT : GOLD }}>{svc.price}</span>
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>{svc.name}</h3>
                <p style={{ margin: "0 0 20px", fontSize: 14, color: "rgba(244,240,232,0.45)", lineHeight: 1.5 }}>{svc.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span style={{ fontSize: 11, color: "rgba(244,240,232,0.3)", letterSpacing: "0.2em" }}>⏱ {svc.duration}</span>
                </div>
                <button onClick={() => setShowBook(true)} style={{ width: "100%", background: svc.popular ? GOLD : "transparent", color: svc.popular ? BLACK : GOLD, border: `1px solid ${svc.popular ? GOLD : "rgba(184,150,12,0.4)"}`, padding: "13px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.target.style.background = GOLD; e.target.style.color = BLACK; e.target.style.borderColor = GOLD; }}
                  onMouseLeave={e => { e.target.style.background = svc.popular ? GOLD : "transparent"; e.target.style.color = svc.popular ? BLACK : GOLD; }}>
                  Book This
                </button>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 72 }} className="bl-team-header">
            <div>
              <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>The Team</div>
              <h2 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1, lineHeight: 1 }}>Meet Your<br/>Barbers</h2>
            </div>
            <p style={{ color: "rgba(244,240,232,0.4)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Three barbers. One obsession — your best cut. Every member of our team is hand-trained to deliver results that speak for themselves.
            </p>
          </AnimFade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="bl-team-grid">
            {team.map((b, i) => (
              <AnimFade key={i} delay={i * 120} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", padding: 36, position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(184,150,12,0.35)`}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, borderBottom: "80px solid transparent", borderRight: `80px solid rgba(184,150,12,0.08)` }} />
                <div style={{ fontSize: 52, marginBottom: 24 }}>{b.emoji}</div>
                <div style={{ fontSize: 9, color: GOLD, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 6 }}>{b.role}</div>
                <h3 style={{ margin: "0 0 6px", fontSize: 26, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 }}>{b.name}</h3>
                <p style={{ margin: "0 0 20px", color: "rgba(244,240,232,0.4)", fontSize: 14, lineHeight: 1.5 }}>{b.spec}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${GOLD}50, transparent)` }} />
                  <span style={{ color: GOLD, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>{b.exp}</span>
                </div>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "100px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Our Work</div>
            <h2 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Gallery</h2>
          </AnimFade>
          <div className="bl-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            {gallery.map((g, i) => (
              <AnimFade key={i} delay={i * 50} style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3" }} onClick={() => setLightbox(g)}>
                <img src={g.url} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55) grayscale(0.25)", transition: "transform 0.6s ease, filter 0.4s ease" }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.75) grayscale(0)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.55) grayscale(0.25)"; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,6,6,0.85) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 14px" }}>
                  <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>{g.label}</span>
                </div>
              </AnimFade>
            ))}
          </div>
          {/* Lightbox */}
          {lightbox && (
            <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: GOLD, fontSize: 32, cursor: "pointer" }}>✕</button>
              <img src={lightbox.url} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <AnimFade>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Client Voices</div>
            <h2 style={{ fontSize: "clamp(32px,6vw,54px)", fontWeight: 900, margin: "0 0 64px", textTransform: "uppercase", letterSpacing: -1 }}>Testimonials</h2>
          </AnimFade>
          <div style={{ position: "relative", minHeight: 220 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ position: i === reviewIdx ? "relative" : "absolute", inset: 0, opacity: i === reviewIdx ? 1 : 0, transition: "opacity 0.7s ease", pointerEvents: i === reviewIdx ? "auto" : "none" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
                  {"★★★★★".split("").map((s, j) => <span key={j} style={{ color: GOLD, fontSize: 22 }}>{s}</span>)}
                </div>
                <p style={{ fontSize: "clamp(17px,2.8vw,22px)", fontWeight: 300, lineHeight: 1.75, color: "rgba(244,240,232,0.8)", fontStyle: "italic", margin: "0 0 28px" }}>
                  "{r.text}"
                </p>
                <div style={{ fontSize: 11, color: "rgba(244,240,232,0.35)", letterSpacing: "0.4em", textTransform: "uppercase" }}>— {r.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setReviewIdx(i)} style={{ width: i === reviewIdx ? 32 : 8, height: 8, background: i === reviewIdx ? GOLD : `rgba(184,150,12,0.2)`, border: "none", borderRadius: 4, cursor: "pointer", transition: "all 0.4s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Visit Us</div>
            <h2 style={{ fontSize: "clamp(32px,6vw,58px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Find Barberland</h2>
          </AnimFade>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="bl-contact-grid">
            <AnimFade style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { icon: "📍", label: "Address", val: "Patrick Street\nCork City, T12 XF00" },
                { icon: "📞", label: "Call Us", val: "021 427 5500", href: "tel:0214275500" },
                { icon: "📱", label: "Instagram", val: "@barberlandcork" },
                { icon: "🕐", label: "Hours", val: "Mon–Fri: 9am – 7:30pm\nSat: 9am – 6pm\nSun: 10am – 4pm" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start", paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ width: 42, height: 42, background: `rgba(184,150,12,0.08)`, border: `1px solid rgba(184,150,12,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ color: GOLD, fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                    {c.href ? <a href={c.href} style={{ color: WHITE, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{c.val}</a>
                      : <div style={{ color: WHITE, fontSize: 15, whiteSpace: "pre-line", lineHeight: 1.6, fontWeight: 400 }}>{c.val}</div>}
                  </div>
                </div>
              ))}
            </AnimFade>

            <AnimFade delay={150}>
              <div style={{ border: `1px solid rgba(184,150,12,0.15)`, overflow: "hidden", marginBottom: 20 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.2!2d-8.4753!3d51.8979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDUzJzUyLjQiTiA4wrAyOCczMS4xIlc!5e0!3m2!1sen!2sie!4v1620000000001"
                  width="100%" height="260" style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.9)" }}
                  allowFullScreen loading="lazy" title="Barberland Location" />
              </div>
              <button onClick={() => setShowBook(true)} style={{ width: "100%", background: GOLD, color: BLACK, border: "none", padding: "18px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer", transition: "background 0.3s" }}
                onMouseEnter={e => e.target.style.background = GOLD_LIGHT}
                onMouseLeave={e => e.target.style.background = GOLD}>
                ✂️ Book Appointment
              </button>
            </AnimFade>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid rgba(184,150,12,0.12)`, padding: "28px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", items: "center", gap: 8 }}>
          <span style={{ color: GOLD, fontSize: 10 }}>✦</span>
          <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }}>BARBERLAND CORK</span>
        </div>
        <span style={{ color: "rgba(244,240,232,0.2)", fontSize: 11, letterSpacing: "0.2em" }}>© 2025 · All Rights Reserved</span>
        <span style={{ color: GOLD, fontSize: 11 }}>Walk-ins Welcome Daily</span>
      </footer>

      {/* MOBILE BOTTOM NAV */}
      <div className="bl-mobile-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(6,6,6,0.98)", borderTop: `1px solid rgba(184,150,12,0.2)`, display: "flex", backdropFilter: "blur(16px)" }}>
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "services", icon: "✂️", label: "Services" },
          { id: "book", icon: "📅", label: "Book", action: true },
          { id: "gallery", icon: "🖼️", label: "Gallery" },
          { id: "contact", icon: "📍", label: "Contact" },
        ].map(({ id, icon, label, action }) => (
          <a key={id} href={action ? undefined : `#${id}`}
            onClick={action ? () => setShowBook(true) : () => setActiveNav(id)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 13px", color: activeNav === id || action ? GOLD : "rgba(244,240,232,0.25)", textDecoration: "none", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", gap: 4, transition: "color 0.3s", background: action ? `rgba(184,150,12,0.07)` : "none" }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <span style={{ fontWeight: action ? 900 : 400 }}>{label}</span>
          </a>
        ))}
      </div>

      {/* BOOKING MODAL */}
      {showBook && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.94)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16, backdropFilter: "blur(12px)" }} onClick={() => setShowBook(false)}>
          <div style={{ background: "#0d0d0d", border: `1px solid rgba(184,150,12,0.3)`, padding: "40px 36px", width: "100%", maxWidth: 480, maxHeight: "93vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
              <div>
                <div style={{ display: "flex", items: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: GOLD, fontSize: 9 }}>✦</span>
                  <span style={{ color: GOLD, fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase" }}>Barberland Cork</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 900, textTransform: "uppercase", letterSpacing: -1 }}>Book Appointment</h3>
              </div>
              <button onClick={() => setShowBook(false)} style={{ background: "none", border: "none", color: "rgba(244,240,232,0.3)", fontSize: 22, cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <select style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(184,150,12,0.2)`, color: "rgba(244,240,232,0.65)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.name}>{s.name} — {s.price}</option>)}
              </select>
              <select style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(184,150,12,0.2)`, color: "rgba(244,240,232,0.65)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option value="">Select Barber</option>
                {team.map(b => <option key={b.name}>{b.name}</option>)}
                <option>No preference</option>
              </select>
              {[["Your Name","text"],["Phone Number","tel"],["Email","email"]].map(([ph,t],i) => (
                <input key={i} type={t} placeholder={ph} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(184,150,12,0.15)`, color: WHITE, padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", width: "100%" }} />
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input type="date" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(184,150,12,0.15)`, color: "rgba(244,240,232,0.5)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
                <input type="time" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(184,150,12,0.15)`, color: "rgba(244,240,232,0.5)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button style={{ flex: 1, background: GOLD, color: BLACK, border: "none", padding: "17px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer" }}>Confirm Booking</button>
              <button onClick={() => setShowBook(false)} style={{ padding: "17px 20px", background: "none", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(244,240,232,0.3)", cursor: "pointer", fontFamily: "inherit" }}>Cancel</button>
            </div>
            <p style={{ textAlign: "center", color: "rgba(244,240,232,0.2)", fontSize: 12, marginTop: 14 }}>Walk-ins welcome · <a href="tel:0214275500" style={{ color: GOLD }}>021 427 5500</a></p>
          </div>
        </div>
      )}

      <style>{`
        .bl-desktop-nav { display: flex !important; }
        .bl-mobile-nav { display: none !important; }
        .bl-hamburger { display: none !important; }
        .bl-gallery-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media (max-width: 768px) {
          .bl-desktop-nav { display: none !important; }
          .bl-mobile-nav { display: flex !important; }
          .bl-hamburger { display: block !important; }
          .bl-cuts-grid { grid-template-columns: repeat(2,1fr) !important; }
          .bl-cut-item { height: 200px !important; }
          .bl-team-grid { grid-template-columns: 1fr !important; }
          .bl-team-header { grid-template-columns: 1fr !important; }
          .bl-contact-grid { grid-template-columns: 1fr !important; }
          .bl-gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
          html { scroll-padding-bottom: 64px; }
          body { padding-bottom: 64px; }
        }
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
      `}</style>
    </div>
  );
}
