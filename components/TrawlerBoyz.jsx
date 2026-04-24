"use client";

import { useState, useEffect, useRef } from "react";

// TRAWLER BOYZ — Ballycotton Food Truck
// Palette: Bold orange + deep charcoal + white

const ORANGE = "#e8620a";
const ORANGE_LIGHT = "#ff7820";
const CHAR = "#161410";
const CHAR2 = "#1e1a16";
const WHITE = "#ffffff";
const SMOKE = "#8a8070";

function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(20px)", transition: `opacity .65s ${delay}ms, transform .65s ${delay}ms` }}>{children}</div>;
}

const menu = [
  { name: "Classic Fish & Chips", price: "€12", desc: "Beer-battered cod, chunky chips, tartare sauce, lemon", tag: "Best Seller", icon: "🐟" },
  { name: "Battered Prawn Basket", price: "€14", desc: "Local Ballycotton prawns, sweet chilli dip, chips", tag: "Local Catch", icon: "🦐" },
  { name: "Crab Bite Box", price: "€13", desc: "Crab cakes, garlic aioli, slaw, pickled cucumber", tag: "Chef's Pick", icon: "🦀" },
  { name: "Smoked Mackerel Wrap", price: "€10", desc: "Smoked mackerel, cream cheese, pickled onion, rocket", tag: "Light Option", icon: "🌯" },
  { name: "Double Haddock", price: "€15", desc: "Two pieces of battered haddock, double chips", tag: "Hungry?", icon: "🍽️" },
  { name: "Calamari Rings", price: "€9", desc: "Crispy squid, smoked paprika, lemon aioli", tag: "Starter", icon: "🦑" },
  { name: "Chips Only", price: "€4", desc: "Chunky hand-cut chips, sea salt & vinegar", tag: "Side", icon: "🍟" },
  { name: "Grilled Mackerel", price: "€11", desc: "Whole grilled mackerel, lemon, herbs, brown bread", tag: "Healthy", icon: "🔥" },
];

const reviews = [
  { name: "Kevin S.", text: "The best fish and chips I've had since Dingle. Absolutely incredible fresh fish right on the harbour.", stars: 5 },
  { name: "Maura F.", text: "Drove from Cork just for this. The prawn basket is something else. Worth every mile.", stars: 5 },
  { name: "Tom B.", text: "These guys are legends. Fresh catch, generous portions, craic is great. Back every week.", stars: 5 },
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80", label: "Fresh Fish" },
  { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", label: "Fish & Chips" },
  { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", label: "Seafood" },
  { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", label: "Ballycotton Harbour" },
  { url: "https://images.unsplash.com/photo-1611599538835-b52a8c2f9080?w=800&q=80", label: "The Truck" },
  { url: "https://images.unsplash.com/photo-1474887430306-a5c32897ade1?w=800&q=80", label: "Daily Catch" },
];

export default function TrawlerBoyz() {
  const [rev, setRev] = useState(0);
  const [filter, setFilter] = useState("all");
  useEffect(() => { const t = setInterval(() => setRev(i => (i+1)%reviews.length), 4200); return () => clearInterval(t); }, []);

  const filtered = filter === "all" ? menu : menu.filter(i => i.tag === filter);

  return (
    <div style={{ background: CHAR, color: WHITE, fontFamily: "'Helvetica Neue', Arial, sans-serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, background: "rgba(22,20,16,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(232,98,10,0.2)", padding: "0 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>🎣</span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase" }}>TRAWLER BOYZ</div>
              <div style={{ fontSize: 9, color: ORANGE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Ballycotton · Fresh Seafood</div>
            </div>
          </div>
          <div className="tb-dnav" style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {["home","menu","find-us"].map(s=><a key={s} href={`#${s}`} style={{ color:SMOKE, textDecoration:"none", transition:"color .3s" }} onMouseEnter={e=>e.target.style.color=ORANGE} onMouseLeave={e=>e.target.style.color=SMOKE}>{s}</a>)}
          </div>
          <a href="tel:0864073057" className="tb-dnav" style={{ background:ORANGE, color:WHITE, border:"none", padding:"10px 22px", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:800, cursor:"pointer", textDecoration:"none" }}>📞 Call to Order</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7c3f5c389_generated_image.png" alt="Trawler Boyz" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.28) saturate(1.4) contrast(1.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 60% 40%, ${ORANGE}20 0%, transparent 50%), linear-gradient(to top, ${CHAR} 0%, ${CHAR}90 20%, transparent 60%)` }} />
        <div style={{ position: "absolute", top: 0, right: "15%", width: 3, height: "100%", background: `linear-gradient(to bottom, transparent 15%, ${ORANGE}60 45%, ${ORANGE}60 55%, transparent 85%)` }} className="tb-dnav" />

        <div style={{ position: "relative", padding: "0 24px 100px", width: "100%", maxWidth: 1100, margin: "0 auto", boxSizing: "border-box" }}>
          <div style={{ display: "inline-block", background: ORANGE, color: WHITE, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 800, padding: "6px 14px", marginBottom: 20 }}>
            🎣 Ballycotton Harbour · Fresh Daily
          </div>
          <h1 style={{ fontSize: "clamp(52px,12vw,130px)", fontWeight: 900, lineHeight: 0.85, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: -4, color: WHITE }}>TRAWLER</h1>
          <h1 style={{ fontSize: "clamp(52px,12vw,130px)", fontWeight: 900, lineHeight: 0.85, margin: "0 0 28px", textTransform: "uppercase", letterSpacing: -4, color: WHITE }}>
            <span style={{ color: ORANGE }}>BOYZ.</span>
          </h1>
          {/* "Fresh off the boats" — white text for clarity */}
          <p style={{ color: WHITE, fontSize: "clamp(15px,2.5vw,18px)", lineHeight: 1.6, marginBottom: 40, maxWidth: 500, fontWeight: 500 }}>
            Fresh off the boats. Into the fryer. Onto your plate.<br />
            <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 400 }}>Ballycotton's original seafood spot.</span>
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#menu" style={{ background:ORANGE, color:WHITE, padding:"16px 36px", fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:800, textDecoration:"none" }}>See The Menu</a>
            <a href="tel:0864073057" style={{ border:"1px solid rgba(255,255,255,0.25)", color:WHITE, padding:"16px 36px", fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none" }}>📞 Call to Order</a>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(232,98,10,0.2)", flexWrap: "wrap" }}>
            {[["Daily","Fresh Catch"],["€9–15","Menu Prices"],["Harbour","Side Location"]].map(([v,l])=>(
              <div key={l}><div style={{ fontSize:18, fontWeight:900, color:ORANGE_LIGHT }}>{v}</div><div style={{ fontSize:10, color:SMOKE, letterSpacing:"0.2em", textTransform:"uppercase", marginTop:2 }}>{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — before menu */}
      <section style={{ padding: "80px 24px", background: CHAR2 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 48, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: ORANGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Fresh From The Sea</div>
            <h2 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Gallery</h2>
          </Fade>
          <div className="tb-gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
            {galleryImages.map((g, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={g.url} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", filter: "brightness(0.75)" }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.9)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.75)"; }} />
                <div style={{ position: "absolute", bottom: 10, left: 12, color: WHITE, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontSize: 10, color: ORANGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We've Got</div>
                <h2 style={{ fontSize: "clamp(28px,6vw,56px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>The Menu</h2>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["all","Best Seller","Local Catch","Chef's Pick","Healthy"].map(f=>(
                  <button key={f} onClick={()=>setFilter(f)} style={{ padding:"8px 16px", background: filter===f?ORANGE:"rgba(255,255,255,0.05)", color: filter===f?WHITE:SMOKE, border: filter===f?"none":"1px solid rgba(255,255,255,0.1)", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", cursor:"pointer", fontFamily:"inherit", transition:"all .3s" }}>
                    {f==="all"?"All":f}
                  </button>
                ))}
              </div>
            </div>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 3 }}>
            {filtered.map((item, i) => (
              <Fade key={item.name} delay={i*50} style={{ background: CHAR2, padding: "24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, background: ORANGE, color: WHITE, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 800, padding: "4px 10px" }}>{item.tag}</div>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>{item.name}</h3>
                <p style={{ margin: "0 0 16px", color: SMOKE, fontSize: 13, lineHeight: 1.5 }}>{item.desc}</p>
                <div style={{ fontSize: 24, fontWeight: 900, color: ORANGE_LIGHT }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: CHAR2 }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <span style={{ fontSize: 32 }}>🎣</span>
            <div style={{ fontSize: 10, color: ORANGE, letterSpacing: "0.5em", textTransform: "uppercase", margin: "12px 0 10px" }}>What People Say</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,38px)", fontWeight: 900, margin: "0 0 44px", textTransform: "uppercase", letterSpacing: -1 }}>Reviews</h2>
          </Fade>
          <div style={{ position: "relative", minHeight: 170 }}>
            {reviews.map((r,i)=>(
              <div key={i} style={{ position:i===rev?"relative":"absolute", inset:0, opacity:i===rev?1:0, transition:"opacity .6s" }}>
                <div style={{ color:ORANGE, fontSize:20, letterSpacing:4, marginBottom:16 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize:"clamp(15px,2.5vw,19px)", color:"rgba(255,255,255,0.82)", lineHeight:1.7, margin:"0 0 18px", fontStyle:"italic" }}>"{r.text}"</p>
                <div style={{ color:SMOKE, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase" }}>— {r.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:32 }}>
            {reviews.map((_,i)=><button key={i} onClick={()=>setRev(i)} style={{ width:i===rev?28:8, height:8, background:i===rev?ORANGE:"rgba(232,98,10,0.2)", border:"none", borderRadius:4, cursor:"pointer", transition:"all .4s" }} />)}
          </div>
        </div>
      </section>

      {/* FIND US — mobile responsive */}
      <section id="find-us" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 48, textAlign: "center" }}>
            <div style={{ fontSize: 10, color: ORANGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Where We Are</div>
            <h2 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: -1 }}>Find the Truck</h2>
          </Fade>
          {/* Map */}
          <Fade style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d-8.0120!3d51.8380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484471a3d8f4c635%3A0x1!2sBallycotton+Harbour!5e0!3m2!1sen!2sie!4v1"
              width="100%" height="240" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Trawler Boyz Location"
            />
          </Fade>
          <Fade style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }} className="tb-contact">
            {[
              { icon: "📍", label: "Location", val: "Ballycotton Harbour\nCo. Cork" },
              { icon: "📞", label: "Phone / Order", val: "086 407 3057" },
              { icon: "📱", label: "Instagram", val: "@trawlerboyzballycotton" },
              { icon: "🕐", label: "Hours", val: "Wed–Sun: 12pm – 8pm\nWhen boats come in!" },
            ].map((c,i)=>(
              <div key={i} style={{ background:CHAR2, padding:"24px 28px", display:"flex", gap:16, alignItems:"flex-start" }}>
                <div style={{ width:40, height:40, background:`rgba(232,98,10,0.12)`, border:`1px solid rgba(232,98,10,0.25)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize:9, color:ORANGE, letterSpacing:"0.4em", textTransform:"uppercase", marginBottom:5 }}>{c.label}</div>
                  <div style={{ color:WHITE, fontSize:15, fontWeight:400, whiteSpace:"pre-line", lineHeight:1.6 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </Fade>
          <Fade delay={100} style={{ marginTop:3 }}>
            <a href="tel:0864073057" style={{ display:"block", background:ORANGE, color:WHITE, padding:"18px", fontSize:13, letterSpacing:"0.25em", textTransform:"uppercase", fontWeight:800, textDecoration:"none", textAlign:"center" }}>
              🎣 Call to Order: 086 407 3057
            </a>
          </Fade>
        </div>
      </section>

      <footer style={{ borderTop:"1px solid rgba(232,98,10,0.15)", padding:"22px 24px", textAlign:"center" }}>
        <p style={{ color:"rgba(138,128,112,0.35)", fontSize:11, letterSpacing:"0.25em", textTransform:"uppercase", margin:0 }}>© 2025 Trawler Boyz · Ballycotton Harbour · @trawlerboyzballycotton</p>
      </footer>

      {/* MOBILE NAV */}
      <div className="tb-mnav" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:99, background:"rgba(22,20,16,0.97)", borderTop:"1px solid rgba(232,98,10,0.2)", display:"none" }}>
        {[["🏠","Home","home"],["🐟","Menu","menu"],["🖼️","Gallery","gallery"],["📞","Order","tel:0864073057"],["📍","Find Us","find-us"]].map(([ic,lb,id])=>(
          <a key={id} href={id.startsWith("tel")?id:`#${id}`} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 12px", color:SMOKE, textDecoration:"none", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", gap:4, background:id.startsWith("tel")?"rgba(232,98,10,0.1)":"none" }}>
            <span style={{ fontSize:18 }}>{ic}</span><span style={{ color:id.startsWith("tel")?ORANGE:SMOKE }}>{lb}</span>
          </a>
        ))}
      </div>

      <style>{`
        .tb-dnav { display: flex !important; }
        .tb-mnav { display: none !important; }
        .tb-gallery-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media (max-width: 768px) {
          .tb-dnav { display: none !important; }
          .tb-mnav { display: flex !important; }
          .tb-contact { grid-template-columns: 1fr !important; }
          .tb-gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
    </div>
  );
}
