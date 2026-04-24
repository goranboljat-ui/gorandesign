"use client";

export default function CaliWomensWear() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👗</span>
          <span className="text-xl font-bold text-rose-500 tracking-wide">Cali</span>
          <span className="text-gray-400 text-sm font-medium">Women's Wear</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#collections" className="hover:text-rose-500 transition">Collections</a>
          <a href="#about" className="hover:text-rose-500 transition">About</a>
          <a href="#contact" className="hover:text-rose-500 transition">Contact</a>
        </div>
        <a href="tel:0214632200" className="bg-rose-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rose-500 transition">Visit Us</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4ca473eee_generated_image.png" alt="Cali Women's Wear" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-rose-600/20 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-rose-200 font-semibold tracking-widest uppercase text-sm mb-2">Midleton · Co. Cork</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Style That's<br/>Made for You.</h1>
            <p className="text-rose-100 text-lg mb-8">Curated women's fashion for every occasion. Contemporary, affordable and always fresh. Your new favourite boutique in Midleton.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214632200" className="bg-rose-400 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-300 transition text-sm">📞 Visit Us Today</a>
              <a href="#collections" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">👗 View Collections</a>
            </div>
          </div>
        </div>
      </div>

      <section id="collections" className="py-16 px-6 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-rose-600 font-semibold tracking-widest uppercase text-sm mb-2">Current Collections</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">New Season Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "👗", name: "Casual Wear", desc: "Everyday effortless style" },
              { icon: "👔", name: "Workwear", desc: "Power dressing done right" },
              { icon: "🥂", name: "Evening & Occasion", desc: "For your special moments" },
              { icon: "🧥", name: "Outerwear", desc: "Coats, jackets & cardigans" },
              { icon: "👠", name: "Accessories", desc: "Bags, scarves & jewellery" },
              { icon: "🩴", name: "Footwear", desc: "The perfect finishing touch" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-rose-100 text-left">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rose-100 border border-rose-200 rounded-2xl px-6 py-4 inline-block">
            <p className="text-rose-800 font-semibold">🎁 Gift Vouchers Available In-Store</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Local Style Destination</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Cali Women's Wear is Midleton's favourite boutique for contemporary, wearable fashion. We hand-select every piece with real women in mind — stylish, comfortable, and great value. Whether you're updating your wardrobe or looking for that perfect outfit, our friendly team is here to help.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-rose-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-rose-100 shadow-sm">
            {[["Monday", "9:30 AM – 5:30 PM"], ["Tuesday", "9:30 AM – 5:30 PM"], ["Wednesday", "9:30 AM – 5:30 PM"], ["Thursday", "9:30 AM – 7:00 PM"], ["Friday", "9:30 AM – 6:00 PM"], ["Saturday", "9:30 AM – 5:30 PM"], ["Sunday", "Closed"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-rose-50"} ${hours === "Closed" ? "text-gray-300" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span><span className={hours === "Closed" ? "" : "text-rose-500 font-semibold"}>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-rose-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Address", info: "Main Street, Midleton, Co. Cork" }, { icon: "📞", title: "Phone", info: "021 463 2200" }, { icon: "🎁", title: "Gift Cards", info: "Available in-store, any amount" }].map((c, i) => (
              <div key={i} className="bg-rose-400 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-rose-100 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-500 text-center py-6 text-sm"><p>© 2025 Cali Women's Wear · Midleton, Co. Cork · All Rights Reserved</p></footer>
    </div>
  );
}
