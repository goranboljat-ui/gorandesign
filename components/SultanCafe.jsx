"use client";

import { useState, useEffect } from "react";

export default function SultanCafe() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("mezze");
  const [showReservation, setShowReservation] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = {
    mezze: [
      { name: "Hummus Beiruti", desc: "Hand-blended chickpea, tahini, olive oil, pine nuts", price: "€8" },
      { name: "Fattoush", desc: "Crispy bread, tomato, cucumber, sumac dressing", price: "€9" },
      { name: "Falafel Plate", desc: "Crispy house-made, tzatziki, warm pita", price: "€10" },
      { name: "Mezze for Two", desc: "Hummus, falafel, tabbouleh, pita, olives", price: "€22" },
    ],
    mains: [
      { name: "Lamb Tagine", desc: "Slow-cooked Moroccan spices, couscous, preserved lemon", price: "€22" },
      { name: "Grilled Kofta", desc: "Spiced lamb mince, bulgur, pomegranate molasses", price: "€19" },
      { name: "Chicken Shawarma", desc: "Marinated overnight, garlic sauce, pickled turnip", price: "€18" },
      { name: "Vegetarian Tagine", desc: "Seven-vegetable, harissa, couscous", price: "€16" },
    ],
    desserts: [
      { name: "Knafeh", desc: "Shredded pastry, sweet cheese, rose water syrup", price: "€8" },
      { name: "Baklava Selection", desc: "Pistachio, walnut & cashew, honey", price: "€7" },
      { name: "Mint Tea", desc: "Moroccan mint, hand-poured at the table", price: "€4" },
    ],
  };

  return (
    <div className="min-h-screen font-sans" style={{background:"#08060a", color:"#f0e6d3"}}>
      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"}`} style={scrolled ? {background:"rgba(8,6,10,0.95)"} : {}}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌙</span>
            <div>
              <h1 className="text-xl font-black tracking-widest uppercase">Sultan</h1>
              <p className="text-xs tracking-[0.3em] font-light" style={{color:"#d4a853"}}>Café & Restaurant</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{color:"#8a7a6a"}}>
            <a href="#cuisine" className="hover:text-white transition">Cuisine</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#contact" className="hover:text-white transition">Find Us</a>
          </div>
          <button onClick={() => setShowReservation(true)} className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300" style={{borderColor:"#d4a853", color:"#d4a853"}} onMouseEnter={e => { e.target.style.background="#d4a853"; e.target.style.color="#08060a"; }} onMouseLeave={e => { e.target.style.background="transparent"; e.target.style.color="#d4a853"; }}>
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero — lantern-lit atmosphere */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/637205800_generated_image.png" alt="Sultan Cafe" className="w-full h-full object-cover" style={{filter:"brightness(0.3) saturate(1.4)"}} />
        <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(8,6,10,0.8) 0%, rgba(50,20,0,0.4) 50%, rgba(8,6,10,0.9) 100%)"}} />
        
        {/* Decorative Arabic pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle at 20% 50%, #d4a853 1px, transparent 1px), radial-gradient(circle at 80% 20%, #d4a853 1px, transparent 1px)", backgroundSize:"60px 60px"}} />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.6em] uppercase mb-6 font-light" style={{color:"#d4a853"}}>Lebanese · Moroccan · Tunisian</p>
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tight">Sultan</h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16" style={{background:"#d4a853"}} />
              <span style={{color:"#d4a853"}}>✦</span>
              <div className="h-px w-16" style={{background:"#d4a853"}} />
            </div>
            <p className="text-xl font-light max-w-md mx-auto leading-relaxed mb-10" style={{color:"#c4b09a"}}>
              A voyage to the Mediterranean. Penrose Wharf, Cork. Tuesday to Saturday.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setShowReservation(true)} className="px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold transition" style={{background:"#d4a853", color:"#08060a"}}>
                Reserve Tonight
              </button>
              <a href="#menu" className="px-8 py-4 text-sm tracking-[0.2em] uppercase border transition" style={{borderColor:"rgba(255,255,255,0.3)", color:"#f0e6d3"}}>
                View Menu
              </a>
            </div>
            <p className="text-xs mt-8 tracking-widest" style={{color:"#6b5a4a"}}>🍷 Bring Your Own Wine · No Corkage Fee</p>
          </div>
        </div>
      </div>

      {/* Cuisine Story */}
      <section id="cuisine" className="py-28 px-6" style={{background:"#0c0a0e"}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#d4a853"}}>Three Cuisines</p>
              <h2 className="text-4xl font-black mb-6 leading-tight">An Explosion<br/>of Flavour &<br/>Aroma</h2>
              <p className="leading-relaxed mb-4" style={{color:"#8a7a6a"}}>Sultan brings the ancient culinary traditions of Lebanon, Morocco and Tunisia to Cork. Each dish is a journey — warm spices, bright citrus, slow-cooked richness and fragrant herbs that transport you somewhere entirely different.</p>
              <p className="leading-relaxed" style={{color:"#8a7a6a"}}>Hidden on Penrose Wharf, we're Cork's best kept secret for those who know. Bring your own wine and stay for the night.</p>
              <div className="mt-8 px-4 py-3 border-l-2 inline-block" style={{borderColor:"#d4a853"}}>
                <p className="text-sm font-semibold">🍷 BYO Wine — always welcome, never charged</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["🧆", "🫕", "🥙", "🫙", "🌿", "🍋"].map((emoji, i) => (
                <div key={i} className="aspect-square flex items-center justify-center text-5xl rounded-sm" style={{background:"rgba(212,168,83,0.05)", border:"1px solid rgba(212,168,83,0.1)"}}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 px-6" style={{background:"#08060a"}}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#d4a853"}}>The Menu</p>
            <h2 className="text-4xl font-black mb-2">Taste the Journey</h2>
            <p className="text-sm" style={{color:"#6b5a4a"}}>All dishes made fresh. Halal options available.</p>
          </div>
          <div className="flex mb-12" style={{border:"1px solid rgba(212,168,83,0.2)"}}>
            {Object.keys(menu).map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="flex-1 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300" style={activeCategory === cat ? {background:"#d4a853", color:"#08060a", fontWeight:700} : {color:"#8a7a6a"}}>
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-0">
            {menu[activeCategory].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-6 group" style={{borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                <div className="flex-1 pr-8">
                  <h3 className="font-semibold text-lg transition-colors duration-300" style={{color:"#f0e6d3"}}>{item.name}</h3>
                  <p className="text-sm mt-1 font-light" style={{color:"#6b5a4a"}}>{item.desc}</p>
                </div>
                <span className="font-bold shrink-0" style={{color:"#d4a853"}}>{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs tracking-widest uppercase mt-10" style={{color:"#3a2a1a"}}>Please advise of any dietary requirements when booking</p>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="contact" className="py-28 px-6" style={{background:"#0c0a0e"}}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#d4a853"}}>When We Open</p>
            <div className="space-y-3">
              {[["Sunday & Monday", "Closed"], ["Tuesday – Saturday", "17:00 – 23:30"]].map(([day, time], i) => (
                <div key={i} className="flex justify-between pb-3" style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                  <span className="text-sm" style={{color:"#8a7a6a"}}>{day}</span>
                  <span className="text-sm font-semibold" style={{color: time === "Closed" ? "#3a2a1a" : "#f0e6d3"}}>{time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-sm" style={{background:"rgba(212,168,83,0.06)", border:"1px solid rgba(212,168,83,0.15)"}}>
              <p className="text-sm font-semibold" style={{color:"#d4a853"}}>🍷 Bring Your Own Wine</p>
              <p className="text-xs mt-1" style={{color:"#6b5a4a"}}>No corkage fee. Always.</p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#d4a853"}}>Find Sultan</p>
            <div className="space-y-5">
              {[["Location", "Penrose Wharf, Cork T23 PCX7"], ["Telephone", "089 214 9471"], ["Instagram", "@sultancafecork"]].map(([label, val], i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{color:"#3a2a1a"}}>{label}</p>
                  {label === "Telephone" ? <a href="tel:0892149471" className="transition" style={{color:"#f0e6d3"}}>{val}</a> : <p style={{color:"#f0e6d3"}}>{val}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <p className="text-xs tracking-widest uppercase" style={{color:"#3a2a1a"}}>© 2025 Sultan Café Restaurant · Penrose Wharf, Cork</p>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <button onClick={() => setShowReservation(true)} className="w-full py-4 font-bold tracking-[0.2em] uppercase text-sm" style={{background:"#d4a853", color:"#08060a"}}>
          Reserve Tonight
        </button>
      </div>

      {/* Modal */}
      {showReservation && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4" style={{background:"rgba(0,0,0,0.9)"}} onClick={() => setShowReservation(false)}>
          <div className="w-full max-w-md p-8 border" style={{background:"#0c0a0e", borderColor:"rgba(212,168,83,0.2)"}} onClick={e => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color:"#d4a853"}}>Reservation</p>
            <h3 className="text-2xl font-bold mb-6">Reserve Your Table</h3>
            <div className="space-y-4 mb-6">
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#08060a", borderColor:"rgba(255,255,255,0.08)", color:"#f0e6d3"}} placeholder="Your Name" />
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#08060a", borderColor:"rgba(255,255,255,0.08)", color:"#f0e6d3"}} placeholder="Phone" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#08060a", borderColor:"rgba(255,255,255,0.08)", color:"#f0e6d3"}} type="date" />
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#08060a", borderColor:"rgba(255,255,255,0.08)", color:"#f0e6d3"}} type="time" />
              </div>
              <select className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#08060a", borderColor:"rgba(255,255,255,0.08)", color:"#8a7a6a"}}>
                <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 font-bold text-sm tracking-widest uppercase" style={{background:"#d4a853", color:"#08060a"}}>Confirm</button>
              <button onClick={() => setShowReservation(false)} className="px-4 text-sm border" style={{borderColor:"rgba(255,255,255,0.08)", color:"#8a7a6a"}}>Cancel</button>
            </div>
            <p className="text-xs text-center mt-4" style={{color:"#3a2a1a"}}>Or call: <a href="tel:0892149471" style={{color:"#d4a853"}}>089 214 9471</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
