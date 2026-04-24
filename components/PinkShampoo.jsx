"use client";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0461ba3a0_generated_image.png",
    caption: "Our Beautiful Salon"
  },
  {
    url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/60ae456e2_generated_image.png",
    caption: "Expert Hair Styling"
  },
  {
    url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/91f48d7e0_generated_image.png",
    caption: "Gorgeous Nail Art"
  },
  {
    url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ca67afd74_generated_image.png",
    caption: "Stunning Hair Colour"
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent(prev => (prev + 1) % galleryImages.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
      {/* Images */}
      <div className="relative h-72 md:h-96">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
              <p className="text-white font-medium text-sm">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow transition text-lg">‹</button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-9 h-9 flex items-center justify-center shadow transition text-lg">›</button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${i === current ? "bg-pink-400 w-4" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PinkShampoo() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💅</span>
          <span className="text-xl font-bold text-pink-600 tracking-wide">Pink Shampoo</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-pink-500 transition">Services</a>
          <a href="#about" className="hover:text-pink-500 transition">About</a>
          <a href="#gallery" className="hover:text-pink-500 transition">Gallery</a>
          <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
        </div>
        <a href="tel:0214639594" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition">
          Book Now
        </a>
      </nav>

      {/* Hero */}
      <div className="relative h-[520px] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0461ba3a0_generated_image.png"
          alt="Pink Shampoo Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 to-transparent flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-pink-200 font-medium mb-2 tracking-widest uppercase text-sm">Hair & Nails Salon</p>
            <h1 className="text-5xl font-bold mb-4 leading-tight">Look Good,<br/>Feel Amazing</h1>
            <p className="text-pink-100 text-lg mb-8">Professional hair & nail services in the heart of Midleton, Co. Cork.</p>
            <div className="flex gap-3">
              <a href="tel:0214639594" className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition text-sm">
                📞 Call to Book
              </a>
              <a href="#services" className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition text-sm">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✂️", name: "Haircut & Style", price: "From €25" },
              { icon: "🎨", name: "Hair Colouring", price: "From €55" },
              { icon: "💆", name: "Hair Treatment", price: "From €30" },
              { icon: "💅", name: "Manicure", price: "From €20" },
              { icon: "🦶", name: "Pedicure", price: "From €30" },
              { icon: "✨", name: "Gel Nails", price: "From €35" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{s.name}</h3>
                <p className="text-pink-500 font-medium text-sm">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Local Beauty Experts</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Pink Shampoo Hair & Nails is a friendly, welcoming salon located in Distillery Lane, Midleton. 
            We're passionate about making you look and feel your best — whether it's a fresh haircut, 
            a bold new colour, or a gorgeous set of nails. Our team is here to take care of you.
          </p>
          <div className="flex justify-center gap-10 mt-10">
            {[["10+", "Years Experience"], ["500+", "Happy Clients"], ["100%", "Satisfaction"]].map(([num, label], i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-pink-500">{num}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-2">Our Work</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Gallery</h2>
          <Carousel />
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Opening Hours</h2>
          <div className="bg-pink-50 rounded-2xl shadow-sm overflow-hidden">
            {[
              ["Monday", "9:00 AM – 6:00 PM"],
              ["Tuesday", "9:00 AM – 6:00 PM"],
              ["Wednesday", "9:00 AM – 6:00 PM"],
              ["Thursday", "9:00 AM – 8:00 PM"],
              ["Friday", "9:00 AM – 8:00 PM"],
              ["Saturday", "9:00 AM – 5:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-pink-50"} ${hours === "Closed" ? "text-gray-400" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Find Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📍", title: "Address", info: "Distillery Lane, Midleton, Co. Cork" },
              { icon: "📞", title: "Phone", info: "021 463 9594" },
              { icon: "🕐", title: "Hours", info: "Mon–Sat: 9AM–6PM" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214639594" className="inline-block mt-10 bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition text-lg">
            📞 Call Now to Book Your Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-8 text-center">
        <p className="text-2xl font-bold mb-1">💅 Pink Shampoo Hair & Nails</p>
        <p className="text-pink-200 text-sm">Distillery Lane, Midleton, Co. Cork</p>
        <p className="text-pink-300 text-xs mt-4">© 2026 Pink Shampoo. All rights reserved.</p>
      </footer>
    </div>
  );
}
