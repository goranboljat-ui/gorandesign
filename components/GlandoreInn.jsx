"use client";

import { useState, useEffect, useRef } from "react";

// THE GLANDORE INN — West Cork Gastropub & Seafood
// Palette: Deep Atlantic navy + warm white + sea glass teal

const WHITE = "#f8f9fa";
const NAVY = "#0e1e2e";
const NAVY2 = "#162840";
const TEAL = "#1a7a6a";
const GOLD = "#c8921a";

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
  seafood: [
    { name: "Atlantic Crab Claws", price: "€16.50", desc: "West Cork crab, garlic butter, brown bread" },
    { name: "Smoked Salmon", price: "€14.00", desc: "House-smoked, capers, crème fraîche" },
    { name: "Moules Marinières", price: "€15.50", desc: "Dungarvan mussels, white wine, cream" },
    { name: "Fish of the Day", price: "Market", desc: "Landed fresh — ask your server" },
    { name: "Seafood Chowder", price: "€10.00", desc: "House recipe, cream, sourdough" },
    { name: "Lobster (seasonal)", price: "€38.00", desc: "Half lobster, garlic butter, salad" },
  ],
  mains: [
    { name: "Slow Roast Lamb", price: "€26.00", desc: "West Cork lamb, rosemary jus, root veg" },
    { name: "Duck Breast", price: "€24.50", desc: "Crispy skin, cherry reduction, dauphinoise" },
    { name: "Ribeye 8oz", price: "€29.00", desc: "Irish dry-aged, peppercorn sauce, chips" },
    { name: "Vegetable Wellington", price: "€19.50", desc: "Seasonal veg, mushroom duxelle, red wine" },
  ],
  starters: [
    { name: "Chowder", price: "€10.00", desc: "Cream, smoked fish, warm sourdough" },
    { name: "Beetroot Salad", price: "€9.00", desc: "Goat's cheese, walnut, honey dressing" },
    { name: "Chicken Liver Pâté", price: "€10.50", desc: "Brandy, brioche toast, red onion jam" },
    { name: "Garlic Prawns", price: "€13.00", desc: "Tiger prawns, chilli, sourdough" },
  ],
};

const reviews = [
  { name: "Fiona M.", text: "The crab claws alone are worth the drive to Glandore. Incredible fresh seafood in one of the most beautiful settings in West Cork.", stars: 5 },
  { name: "Declan O'S.", text: "Stumbled upon this gem on a Sunday drive and couldn't believe the quality. Fish of the day was just landed — you could taste it. Perfect.", stars: 5 },
  { name: "Kate & Rory", text: "Our favourite place in all of West Cork. The view, the food, the warmth of the staff — everything is right. Book ahead, it fills up fast.", stars: 5 },
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", label: "Fresh Seafood" },
  { url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80", label: "Harbour Views" },
  { url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80", label: "Crab Claws" },
  { url: "https://images.unsplash.com/photo-1611599538835-b52a8c2f9080?w=800&q=80", label: "The Inn" },
  { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", label: "Daily Specials" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", label: "West Cork Dining" },
];

export default function GlandoreInn() {
  const [activeTab, setActiveTab] = useState("seafood");
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: WHITE, color: NAVY, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV — mobile responsive */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,249,250,0.96)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(14,30,46,0.1)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, letterSpacing: 1 }}>The Glandore Inn</div>
            <div style={{ fontSize: 9, color: TEAL, letterSpacing: "0.3em", textTransform: "uppercase" }}>Glandore · West Cork</div>
          </div>
          {/* Desktop links */}
          <div className="gi-desktop-nav" style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {["menu", "about", "gallery", "findus"].map(s => (
              <a key={s} href={`#${s}`} style={{ color: "rgba(14,30,46,0.4)", textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => e.target.style.color = TEAL} onMouseLeave={e => e.target.style.color = "rgba(14,30,46,0.4)"}>{s === "findus" ? "find us" : s}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="tel:0286338666" className="gi-desktop-nav" style={{ background: NAVY, color: WHITE, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>028 633 8666</a>
            {/* Hamburger */}
            <button className="gi-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}>
              <div style={{ width: 24, height: 2, background: NAVY, marginBottom: 5, transition: "all .3s" }} />
              <div style={{ width: 24, height: 2, background: NAVY, marginBottom: 5 }} />
              <div style={{ width: 24, height: 2, background: NAVY }} />
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="gi-hamburger" style={{ background: WHITE, borderTop: "1px solid rgba(14,30,46,0.08)", padding: "16px 20px" }}>
            {[["menu","Menu"],["about","About"],["gallery","Gallery"],["findus","Find Us"]].map(([href, label]) => (
              <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", color: NAVY, textDecoration: "none", fontSize: 14, fontWeight: 600, borderBottom: "1px solid rgba(14,30,46,0.06)" }}>{label}</a>
            ))}
            <a href="tel:0286338666" style={{ display: "block", marginTop: 12, background: NAVY, color: WHITE, padding: "12px 20px", textAlign: "center", textDecoration: "none", fontWeight: 700, fontSize: 13 }}>📞 028 633 8666</a>
          </div>
        )}
      </nav>

      {/* HERO — stacks on mobile */}
      <section id="home" style={{ paddingTop: 62 }}>
        <div className="gi-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "90vh" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px 60px 28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 2, background: TEAL }} />
              <span style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase" }}>West Cork · Fresh From The Sea</span>
            </div>
            <h1 style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 6px", letterSpacing: -2 }}>The</h1>
            <h1 style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 6px", letterSpacing: -2, color: TEAL }}>Glandore</h1>
            <h1 style={{ fontSize: "clamp(38px,6vw,72px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 28px", letterSpacing: -2 }}>Inn.</h1>
            <p style={{ color: "rgba(14,30,46,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 400 }}>
              Freshly landed Atlantic seafood, West Cork produce, and the warmest welcome on the Wild Atlantic Way.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#menu" style={{ background: NAVY, color: WHITE, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>View Menu</a>
              <a href="tel:0286338666" style={{ border: "2px solid rgba(14,30,46,0.2)", color: NAVY, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Book a Table</a>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(14,30,46,0.1)", flexWrap: "wrap" }}>
              {[["Fresh", "Daily Catch"], ["West Cork", "Local Produce"], ["1890s", "Est."]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 16, fontWeight: 900, color: TEAL }}>{v}</div>
                  <div style={{ fontSize: 9, color: "rgba(14,30,46,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="gi-hero-img" style={{ position: "relative", overflow: "hidden", minHeight: 360 }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/769e725ac_generated_image.png" alt="Glandore Inn" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 32, left: 32, background: WHITE, padding: "14px 22px", borderLeft: `4px solid ${TEAL}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>Today's Special</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: TEAL }}>West Cork Crab Claws</div>
              <div style={{ fontSize: 12, color: "rgba(14,30,46,0.55)" }}>Landed this morning · €16.50</div>
            </div>
          </div>
        </div>
      </section>

      {/* HARBOUR BANNER */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7e675062c_generated_image.png" alt="Glandore harbour" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,30,46,0.68)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 20px" }}>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 8 }}>Fresh Daily · West Cork</div>
            <div style={{ fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, color: WHITE, fontStyle: "italic" }}>From the sea to your table.</div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <section id="menu" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Freshly Landed</div>
            <h2 style={{ fontSize: "clamp(32px,5vw,46px)", fontWeight: 900, margin: 0 }}>Our Menu</h2>
          </Fade>
          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: "2px solid rgba(14,30,46,0.1)" }}>
            {[["seafood", "🦀 Seafood"], ["mains", "🥩 Mains"], ["starters", "🍲 Starters"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{ flex: 1, padding: "13px 8px", background: "none", border: "none", borderBottom: activeTab === k ? `2px solid ${TEAL}` : "2px solid transparent", color: activeTab === k ? TEAL : "rgba(14,30,46,0.4)", fontSize: "clamp(10px,2vw,12px)", letterSpacing: "0.1em", cursor: "pointer", fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400, transition: "all .3s" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
            {menu[activeTab].map((item, i) => (
              <Fade key={i} delay={i * 50} style={{ background: "rgba(14,30,46,0.03)", borderBottom: "1px solid rgba(14,30,46,0.06)", padding: "22px 20px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(14,30,46,0.5)", fontStyle: "italic" }}>{item.desc}</div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 15, color: TEAL, marginLeft: 16, whiteSpace: "nowrap" }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 24px", background: NAVY2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="gi-about-grid">
          <Fade>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>About Us</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: WHITE, margin: "0 0 20px" }}>A West Cork Institution</h2>
            <p style={{ color: "rgba(248,249,250,0.65)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Nestled in the heart of Glandore village on the Wild Atlantic Way, The Glandore Inn has been serving the finest West Cork produce since the 1890s.
            </p>
            <p style={{ color: "rgba(248,249,250,0.65)", fontSize: 16, lineHeight: 1.8 }}>
              Our seafood is landed daily by local fishermen — what's on your plate this morning was in Glandore harbour last night.
            </p>
          </Fade>
          <Fade delay={150}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/35bb3978c_generated_image.png" alt="Inside the Inn" style={{ width: "100%", height: 340, objectFit: "cover" }} />
          </Fade>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 48, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Our World</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, margin: 0 }}>Gallery</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} className="gi-gallery-grid">
            {galleryImages.map((g, i) => (
              <div key={i} onClick={() => setLightbox(g)} style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "1", borderRadius: 2 }}>
                <img src={g.url} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(14,30,46,0.3)", opacity: 0, transition: "opacity .3s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <div style={{ position: "absolute", bottom: 12, left: 12, color: WHITE, fontSize: 12, fontWeight: 700 }}>{g.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(14,30,46,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: WHITE, fontSize: 32, cursor: "pointer" }}>✕</button>
          <img src={lightbox.url} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
        </div>
      )}

      {/* REVIEWS */}
      <section style={{ background: NAVY, padding: "90px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: WHITE, margin: "0 0 52px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🦀</div>
            <div style={{ color: GOLD, fontSize: 22, marginBottom: 20 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(248,249,250,0.75)", fontSize: "clamp(15px,2.5vw,17px)", lineHeight: 1.8, fontStyle: "italic", marginBottom: 20 }}>"{reviews[rev].text}"</p>
            <div style={{ color: TEAL, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? TEAL : "rgba(248,249,250,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* SEAFOOD IMAGE BREAK */}
      <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/35bb3978c_generated_image.png" alt="Seafood" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,30,46,0.4)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", padding: "0 20px" }}>
            <div style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 900, color: WHITE, fontStyle: "italic", marginBottom: 10 }}>Fresh from the Atlantic.</div>
            <div style={{ fontSize: 12, color: TEAL, letterSpacing: "0.4em", textTransform: "uppercase" }}>Every Day · West Cork</div>
          </div>
        </div>
      </div>

      {/* FIND US */}
      <section id="findus" style={{ background: NAVY, padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Come Find Us</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: WHITE, margin: 0 }}>Glandore, West Cork</h2>
          </Fade>
          <div className="gi-findus-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <Fade>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Address</div>
                <div style={{ color: WHITE, fontSize: 16, lineHeight: 1.7 }}>The Square, Glandore<br />Co. Cork, P72 XD20</div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: TEAL, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12 }}>Opening Hours</div>
                {[["Wed – Thu", "12:30 – 21:00"], ["Fri – Sat", "12:00 – 21:30"], ["Sunday", "12:00 – 20:00"], ["Mon – Tue", "Closed"]].map(([d, h]) => (
                  <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(248,249,250,0.08)" }}>
                    <span style={{ color: "rgba(248,249,250,0.45)", fontSize: 14 }}>{d}</span>
                    <span style={{ color: h === "Closed" ? "rgba(248,249,250,0.2)" : WHITE, fontWeight: 700, fontSize: 14 }}>{h}</span>
                  </div>
                ))}
              </div>
              <a href="tel:0286338666" style={{ display: "inline-block", background: TEAL, color: "#fff", padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>📞 028 633 8666</a>
            </Fade>
            <Fade delay={150}>
              <div style={{ borderRadius: 4, overflow: "hidden" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d-9.2850!3d51.5580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2sGlandore%2C+Co.+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="320" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Glandore Inn" />
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <footer style={{ background: NAVY2, borderTop: "1px solid rgba(26,122,106,0.2)", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(248,249,250,0.25)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", margin: 0 }}>© 2025 The Glandore Inn · The Square, Glandore · Co. Cork</p>
      </footer>

      {/* MOBILE NAV */}
      <div className="gi-mobile-nav" style={{ display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(14,30,46,0.98)", borderTop: "1px solid rgba(26,122,106,0.2)" }}>
        {[["🏠","Home","home"],["🍽️","Menu","menu"],["🖼️","Gallery","gallery"],["📍","Find Us","findus"],["📞","Call","tel:0286338666"]].map(([ic,lb,id])=>(
          <a key={id} href={id.startsWith("tel")?id:`#${id}`} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 12px", color:"rgba(248,249,250,0.5)", textDecoration:"none", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", gap:4 }}>
            <span style={{ fontSize:18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>

      <style>{`
        .gi-desktop-nav { display: flex !important; }
        .gi-hamburger { display: none !important; }
        .gi-mobile-nav { display: none !important; }
        .gi-hero-grid { grid-template-columns: 1fr 1fr; }
        .gi-about-grid { grid-template-columns: 1fr 1fr; }
        .gi-findus-grid { grid-template-columns: 1fr 1fr; }
        .gi-gallery-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 768px) {
          .gi-desktop-nav { display: none !important; }
          .gi-hamburger { display: block !important; }
          .gi-mobile-nav { display: flex !important; }
          .gi-hero-grid { grid-template-columns: 1fr !important; }
          .gi-hero-img { display: none !important; }
          .gi-about-grid { grid-template-columns: 1fr !important; }
          .gi-findus-grid { grid-template-columns: 1fr !important; }
          .gi-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
    </div>
  );
}
