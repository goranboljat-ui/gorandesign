"use client";

export default function BakerssonCafe() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-amber-800 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥐</span>
          <div>
            <span className="text-xl font-bold text-white">The Baker's Son</span>
            <p className="text-amber-200 text-xs tracking-widest uppercase -mt-1">Artisan Bakery & Café</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-amber-200">
          <a href="#menu" className="hover:text-white transition">Menu</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="tel:0214631500" className="bg-white text-amber-800 px-4 py-2 rounded-full text-sm font-bold hover:bg-amber-50 transition">Visit Us</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0b7a4bc49_generated_image.png" alt="The Baker's Son" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 to-amber-800/20 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-amber-300 font-semibold tracking-widest uppercase text-sm mb-2">Midleton · Co. Cork</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Baked Fresh.<br/>Every Single<br/>Morning.</h1>
            <p className="text-amber-100 text-lg mb-8">Artisan breads, pastries, cakes and the best coffee in Midleton. Made with love, served with warmth. Come as you are.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214631500" className="bg-white text-amber-800 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition text-sm">📞 021 463 1500</a>
              <a href="#menu" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">🥐 See Menu</a>
            </div>
          </div>
        </div>
      </div>

      <section id="menu" className="py-16 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-2">Fresh Today</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What's On the Counter</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🍞", name: "Sourdough Loaf", desc: "Slow-fermented, stone-baked" },
              { icon: "🥐", name: "Butter Croissant", desc: "Flaky, buttery, fresh daily" },
              { icon: "☕", name: "Specialty Coffee", desc: "Barista-crafted, single origin" },
              { icon: "🥪", name: "Artisan Sandwiches", desc: "On house-made bread" },
              { icon: "🍰", name: "Cakes & Tarts", desc: "Baked fresh every morning" },
              { icon: "🥣", name: "Porridge & Granola", desc: "Hearty breakfast bowls" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-amber-100 text-left">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">🌿 Vegan & gluten-free options available daily.</p>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Labour of Love</h2>
          <p className="text-gray-500 text-lg leading-relaxed">The Baker's Son is Midleton's artisan bakery and café. Everything — from the sourdough to the cakes — is made in-house from scratch each morning. We believe great bread changes your day. Come in, slow down, and taste the difference that real baking makes.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
            {[["Monday", "7:30 AM – 4:00 PM"], ["Tuesday", "7:30 AM – 4:00 PM"], ["Wednesday", "7:30 AM – 4:00 PM"], ["Thursday", "7:30 AM – 4:00 PM"], ["Friday", "7:30 AM – 5:00 PM"], ["Saturday", "8:00 AM – 4:00 PM"], ["Sunday", "9:00 AM – 2:00 PM"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-amber-50"} text-gray-700`}>
                <span className="font-medium">{day}</span><span className="text-amber-700 font-semibold">{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-amber-600 text-sm mt-4 font-medium">🥐 Fresh bread & pastries sell out early — come early!</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-amber-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Find Us</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Address", info: "Main Street, Midleton, Co. Cork" }, { icon: "📞", title: "Phone", info: "021 463 1500" }, { icon: "🎂", title: "Custom Cakes", info: "Orders taken in-store" }].map((c, i) => (
              <div key={i} className="bg-amber-700 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-amber-200 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214631500" className="inline-block bg-white text-amber-800 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition text-lg">📞 021 463 1500</a>
        </div>
      </section>
      <footer className="bg-black text-gray-500 text-center py-6 text-sm"><p>© 2025 The Baker's Son · Midleton, Co. Cork · All Rights Reserved</p></footer>
    </div>
  );
}
