"use client";
import { useState, useEffect, useRef } from "react";

const BLUSH = "#f9f0ee";
const ROSE = "#c97a8a";
const MAUVE = "#7a3a4a";
const DEEPROSE = "#a05060";
const WHITE = "#ffffff";
const GRAY = "#8a7a80";

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
  { cat: "Hair", items: [
    { name: "Cut & Blowdry", price: "€35", desc: "Wash, cut, style & finish" },
    { name: "Colour & Toner", price: "€60+", desc: "Full colour, roots or toner" },
    { name: "Balayage", price: "€80+", desc: "Freehand highlight technique" },
    { name: "Treatment", price: "€20", desc: "Deep conditioning & gloss" },
  ]},
  { cat: "Beauty", items: [
    { name: "Gel Nails", price: "€30", desc: "Full set, soak-off gel colour" },
    { name: "Eyebrow Wax & Tint", price: "€18", desc: "Shape, wax & tint combo" },
    { name: "Lash Lift", price: "€45", desc: "Lift, tint & nourish" },
    { name: "Facial", price: "€50", desc: "Deep cleanse & hydration" },
  ]},
];

const team = [
  { name: "Sarah", role: "Senior Stylist", spec: "Balayage & Colour", emoji: "✂️", exp: "8 years" },
  { name: "Emma", role: "Nail Technician", spec: "Gel & Nail Art", emoji: "💅", exp: "5 years" },
  { name: "Aoife", role: "Beauty Therapist", spec: "Lashes & Brows", emoji: "🌸", exp: "4 years" },
];

const reviews = [
  { name: "Rachel D.", text: "Best salon in Carrigtwohill. Sarah did my balayage and I've never felt more confident. Absolute artist.", stars: 5 },
  { name: "Niamh P.", text: "Walked in feeling stressed, walked out glowing. The whole team is so warm and talented.", stars: 5 },
  { name: "Laura K.", text: "My go-to for nails, lashes and hair. You won't find better within 20km.", stars: 5 },
];

const galleryPhotos = [
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80", label: "Balayage & Colour" },
  { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80", label: "Styling & Blowdry" },
  { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80", label: "Gel Nails" },
  { url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80", label: "Lash & Brow" },
  { url: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=700&q=80", label: "Salon Atmosphere" },
  { url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&q=80", label: "Hair Treatments" },
];

export default function BeYoutifulSalon() {
  const [activeService, setActiveService] = useState(0);
  const [showBook, setShowBook] = useState(false);
  const [rev, setRev] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => { const t = setInterval(() => setRev(i => (i+1)%reviews.length), 4200); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: BLUSH, color: MAUVE, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, inset: "0 0 auto", zIndex: 100, background: "rgba(249,240,238,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,122,138,0.15)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 1, color: MAUVE, fontStyle: "italic" }}>BeYoutiful</div>
            <div style={{ fontSize: 9, color: ROSE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Hair & Beauty · Carrigtwohill</div>
          </div>
          <div className="by-dnav" style={{ display: "flex", gap: 24, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {[["home","Home"],["services","Services"],["gallery","Gallery"],["team","Team"],["contact","Contact"]].map(([href,label])=>(
              <a key={href} href={`#${href}`} style={{ color:GRAY, textDecoration:"none", transition:"color .3s" }} onMouseEnter={e=>e.target.style.color=ROSE} onMouseLeave={e=>e.target.style.color=GRAY}>{label}</a>
            ))}
          </div>
          {/* Book appointment in nav — scrolls to services section */}
          <a href="#services" onClick={(e) => { e.preventDefault(); setShowBook(true); }} style={{ background: ROSE, color: WHITE, border: "none", padding: "10px 24px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", borderRadius: 2, textDecoration: "none" }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ paddingTop: 62, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 80% 50%, rgba(201,122,138,0.12) 0%, transparent 60%)` }} />
        <div className="by-hero-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 28, height: 2, background: ROSE }} />
              <span style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase" }}>Carrigtwohill, Co. Cork</span>
            </div>
            <h1 style={{ fontSize: "clamp(50px,8vw,90px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 6px", fontStyle: "italic", color: MAUVE }}>Be</h1>
            <h1 style={{ fontSize: "clamp(50px,8vw,90px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 6px", fontStyle: "italic", color: ROSE }}>Youtiful.</h1>
            <p style={{ color: GRAY, fontSize: 17, lineHeight: 1.7, margin: "24px 0 36px", maxWidth: 400 }}>
              Hair, beauty, nails and more — all in one gorgeous salon. Because you deserve to feel amazing every day.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {/* Book Appointment — opens booking modal */}
              <button onClick={() => setShowBook(true)} style={{ background: ROSE, color: WHITE, border: "none", padding: "15px 34px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>Book Appointment</button>
              {/* Our Services — scrolls to services section */}
              <a href="#services" style={{ border: "2px solid rgba(201,122,138,0.35)", color: ROSE, padding: "15px 34px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Our Services</a>
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(201,122,138,0.2)", flexWrap: "wrap" }}>
              {[["Hair","Colour & Cuts"],["Beauty","Nails, Lashes & Brows"],["Walk-ins","Welcome Daily"]].map(([v,l])=>(
                <div key={l}><div style={{ fontSize: 15, fontWeight: 700, color: DEEPROSE }}>{v}</div><div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.1em", marginTop: 2 }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="by-hero-img" style={{ position: "relative" }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/2006012c8_generated_image.png" alt="BeYoutiful Salon" style={{ width: "100%", height: 520, objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 24, left: -16, background: WHITE, padding: "14px 20px", boxShadow: "0 8px 32px rgba(122,58,74,0.15)", borderLeft: `3px solid ${ROSE}` }}>
              <div style={{ fontSize: 11, color: ROSE, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>This Week Only</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: MAUVE }}>20% off Lash Lift</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "90px 24px", background: WHITE }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We Offer</div>
            <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, fontStyle: "italic", margin: 0, color: MAUVE }}>Services</h2>
          </Fade>
          <div style={{ display: "flex", gap: 0, justifyContent: "center", marginBottom: 40, borderBottom: `2px solid rgba(201,122,138,0.15)` }}>
            {services.map((s,i)=>(
              <button key={i} onClick={()=>setActiveService(i)} style={{ padding:"13px 40px", background:"none", border:"none", borderBottom: activeService===i?`2px solid ${ROSE}`:"2px solid transparent", color: activeService===i?ROSE:GRAY, fontSize:13, letterSpacing:"0.15em", textTransform:"uppercase", cursor:"pointer", fontFamily:"inherit", fontWeight:activeService===i?700:400, transition:"all .3s" }}>{s.cat}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {services[activeService].items.map((item,i)=>(
              <Fade key={i} delay={i*60} style={{ background: BLUSH, padding: "28px 24px", textAlign: "center", transition: "transform .3s, box-shadow .3s" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(201,122,138,0.15)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{["✂️","💄","💅","🌸"][i%4]}</div>
                <h3 style={{ margin:"0 0 6px", fontSize:17, fontWeight:700, color:MAUVE }}>{item.name}</h3>
                <p style={{ margin:"0 0 14px", fontSize:13, color:GRAY, lineHeight:1.5 }}>{item.desc}</p>
                <div style={{ fontSize:22, fontWeight:900, color:ROSE }}>{item.price}</div>
                <button onClick={()=>setShowBook(true)} style={{ width:"100%", marginTop:14, background:"none", border:`1px solid ${ROSE}`, color:ROSE, padding:"10px", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", fontFamily:"inherit" }}>Book This</button>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — before stylists */}
      <section id="gallery" style={{ padding: "80px 24px", background: BLUSH }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Our Work</div>
            <h2 style={{ fontSize: "clamp(30px,5vw,44px)", fontWeight: 900, fontStyle: "italic", margin: 0, color: MAUVE }}>Gallery</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }} className="by-gallery-grid">
            {galleryPhotos.map((photo, i) => (
              <div key={i} onClick={() => setLightbox(photo)} style={{ position: "relative", overflow: "hidden", cursor: "pointer", borderRadius: 2, aspectRatio: "1" }}>
                <img src={photo.url} alt={photo.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                  onMouseOver={e => e.currentTarget.style.transform = "scale(1.07)"}
                  onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: `linear-gradient(transparent, rgba(122,58,74,0.75))`, color: WHITE, fontSize: 12, fontWeight: 600, fontStyle: "italic", padding: "28px 14px 12px" }}>{photo.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(122,58,74,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: WHITE, fontSize: 32, cursor: "pointer" }}>✕</button>
          <img src={lightbox.url} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }} />
        </div>
      )}

      {/* TEAM */}
      <section id="team" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Meet the Team</div>
            <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 900, fontStyle: "italic", margin: 0, color: MAUVE }}>Your Stylists</h2>
          </Fade>
          <div className="by-team" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {team.map((b,i)=>(
              <Fade key={i} delay={i*100} style={{ background: WHITE, padding: "36px 28px", textAlign: "center", border: `1px solid rgba(201,122,138,0.12)` }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${ROSE}, ${MAUVE})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, margin: "0 auto 20px" }}>{b.emoji}</div>
                <div style={{ fontSize: 9, color: ROSE, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6 }}>{b.role}</div>
                <h3 style={{ margin:"0 0 6px", fontSize:22, fontWeight:900, color:MAUVE, fontStyle:"italic" }}>{b.name}</h3>
                <p style={{ margin:"0 0 12px", color:GRAY, fontSize:13 }}>{b.spec}</p>
                <div style={{ fontSize:11, color:ROSE, fontWeight:600 }}>{b.exp} experience</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: `linear-gradient(135deg, rgba(201,122,138,0.15), rgba(122,58,74,0.10))` }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Client Love</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, fontStyle: "italic", margin: "0 0 48px", color: MAUVE }}>Reviews</h2>
          </Fade>
          <div style={{ position: "relative", minHeight: 170 }}>
            {reviews.map((r,i)=>(
              <div key={i} style={{ position:i===rev?"relative":"absolute", inset:0, opacity:i===rev?1:0, transition:"opacity .6s" }}>
                <div style={{ color:ROSE, fontSize:20, letterSpacing:4, marginBottom:16 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontSize:"clamp(16px,2.5vw,19px)", fontStyle:"italic", color:MAUVE, lineHeight:1.7, margin:"0 0 18px" }}>"{r.text}"</p>
                <div style={{ color:GRAY, fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase" }}>— {r.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:32 }}>
            {reviews.map((_,i)=><button key={i} onClick={()=>setRev(i)} style={{ width:i===rev?24:8, height:8, background:i===rev?ROSE:"rgba(201,122,138,0.2)", border:"none", borderRadius:4, cursor:"pointer", transition:"all .4s" }} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: MAUVE }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: ROSE, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Get In Touch</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, fontStyle: "italic", margin: "0 0 36px", color: WHITE }}>Visit BeYoutiful</h2>
            <div className="by-contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 32 }}>
              {[["📍","Address","Carrigtwohill\nCo. Cork"],["📞","Phone","+353 86 263 9476"],["🕐","Hours","Tue–Sat\n9am – 6pm"]].map(([ic,lb,vl],i)=>(
                <div key={i} style={{ background:"rgba(255,255,255,0.08)", padding:20 }}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{ic}</div>
                  <div style={{ fontSize:9, color:ROSE, letterSpacing:"0.4em", textTransform:"uppercase", marginBottom:6 }}>{lb}</div>
                  <div style={{ color:"rgba(255,255,255,0.8)", fontSize:13, lineHeight:1.6, whiteSpace:"pre-line" }}>{vl}</div>
                </div>
              ))}
            </div>
            <button onClick={()=>setShowBook(true)} style={{ width:"100%", background:ROSE, color:WHITE, border:"none", padding:"16px", fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700, cursor:"pointer" }}>
              🌸 Book Appointment
            </button>
          </Fade>
        </div>
      </section>

      <footer style={{ background:MAUVE, borderTop:"1px solid rgba(255,255,255,0.08)", padding:"20px 24px", textAlign:"center" }}>
        <p style={{ color:"rgba(255,255,255,0.2)", fontSize:11, letterSpacing:"0.2em", textTransform:"uppercase", margin:0 }}>© 2025 BeYoutiful Salon · Carrigtwohill · +353 86 263 9476</p>
      </footer>

      {/* MOBILE NAV */}
      <div className="by-mnav" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:99, background:"rgba(249,240,238,0.97)", borderTop:"1px solid rgba(201,122,138,0.2)", display:"none" }}>
        {[["🏠","Home","home"],["✂️","Services","services"],["📅","Book","book"],["👩","Team","team"],["📍","Contact","contact"]].map(([ic,lb,id])=>(
          <a key={id} href={id==="book"?undefined:`#${id}`} onClick={id==="book"?(e)=>{e.preventDefault();setShowBook(true);}:undefined} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 12px", color:GRAY, textDecoration:"none", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", gap:4, cursor:"pointer", background:id==="book"?"rgba(201,122,138,0.08)":"none" }}>
            <span style={{ fontSize:18 }}>{ic}</span><span style={{ color:id==="book"?ROSE:GRAY }}>{lb}</span>
          </a>
        ))}
      </div>

      {/* Booking modal */}
      {showBook && (
        <div style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(122,58,74,0.85)", display:"flex", alignItems:"flex-end", justifyContent:"center", padding:16, backdropFilter:"blur(8px)" }} onClick={()=>setShowBook(false)}>
          <div style={{ background:WHITE, padding:"36px", width:"100%", maxWidth:440, maxHeight:"90vh", overflowY:"auto" }} onClick={e=>e.stopPropagation()}>
            <h3 style={{ margin:"0 0 24px", fontSize:26, fontWeight:900, fontStyle:"italic", color:MAUVE }}>Book Appointment</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <select style={{ background:BLUSH, border:"1px solid rgba(201,122,138,0.25)", color:MAUVE, padding:"13px 15px", fontSize:14, outline:"none", fontFamily:"inherit" }}>
                <option>Select Service</option>
                {services.flatMap(s=>s.items).map(i=><option key={i.name}>{i.name} — {i.price}</option>)}
              </select>
              {[["Your Name","text"],["Phone","tel"],["Email","email"]].map(([p,t],i)=>(
                <input key={i} type={t} placeholder={p} style={{ background:BLUSH, border:"1px solid rgba(201,122,138,0.2)", color:MAUVE, padding:"13px 15px", fontSize:14, outline:"none", fontFamily:"inherit", width:"100%", boxSizing:"border-box" }} />
              ))}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <input type="date" style={{ background:BLUSH, border:"1px solid rgba(201,122,138,0.2)", color:GRAY, padding:"13px 15px", fontSize:14, outline:"none", fontFamily:"inherit" }} />
                <select style={{ background:BLUSH, border:"1px solid rgba(201,122,138,0.2)", color:MAUVE, padding:"13px 15px", fontSize:14, outline:"none", fontFamily:"inherit" }}>
                  {["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"].map(t=><option key={t}>{t}</option>)}
                </select>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button style={{ flex:1, background:ROSE, color:WHITE, border:"none", padding:"15px", fontSize:13, letterSpacing:"0.15em", textTransform:"uppercase", fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Confirm Booking</button>
                <button onClick={()=>setShowBook(false)} style={{ padding:"15px 18px", background:"none", border:`1px solid rgba(201,122,138,0.2)`, color:GRAY, cursor:"pointer", fontFamily:"inherit" }}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .by-dnav { display: flex !important; }
        .by-mnav { display: none !important; }
        .by-hero-grid { grid-template-columns: 1fr 1fr; }
        .by-team { grid-template-columns: repeat(3,1fr); }
        .by-gallery-grid { grid-template-columns: 1fr 1fr 1fr; }
        .by-contact-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 768px) {
          .by-dnav { display: none !important; }
          .by-mnav { display: flex !important; }
          .by-hero-grid { grid-template-columns: 1fr !important; }
          .by-hero-img { display: none !important; }
          .by-team { grid-template-columns: 1fr !important; }
          .by-gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .by-contact-grid { grid-template-columns: 1fr !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
    </div>
  );
}
