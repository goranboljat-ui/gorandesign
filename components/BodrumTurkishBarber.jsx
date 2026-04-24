"use client";

export default function BodrumTurkishBarber() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-red-900 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇹🇷</span>
          <div>
            <span className="text-xl font-bold text-white tracking-wide">Bodrum</span>
            <p className="text-red-300 text-xs tracking-widest uppercase -mt-1">Turkish Barber · Cork</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-red-200">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="tel:0214632700" className="bg-white text-red-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-50 transition">Book Now</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b43fb4f1c_generated_image.png" alt="Bodrum Turkish Barber" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 to-red-800/10 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-red-300 font-semibold tracking-widest uppercase text-sm mb-2">Cork City</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">The Art of<br/>the Turkish<br/>Barber.</h1>
            <p className="text-red-100 text-lg mb-8">Experience the legendary Turkish shave in Cork. Hot towel, straight razor, nose wax and face massage. The full treatment, every time.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214632700" className="bg-white text-red-900 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition text-sm">📞 Book Now</a>
              <a href="#services" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-16 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-700 font-semibold tracking-widest uppercase text-sm mb-2">Services</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">The Turkish Barber Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✂️", name: "Haircut", price: "€15" },
              { icon: "🪒", name: "Turkish Shave", price: "€20", highlight: true },
              { icon: "🔥", name: "Nose Wax", price: "€8" },
              { icon: "✂️", name: "Cut & Shave", price: "€30", highlight: true },
              { icon: "💆", name: "Face Massage", price: "€15" },
              { icon: "👦", name: "Kids Cut", price: "€12" },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl p-6 shadow-sm hover:shadow-md transition border ${s.highlight ? "bg-red-700 border-red-600" : "bg-white border-red-100"}`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className={`font-bold mb-1 ${s.highlight ? "text-white" : "text-gray-900"}`}>{s.name}</h3>
                <p className={`font-bold ${s.highlight ? "text-red-200" : "text-red-600"}`}>{s.price}</p>
                {s.highlight && <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full mt-2 inline-block">⭐ Most Popular</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-red-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">🔥 The Full Turkish Experience</h3>
          <p className="text-red-200 mb-4">Our signature hot towel straight razor shave includes pre-shave oil, foam, hot towel wrap, nose wax, face massage and aftershave splash. Pure luxury.</p>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentic Turkish Craft in Cork</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Bodrum Turkish Barber brings the traditional art of the Turkish barbershop to Cork. Our barbers are trained in the authentic techniques — straight razor shaves, hot towel treatments and the full face care ritual. It's not just a haircut, it's an experience.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-red-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-red-100 shadow-sm">
            {[["Monday", "9:00 AM – 7:00 PM"], ["Tuesday", "9:00 AM – 7:00 PM"], ["Wednesday", "9:00 AM – 7:00 PM"], ["Thursday", "9:00 AM – 7:00 PM"], ["Friday", "9:00 AM – 7:00 PM"], ["Saturday", "9:00 AM – 6:00 PM"], ["Sunday", "10:00 AM – 4:00 PM"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-red-50"} text-gray-700`}>
                <span className="font-medium">{day}</span><span className="text-red-700 font-semibold">{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">🚶 Walk-ins welcome · Booking recommended for weekends</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-red-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Find Us</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Address", info: "Cork City Centre" }, { icon: "📞", title: "Phone", info: "021 463 2700" }, { icon: "🪒", title: "Speciality", info: "Traditional Turkish shave & grooming" }].map((c, i) => (
              <div key={i} className="bg-red-800 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-red-300 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214632700" className="inline-block bg-white text-red-900 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition text-lg">📞 021 463 2700</a>
        </div>
      </section>
      <footer className="bg-black text-gray-500 text-center py-6 text-sm"><p>© 2025 Bodrum Turkish Barber · Cork · All Rights Reserved</p></footer>
    </div>
  );
}
