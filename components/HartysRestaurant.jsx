"use client";
import { useState, useEffect } from "react";

export default function HartysRestaurant() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("lunch");
  const [showReservation, setShowReservation] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = {
    lunch: [
      { name: "Farmhouse Soup", desc: "Daily vegetable broth, crusty brown bread", price: "€8" },
      { name: "Club Sandwich", desc: "Grilled chicken, bacon, tomato, toasted sourdough", price: "€13" },
      { name: "Caesar Salad", desc: "Baby gem, parmesan crisp, anchovy dressing", price: "€12" },
      { name: "Harty's Burger", desc: "Irish beef, smoked cheddar, pickled onion, fries", price: "€15" },
    ],
    dinner: [
      { name: "Pan-Seared Salmon", desc: "Lemon butter sauce, crushed herbs, seasonal greens", price: "€22" },
      { name: "Irish Beef Sirloin", desc: "8oz, peppercorn sauce, hand-cut chips", price: "€27" },
      { name: "Chicken Supreme", desc: "Roast garlic cream, wild mushroom, duchess potato", price: "€20" },
      { name: "Lamb Shank", desc: "Slow braised, rosemary jus, colcannon", price: "€24" },
    ],
    desserts: [
      { name: "Sticky Toffee Pudding", desc: "Butterscotch sauce, clotted cream", price: "€8" },
      { name: "Crème Brûlée", desc: "Madagascan vanilla, shortbread", price: "€8" },
      { name: "Irish Cheese Selection", desc: "Ardrahan, Coolea, Waterloo, chutney", price: "€12" },
    ],
  };

  return (
    <div className="min-h-screen font-sans" style={{background:"#0c0b09", color:"#f5f0e8"}}>
      {/* Nav */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0c0b09]/95 backdrop-blur-md py-3 shadow-lg" : "py-6 bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight" style={{color:"#f5f0e8"}}>Harty's</h1>
            <p className="text-xs tracking-[0.3em] uppercase font-light" style={{color:"#b8976a"}}>Restaurant · Midleton</p>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase" style={{color:"#9a8f82"}}>
            <a href="#story" className="hover:text-white transition">Story</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <button onClick={() => setShowReservation(true)} className="hidden md:block text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 hover:bg-[#b8976a] hover:border-[#b8976a] hover:text-black" style={{borderColor:"#b8976a", color:"#b8976a"}}>
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-screen overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/67319c813_generated_image.png" alt="Harty's Restaurant" className="w-full h-full object-cover" style={{filter:"brightness(0.35) sepia(0.3)"}} />
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(12,11,9,0.2) 0%, transparent 40%, rgba(12,11,9,0.9) 100%)"}} />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-20">
          <p className="text-xs tracking-[0.5em] uppercase mb-4 font-light" style={{color:"#b8976a"}}>Midleton · Co. Cork</p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none mb-6" style={{color:"#f5f0e8"}}>Harty's.</h1>
          <p className="text-lg md:text-xl font-light max-w-md leading-relaxed mb-10" style={{color:"#9a8f82"}}>
            Honest cooking. Generous portions. The kind of restaurant Midleton has always deserved.
          </p>
          <button onClick={() => setShowReservation(true)} className="text-sm tracking-[0.2em] uppercase px-8 py-4 font-semibold transition-all duration-300 hover:opacity-90" style={{background:"#b8976a", color:"#0c0b09"}}>
            Book Your Table
          </button>
        </div>
      </div>

      {/* Story */}
      <section id="story" className="py-28 px-6" style={{background:"#0f0e0b"}}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#b8976a"}}>The Kitchen</p>
            <h2 className="text-4xl font-black mb-6 leading-tight">Made with Real<br/>Ingredients. By<br/>Real People.</h2>
            <p className="leading-relaxed mb-4" style={{color:"#9a8f82"}}>Harty's was built on a simple philosophy — great food doesn't need to be complicated. We source from local Cork suppliers, cook with care, and serve with warmth. Family-run since the start, we treat every table like a guest in our home.</p>
            <p className="leading-relaxed" style={{color:"#9a8f82"}}>Whether it's a weekday lunch, a Sunday carvery or a special occasion dinner — Harty's delivers on every occasion.</p>
          </div>
          <div className="space-y-4">
            {[["🌿", "Locally Sourced"], ["🔥", "Cooked Fresh"], ["❤️", "Family Run"], ["🍷", "Great Value"]].map(([icon, label], i) => (
              <div key={i} className="flex items-center gap-4 border-b pb-4" style={{borderColor:"rgba(255,255,255,0.06)"}}>
                <span className="text-2xl">{icon}</span>
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 px-6" style={{background:"#0c0b09"}}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{color:"#b8976a"}}>What We Serve</p>
            <h2 className="text-4xl font-black">The Menu</h2>
          </div>
          <div className="flex border mb-12" style={{borderColor:"rgba(255,255,255,0.08)"}}>
            {Object.keys(menu).map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="flex-1 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300" style={activeCategory === cat ? {background:"#b8976a", color:"#0c0b09", fontWeight:700} : {color:"#9a8f82"}}>
                {cat}
              </button>
            ))}
          </div>
          <div className="space-y-0">
            {menu[activeCategory].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-6 group" style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <div className="flex-1 pr-8">
                  <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#b8976a]" style={{color:"#f5f0e8"}}>{item.name}</h3>
                  <p className="text-sm mt-1 font-light" style={{color:"#6b6259"}}>{item.desc}</p>
                </div>
                <span className="font-bold shrink-0" style={{color:"#b8976a"}}>{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs tracking-widest uppercase mt-10" style={{color:"#4a4440"}}>Sunday Carvery served 12–8pm</p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 text-center" style={{background:"#0f0e0b"}}>
        <div className="max-w-xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#b8976a"}}>From Our Guests</p>
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed" style={{color:"#c5b9a8"}}>
            "Generous portions, real flavours, and a team that makes you feel genuinely welcome. Harty's is Midleton at its best."
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6" style={{background:"#0c0b09"}}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#b8976a"}}>Opening Hours</p>
            <div className="space-y-3">
              {[["Tuesday – Thursday", "12:00 – 21:00"], ["Friday & Saturday", "12:00 – 22:00"], ["Sunday", "12:00 – 20:00 (Carvery)"], ["Monday", "Closed"]].map(([day, time], i) => (
                <div key={i} className="flex justify-between pb-3" style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                  <span className="text-sm" style={{color:"#9a8f82"}}>{day}</span>
                  <span className="text-sm font-semibold" style={{color:"#f5f0e8"}}>{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{color:"#b8976a"}}>Contact</p>
            <div className="space-y-5">
              {[["Location", "Main Street, Midleton, Co. Cork"], ["Phone", "021 463 2900"], ["Groups", "Private dining available — call to arrange"]].map(([label, val], i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{color:"#4a4440"}}>{label}</p>
                  {label === "Phone" ? <a href="tel:0214632900" className="hover:text-[#b8976a] transition" style={{color:"#f5f0e8"}}>{val}</a> : <p style={{color:"#f5f0e8"}}>{val}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center" style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <p className="text-xs tracking-widest uppercase" style={{color:"#4a4440"}}>© 2025 Harty's Restaurant · Midleton, Co. Cork</p>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <button onClick={() => setShowReservation(true)} className="w-full py-4 font-bold tracking-[0.2em] uppercase text-sm" style={{background:"#b8976a", color:"#0c0b09"}}>
          Book a Table
        </button>
      </div>

      {/* Modal */}
      {showReservation && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4" style={{background:"rgba(0,0,0,0.85)"}} onClick={() => setShowReservation(false)}>
          <div className="w-full max-w-md p-8 border" style={{background:"#111", borderColor:"rgba(255,255,255,0.08)"}} onClick={e => e.stopPropagation()}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color:"#b8976a"}}>Reservation</p>
            <h3 className="text-2xl font-bold mb-6">Book Your Table</h3>
            <div className="space-y-4 mb-6">
              <input className="w-full px-4 py-3 text-sm border outline-none transition" style={{background:"#0c0b09", borderColor:"rgba(255,255,255,0.1)", color:"#f5f0e8"}} placeholder="Your Name" />
              <input className="w-full px-4 py-3 text-sm border outline-none transition" style={{background:"#0c0b09", borderColor:"rgba(255,255,255,0.1)", color:"#f5f0e8"}} placeholder="Phone Number" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0c0b09", borderColor:"rgba(255,255,255,0.1)", color:"#f5f0e8"}} type="date" />
                <input className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0c0b09", borderColor:"rgba(255,255,255,0.1)", color:"#f5f0e8"}} type="time" />
              </div>
              <select className="w-full px-4 py-3 text-sm border outline-none" style={{background:"#0c0b09", borderColor:"rgba(255,255,255,0.1)", color:"#9a8f82"}}>
                <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 font-bold text-sm tracking-widest uppercase transition" style={{background:"#b8976a", color:"#0c0b09"}}>Confirm</button>
              <button onClick={() => setShowReservation(false)} className="px-4 text-sm border" style={{borderColor:"rgba(255,255,255,0.1)", color:"#9a8f82"}}>Cancel</button>
            </div>
            <p className="text-xs text-center mt-4" style={{color:"#4a4440"}}>Or call: <a href="tel:0214632900" style={{color:"#b8976a"}}>021 463 2900</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
