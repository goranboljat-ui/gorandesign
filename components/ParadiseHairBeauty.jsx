"use client";
import { useState } from "react";

const galleryPhotos = [
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80", label: "Balayage & Colour" },
  { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80", label: "Blowdry & Styling" },
  { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80", label: "Gel Nails" },
  { url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80", label: "Lash Extensions" },
  { url: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=700&q=80", label: "Salon Vibes" },
  { url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=700&q=80", label: "Hair Treatments" },
  { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80", label: "Facial Care" },
  { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&q=80", label: "Eyebrow Shaping" },
];

export default function ParadiseHairBeauty() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <div>
            <span className="text-xl font-bold text-fuchsia-600">Paradise</span>
            <span className="text-gray-500 text-sm font-medium ml-1">Hair & Beauty</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-fuchsia-500 transition">Services</a>
          <a href="#gallery" className="hover:text-fuchsia-500 transition">Gallery</a>
          <a href="#about" className="hover:text-fuchsia-500 transition">About</a>
          <a href="#contact" className="hover:text-fuchsia-500 transition">Contact</a>
        </div>
        <a href="tel:0214632600" className="bg-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-fuchsia-600 transition">Book Now</a>
      </nav>

      {/* HERO */}
      <div className="relative h-[520px] overflow-hidden">
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a2c57f4da_generated_image.png" alt="Paradise Hair & Beauty" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/80 to-fuchsia-600/10 flex items-center px-10">
          <div className="text-white max-w-lg">
            <p className="text-fuchsia-200 font-semibold tracking-widest uppercase text-sm mb-2">Midleton · Co. Cork</p>
            <h1 className="text-5xl font-black mb-4 leading-tight">Feel Beautiful.<br/>From Head<br/>to Toe.</h1>
            <p className="text-fuchsia-100 text-lg mb-8">Full-service hair and beauty salon in Midleton. Hair, nails, lashes, facials and more. Your self-care sanctuary.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:0214632600" className="bg-fuchsia-500 text-white px-6 py-3 rounded-full font-bold hover:bg-fuchsia-400 transition text-sm">📞 Book Your Treatment</a>
              <a href="#services" className="bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition text-sm">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-fuchsia-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-fuchsia-600 font-semibold tracking-widest uppercase text-sm mb-2">Treatments</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "✂️", name: "Hair Styling", price: "From €30" },
              { icon: "🎨", name: "Hair Colour", price: "From €55" },
              { icon: "💅", name: "Gel Nails", price: "From €35" },
              { icon: "👁️", name: "Lash Extensions", price: "From €60" },
              { icon: "🧖", name: "Facial Treatment", price: "From €45" },
              { icon: "🪮", name: "Eyebrow Shaping", price: "From €15" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-fuchsia-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-fuchsia-500 font-semibold text-sm">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — masonry style with lightbox */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-fuchsia-600 font-semibold tracking-widest uppercase text-sm mb-2">Our Work</p>
            <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                onClick={() => setLightbox(i)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ gridRow: i === 0 || i === 4 ? "span 2" : "span 1" }}
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ minHeight: i === 0 || i === 4 ? "320px" : "160px" }}
                />
                <div className="absolute inset-0 bg-fuchsia-900/0 group-hover:bg-fuchsia-900/40 transition-all duration-300 flex items-end">
                  <span className="text-white text-sm font-semibold px-4 py-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-fuchsia-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Complete Beauty Experience</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Paradise Hair & Beauty is Midleton's one-stop beauty salon. Whether you want a fresh haircut, a full colour, gorgeous nails or a relaxing facial — our talented team has you covered. We use only premium products and take time to make sure you leave feeling absolutely amazing.</p>
        </div>
      </section>

      {/* HOURS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Opening Hours</h2>
          <div className="bg-white rounded-2xl overflow-hidden border border-fuchsia-100 shadow-sm">
            {[["Monday", "Closed"], ["Tuesday", "9:00 AM – 6:00 PM"], ["Wednesday", "9:00 AM – 6:00 PM"], ["Thursday", "9:00 AM – 7:30 PM"], ["Friday", "9:00 AM – 6:00 PM"], ["Saturday", "9:00 AM – 5:30 PM"], ["Sunday", "Closed"]].map(([day, hours], i) => (
              <div key={i} className={`flex justify-between px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-fuchsia-50"} ${hours === "Closed" ? "text-gray-300" : "text-gray-700"}`}>
                <span className="font-medium">{day}</span>
                <span className={hours === "Closed" ? "" : "text-fuchsia-600 font-semibold"}>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-fuchsia-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "📍", title: "Address", info: "Midleton, Co. Cork" },
              { icon: "📞", title: "Phone", info: "021 463 2600" },
              { icon: "🎁", title: "Gift Vouchers", info: "Available in-store" }
            ].map((c, i) => (
              <div key={i} className="bg-fuchsia-500 rounded-2xl p-6">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-fuchsia-100 text-sm">{c.info}</p>
              </div>
            ))}
          </div>
          <a href="tel:0214632600" className="inline-block bg-white text-fuchsia-600 px-8 py-4 rounded-full font-bold hover:bg-fuchsia-50 transition text-lg">📞 021 463 2600</a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-500 text-center py-6 text-sm">
        <p>© 2025 Paradise Hair & Beauty · Midleton, Co. Cork · All Rights Reserved</p>
      </footer>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryPhotos.length) % galleryPhotos.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center transition"
          >‹</button>
          <img
            src={galleryPhotos[lightbox].url.replace("w=700", "w=1200")}
            alt={galleryPhotos[lightbox].label}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryPhotos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center transition"
          >›</button>
          <div className="absolute bottom-6 text-white/60 text-sm">{galleryPhotos[lightbox].label}</div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
          >✕</button>
        </div>
      )}
    </div>
  );
}
