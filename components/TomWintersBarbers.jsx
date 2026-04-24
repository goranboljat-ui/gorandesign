"use client";
import { useState, useEffect } from "react";

const galleryImages = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f7976ae97_generated_image.png", caption: "The Art of the Hot Towel Shave" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b4438f707_generated_image.png", caption: "Classic Barbershop Atmosphere" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % galleryImages.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-72 md:h-96">
        {galleryImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
              <p className="text-white font-medium text-sm">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrent(p => (p - 1 + galleryImages.length) % galleryImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg">‹</button>
      <button onClick={() => setCurrent(p => (p + 1) % galleryImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg">›</button>
    </div>
  );
}

export default function TomWintersBarbers() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 bg-stone-900 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🪒</span>
          <div>
            <span className="text-xl font-bold text-white tracking-wide">Tom Winters</span>
            <span className="text-amber-400 text-sm font-medium block -mt-1 tracking-widest uppercase">Barbers</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-amber-400 transition">Services</a>
          <a href="#about" className="hover:text-amber-400 transition">About</a>
          <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </div>
        <a href="tel:0830914263" className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-400 transition">
          Book Now
        </a>
      </nav>

      {/* Hero */}
      <div className="relative h-[540px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f7976ae97_generated_image.png" alt="Tom Winters Barbers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 to-stone-900/20 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-2">Traditional Irish Barbershop</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Slow Down.<br/>Look Sharp.<br/>Feel Relaxed.</h1>
            <p className="text-gray-300 text-lg mb-8">Cork's home of the traditional hot towel shave. Unrushed. Unmatched. On North Main Street since the beginning.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0830914263" className="bg-amber-500 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition text-sm">
                📞 083 091 4263
              </a>
              <a href="https://booksy.com/en-ie/4301_tom-winters-barbers_barbers_52869_munster" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">
                Book Online
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <div>
                <p className="text-2xl font-black text-amber-400">4.9★</p>
                <p className="text-xs text-gray-400">154 Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-black text-amber-400">Cork</p>
                <p className="text-xs text-gray-400">City Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">Services & Prices</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✂️", name: "Gent's Haircut", price: "€20", desc: "Classic or modern style" },
              { icon: "🪒", name: "Hot Towel Shave", price: "€25", desc: "Traditional straight razor" },
              { icon: "✂️", name: "Cut & Beard Trim", price: "€30", desc: "Full grooming session" },
              { icon: "💈", name: "Skin Fade", price: "€22", desc: "With hot towel finish" },
              { icon: "👦", name: "Kids Cut", price: "€15", desc: "Under 12 years" },
              { icon: "🎁", name: "Gift Vouchers", price: "Any amount", desc: "Perfect gift for him" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-stone-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-amber-600 font-bold text-sm mb-1">{s.price}</p>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight: Hot Towel Shave */}
      <section className="py-16 px-6 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl block mb-6">🪒</span>
          <h2 className="text-3xl font-bold mb-4">The Traditional Hot Towel Shave</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Take some time to disconnect and truly relax. Our hot towel shave is an unrushed, old-school 
            experience using a straight razor, pre-shave oils, and a classic technique passed down through 
            generations of Irish barbers. It's not just a shave — it's an event.
          </p>
          <a href="tel:0830914263" className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition">
            Book Your Shave →
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">The Barbershop</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Space</h2>
          <Carousel />
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-100">
            {[
              ["Monday", "Closed"],
              ["Tuesday", "10:00 AM – 6:00 PM"],
              ["Wednesday", "10:00 AM – 6:00 PM"],
              ["Thursday", "10:00 AM – 6:00 PM"],
              ["Friday", "10:00 AM – 6:00 PM"],
              ["Saturday", "9:00 AM – 5:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-stone-50"} ${hours === "Closed" ? "text-gray-300" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span>
                <span className={hours === "Closed" ? "" : "text-amber-600 font-semibold"}>{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">💡 Appointments recommended — book online via Booksy</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-2">Find Us</p>
          <h2 className="text-3xl font-bold text-white mb-10">Contact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "📍", title: "Address", info: "104 North Main Street, Cork T12 K8XY" },
              { icon: "📞", title: "Phone", info: "083 091 4263" },
              { icon: "📅", title: "Bookings", info: "Via Booksy or call us" },
            ].map((c, i) => (
              <div key={i} className="bg-stone-800 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0830914263" className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition">📞 Call: 083 091 4263</a>
            <a href="https://booksy.com/en-ie/4301_tom-winters-barbers_barbers_52869_munster" target="_blank" rel="noopener noreferrer" className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">📅 Book Online</a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-500 text-center py-6 text-sm">
        <p>© 2025 Tom Winters Barbers · 104 North Main Street, Cork · All Rights Reserved</p>
      </footer>
    </div>
  );
}
