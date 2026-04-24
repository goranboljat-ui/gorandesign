"use client";

import { useState, useEffect } from "react";

export default function LuminousDental() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <div>
            <span className="text-xl font-bold text-blue-600">Luminous Dental</span>
            <p className="text-gray-400 text-xs tracking-widest uppercase -mt-1">Carrigtwohill · Cork</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-500 transition">Services</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
        <a href="tel:0214882555" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">Book Now</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/be5d8cf30_generated_image.png" alt="Luminous Dental" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/20 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-blue-200 font-semibold tracking-widest uppercase text-sm mb-2">Carrigtwohill · East Cork</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Your Smile,<br/>Our Passion.</h1>
            <p className="text-blue-100 text-lg mb-8">Comprehensive dental care for the whole family. Modern technology. Gentle, caring approach. Accepting new patients now.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214882555" className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition text-sm">📞 Book Appointment</a>
              <a href="#services" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">Our Services</a>
            </div>
            <div className="mt-8 bg-green-500/20 border border-green-400/40 rounded-xl px-4 py-2 inline-block">
              <p className="text-green-300 text-sm font-semibold">✅ Now Accepting New Patients</p>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">Dental Services</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Complete Dental Care</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🦷", name: "Check-up & Clean", desc: "Routine examination & hygiene" },
              { icon: "✨", name: "Teeth Whitening", desc: "Professional whitening treatment" },
              { icon: "🔧", name: "Fillings", desc: "White composite fillings" },
              { icon: "👑", name: "Crowns & Bridges", desc: "Restorative dental work" },
              { icon: "😁", name: "Invisalign", desc: "Clear teeth straightening" },
              { icon: "🆘", name: "Emergency", desc: "Same-day emergency care" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-blue-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-100 border border-blue-200 rounded-2xl px-6 py-4 inline-block">
            <p className="text-blue-800 font-semibold">💳 PRSI & Medical Card Welcome · Payment Plans Available</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Gentle, Modern Dentistry</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">At Luminous Dental in Carrigtwohill, we believe everyone deserves a healthy, confident smile. Our friendly team uses the latest technology to provide comfortable, high-quality dental care for patients of all ages. We take the time to listen, explain, and ensure you feel at ease.</p>
          <div className="flex justify-center gap-10 mt-8">
            {[["10+", "Years Experience"], ["2000+", "Happy Patients"], ["✅", "PRSI Accepted"]].map(([num, label], i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-blue-500">{num}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-blue-50 rounded-2xl overflow-hidden border border-blue-100">
            {[["Monday", "8:30 AM – 5:30 PM"], ["Tuesday", "8:30 AM – 5:30 PM"], ["Wednesday", "8:30 AM – 5:30 PM"], ["Thursday", "8:30 AM – 7:00 PM"], ["Friday", "8:30 AM – 5:00 PM"], ["Saturday", "9:00 AM – 1:00 PM"], ["Sunday", "Closed"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-blue-50"} ${hours === "Closed" ? "text-gray-300" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span>
                <span className={hours === "Closed" ? "" : "text-blue-600 font-semibold"}>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Book Your Appointment</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Address", info: "Main Street, Carrigtwohill, Co. Cork" }, { icon: "📞", title: "Phone", info: "021 488 2555" }, { icon: "🦷", title: "Emergency", info: "Same-day appointments available" }].map((c, i) => (
              <div key={i} className="bg-blue-500 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-blue-100 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214882555" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition text-lg">📞 Call: 021 488 2555</a>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-500 text-center py-6 text-sm"><p>© 2025 Luminous Dental · Carrigtwohill, Co. Cork · All Rights Reserved</p></footer>
    </div>
  );
}
