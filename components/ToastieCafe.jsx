"use client";

import { useState, useEffect } from "react";

const galleryImages = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/583c721ca_generated_image.png", caption: "Crafted with love" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/657a7abdd_generated_image.png", caption: "Chicken Pesto Toastie" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7890be6b3_generated_image.png", caption: "Our cozy spot" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/c21fb358d_generated_image.png", caption: "Fresh every morning" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % galleryImages.length), 3500);
    return () => clearInterval(t);
  }, []);
  const prev = () => setCurrent(p => (p - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent(p => (p + 1) % galleryImages.length);
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      <div className="relative h-64 md:h-80">
        {galleryImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-3">
              <p className="text-white text-sm font-medium">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg text-gray-700 transition">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg text-gray-700 transition">›</button>
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {galleryImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "bg-amber-400 w-4" : "bg-white/60 w-1.5"}`} />
        ))}
      </div>
    </div>
  );
}

const reviews = [
  { text: "Hidden gem with amazing toasties — best lunch spot in Midleton!", author: "Sarah M.", stars: 5 },
  { text: "Best coffee in town, hands down. Staff are so friendly and welcoming.", author: "Ciarán D.", stars: 5 },
  { text: "Freshly made, quality ingredients. You can taste the difference!", author: "Emma K.", stars: 5 },
];

export default function ToastieCafe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f4] font-sans pb-20">

      {/* Nav */}
      <nav className="flex items-center justify-between px-5 py-4 bg-[#faf8f4] shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥪</span>
          <span className="text-lg font-bold text-amber-800 tracking-wide">Toastie Cafe</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
          <a href="#menu" className="hover:text-amber-700 transition">Menu</a>
          <a href="#about" className="hover:text-amber-700 transition">About</a>
          <a href="#reviews" className="hover:text-amber-700 transition">Reviews</a>
          <a href="#find-us" className="hover:text-amber-700 transition">Find Us</a>
        </div>
        <a href="tel:+353214630313" className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-800 transition">
          📞 Call Us
        </a>
      </nav>

      {/* Hero */}
      <div className="relative h-[500px] md:h-[580px] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/583c721ca_generated_image.png"
          alt="Toastie Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-amber-900/40 to-transparent flex items-center px-8 md:px-16">
          <div className="text-white max-w-lg">
            <p className="text-amber-200 text-sm font-semibold tracking-widest uppercase mb-3">Midleton, Co. Cork</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Crafted Toasties.<br/>Proper Coffee.<br/>
              <span className="text-amber-300">Local Love.</span>
            </h1>
            <p className="text-amber-100 text-base mb-8 leading-relaxed">
              A cozy, independent cafe on Main Street. Made fresh, served with a smile. 🧡
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition text-sm">
                View Menu
              </a>
              <a href="#find-us" className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition text-sm">
                Find Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🥪", title: "Freshly Made", desc: "Made to order, every time" },
            { icon: "🌿", title: "Local Ingredients", desc: "Sourced from nearby producers" },
            { icon: "😊", title: "Friendly Service", desc: "Like having lunch with a friend" },
            { icon: "♻️", title: "Eco Packaging", desc: "Good for you & the planet" },
          ].map((v, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-stone-800 text-sm mb-1">{v.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-14 px-5 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-2">What's On</p>
            <h2 className="text-3xl font-bold text-stone-800">Our Menu</h2>
          </div>

          {/* Toasties */}
          <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2"><span>🥪</span> Signature Toasties</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { name: "Chicken Pesto", desc: "Grilled chicken, fresh pesto, mozzarella, sun-dried tomatoes", price: "€9.50" },
              { name: "Classic Cheese & Ham", desc: "Mature cheddar, smoked ham, wholegrain mustard", price: "€8.00" },
              { name: "Brie & Cranberry", desc: "Creamy brie, cranberry sauce, rocket on sourdough", price: "€9.00" },
              { name: "Veg Delight", desc: "Roasted peppers, hummus, spinach, feta on multigrain", price: "€8.50" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-start gap-3">
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">{item.name}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-amber-700 font-bold text-sm whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Coffee & Pastries */}
          <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2"><span>☕</span> Coffee & Pastries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Flat White", price: "€3.50" },
              { name: "Cappuccino", price: "€3.50" },
              { name: "Americano", price: "€3.00" },
              { name: "Croissant", price: "€3.20" },
              { name: "Blueberry Muffin", price: "€3.00" },
              { name: "Homemade Soup", price: "€5.50" },
              { name: "Scone & Butter", price: "€2.80" },
              { name: "Daily Special", price: "Ask us!" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="font-semibold text-stone-800 text-sm mb-1">{item.name}</p>
                <p className="text-amber-600 font-bold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-14 px-5 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-2">What People Say</p>
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Reviews</h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-2xl font-bold text-amber-600">4.7</span>
            <div className="flex text-amber-400 text-xl">⭐⭐⭐⭐⭐</div>
            <span className="text-stone-400 text-sm">Google & Tripadvisor</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-left">
                <div className="flex text-amber-400 mb-3">{"⭐".repeat(r.stars)}</div>
                <p className="text-stone-600 text-sm italic leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-stone-400 text-xs font-semibold">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 px-5 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <img
            src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7890be6b3_generated_image.png"
            alt="Our cafe"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64"
          />
          <div>
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-2">Our Story</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">A Local Favourite</h2>
            <p className="text-stone-500 leading-relaxed text-sm mb-4">
              Toastie Cafe started with a simple idea — make honest, delicious food for the people of Midleton.
              We're a family-run spot on Main Street, and we put real care into every toastie, every cup of coffee,
              and every interaction with our customers.
            </p>
            <p className="text-stone-500 leading-relaxed text-sm">
              We source locally where we can, use eco-friendly packaging, and always greet you with a smile.
              Whether you're grabbing a quick lunch or settling in for a coffee, you're always welcome here. 🧡
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 px-5 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-2">Gallery</p>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">A Taste of What's Inside</h2>
          <Carousel />
        </div>
      </section>

      {/* Hours & Location */}
      <section id="find-us" className="py-14 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-xs mb-2">Come Visit</p>
            <h2 className="text-3xl font-bold text-stone-800">Find Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-bold text-stone-800 text-lg mb-4">⏰ Opening Hours</h3>
              {[
                ["Monday", "8:00 AM – 4:00 PM"],
                ["Tuesday", "8:00 AM – 4:00 PM"],
                ["Wednesday", "8:00 AM – 4:00 PM"],
                ["Thursday", "8:00 AM – 4:00 PM"],
                ["Friday", "8:00 AM – 4:00 PM"],
                ["Saturday", "9:00 AM – 3:00 PM"],
                ["Sunday", "Closed"],
              ].map(([day, hrs], i) => (
                <div key={i} className={`flex justify-between py-2 text-sm border-b border-amber-100 last:border-0 ${hrs === "Closed" ? "text-stone-300" : "text-stone-600"}`}>
                  <span className="font-medium">{day}</span>
                  <span>{hrs}</span>
                </div>
              ))}
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="font-bold text-stone-800 text-lg mb-4">📍 Location</h3>
                <p className="text-stone-500 text-sm leading-relaxed">80 Main Street, Midleton, Co. Cork, P25 CR98</p>
                <a
                  href="https://maps.google.com/?q=Toastie+Cafe+80+Main+St+Midleton+Cork"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-amber-700 font-semibold text-sm hover:underline"
                >
                  📌 Get Directions →
                </a>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="font-bold text-stone-800 text-lg mb-3">📞 Get in Touch</h3>
                <a href="tel:+353214630313" className="text-amber-700 font-semibold text-sm hover:underline">+353 21 463 0313</a>
                <p className="text-stone-400 text-xs mt-2">Quick stop for breakfast & lunch — no booking needed!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-5 bg-amber-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Grab a Toastie Today! 🥪</h2>
        <p className="text-amber-200 mb-8 text-sm">Fresh, honest food on Main Street, Midleton. We'd love to see you.</p>
        <a
          href="https://maps.google.com/?q=Toastie+Cafe+80+Main+St+Midleton+Cork"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-amber-800 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition text-sm"
        >
          📍 Visit Us Today
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 text-center">
        <p className="text-xl font-bold mb-1">🥪 Toastie Cafe</p>
        <p className="text-stone-400 text-sm">80 Main Street, Midleton, Co. Cork</p>
        <p className="text-stone-500 text-xs mt-4">© 2026 Toastie Cafe. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom Nav (Mobile) */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-stone-200 flex md:hidden z-50">
        <a href="#menu" className="flex-1 flex flex-col items-center py-3 text-stone-600 hover:text-amber-700 transition text-xs gap-1">
          <span className="text-lg">🥪</span> Menu
        </a>
        <a
          href="https://maps.google.com/?q=Toastie+Cafe+80+Main+St+Midleton+Cork"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center py-3 text-stone-600 hover:text-amber-700 transition text-xs gap-1"
        >
          <span className="text-lg">📍</span> Directions
        </a>
        <a href="tel:+353214630313" className="flex-1 flex flex-col items-center py-3 text-stone-600 hover:text-amber-700 transition text-xs gap-1">
          <span className="text-lg">📞</span> Call
        </a>
      </div>
    </div>
  );
}
