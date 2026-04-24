"use client";

export default function BailickBlinds() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-700 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🪟</span>
          <div>
            <span className="text-xl font-bold text-white">Bailick Blinds</span>
            <p className="text-slate-300 text-xs tracking-widest uppercase -mt-1">Made to Measure · East Cork</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="tel:0214633600" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-400 transition">Get a Quote</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 42px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 42px)"}}></div>
        <div className="relative z-10 text-white max-w-lg px-10">
          <p className="text-blue-300 font-semibold tracking-widest uppercase text-sm mb-2">Midleton · East Cork</p>
          <h1 className="text-5xl font-black mb-4 leading-tight">Perfect Blinds.<br/>Measured.<br/>Made. Fitted.</h1>
          <p className="text-slate-200 text-lg mb-8">East Cork's trusted blind and curtain specialists. Made-to-measure for every window, every style, every budget. Free home consultation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:0214633600" className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition text-sm">📞 Free Quote</a>
            <a href="#products" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">Our Products</a>
          </div>
          <p className="text-blue-300 text-sm mt-6 font-medium">🏠 Free Home Consultation Available</p>
        </div>
      </div>

      <section id="products" className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 font-semibold tracking-widest uppercase text-sm mb-2">What We Supply</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🪟", name: "Roller Blinds", desc: "Clean lines, easy operation" },
              { icon: "🎑", name: "Roman Blinds", desc: "Elegant fabric folds" },
              { icon: "🏠", name: "Venetian Blinds", desc: "Aluminium, wood or faux wood" },
              { icon: "🌙", name: "Blackout Blinds", desc: "Total darkness, perfect sleep" },
              { icon: "🎭", name: "Curtains & Drapes", desc: "Made to measure, any fabric" },
              { icon: "🔧", name: "Professional Fitting", desc: "Included with every order" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-slate-100 text-left">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4 inline-block">
            <p className="text-blue-800 font-semibold">🏠 Free In-Home Measurement & Quote · No Obligation</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">East Cork's Window Dressing Experts</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Bailick Blinds has been supplying and fitting high-quality made-to-measure blinds and curtains across East Cork and Midleton for years. We offer a full service — from free in-home consultation and measuring to supply and professional fitting. Quality products, honest pricing, local expertise.</p>
          <div className="flex justify-center gap-10 mt-10">
            {[["Free", "Home Consultation"], ["Made to", "Measure"], ["Fitted", "Professionally"]].map(([num, label], i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-blue-600">{num}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-slate-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Get Your Free Quote</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Area", info: "Midleton & East Cork" }, { icon: "📞", title: "Phone", info: "021 463 3600" }, { icon: "🏠", title: "Home Visit", info: "Free measurement & consultation" }].map((c, i) => (
              <div key={i} className="bg-slate-600 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-slate-300 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214633600" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition text-lg">📞 021 463 3600 — Free Quote</a>
        </div>
      </section>
      <footer className="bg-black text-gray-500 text-center py-6 text-sm"><p>© 2025 Bailick Blinds · Midleton, East Cork · All Rights Reserved</p></footer>
    </div>
  );
}
