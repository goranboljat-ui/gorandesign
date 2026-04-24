"use client";
import { useState, useEffect, useRef } from "react";

const galleryImages = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/325d97656_generated_image.png", caption: "Our Refill Shop" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9db013077_generated_image.png", caption: "Bring Your Own Container" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7bc93af9d_generated_image.png", caption: "Delicious Açaí Bowls" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/78a8e6e75_generated_image.png", caption: "Quality Products" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % galleryImages.length), 4000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setCurrent(p => (p - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent(p => (p + 1) % galleryImages.length);
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl">
      <div className="relative h-64 md:h-80">
        {galleryImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-5 py-4">
              <p className="text-white text-sm font-medium">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg text-stone-700 transition">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg text-stone-700 transition">›</button>
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {galleryImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "bg-green-400 w-4" : "bg-white/60 w-1.5"}`} />
        ))}
      </div>
    </div>
  );
}

function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </div>
  );
}

const reviews = [
  { text: "Great store, highly recommend! Love the zero waste concept.", author: "Aoife R.", stars: 5 },
  { text: "Amazing açaí bowls and such a friendly atmosphere. Will be back!", author: "Ciarán M.", stars: 5 },
  { text: "Great to refill my own container and help the environment. Brilliant idea!", author: "Sarah L.", stars: 5 },
];

const products = [
  { icon: "🌾", name: "Grains & Pasta" },
  { icon: "🥜", name: "Nuts & Seeds" },
  { icon: "☕", name: "Coffee & Tea" },
  { icon: "🫙", name: "Oils & Liquids" },
  { icon: "🧹", name: "Eco Household" },
  { icon: "🧴", name: "Body Care" },
  { icon: "🫐", name: "Açaí Bowls" },
  { icon: "🌿", name: "Herbs & Spices" },
];

export default function EarthWayRefill() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] font-sans pb-16">

      {/* Nav */}
      <nav className="flex items-center justify-between px-5 py-4 bg-[#f7f4ef]/95 backdrop-blur shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="text-lg font-bold text-green-800 tracking-wide">EarthWay Refill</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
          <a href="#how-it-works" className="hover:text-green-700 transition">How It Works</a>
          <a href="#products" className="hover:text-green-700 transition">Products</a>
          <a href="#reviews" className="hover:text-green-700 transition">Reviews</a>
          <a href="#visit" className="hover:text-green-700 transition">Visit Us</a>
        </div>
        <a href="tel:+353851609721" className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition">
          📞 Call Us
        </a>
      </nav>

      {/* Hero */}
      <div className="relative h-[540px] md:h-[600px] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/325d97656_generated_image.png"
          alt="EarthWay Refill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/75 via-green-900/50 to-transparent flex items-center px-8 md:px-16">
          <div className="text-white max-w-xl">
            <p className="text-green-300 text-xs font-semibold tracking-widest uppercase mb-3">Midleton, Co. Cork 🇮🇪</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Refill. Reuse.<br />
              <span className="text-green-300">Rethink Your Shopping.</span>
            </h1>
            <p className="text-green-100 text-base leading-relaxed mb-8">
              Midleton's zero-waste refill store for food, home, and lifestyle essentials. Bring your own container and make a difference. 🌍
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#visit" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm">
                📍 Visit Us
              </a>
              <a href="#how-it-works" className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition text-sm">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <FadeIn className="w-full md:w-1/2">
            <img
              src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9db013077_generated_image.png"
              alt="Refill your containers"
              className="w-full rounded-3xl shadow-lg object-cover h-72"
            />
          </FadeIn>
          <FadeIn className="w-full md:w-1/2">
            <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">Our Story</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Shopping That's Good for the Planet</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              EarthWay Refill was born from a simple belief — that everyday shopping shouldn't cost the Earth. 
              We created a space in Midleton where you can bring your own containers, buy exactly what you need, 
              and skip the plastic entirely.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              From grains and seeds to eco household products and delicious açaí bowls — everything here is chosen with care for you and the environment. 🌿
            </p>
            <div className="flex gap-8 mt-8">
              {[["Zero", "Plastic Waste"], ["100%", "Eco Products"], ["Local", "Community"]].map(([num, label], i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-green-700">{num}</p>
                  <p className="text-stone-400 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-5 bg-[#f7f4ef]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">Simple as 1-2-3</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-12">How It Works</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "🫙", title: "Bring Your Containers", desc: "Grab your jars, bottles, or bags from home. Any container works — we'll weigh it for you!" },
              { step: "2", icon: "🌾", title: "Fill What You Need", desc: "Choose from hundreds of products. Take as little or as much as you want — no packaging waste." },
              { step: "3", icon: "⚖️", title: "Weigh & Pay", desc: "We weigh your filled containers and charge you only for what you take. Simple, fair, eco." },
            ].map((s, i) => (
              <FadeIn key={i}>
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow">{s.step}</div>
                  <div className="text-5xl mb-4 mt-3">{s.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">What We Stock</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Our Products</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <FadeIn key={i}>
                <div className="bg-[#f7f4ef] rounded-2xl p-6 hover:bg-green-50 hover:shadow-md transition cursor-default">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <p className="font-semibold text-stone-700 text-sm">{p.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 bg-green-50 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6">
              <img
                src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7bc93af9d_generated_image.png"
                alt="Açaí Bowl"
                className="w-full md:w-48 h-36 object-cover rounded-2xl shadow"
              />
              <div className="text-left">
                <h3 className="font-bold text-green-800 text-lg mb-2">🫐 Try Our Açaí Bowls!</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Freshly made açaí bowls loaded with toppings — a customer favourite! Nutritious, delicious, and made with love.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-5 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-green-300 font-semibold tracking-widest uppercase text-xs mb-2">Why EarthWay</p>
            <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "♻️", title: "Zero Waste", desc: "No single-use plastic, ever" },
              { icon: "✅", title: "Quality Products", desc: "Carefully selected, ethically sourced" },
              { icon: "🏘️", title: "Local & Ethical", desc: "Supporting our community" },
              { icon: "😊", title: "Friendly Team", desc: "Always happy to help" },
            ].map((w, i) => (
              <FadeIn key={i}>
                <div className="bg-green-700/50 rounded-2xl p-6 hover:bg-green-700 transition">
                  <div className="text-4xl mb-3">{w.icon}</div>
                  <h3 className="font-bold mb-1 text-sm">{w.title}</h3>
                  <p className="text-green-200 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-5 bg-[#f7f4ef]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">Happy Customers</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">What People Say</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <FadeIn key={i}>
                <div className="bg-white rounded-3xl p-6 shadow-sm text-left hover:shadow-md transition">
                  <div className="flex text-green-500 mb-3 text-lg">{"⭐".repeat(r.stars)}</div>
                  <p className="text-stone-600 text-sm italic leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-stone-400 text-xs font-semibold">— {r.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">Gallery</p>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">A Peek Inside</h2>
          </FadeIn>
          <Carousel />
        </div>
      </section>

      {/* Visit Us */}
      <section id="visit" className="py-16 px-5 bg-[#f7f4ef]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-green-600 font-semibold tracking-widest uppercase text-xs mb-2">Come Say Hello</p>
              <h2 className="text-3xl font-bold text-stone-800">Visit Us</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <FadeIn>
              <div className="rounded-3xl overflow-hidden shadow-md h-72 md:h-full min-h-64">
                <iframe
                  title="EarthWay Refill Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0!2d-8.1723!3d51.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEarthWay+Refill+Midleton!5e0!3m2!1sen!2sie!4v1617000000000!5m2!1sen!2sie"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "260px" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </FadeIn>
            {/* Info */}
            <FadeIn>
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h3 className="font-bold text-stone-800 mb-4 text-lg">⏰ Opening Hours</h3>
                  {[
                    ["Monday", "Closed"],
                    ["Tuesday", "10:00 – 18:30"],
                    ["Wednesday", "10:00 – 18:30"],
                    ["Thursday", "10:00 – 18:30"],
                    ["Friday", "10:00 – 18:30"],
                    ["Saturday", "09:00 – 18:30"],
                    ["Sunday", "Closed"],
                  ].map(([day, hrs], i) => (
                    <div key={i} className={`flex justify-between py-2 text-sm border-b border-stone-100 last:border-0 ${hrs === "Closed" ? "text-stone-300" : "text-stone-600"}`}>
                      <span className="font-medium">{day}</span>
                      <span>{hrs}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs text-stone-400 font-semibold uppercase mb-1">📍 Address</p>
                      <p className="text-stone-600 text-sm">3 Main Street, Midleton, Co. Cork, P25 R1W9</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 font-semibold uppercase mb-1">📞 Phone</p>
                      <a href="tel:+353851609721" className="text-green-700 font-semibold text-sm hover:underline">+353 85 160 9721</a>
                    </div>
                    <a
                      href="https://maps.google.com/?q=EarthWay+Refill+3+Main+Street+Midleton+Cork"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 bg-green-700 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-green-800 transition text-center"
                    >
                      📌 Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-5 bg-green-700 text-white text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-3">Come Visit Us in Midleton! 🌱</h2>
          <p className="text-green-200 mb-2 text-sm">Every refill makes a difference. Join our community of conscious shoppers.</p>
          <p className="text-green-300 text-sm italic mb-8">Bring your own container next time 🌿</p>
          <a href="tel:+353851609721" className="inline-block bg-white text-green-800 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition text-sm">
            📞 Call Us Now
          </a>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-10 text-center px-5">
        <p className="text-xl font-bold mb-1">🌱 EarthWay Refill</p>
        <p className="text-stone-400 text-sm mb-4">3 Main Street, Midleton, Co. Cork</p>
        <p className="text-stone-500 text-xs italic">"Bring your own container next time 🌱"</p>
        <p className="text-stone-600 text-xs mt-4">© 2026 EarthWay Refill. All rights reserved.</p>
      </footer>

      {/* Sticky Bottom Nav (Mobile) */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-stone-200 flex md:hidden z-50">
        <a href="#products" className="flex-1 flex flex-col items-center py-3 text-stone-500 hover:text-green-700 transition text-xs gap-1">
          <span className="text-lg">🌾</span> Products
        </a>
        <a
          href="https://maps.google.com/?q=EarthWay+Refill+3+Main+Street+Midleton+Cork"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center py-3 text-stone-500 hover:text-green-700 transition text-xs gap-1"
        >
          <span className="text-lg">📍</span> Directions
        </a>
        <a href="tel:+353851609721" className="flex-1 flex flex-col items-center py-3 text-stone-500 hover:text-green-700 transition text-xs gap-1">
          <span className="text-lg">📞</span> Call
        </a>
      </div>
    </div>
  );
}
