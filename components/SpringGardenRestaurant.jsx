"use client";

import { useState, useEffect } from "react";

export default function SpringGardenRestaurant() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("starters");
  const [showReservation, setShowReservation] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = {
    starters: [
      { name: "Prawn Crackers", desc: "House-made, sweet chilli dipping sauce", price: "€5" },
      { name: "Spring Rolls", desc: "Crispy vegetable, plum sauce", price: "€7" },
      { name: "Dim Sum Basket", desc: "Steamed pork & prawn dumplings, soy ginger", price: "€9" },
      { name: "Tom Yum Soup", desc: "Lemongrass, galangal, mushroom, prawns", price: "€8" },
    ],
    mains: [
      { name: "Peking Duck", desc: "Pancakes, hoisin, spring onion, cucumber", price: "€24" },
      { name: "Sweet & Sour Pork", desc: "Crispy battered, pineapple, peppers, fried rice", price: "€17" },
      { name: "Beef in Black Bean", desc: "Wok-fried with peppers, scallions", price: "€18" },
      { name: "Thai Green Curry", desc: "Coconut milk, baby aubergine, Thai basil", price: "€16" },
      { name: "Chow Mein", desc: "Egg noodles, your choice of protein, oyster sauce", price: "€15" },
    ],
    rice: [
      { name: "Egg Fried Rice", desc: "Wok-tossed, spring onion, light soy", price: "€4" },
      { name: "Yang Chow Rice", desc: "Prawn, char siu, egg, peas", price: "€7" },
      { name: "Steamed Jasmine Rice", desc: "Fragrant long grain", price: "€3" },
    ],
  };

  return (
    <div className="min-h-screen font-sans" style={{background:"#0a0306", color:"#f8e8e0"}}>
      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-md shadow-xl" : "py-6 bg-transparent"}`} style={scrolled ? {background:"rgba(10,3,6,0.95)"} : {}}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏮</span>
            <div>
              <h1 className="text-lg font-black tracking-wider uppercase" style={{color:"#f8e8e0"}}>Spring Garden</h1>
              <p className="text-xs tracking-[0.3em] font-light" style={{color:"#c9403a"}}>Chinese & Thai · Midleton</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{color:"#7a5a5a"}}>
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#contact" className="hover:text-white transition">Visit</a>
          </div>
          <button onClick={() => setShowReservation(true)} className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300" style={{borderColor:"#c9403a", color:"#c9403a"}}>
            Order / Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0daa7c084_generated_image.png" alt="Spring Garden" className="w-full h-full object-cover" style={{filter:"brightness(0.25) saturate(1.8)"}} />
        {/* Red lantern glow effect */}
        <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 30% 40%, rgba(180,40,20,0.35) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(220,80,20,0.25) 0%, transparent 50%), rgba(10,3,6,0.7)"}} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="mb-6 flex gap-4">
            {["🏮", "🏮", "🏮"].map((l, i) => <span key={i} className="text-3xl">{l}</span>)}
          </div>
          <p className="text-xs tracking-[0.6em] uppercase mb-4 font-light" style={{color:"#c9403a"}}>Midleton · Co. Cork</p>
          <h1 className="text-6xl md:text-8xl font-black mb-2 leading-none tracking-tight">Spring</h1>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight" style={{color:"#c9403a"}}>Garden</h1>
          <p className="text-xl font-light max-w-lg leading-relaxed mb-10" style={{color:"#c4a8a0"}}>
            Authentic Chinese & Thai cuisine. Wok-fired fresh. Midleton's home of Asian flavour since the beginning.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button onClick={() => setShowReservation(true)} className="px-8 py-4 text-sm tracking-[0.2em] uppercase font-bold transition" style={{background:"#c9403a", color:"#f8e8e0"}}>
              Reserve / Order
            </button>
            <a href="#menu" className="px-8 py-4 text-sm tracking-[0.2em] uppercase border transition" style={{borderColor:"rgba(255,255,255,0.25)", color:"#f8e8e0"}}>
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Story */}
      <section id="story" className="py-28 px-6" style={{background:"#0e0508"}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#c9403a"}}>Our Cuisine</p>
            <h2 className="text-4xl font-black mb-6 leading-tight">The Flavours of<br/>Two Great<br/>Traditions</h2>
            <p className="leading-relaxed mb-4" style={{color:"#7a5a5a"}}>Spring Garden has long been Midleton's destination for authentic Asian cooking. Our chefs bring genuine Cantonese and Thai techniques — high-heat wok cooking, fresh aromatics and time-honoured recipes that can't be rushed.</p>
            <p className="leading-relaxed" style={{color:"#7a5a5a"}}>Dine in or take away. Set menus for 2 or 4. Something for everyone — from the classic sweet & sour to our fragrant Peking duck.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[["🥟", "Dim Sum", "Steamed fresh"], ["🦆", "Peking Duck", "House specialty"], ["🍜", "Wok Noodles", "High-heat fired"], ["🫙", "Set Menus", "From €28 for 2"]].map(([icon, title, desc], i) => (
              <div key={i} className="p-5 rounded-sm" style={{background:"rgba(201,64,58,0.06)", border:"1px solid rgba(201,64,58,0.12)"}}>
                <span className="text-2xl block mb-2">{icon}</span>
                <p className="font-semibold text-sm">{title}</p>
                <p className="text-xs mt-1" style={{color:"#7a5a5a"}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 px-6" style={{background:"#0a0306"}}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#c9403a"}}>The Menu</p>
            <h2 className="text-4xl font-black">Wok Fresh.</h2>
          </div>
          <div className="flex mb-12" style={{border:"1px solid rgba(201,64,58,0.2)"}}>
            {[["starters","Starters"], ["mains","Mains"], ["rice","Rice"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveCategory(key)} className="flex-1 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300" style={activeCategory === key ? {background:"#c9403a", color:"#f8e8e0", fontWeight:700} : {color:"#7a5a5a"}}>
                {label}
              </button>
            ))}
          </div>
          <div className="space-y-0">
            {menu[activeCategory].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-6 group" style={{borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                <div className="flex-1 pr-8">
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#c9403a]" style={{color:"#f8e8e0"}}>{item.name}</h3>
                  <p className="text-sm mt-1 font-light" style={{color:"#5a3a3a"}}>{item.desc}</p>
                </div>
                <span className="font-bold shrink-0" style={{color:"#c9403a"}}>{item.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 text-center" style={{background:"rgba(201,64,58,0.06)", border:"1px solid rgba(201,64,58,0.12)"}}>
            <p className="text-sm font-semibold">Set Menu for 2 from €28 · Set Menu for 4 from €52</p>
            <p className="text-xs mt-1" style={{color:"#7a5a5a"}}>Collection & local delivery available nightly</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6" style={{background:"#0e0508"}}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#c9403a"}}>Opening Hours</p>
            <div className="space-y-3">
              {[["Monday", "Closed"], ["Tuesday – Thursday", "17:00 – 22:30"], ["Friday & Saturday", "16:00 – 23:00"], ["Sunday", "16:00 – 22:30"]].map(([day, time], i) => (
                <div key={i} className="flex justify-between pb-3" style={{borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                  <span className="text-sm" style={{color:"#7a5a5a"}}>{day}</span>
                  <span className="text-sm font-semibold" style={{color: time === "Closed" ? "#3a1a1a" : "#f8e8e0"}}>{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#c9403a"}}>Contact</p>
            <div className="space-y-5">
              {[["Location", "Main Street, Midleton, Co. Cork"], ["Phone", "021 463 2800"], ["Takeaway", "Collection & delivery available"]].map(([label, val], i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{color:"#3a1a1a"}}>{label}</p>
                  {label === "Phone" ? <a href="tel:0214632800" style={{color:"#f8e8e0"}}>{val}</a> : <p style={{color:"#f8e8e0"}}>{val}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{borderTop:"1px solid rgba(255,255,255,0.04)"}}>
        <p className="text-xs tracking-widest uppercase" style={{color:"#3a1a1a"}}>© 2025 Spring Garden Restaurant · Midleton, Co. Cork</p>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <button onClick={() => setShowReservation(true)} className="w-full py-4 font-bold tracking-[0.2em] uppercase text-sm" style={{background:"#c9403a", color:"#f8e8e0"}}>
          Order / Reserve
        </button>
      </div>

      {showReservation && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4" style={{background:"rgba(0,0,0,0.9)"}} onClick={() => setShowReservation(false)}>
          <div className="w-full max-w-md p-8 border" style={{background:"#0e0508", borderColor:"rgba(201,64,58,0.2)"}} onClick={e => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color:"#c9403a"}}>Reserve / Order</p>
            <h3 className="text-2xl font-bold mb-6">Book or Order</h3>
            <div className="space-y-4 mb-6">
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0a0306", borderColor:"rgba(255,255,255,0.08)", color:"#f8e8e0"}} placeholder="Your Name" />
              <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0a0306", borderColor:"rgba(255,255,255,0.08)", color:"#f8e8e0"}} placeholder="Phone" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0a0306", borderColor:"rgba(255,255,255,0.08)", color:"#f8e8e0"}} type="date" />
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0a0306", borderColor:"rgba(255,255,255,0.08)", color:"#f8e8e0"}} type="time" />
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 font-bold text-sm tracking-widest uppercase" style={{background:"#c9403a", color:"#f8e8e0"}}>Confirm</button>
              <button onClick={() => setShowReservation(false)} className="px-4 text-sm border" style={{borderColor:"rgba(255,255,255,0.08)", color:"#7a5a5a"}}>Cancel</button>
            </div>
            <p className="text-xs text-center mt-4" style={{color:"#3a1a1a"}}>Or call: <a href="tel:0214632800" style={{color:"#c9403a"}}>021 463 2800</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
