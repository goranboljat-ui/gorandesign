"use client";
import { useState, useEffect } from "react";

export default function PANCafe() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("day");
  const [showReservation, setShowReservation] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menus = {
    day: {
      label: "☀️ Daytime Café",
      accent: "#e8a830",
      items: [
        { name: "Single Origin Pour Over", desc: "Ethiopia Yirgacheffe — floral, citrus, long finish", price: "€5" },
        { name: "Avocado Toast", desc: "Sourdough, heritage tomato, whipped feta, microgreens", price: "€13" },
        { name: "Seasonal Grain Bowl", desc: "Farro, roast squash, tahini, pomegranate", price: "€14" },
        { name: "Baker's Basket", desc: "Two pastries, butter, house jam, coffee", price: "€11" },
      ]
    },
    night: {
      label: "🌙 Evening Dining",
      accent: "#9b6db5",
      items: [
        { name: "Burrata", desc: "Heirloom tomato, basil oil, aged balsamic", price: "€14" },
        { name: "Pan-Seared Halibut", desc: "Brown butter, capers, pea purée, samphire", price: "€28" },
        { name: "Aged Bavette Steak", desc: "Chimichurri, patatas bravas, dressed leaves", price: "€26" },
        { name: "Wild Mushroom Risotto", desc: "Arborio, truffle oil, grana padano, herbs", price: "€20" },
      ]
    }
  };

  const current = menus[time];

  return (
    <div className="min-h-screen font-sans transition-all duration-700" style={{background: time === "day" ? "#f9f5ef" : "#080610", color: time === "day" ? "#1a1208" : "#e8e0f0"}}>
      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-md shadow-md" : "py-6 bg-transparent"}`} style={scrolled ? {background: time === "day" ? "rgba(249,245,239,0.95)" : "rgba(8,6,16,0.95)"} : {}}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.3em] uppercase">PAN</h1>
            <p className="text-xs tracking-[0.3em] font-light" style={{color: current.accent}}>Café & Restaurant · Cork</p>
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{color: time === "day" ? "#8a7a5a" : "#6a5a8a"}}>
            <a href="#concept" className="hover:opacity-100 transition opacity-70">Concept</a>
            <a href="#menu" className="hover:opacity-100 transition opacity-70">Menu</a>
            <a href="#contact" className="hover:opacity-100 transition opacity-70">Visit</a>
          </div>
          <button onClick={() => setShowReservation(true)} className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300" style={{borderColor: current.accent, color: current.accent}}>
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0b7a4bc49_generated_image.png" alt="PAN Cafe" className="w-full h-full object-cover transition-all duration-700" style={{filter: time === "day" ? "brightness(0.5) saturate(1.2)" : "brightness(0.2) saturate(0.8) hue-rotate(240deg)"}} />
        <div className="absolute inset-0" style={{background: time === "day" ? "linear-gradient(to bottom, rgba(249,245,239,0.1), rgba(249,245,239,0.85))" : "linear-gradient(to bottom, rgba(8,6,16,0.3), rgba(8,6,16,0.9))"}} />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Day/Night toggle */}
          <div className="mb-10 flex items-center gap-1 rounded-full p-1" style={{background: time === "day" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.08)"}}>
            <button onClick={() => setTime("day")} className="px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-500 font-semibold" style={time === "day" ? {background:"#e8a830", color:"#1a1208"} : {color:"rgba(255,255,255,0.5)"}}>
              ☀️ Day
            </button>
            <button onClick={() => setTime("night")} className="px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-500 font-semibold" style={time === "night" ? {background:"#9b6db5", color:"#e8e0f0"} : {color: time === "day" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.5)"}}>
              🌙 Night
            </button>
          </div>

          <h1 className="text-8xl md:text-[120px] font-black tracking-tight mb-4 leading-none">PAN</h1>
          <p className="text-xs tracking-[0.5em] uppercase mb-6 font-light" style={{color: current.accent}}>Cork City · All Day</p>
          <p className="text-xl font-light max-w-md leading-relaxed mb-10" style={{color: time === "day" ? "#5a4a2a" : "#a090c0"}}>
            {time === "day" ? "Slow mornings, serious coffee, inspired food. Cork's best café by day." : "Intimate dining, thoughtful cooking, inspired wine. Cork's hidden restaurant by night."}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button onClick={() => setShowReservation(true)} className="px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold transition" style={{background: current.accent, color: time === "day" ? "#1a1208" : "#080610"}}>
              Reserve a Table
            </button>
            <a href="#menu" className="px-8 py-4 text-sm tracking-[0.2em] uppercase border transition" style={{borderColor:"rgba(128,128,128,0.4)", color: time === "day" ? "#1a1208" : "#e8e0f0"}}>
              Today's Menu
            </a>
          </div>
        </div>
      </div>

      {/* Concept */}
      <section id="concept" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color: current.accent}}>The Concept</p>
          <h2 className="text-4xl font-black mb-8">One Address.<br/>Two Experiences.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-sm" style={{background: time === "day" ? "rgba(232,168,48,0.08)" : "rgba(155,109,181,0.08)", border:`1px solid ${time === "day" ? "rgba(232,168,48,0.2)" : "rgba(155,109,181,0.2)"}`}}>
              <span className="text-4xl block mb-4">☀️</span>
              <h3 className="font-bold text-xl mb-3">The Café</h3>
              <p className="text-sm leading-relaxed" style={{color: time === "day" ? "#6a5a3a" : "#8a7aaa"}}>Specialty coffee, artisan pastries and light meals served in a calm, beautiful space. The ideal start to any Cork day.</p>
              <p className="text-xs uppercase tracking-widest mt-4" style={{color: current.accent}}>7:30 AM – 4:00 PM</p>
            </div>
            <div className="p-8 rounded-sm" style={{background: time === "day" ? "rgba(155,109,181,0.06)" : "rgba(155,109,181,0.12)", border:"1px solid rgba(155,109,181,0.2)"}}>
              <span className="text-4xl block mb-4">🌙</span>
              <h3 className="font-bold text-xl mb-3">The Restaurant</h3>
              <p className="text-sm leading-relaxed" style={{color: time === "day" ? "#6a5a3a" : "#8a7aaa"}}>As the city slows, PAN transforms. Intimate lighting, a focused menu and a wine list designed to match. Cork dining at its best.</p>
              <p className="text-xs uppercase tracking-widest mt-4" style={{color:"#9b6db5"}}>From 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 px-6" style={{background: time === "day" ? "#f3ede3" : "#060410"}}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color: current.accent}}>{current.label}</p>
            <h2 className="text-4xl font-black">Today's Menu</h2>
          </div>
          <div className="flex mb-4 rounded-sm overflow-hidden" style={{border:`1px solid ${time === "day" ? "rgba(232,168,48,0.2)" : "rgba(155,109,181,0.2)"}`}}>
            {Object.keys(menus).map(t => (
              <button key={t} onClick={() => setTime(t)} className="flex-1 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" style={time === t ? {background: menus[t].accent, color: t === "day" ? "#1a1208" : "#e8e0f0", fontWeight:700} : {color: time === "day" ? "#8a7a5a" : "#6a5a8a"}}>
                {t === "day" ? "☀️ Daytime" : "🌙 Evening"}
              </button>
            ))}
          </div>
          <div className="space-y-0">
            {current.items.map((item, i) => (
              <div key={i} className="flex items-start justify-between py-6 group" style={{borderBottom:`1px solid ${time === "day" ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)"}`}}>
                <div className="flex-1 pr-8">
                  <h3 className="font-semibold text-lg transition-colors duration-300" style={{color: time === "day" ? "#1a1208" : "#e8e0f0"}}>{item.name}</h3>
                  <p className="text-sm mt-1 font-light" style={{color: time === "day" ? "#8a7a5a" : "#6a5a8a"}}>{item.desc}</p>
                </div>
                <span className="font-bold shrink-0" style={{color: current.accent}}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color: current.accent}}>Hours</p>
            <div className="space-y-3">
              {[["Monday – Friday", "Café: 7:30 AM · Restaurant: from 6 PM"], ["Saturday", "Café: 8:00 AM · Restaurant: from 6 PM"], ["Sunday", "Café: 9:00 AM – 3:00 PM"]].map(([day, t], i) => (
                <div key={i} className="flex justify-between pb-3" style={{borderBottom:`1px solid ${time === "day" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.05)"}`}}>
                  <span className="text-sm" style={{color: time === "day" ? "#8a7a5a" : "#6a5a8a"}}>{day}</span>
                  <span className="text-sm font-semibold text-right ml-4">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color: current.accent}}>Find PAN</p>
            <div className="space-y-5">
              {[["Location", "Cork City Centre"], ["Phone", "021 463 7200"]].map(([label, val], i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{color: time === "day" ? "#c0b090" : "#3a2a5a"}}>{label}</p>
                  {label === "Phone" ? <a href="tel:0214637200">{val}</a> : <p>{val}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{borderTop:`1px solid ${time === "day" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.04)"}`}}>
        <p className="text-xs tracking-widest uppercase opacity-40">© 2025 PAN Café & Restaurant · Cork</p>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <button onClick={() => setShowReservation(true)} className="w-full py-4 font-bold tracking-[0.2em] uppercase text-sm transition-all duration-700" style={{background: current.accent, color: time === "day" ? "#1a1208" : "#080610"}}>
          Reserve a Table
        </button>
      </div>

      {showReservation && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4" style={{background:"rgba(0,0,0,0.85)"}} onClick={() => setShowReservation(false)}>
          <div className="w-full max-w-md p-8 border" style={{background: time === "day" ? "#f9f5ef" : "#0c0a18", borderColor:`${current.accent}40`}} onClick={e => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color: current.accent}}>Reservation</p>
            <h3 className="text-2xl font-bold mb-6">Book Your Table</h3>
            <div className="space-y-4 mb-6">
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background: time === "day" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", borderColor:"rgba(128,128,128,0.2)"}} placeholder="Your Name" />
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background: time === "day" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", borderColor:"rgba(128,128,128,0.2)"}} placeholder="Phone" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background: time === "day" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", borderColor:"rgba(128,128,128,0.2)"}} type="date" />
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background: time === "day" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", borderColor:"rgba(128,128,128,0.2)"}} type="time" />
              </div>
              <select className="w-full px-4 py-3 text-sm border outline-none" style={{background: time === "day" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)", borderColor:"rgba(128,128,128,0.2)"}}>
                <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 font-bold text-sm tracking-widest uppercase" style={{background: current.accent, color: time === "day" ? "#1a1208" : "#080610"}}>Confirm</button>
              <button onClick={() => setShowReservation(false)} className="px-4 text-sm border opacity-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
