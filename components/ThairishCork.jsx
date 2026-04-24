"use client";
import { useState, useEffect } from "react";

const GREEN = "#7ab87a";
const DARK = "#060a07";
const DARK2 = "#090d0a";
const TEXT = "#e8f0e9";
const MUTED = "#5a7a5a";
const MUTED2 = "#3a5a3a";

export default function ThairishCork() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("small");
  const [showReservation, setShowReservation] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = {
    small: [
      { name: "Prawn Tom Yum", desc: "Lemongrass broth, kaffir lime, chilli, coriander", price: "€11", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
      { name: "Spring Rolls", desc: "Hand-rolled, pork & glass noodle, sweet chilli", price: "€9", img: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&q=80" },
      { name: "Satay Chicken Skewers", desc: "Peanut sauce, cucumber relish", price: "€10", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80" },
    ],
    large: [
      { name: "Green Curry", desc: "Coconut milk, Thai basil, jasmine rice — chicken or tofu", price: "€19", img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80" },
      { name: "Pad Thai", desc: "Wok-fried rice noodles, egg, bean sprout, tamarind", price: "€18", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80" },
      { name: "Massaman Lamb", desc: "Slow-braised, potatoes, cashews, coconut", price: "€22", img: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=400&q=80" },
      { name: "Irish Beef Stir-Fry", desc: "East Cork sirloin, oyster sauce, bok choy, noodles", price: "€24", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },
    ],
    sides: [
      { name: "Jasmine Rice", desc: "Steamed, fragrant", price: "€3", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=80" },
      { name: "Roti Bread", desc: "Flaky Thai flatbread, dipping sauce", price: "€5", img: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400&q=80" },
      { name: "Wok Greens", desc: "Garlic, oyster sauce, sesame", price: "€6", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    ],
  };

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80", label: "Green Curry" },
    { url: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80", label: "Pad Thai" },
    { url: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80", label: "Tom Yum" },
    { url: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=800&q=80", label: "Spring Rolls" },
    { url: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=800&q=80", label: "Massaman" },
    { url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80", label: "Stir Fry" },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ background: DARK, color: TEXT }}>

      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"}`} style={scrolled ? { background: "rgba(6,10,7,0.95)" } : {}}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Thairish</h1>
            <p className="text-xs tracking-[0.3em] font-light" style={{ color: GREEN }}>Irish · Thai · Carrigtwohill</p>
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{ color: MUTED }}>
            <a href="#concept" className="hover:text-white transition">Concept</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Visit</a>
          </div>
          <button onClick={() => setShowReservation(true)} className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300" style={{ borderColor: GREEN, color: GREEN }}>
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8ea54123a_generated_image.png" alt="Thairish" className="w-full h-full object-cover" style={{ filter: "brightness(0.25) saturate(1.6) hue-rotate(10deg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,10,7,0.95) 0%, rgba(6,10,7,0.4) 60%, rgba(6,10,7,0.8) 100%)" }} />
        <div className="absolute inset-0 flex items-center px-8 md:px-20">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.5em] uppercase mb-6 font-light" style={{ color: GREEN }}>East Cork's Most Unique Restaurant</p>
            <div className="mb-6">
              <span className="font-black leading-none block" style={{ fontSize: "clamp(60px,12vw,120px)", color: TEXT }}>Thai</span>
              <span className="font-black leading-none block" style={{ fontSize: "clamp(60px,12vw,120px)", color: GREEN }}>Irish.</span>
            </div>
            <p className="text-lg font-light leading-relaxed mb-10" style={{ color: "#8a9a8a" }}>
              Two cultures. One extraordinary menu. Bangkok technique meets East Cork ingredients.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => setShowReservation(true)} className="px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold transition" style={{ background: GREEN, color: DARK }}>
                Book a Table
              </button>
              <a href="#menu" className="px-8 py-4 text-sm tracking-[0.2em] uppercase border transition" style={{ borderColor: "rgba(255,255,255,0.2)", color: TEXT }}>
                Explore Menu
              </a>
            </div>
            <div className="flex gap-6 mt-8" style={{ color: MUTED }}>
              <span className="text-xs tracking-widest uppercase">🛵 Takeaway Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Concept */}
      <section id="concept" className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>The Concept</p>
              <h2 className="text-4xl font-black mb-6 leading-tight">Bangkok Technique.<br />Cork Ingredients.<br />Carrigtwohill Tables.</h2>
              <p className="leading-relaxed mb-4" style={{ color: MUTED }}>Thairish started with a question: what happens when authentic Thai cooking meets the finest East Cork produce? The answer fills our menu every night. Irish beef in a Massaman curry. East Cork prawns in a Tom Yum.</p>
              <p className="leading-relaxed" style={{ color: MUTED }}>We don't compromise on either tradition. The Thai techniques are real. The Irish ingredients are local. The result is the most unique dining experience in East Cork.</p>
            </div>
            <div className="flex flex-col gap-4">
              {[["🌿", "Fresh Thai Herbs", "Imported weekly"], ["🥩", "Irish Beef", "East Cork sourced"], ["🔥", "Wok Cooking", "Authentic high-heat"], ["🛵", "Takeaway", "Order by phone"]].map(([icon, title, sub], i) => (
                <div key={i} className="p-4 rounded-sm flex gap-4 items-start" style={{ background: `rgba(122,184,122,0.05)`, border: "1px solid rgba(122,184,122,0.1)" }}>
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu — with images */}
      <section id="menu" className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>The Menu</p>
            <h2 className="text-4xl font-black">Eat Well.</h2>
          </div>
          <div className="flex mb-10" style={{ border: "1px solid rgba(122,184,122,0.15)" }}>
            {[["small", "Small Plates"], ["large", "Large Plates"], ["sides", "Sides"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveCategory(key)} className="flex-1 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300" style={activeCategory === key ? { background: GREEN, color: DARK, fontWeight: 700 } : { color: MUTED }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {menuItems[activeCategory].map((item, i) => (
              <div key={i} style={{ background: DARK2, borderRadius: 4, overflow: "hidden", border: "1px solid rgba(122,184,122,0.08)" }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: TEXT, margin: 0 }}>{item.name}</h3>
                    <span style={{ color: GREEN, fontWeight: 800, fontSize: 16, whiteSpace: "nowrap" }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginTop: 6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs tracking-widest uppercase mt-10" style={{ color: MUTED2 }}>Vegan options available · Gluten-free on request · Takeaway Welcome</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6" style={{ background: DARK2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: GREEN }}>Our Food</p>
            <h2 className="text-4xl font-black">Gallery</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} className="tr-gallery-grid">
            {galleryImages.map((g, i) => (
              <div key={i} onClick={() => setLightbox(g)} style={{ position: "relative", overflow: "hidden", aspectRatio: "1", cursor: "pointer", borderRadius: 4 }}>
                <img src={g.url} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s", filter: "brightness(0.75)" }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.06)"; e.target.style.filter = "brightness(0.95)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.filter = "brightness(0.75)"; }} />
                <div style={{ position: "absolute", bottom: 10, left: 12, color: TEXT, fontSize: 11, fontWeight: 600 }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(6,10,7,0.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: TEXT, fontSize: 32, cursor: "pointer" }}>✕</button>
          <img src={lightbox.url} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }} />
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-24 px-6" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>Opening Hours</p>
            <div className="space-y-3">
              {[["Monday", "Closed"], ["Tuesday – Thursday", "17:00 – 22:00"], ["Friday & Saturday", "13:00 – 22:30"], ["Sunday", "13:00 – 21:00"]].map(([day, time], i) => (
                <div key={i} className="flex justify-between pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span className="text-sm" style={{ color: MUTED }}>{day}</span>
                  <span className="text-sm font-semibold" style={{ color: time === "Closed" ? MUTED2 : TEXT }}>{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded" style={{ background: `rgba(122,184,122,0.06)`, border: "1px solid rgba(122,184,122,0.12)" }}>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GREEN }}>🛵 Takeaway Available</p>
              <p className="text-sm" style={{ color: MUTED }}>Call us to order takeaway during opening hours.</p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>Visit Us</p>
            <div className="space-y-5 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: MUTED2 }}>Location</p>
                <p style={{ color: TEXT }}>Main Street, Carrigtwohill, Co. Cork</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: MUTED2 }}>Phone</p>
                <a href="tel:0214631839" style={{ color: TEXT }}>021 463 1839</a>
              </div>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453!2d-8.2330!3d51.9060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484469d3e5f31f3d%3A0x1!2sCarrigtwohill%2C+Co.+Cork!5e0!3m2!1sen!2sie!4v1"
                width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Thairish Location"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center" style={{ borderTop: "1px solid rgba(122,184,122,0.08)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: MUTED2 }}>© 2025 Thairish · Main Street, Carrigtwohill · Dine in & Takeaway</p>
      </footer>

      {/* Mobile nav */}
      <div className="tr-mobile-nav" style={{ display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(6,10,7,0.98)", borderTop: "1px solid rgba(122,184,122,0.15)" }}>
        {[["🏠","Home","concept"],["🍜","Menu","menu"],["🖼️","Gallery","gallery"],["📞","Call","tel:0214631839"],["📍","Visit","contact"]].map(([ic,lb,id])=>(
          <a key={id} href={id.startsWith("tel")?id:`#${id}`} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 12px", color:MUTED, textDecoration:"none", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", gap:4 }}>
            <span style={{ fontSize:18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>

      <style>{`
        .tr-gallery-grid { grid-template-columns: repeat(3,1fr) !important; }
        .tr-mobile-nav { display: none !important; }
        @media (max-width: 768px) {
          .tr-gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
          .tr-mobile-nav { display: flex !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>

      {/* Booking modal */}
      {showReservation && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(6,10,7,0.9)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16, backdropFilter: "blur(8px)" }} onClick={() => setShowReservation(false)}>
          <div style={{ background: DARK2, padding: 32, maxWidth: 440, width: "100%", borderTop: `3px solid ${GREEN}`, borderRadius: "8px 8px 0 0" }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: TEXT, marginBottom: 8 }}>Reserve a Table</h3>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Call us to book: <a href="tel:0214631839" style={{ color: GREEN, fontWeight: 700 }}>021 463 1839</a></p>
            <p style={{ color: MUTED2, fontSize: 13, marginBottom: 20 }}>Tue–Thu: 17:00–22:00 · Fri–Sat: 13:00–22:30 · Sun: 13:00–21:00</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="tel:0214631839" style={{ flex: 1, background: GREEN, color: DARK, padding: "14px", textAlign: "center", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>📞 Call Now</a>
              <button onClick={() => setShowReservation(false)} style={{ padding: "14px 18px", background: "none", border: `1px solid rgba(122,184,122,0.2)`, color: MUTED, cursor: "pointer", fontFamily: "inherit" }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
