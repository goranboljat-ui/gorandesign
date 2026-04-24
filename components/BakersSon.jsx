"use client";

import { useState, useEffect, useRef } from "react";

// THE BAKER'S SON — Carrigtwohill
// Palette: Warm cream/wheat + deep brown + sage green. Layout: Magazine-style, big typography, asymmetric grid

const WHEAT = "#f5edd8";
const BROWN = "#2c1a0e";
const BROWN2 = "#3d2510";
const SAGE = "#7a9a7a";
const RUST = "#c4622a";

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
  bakery: [
    { name: "Sourdough Loaf", price: "€5.50", desc: "Long-fermented, naturally leavened" },
    { name: "Cinnamon Roll", price: "€3.20", desc: "Butter, brown sugar, fresh baked daily" },
    { name: "Croissant", price: "€2.80", desc: "All-butter, flaky, golden" },
    { name: "Brown Soda Bread", price: "€4.00", desc: "Traditional Irish recipe" },
    { name: "Danish Pastry", price: "€3.50", desc: "Seasonal fruit, custard cream" },
    { name: "Focaccia", price: "€4.50", desc: "Rosemary, sea salt, olive oil" },
  ],
  cafe: [
    { name: "Baker's Breakfast", price: "€12.50", desc: "Full Irish with house sourdough toast" },
    { name: "Avocado Toast", price: "€10.00", desc: "Sourdough, poached egg, chilli flakes" },
    { name: "French Toast", price: "€9.50", desc: "Brioche, maple, berry compote" },
    { name: "Grilled Cheese", price: "€8.50", desc: "Aged cheddar, caramelised onion, sourdough" },
    { name: "Soup & Soda Bread", price: "€7.00", desc: "Homemade daily, served warm" },
    { name: "Smashed Eggs", price: "€11.00", desc: "Feta, spinach, slow-roasted tomato on focaccia" },
  ],
  drinks: [
    { name: "Flat White", price: "€3.50", desc: "Double ristretto, microfoam" },
    { name: "Matcha Latte", price: "€4.20", desc: "Ceremonial grade, oat milk" },
    { name: "House Cold Brew", price: "€4.00", desc: "24hr steep, served over ice" },
    { name: "Chai Latte", price: "€3.80", desc: "House-spiced, warming blend" },
  ],
};

const reviews = [
  { name: "Siobhán R.", text: "The sourdough is genuinely the best I've had outside of a city bakery. Drive from Cork every week.", stars: 5 },
  { name: "Eoin C.", text: "Baker's Breakfast on a Saturday morning is life-changing. The bread alone is worth the trip.", stars: 5 },
  { name: "Aoife T.", text: "So happy to have this in Carrigtwohill. Incredible pastries, amazing coffee. Perfect little spot.", stars: 5 },
];

export default function BakersSon() {
  const [activeTab, setActiveTab] = useState("bakery");
  const [showContact, setShowContact] = useState(false);
  const [rev, setRev] = useState(0);
  useEffect(() => { const t = setInterval(() => setRev(i => (i+1)%reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: WHEAT, color: BROWN, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV — light theme */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, background: "rgba(245,237,216,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(44,26,14,0.1)", padding: "0 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 900, letterSpacing: 1 }}>The Baker's Son</div>
            <div style={{ fontSize: 9, color: SAGE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Carrigtwohill · Artisan Bakery & Café</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }} className="bs-dnav">
            {["home","menu","about","contact"].map(s => <a key={s} href={`#${s}`} style={{ color: "rgba(44,26,14,0.5)", textDecoration: "none", transition: "color .3s" }} onMouseEnter={e=>e.target.style.color=RUST} onMouseLeave={e=>e.target.style.color="rgba(44,26,14,0.5)"}>{s}</a>)}
          </div>
          <a href="tel:0214853576" style={{ background: BROWN, color: WHEAT, border: "none", padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>021 485 3576</a>
        </div>
      </nav>

      {/* MAGAZINE HERO — big text left, image right */}
      <section id="home" style={{ paddingTop: 62, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }} className="bs-hero">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px 60px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: SAGE }} />
            <span style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase" }}>Open Daily · 7:30am</span>
          </div>
          <h1 style={{ fontSize: "clamp(48px,8vw,88px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 6px", letterSpacing: -2 }}>The</h1>
          <h1 style={{ fontSize: "clamp(48px,8vw,88px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 6px", letterSpacing: -2, color: RUST }}>Baker's</h1>
          <h1 style={{ fontSize: "clamp(48px,8vw,88px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 28px", letterSpacing: -2 }}>Son.</h1>
          <p style={{ color: "rgba(44,26,14,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 400 }}>
            Artisan breads, proper pastries, and great coffee. Baked fresh every morning in Carrigtwohill.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#menu" style={{ background: BROWN, color: WHEAT, padding: "15px 32px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>See Menu</a>
            <a href="tel:0214853576" style={{ border: "2px solid rgba(44,26,14,0.25)", color: BROWN, padding: "15px 32px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Call Us</a>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(44,26,14,0.1)" }}>
            {[["7:30am","Opens Daily"],["Fresh","Baked Every Morning"],["2021","Est."]].map(([v,l])=>(
              <div key={l}><div style={{ fontSize: 18, fontWeight: 900, color: RUST }}>{v}</div><div style={{ fontSize: 10, color: "rgba(44,26,14,0.45)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>{l}</div></div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/74757ae0c_generated_image.png" alt="Bakery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", bottom: 32, left: 32, background: WHEAT, padding: "16px 24px", borderLeft: `4px solid ${RUST}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: BROWN }}>Today's Special</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: RUST }}>Cinnamon Swirl</div>
            <div style={{ fontSize: 13, color: "rgba(44,26,14,0.6)" }}>Fresh out of the oven · €3.20</div>
          </div>
        </div>
      </section>

      {/* BREAD BANNER */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6b57019e5_generated_image.png" alt="Bread" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(44,26,14,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 8 }}>Long-Fermented · Naturally Leavened</div>
            <div style={{ fontSize: 30, fontWeight: 900, color: WHEAT, fontStyle: "italic" }}>Real bread, made with time.</div>
          </div>
        </div>
      </div>


      {/* GALLERY — masonry 2x2 grid with lightbox */}
      <section id="gallery" style={{ padding: "80px 24px", background: WHEAT }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>From Our Kitchen</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>Gallery</h2>
          </Fade>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80", label: "Sourdough Loaves" },
              { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80", label: "Croissants" },
              { url: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=700&q=80", label: "Cinnamon Rolls" },
              { url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=700&q=80", label: "Baker's Breakfast" },
              { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80", label: "Specialty Coffee" },
              { url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=700&q=80", label: "Pastries & Danishes" },
              { url: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=700&q=80", label: "Focaccia" },
              { url: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=700&q=80", label: "Avocado Toast" },
            ].map((photo, i) => (
              <Fade key={i} delay={i * 60} style={{ marginBottom: 0, borderRadius: 8, overflow: "hidden", position: "relative", display: "block", cursor: "pointer" }}>
                <img src={photo.url} alt={photo.label}
                  style={{ width: "100%", display: "block", transition: "transform 0.4s" }}
                  onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: `linear-gradient(transparent, rgba(44,26,14,0.75))`,
                  color: WHEAT, fontSize: 12, fontWeight: 700, padding: "24px 12px 8px",
                  letterSpacing: "0.05em"
                }}>{photo.label}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 52 }}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Fresh Daily</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>The Menu</h2>
          </Fade>

          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: `2px solid rgba(44,26,14,0.1)` }}>
            {[["bakery","🍞 Bakery"],["cafe","🍳 Café"],["drinks","☕ Drinks"]].map(([k,l])=>(
              <button key={k} onClick={()=>setActiveTab(k)} style={{ flex:1, padding:"13px 8px", background:"none", border:"none", borderBottom: activeTab===k?`2px solid ${RUST}`:"2px solid transparent", color: activeTab===k?RUST:"rgba(44,26,14,0.45)", fontSize:13, letterSpacing:"0.15em", cursor:"pointer", fontFamily:"inherit", fontWeight: activeTab===k?700:400, transition:"all .3s" }}>{l}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {menu[activeTab].map((item, i) => (
              <Fade key={i} delay={i*50} style={{ background: "rgba(44,26,14,0.04)", borderBottom: `1px solid rgba(44,26,14,0.08)`, padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ color: "rgba(44,26,14,0.5)", fontSize: 13 }}>{item.desc}</div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: RUST, marginLeft: 12, whiteSpace: "nowrap" }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — asymmetric */}
      <section id="about" style={{ padding: "80px 24px", background: BROWN }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="bs-about">
          <Fade>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/74757ae0c_generated_image.png" alt="Inside" style={{ width: "100%", height: 320, objectFit: "cover" }} />
          </Fade>
          <Fade delay={150}>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 14 }}>Our Story</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 20px", color: WHEAT }}>Baked with love<br/>since 2021.</h2>
            <p style={{ color: "rgba(245,237,216,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              Started as a small family bakery in Barryscourt Business Park, The Baker's Son has become Carrigtwohill's favourite spot for breakfast, coffee, and freshly baked goods.
            </p>
            <p style={{ color: "rgba(245,237,216,0.5)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
              Everything we bake is made from scratch each morning — from our long-fermented sourdough to our buttery croissants.
            </p>
          </Fade>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What Customers Say</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 48px" }}>Reviews</h2>
          </Fade>
          <div style={{ position: "relative", minHeight: 180 }}>
            {reviews.map((r,i)=>(
              <div key={i} style={{ position: i===rev?"relative":"absolute", inset:0, opacity:i===rev?1:0, transition:"opacity .6s" }}>
                <div style={{ color: RUST, fontSize: 18, letterSpacing: 3, marginBottom: 16 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize: 19, fontStyle:"italic", color:BROWN, lineHeight:1.7, margin:"0 0 18px" }}>"{r.text}"</p>
                <div style={{ color:"rgba(44,26,14,0.4)", fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase" }}>— {r.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:32 }}>
            {reviews.map((_,i)=><button key={i} onClick={()=>setRev(i)} style={{ width:i===rev?24:8, height:8, background:i===rev?RUST:"rgba(196,98,42,0.2)", border:"none", borderRadius:4, cursor:"pointer", transition:"all .4s" }} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: BROWN2 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: SAGE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Visit Us</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 36px", color: WHEAT }}>Come & Say Hello</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 32 }}>
              {[["📍","Address","Barryscourt Business Park\nCarrigtwohill, Co. Cork"],["📞","Phone","021 485 3576"],["🕐","Hours","Mon–Fri: 7:30am–5pm\nSat–Sun: 8am–3pm"]].map(([ic,lb,vl],i)=>(
                <div key={i} style={{ background:"rgba(245,237,216,0.05)", border:"1px solid rgba(245,237,216,0.08)", padding:20 }}>
                  <div style={{ fontSize:24, marginBottom:10 }}>{ic}</div>
                  <div style={{ fontSize:9, color:SAGE, letterSpacing:"0.4em", textTransform:"uppercase", marginBottom:6 }}>{lb}</div>
                  <div style={{ color:WHEAT, fontSize:13, lineHeight:1.6, whiteSpace:"pre-line" }}>{vl}</div>
                </div>
              ))}
            </div>
            <a href="mailto:thebakersson2021@gmail.com" style={{ display:"block", background:RUST, color:WHEAT, padding:"16px", fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, textDecoration:"none" }}>
              📧 thebakersson2021@gmail.com
            </a>
          </Fade>
        </div>
      </section>

      <footer style={{ background:BROWN, borderTop:"1px solid rgba(245,237,216,0.06)", padding:"22px 24px", textAlign:"center" }}>
        <p style={{ color:"rgba(245,237,216,0.25)", fontSize:11, letterSpacing:"0.25em", textTransform:"uppercase", margin:0 }}>© 2025 The Baker's Son · Carrigtwohill · @thebakersson2021</p>
      </footer>

      <div className="bs-mnav" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:99, background:"rgba(44,26,14,0.97)", borderTop:"1px solid rgba(196,98,42,0.2)", display:"flex" }}>
        {[["🏠","Home","home"],["🍞","Menu","menu"],["📞","Call","call"],["⭐","About","about"],["📍","Find Us","contact"]].map(([ic,lb,id])=>(
          <a key={id} href={id==="call"?"tel:0214853576":`#${id}`} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 12px", color:"rgba(245,237,216,0.4)", textDecoration:"none", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", gap:4 }}>
            <span style={{ fontSize:18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>

      <style>{`.bs-dnav{display:flex!important}.bs-mnav{display:none!important}@media(max-width:768px){.bs-dnav{display:none!important}.bs-mnav{display:flex!important}.bs-hero{grid-template-columns:1fr!important}.bs-about{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
