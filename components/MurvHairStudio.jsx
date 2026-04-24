"use client";
export default function MurvHairStudio() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💇</span>
          <div>
            <span className="text-xl font-bold text-purple-600">Murv's</span>
            <span className="text-gray-500 text-sm font-medium ml-1">Hair Studio</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-purple-500 transition">Services</a>
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
        </div>
        <a href="tel:0214632100" className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition">Book Now</a>
      </nav>

      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a2c57f4da_generated_image.png" alt="Murv's Hair Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/20 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-purple-200 font-semibold tracking-widest uppercase text-sm mb-2">Midleton · Co. Cork</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Your Hair,<br/>Your Way.</h1>
            <p className="text-purple-100 text-lg mb-8">A premium hair studio in Midleton. Colour, cuts, treatments and styling — all tailored to you. Book your transformation today.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214632100" className="bg-purple-500 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-400 transition text-sm">📞 Book an Appointment</a>
              <a href="#services" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-16 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-600 font-semibold tracking-widest uppercase text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✂️", name: "Cut & Blowdry", price: "From €35" },
              { icon: "🎨", name: "Full Colour", price: "From €60" },
              { icon: "✨", name: "Highlights", price: "From €65" },
              { icon: "💆", name: "Keratin Treatment", price: "From €80" },
              { icon: "👰", name: "Bridal Hair", price: "POA" },
              { icon: "🌊", name: "Balayage", price: "From €90" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-purple-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-purple-500 font-semibold text-sm">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Hair, Personal Touch</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Murv's Hair Studio is Midleton's premium destination for exceptional hair services. With years of experience and a passion for the craft, we specialise in colour transformations, precision cuts and restorative treatments. Every client is treated as an individual — no cookie-cutter results here.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-purple-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
            {[["Monday", "Closed"], ["Tuesday", "9:00 AM – 6:00 PM"], ["Wednesday", "9:00 AM – 6:00 PM"], ["Thursday", "9:00 AM – 7:00 PM"], ["Friday", "9:00 AM – 6:00 PM"], ["Saturday", "9:00 AM – 5:00 PM"], ["Sunday", "Closed"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-purple-50"} ${hours === "Closed" ? "text-gray-300" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span><span className={hours === "Closed" ? "" : "text-purple-600 font-semibold"}>{hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">📞 Appointments recommended</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Book Your Appointment</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[{ icon: "📍", title: "Address", info: "Midleton, Co. Cork" }, { icon: "📞", title: "Phone", info: "021 463 2100" }, { icon: "📅", title: "Bookings", info: "Call or message to book" }].map((c, i) => (
              <div key={i} className="bg-purple-500 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-purple-100 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214632100" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition text-lg">📞 021 463 2100</a>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-500 text-center py-6 text-sm"><p>© 2025 Murv's Hair Studio · Midleton, Co. Cork · All Rights Reserved</p></footer>
    </div>
  );
}
