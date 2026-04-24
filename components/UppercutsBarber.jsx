"use client";

import { useState, useEffect, useRef } from "react";

const GOLD = "#c9a84c";
const GOLD_LIGHT = "#e8c96a";
const BLACK = "#080808";
const CHARCOAL = "#111111";
const OFFWHITE = "#f0ece4";

function AnimFade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

const styles = [
  { name: "Skin Fade", desc: "Seamless blend from skin to length — the signature cut.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/89407fc00_generated_image.png" },
  { name: "Taper Fade", desc: "Classic taper with clean lines. Timeless and sharp.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/038ac8ff7_generated_image.png" },
  { name: "Beard Trim", desc: "Sculpted, shaped, and perfectly finished.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/87b3748aa_generated_image.png" },
  { name: "Hot Towel Shave", desc: "The full straight razor experience. Pure luxury.", img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a36971525_generated_image.png" },
];

const services = [
  { name: "Gent's Cut", desc: "Classic scissor cut, blowdry & style", price: "€16", duration: "30 min", icon: "✂️" },
  { name: "Skin Fade", desc: "Precision fade with razor-sharp lines", price: "€18", duration: "35 min", icon: "💈" },
  { name: "Beard Trim", desc: "Shape, define & finish your beard", price: "€10", duration: "20 min", icon: "🪒" },
  { name: "Cut & Beard", desc: "Full cut + beard sculpt combo", price: "€24", duration: "50 min", icon: "⭐", popular: true },
  { name: "Kids Cut", desc: "Under 12s — patient & precise", price: "€12", duration: "25 min", icon: "👦" },
  { name: "Premium Package", desc: "Cut + beard + hot towel + scalp massage", price: "€38", duration: "70 min", icon: "👑" },
];

const team = [
  { name: "Conor", role: "Head Barber", spec: "Skin fades & classic cuts", exp: "8 years", emoji: "✂️" },
  { name: "Darragh", role: "Senior Barber", spec: "Beard sculpting & hot shave", exp: "5 years", emoji: "🪒" },
  { name: "Kyle", role: "Barber", spec: "Tapers & textured styles", exp: "3 years", emoji: "💈" },
];

const reviews = [
  { name: "Liam O'C.", stars: 5, text: "Best fade in Midleton, full stop. Conor is a genius with clippers. Won't go anywhere else." },
  { name: "Seán M.", stars: 5, text: "Walked in first time and haven't been anywhere else since. The premium package is unreal." },
  { name: "Jack R.", stars: 5, text: "Clean shop, great banter, even better cuts. Dead on every single time." },
];

const gallery = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcb4b44dd_generated_image.png", label: "The Shop" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/89407fc00_generated_image.png", label: "Skin Fade" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/87b3748aa_generated_image.png", label: "Beard Trim" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3957bba13_generated_image.png", label: "Waiting Area" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a36971525_generated_image.png", label: "Hot Shave" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/038ac8ff7_generated_image.png", label: "Taper" },
];

export default function UppercutsBarber() {
  const [activeNav, setActiveNav] = useState("home");
  const [showBook, setShowBook] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setReviewIdx(i => (i + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: BLACK, color: OFFWHITE, fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>

      {/* ── DESKTOP NAV ── */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, transition: "all 0.4s", background: scrolled ? "rgba(8,8,8,0.97)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid rgba(201,168,76,0.2)` : "none", padding: "0 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>UPPERCUTS</div>
            <div style={{ fontSize: 9, color: GOLD, letterSpacing: "0.5em", textTransform: "uppercase", marginTop: -2 }}>Barbershop · Midleton</div>
          </div>
          <div style={{ display: "flex", gap: 36, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }} className="ub-desktop-nav">
            {["home","services","gallery","contact"].map(s => (
              <a key={s} href={`#${s}`} style={{ color: activeNav === s ? GOLD : "rgba(240,236,228,0.5)", textDecoration: "none", transition: "color 0.3s" }}>{s}</a>
            ))}
          </div>
          <button onClick={() => setShowBook(true)} style={{ background: GOLD, color: BLACK, border: "none", padding: "12px 28px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", transition: "background 0.3s" }}
            onMouseEnter={e => e.target.style.background = GOLD_LIGHT}
            onMouseLeave={e => e.target.style.background = GOLD}>
            Book Now
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcb4b44dd_generated_image.png" alt="Uppercuts" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.28) contrast(1.1)" }} />
        {/* Gold left-side glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 0% 60%, rgba(201,168,76,0.18) 0%, transparent 55%), linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.5) 40%, rgba(8,8,8,0.15) 100%)" }} />
        {/* Vertical gold line accent */}
        <div style={{ position: "absolute", left: 32, top: "20%", width: 1, height: "30%", background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 48px 90px" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 48, height: 1, background: GOLD }} />
              <span style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase" }}>Est. 2018 · Midleton, Co. Cork</span>
            </div>
            <h1 style={{ fontSize: "clamp(56px, 11vw, 112px)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 8px", letterSpacing: -3, textTransform: "uppercase" }}>UPPER</h1>
            <h1 style={{ fontSize: "clamp(56px, 11vw, 112px)", fontWeight: 900, lineHeight: 0.88, margin: "0 0 28px", letterSpacing: -3, textTransform: "uppercase", color: GOLD }}>CUTS.</h1>
            <p style={{ fontSize: 18, color: "rgba(240,236,228,0.6)", fontWeight: 300, lineHeight: 1.7, marginBottom: 48, maxWidth: 480, letterSpacing: 0.5 }}>
              Sharp cuts. Zero fuss. Midleton's most trusted barbershop — where every cut is a statement.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => setShowBook(true)} style={{ background: GOLD, color: BLACK, border: "none", padding: "18px 44px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.target.style.background = GOLD_LIGHT; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.background = GOLD; e.target.style.transform = "translateY(0)"; }}>
                Book Appointment
              </button>
              <a href="#services" style={{ border: `1px solid rgba(240,236,228,0.3)`, color: OFFWHITE, padding: "18px 44px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", display: "inline-block" }}
                onMouseEnter={e => { e.target.style.borderColor = GOLD; e.target.style.color = GOLD; }}
                onMouseLeave={e => { e.target.style.borderColor = "rgba(240,236,228,0.3)"; e.target.style.color = OFFWHITE; }}>
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STYLE SHOWCASE ── */}
      <section style={{ padding: "100px 0", overflow: "hidden" }}>
        <AnimFade style={{ textAlign: "center", marginBottom: 60, padding: "0 24px" }}>
          <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
          <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>The Cuts</h2>
        </AnimFade>
        <div style={{ display: "flex", gap: 3, padding: "0 24px", overflowX: "auto", scrollbarWidth: "none" }}>
          {styles.map((s, i) => (
            <AnimFade key={i} delay={i * 100} style={{ flex: "0 0 280px", position: "relative", height: 420, overflow: "hidden", cursor: "pointer" }}>
              <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)", transition: "transform 0.6s ease, filter 0.4s ease" }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.7)"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.5)"; }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
                <div style={{ width: 28, height: 2, background: GOLD, marginBottom: 12 }} />
                <h3 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>{s.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "rgba(240,236,228,0.6)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
              <div style={{ position: "absolute", top: 16, right: 16, background: GOLD, color: BLACK, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, padding: "5px 10px" }}>
                {i === 0 ? "Popular" : i === 3 ? "Premium" : "Classic"}
              </div>
            </AnimFade>
          ))}
        </div>
      </section>

      {/* ── SERVICES / PRICING ── */}
      <section id="services" style={{ padding: "100px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Transparent Pricing</div>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Services</h2>
          </AnimFade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2 }}>
            {services.map((svc, i) => (
              <AnimFade key={i} delay={i * 80} style={{ background: svc.popular ? GOLD : "rgba(255,255,255,0.03)", border: svc.popular ? "none" : "1px solid rgba(255,255,255,0.06)", padding: 32, position: "relative", transition: "transform 0.3s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                {svc.popular && <div style={{ position: "absolute", top: 16, right: 16, background: BLACK, color: GOLD, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, padding: "4px 10px" }}>Most Popular</div>}
                <div style={{ fontSize: 36, marginBottom: 16 }}>{svc.icon}</div>
                <h3 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, color: svc.popular ? BLACK : OFFWHITE }}>{svc.name}</h3>
                <p style={{ margin: "0 0 20px", fontSize: 14, color: svc.popular ? "rgba(8,8,8,0.6)" : "rgba(240,236,228,0.5)", lineHeight: 1.5 }}>{svc.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: svc.popular ? BLACK : GOLD }}>{svc.price}</span>
                  <span style={{ fontSize: 12, color: svc.popular ? "rgba(8,8,8,0.5)" : "rgba(240,236,228,0.35)", letterSpacing: "0.2em" }}>{svc.duration}</span>
                </div>
                <button onClick={() => setShowBook(true)} style={{ width: "100%", marginTop: 20, background: svc.popular ? BLACK : GOLD, color: svc.popular ? GOLD : BLACK, border: "none", padding: "13px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 800, cursor: "pointer", transition: "opacity 0.3s" }}
                  onMouseEnter={e => e.target.style.opacity = "0.85"}
                  onMouseLeave={e => e.target.style.opacity = "1"}>
                  Book This
                </button>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY — Carousel/Slider style (BEFORE BARBERS) ── */}
      <section id="gallery" style={{ padding: "80px 0", background: CHARCOAL, overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>The Work</div>
            <h2 style={{ fontSize: "clamp(32px,6vw,56px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Gallery</h2>
          </AnimFade>
        </div>
        {/* Scrollable horizontal carousel */}
        <div style={{ overflowX: "auto", overflowY: "hidden", paddingBottom: 8, cursor: "grab" }}
          onMouseDown={e => { e.currentTarget._drag = true; e.currentTarget._startX = e.pageX - e.currentTarget.offsetLeft; e.currentTarget._scrollLeft = e.currentTarget.scrollLeft; }}
          onMouseLeave={e => e.currentTarget._drag = false}
          onMouseUp={e => e.currentTarget._drag = false}
          onMouseMove={e => { if (!e.currentTarget._drag) return; e.preventDefault(); const x = e.pageX - e.currentTarget.offsetLeft; const walk = (x - e.currentTarget._startX) * 2; e.currentTarget.scrollLeft = e.currentTarget._scrollLeft - walk; }}>
          <div style={{ display: "flex", gap: 6, padding: "0 24px", width: "max-content" }}>
            {gallery.map((g, i) => (
              <div key={i} style={{ position: "relative", width: 320, height: 400, flexShrink: 0, overflow: "hidden", cursor: "pointer" }}
                onClick={() => setLightbox(g)}>
                <img src={g.url} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) grayscale(0.2)", transition: "transform 0.5s ease, filter 0.4s ease" }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.85) grayscale(0)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.6) grayscale(0.2)"; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 55%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 16px" }}>
                  <div style={{ width: 20, height: 2, background: GOLD, marginBottom: 8 }} />
                  <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ color: "rgba(201,168,76,0.35)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }}>← Swipe or drag →</span>
        </div>
        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: GOLD, fontSize: 32, cursor: "pointer" }}>✕</button>
            <img src={lightbox.url} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
          </div>
        )}
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ marginBottom: 72 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>The Team</div>
                <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1, lineHeight: 1 }}>Our<br/>Barbers</h2>
              </div>
              <p style={{ color: "rgba(240,236,228,0.5)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Every barber on our team is trained to the highest standard. We don't do average — every cut is precise, every client leaves looking sharp.
              </p>
            </div>
          </AnimFade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {team.map((b, i) => (
              <AnimFade key={i} delay={i * 120} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)", padding: 36, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
                <div style={{ fontSize: 52, marginBottom: 20 }}>{b.emoji}</div>
                <div style={{ fontSize: 10, color: GOLD, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6 }}>{b.role}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: 2 }}>{b.name}</h3>
                <p style={{ margin: "0 0 16px", color: "rgba(240,236,228,0.45)", fontSize: 14 }}>{b.spec}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 20, height: 1, background: GOLD }} />
                  <span style={{ color: GOLD, fontSize: 12, fontWeight: 600 }}>{b.exp} experience</span>
                </div>
              </AnimFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS SLIDER ── */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <AnimFade>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>What They Say</div>
            <h2 style={{ fontSize: "clamp(36px,6vw,56px)", fontWeight: 900, margin: "0 0 64px", textTransform: "uppercase", letterSpacing: -1 }}>Reviews</h2>
          </AnimFade>

          <div style={{ position: "relative", minHeight: 200 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ position: i === reviewIdx ? "relative" : "absolute", inset: 0, opacity: i === reviewIdx ? 1 : 0, transition: "opacity 0.6s ease", pointerEvents: i === reviewIdx ? "auto" : "none" }}>
                <div style={{ fontSize: 80, color: GOLD, opacity: 0.15, lineHeight: 1, marginBottom: -20, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 300, lineHeight: 1.7, color: "rgba(240,236,228,0.85)", fontStyle: "italic", margin: "0 0 32px" }}>
                  "{r.text}"
                </p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ color: GOLD, fontSize: 18, letterSpacing: 4 }}>{"★".repeat(r.stars)}</span>
                  <span style={{ color: "rgba(240,236,228,0.4)", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase" }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 48 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setReviewIdx(i)} style={{ width: i === reviewIdx ? 28 : 8, height: 8, borderRadius: 4, background: i === reviewIdx ? GOLD : "rgba(201,168,76,0.25)", border: "none", cursor: "pointer", transition: "all 0.4s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION & CONTACT ── */}
      <section id="contact" style={{ padding: "100px 24px", background: CHARCOAL }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimFade style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ color: GOLD, fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", marginBottom: 12 }}>Find Us</div>
            <h2 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Location</h2>
          </AnimFade>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Info */}
            <AnimFade>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  { icon: "📍", label: "Address", val: "Main Street\nMidleton, Co. Cork" },
                  { icon: "📞", label: "Phone", val: "021 463 2500", href: "tel:0214632500" },
                  { icon: "📱", label: "Instagram", val: "@uppercutsbarber" },
                  { icon: "🕐", label: "Hours", val: "Mon–Fri: 9am – 7pm\nSat: 9am – 5:30pm\nSun: Closed" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: `rgba(201,168,76,0.1)`, border: `1px solid rgba(201,168,76,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ color: GOLD, fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: OFFWHITE, fontSize: 16, fontWeight: 600, textDecoration: "none" }}>{c.val}</a>
                        : <div style={{ color: OFFWHITE, fontSize: 16, fontWeight: 400, whiteSpace: "pre-line", lineHeight: 1.6 }}>{c.val}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </AnimFade>

            {/* Map embed + CTA */}
            <AnimFade delay={150}>
              <div style={{ borderRadius: 0, overflow: "hidden", marginBottom: 20, border: `1px solid rgba(201,168,76,0.15)` }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.2!2d-8.1732!3d51.9178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzA0LjAiTiA4wrAxMCcyMy41Ilc!5e0!3m2!1sen!2sie!4v1620000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.5)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Uppercuts Location"
                />
              </div>
              <button onClick={() => setShowBook(true)} style={{ width: "100%", background: GOLD, color: BLACK, border: "none", padding: "18px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer", transition: "background 0.3s" }}
                onMouseEnter={e => e.target.style.background = GOLD_LIGHT}
                onMouseLeave={e => e.target.style.background = GOLD}>
                ✂️ Book Your Appointment
              </button>
            </AnimFade>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid rgba(201,168,76,0.15)`, padding: "28px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700 }}>UPPERCUTS</span>
        <span style={{ color: "rgba(240,236,228,0.25)", fontSize: 11, letterSpacing: "0.2em" }}>© 2025 · Midleton, Co. Cork</span>
        <span style={{ color: GOLD, fontSize: 11, letterSpacing: "0.2em" }}>✂️ Walk-ins Welcome</span>
      </footer>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="ub-mobile-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(8,8,8,0.97)", borderTop: `1px solid rgba(201,168,76,0.2)`, display: "flex", backdropFilter: "blur(12px)" }}>
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "services", icon: "✂️", label: "Services" },
          { id: "book", icon: "📅", label: "Book", action: true },
          { id: "gallery", icon: "🖼️", label: "Gallery" },
          { id: "contact", icon: "📍", label: "Contact" },
        ].map(({ id, icon, label, action }) => (
          <a key={id}
            href={action ? undefined : `#${id}`}
            onClick={action ? () => setShowBook(true) : () => setActiveNav(id)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 13px", color: activeNav === id ? GOLD : "rgba(240,236,228,0.3)", textDecoration: "none", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", gap: 4, transition: "color 0.3s", background: action ? `rgba(201,168,76,0.08)` : "none" }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <span style={{ fontWeight: action ? 800 : 400, color: action ? GOLD : "inherit" }}>{label}</span>
          </a>
        ))}
      </div>

      {/* ── BOOKING MODAL ── */}
      {showBook && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16, backdropFilter: "blur(10px)" }} onClick={() => setShowBook(false)}>
          <div style={{ background: CHARCOAL, border: `1px solid rgba(201,168,76,0.3)`, padding: "40px 36px", width: "100%", maxWidth: 480, maxHeight: "92vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
              <div>
                <div style={{ color: GOLD, fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 6 }}>Uppercuts Barbershop</div>
                <h3 style={{ margin: 0, fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: -1 }}>Book Appointment</h3>
              </div>
              <button onClick={() => setShowBook(false)} style={{ background: "none", border: "none", color: "rgba(240,236,228,0.4)", fontSize: 24, cursor: "pointer", lineHeight: 1 }}>✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <select style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.2)`, color: "rgba(240,236,228,0.7)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.name}>{s.name} — {s.price}</option>)}
              </select>
              <select style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.2)`, color: "rgba(240,236,228,0.7)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option value="">Select Barber</option>
                {team.map(b => <option key={b.name}>{b.name} — {b.spec}</option>)}
                <option>No preference</option>
              </select>
              {[["Your Name", "text"], ["Phone Number", "tel"], ["Email", "email"]].map(([ph, t], i) => (
                <input key={i} type={t} placeholder={ph} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.15)`, color: OFFWHITE, padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box", width: "100%" }} />
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input type="date" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.15)`, color: "rgba(240,236,228,0.5)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
                <input type="time" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(201,168,76,0.15)`, color: "rgba(240,236,228,0.5)", padding: "15px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <button style={{ flex: 1, background: GOLD, color: BLACK, border: "none", padding: "17px", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 900, cursor: "pointer" }}>
                Confirm Booking
              </button>
              <button onClick={() => setShowBook(false)} style={{ padding: "17px 20px", background: "none", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,236,228,0.3)", cursor: "pointer", fontFamily: "inherit", fontSize: 13 }}>
                Cancel
              </button>
            </div>
            <p style={{ textAlign: "center", color: "rgba(240,236,228,0.2)", fontSize: 12, marginTop: 16, letterSpacing: "0.1em" }}>
              Walk-ins also welcome · <a href="tel:0214632500" style={{ color: GOLD }}>021 463 2500</a>
            </p>
          </div>
        </div>
      )}

      <style>{`
        .ub-desktop-nav { display: flex !important; }
        .ub-mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .ub-desktop-nav { display: none !important; }
          .ub-mobile-nav { display: flex !important; }
          html { scroll-padding-bottom: 64px; }
        }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}
