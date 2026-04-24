"use client";
import { useState, useEffect } from "react";

const projects = [
  { name: "Fellini's Cafe", category: "Cafe", url: "/FellinisCafe", emoji: "☕" },
  { name: "Dan Olden Butchers", category: "Butcher", url: "/DanOldenButchers", emoji: "🥩" },
  { name: "Toastie Cafe", category: "Cafe", url: "/ToastieCafe", emoji: "🥪" },
  { name: "EarthWay Refill", category: "Eco Shop", url: "/EarthWayRefill", emoji: "🌱" },
  { name: "Boston Chipper", category: "Takeaway", url: "/BostonChipper", emoji: "🐟" },
  { name: "Harty's Restaurant", category: "Restaurant", url: "/HartysRestaurant", emoji: "🍽️" },
  { name: "Big Blue Pizza", category: "Restaurant", url: "/BigBluePizza", emoji: "🍕" },
  { name: "Trawler Boyz", category: "Seafood", url: "/TrawlerBoyz", emoji: "🦞" },
  { name: "Murv's Hair Studio", category: "Hair Salon", url: "/MurvHairStudio", emoji: "✂️" },
  { name: "Bounce Hair Salon", category: "Hair Salon", url: "/BounceHairSalon", emoji: "💇" },
  { name: "Solo Hair Design", category: "Hair Salon", url: "/SoloHairDesign", emoji: "💈" },
  { name: "Sinead Hair Salon", category: "Hair Salon", url: "/SineadHairSalon", emoji: "💅" },
  { name: "Kopper Hair Studio", category: "Hair Salon", url: "/KopperHairStudio", emoji: "✂️" },
  { name: "Pink Shampoo", category: "Hair & Nails", url: "/PinkShampoo", emoji: "💅" },
  { name: "Be Youtiful Salon", category: "Beauty", url: "/BeYoutifulSalon", emoji: "💄" },
  { name: "Guchi Nails", category: "Nails", url: "/GuchiNails", emoji: "💅" },
  { name: "Nail Box Cork", category: "Nails", url: "/NailBoxCork", emoji: "💅" },
  { name: "Barberland Cork", category: "Barber", url: "/BarberlandCork", emoji: "💈" },
  { name: "Brazukas Barbershop", category: "Barber", url: "/BrazukasBarbershop", emoji: "💈" },
  { name: "City Barbers Cork", category: "Barber", url: "/CityBarbersCork", emoji: "💈" },
  { name: "Caspian Barbers", category: "Barber", url: "/CaspianBarbers", emoji: "💈" },
  { name: "Legends Barbers", category: "Barber", url: "/LegendsBarbers", emoji: "💈" },
  { name: "Franco Barbieri", category: "Barber", url: "/FrancoBarbieri", emoji: "💈" },
  { name: "DJA Barbers", category: "Barber", url: "/DJABarbers", emoji: "💈" },
  { name: "Uppercuts Barber", category: "Barber", url: "/UppercutsBarber", emoji: "💈" },
  { name: "Crew Cuts Barbers", category: "Barber", url: "/CrewCutsBarbers", emoji: "💈" },
  { name: "Lemberg Barbershop", category: "Barber", url: "/LembergBarbershop", emoji: "💈" },
  { name: "Buzz Cutz", category: "Barber", url: "/BuzzCutz", emoji: "💈" },
  { name: "Bodrum Turkish Barber", category: "Barber", url: "/BodrumTurkishBarber", emoji: "💈" },
  { name: "Ahmet's Barber", category: "Barber", url: "/AhmetsBarber", emoji: "💈" },
  { name: "Tom Winters Barbers", category: "Barber", url: "/TomWintersBarbers", emoji: "💈" },
  { name: "The Schooner Bar", category: "Pub", url: "/SchoonerBar", emoji: "🍺" },
  { name: "Mutton Lane Inn", category: "Pub", url: "/MuttonLaneInn", emoji: "🍺" },
  { name: "The Oval Bar", category: "Pub", url: "/OvalBarCork", emoji: "🍺" },
  { name: "Hi-B Bar", category: "Pub", url: "/HiBBar", emoji: "🍺" },
  { name: "Castle Inn Cork", category: "Pub", url: "/CastleInnCork", emoji: "🍺" },
  { name: "Corner House Cork", category: "Pub", url: "/CornerHouseCork", emoji: "🍺" },
  { name: "Rob Roy Bar", category: "Pub", url: "/RobRoyBar", emoji: "🍺" },
  { name: "Alibi Bar", category: "Pub", url: "/AlibiBar", emoji: "🍺" },
  { name: "Abbots Ale House", category: "Pub", url: "/AbbotsAleHouse", emoji: "🍺" },
  { name: "Szabla Tattoo", category: "Tattoo", url: "/SzablaTattoo", emoji: "🎨" },
  { name: "Satellite Cleaners", category: "Laundry", url: "/SatelliteCleaners", emoji: "👕" },
  { name: "Laundry Basket", category: "Laundry", url: "/LaundryBasket", emoji: "🧺" },
  { name: "Bailick Blinds", category: "Home Services", url: "/BailickBlinds", emoji: "🪟" },
  { name: "Saucy Pups", category: "Pet Grooming", url: "/SaucyPups", emoji: "🐾" },
  { name: "Cali Women's Wear", category: "Fashion", url: "/CaliWomensWear", emoji: "👗" },
  { name: "Totu Delikatesy", category: "Deli", url: "/TotuDelikatesy", emoji: "🥗" },
  { name: "PAN Cafe", category: "Cafe", url: "/PANCafe", emoji: "☕" },
  { name: "Spice of India", category: "Restaurant", url: "/SpiceOfIndia", emoji: "🍛" },
  { name: "Istanbul Kebab", category: "Takeaway", url: "/IstanbulKebab", emoji: "🌯" },
  { name: "Thairish", category: "Restaurant", url: "/ThairishCork", emoji: "🍜" },
  { name: "Spring Garden Restaurant", category: "Restaurant", url: "/SpringGardenRestaurant", emoji: "🥢" },
  { name: "Nosh 19", category: "Restaurant", url: "/Nosh19", emoji: "🍽️" },
  { name: "Scoops Gelato", category: "Ice Cream", url: "/ScoopsGelato", emoji: "🍦" },
  { name: "Bakerssson Cafe", category: "Bakery", url: "/BakerssonCafe", emoji: "🥐" },
  { name: "Baker's Son", category: "Bakery", url: "/BakersSon", emoji: "🥐" },
  { name: "Bean Leaf Carrigtwohill", category: "Cafe", url: "/BeanLeafCarrigtwohill", emoji: "☕" },
  { name: "Cuppacity Coffee", category: "Cafe", url: "/CuppacityCoffee", emoji: "☕" },
  { name: "Sultan Cafe", category: "Cafe", url: "/SultanCafe", emoji: "☕" },
  { name: "Sin E Cork", category: "Pub", url: "/SinECork", emoji: "🎵" },
  { name: "Glandore Inn", category: "Pub", url: "/GlandoreInn", emoji: "🍺" },
  { name: "Paradise Hair & Beauty", category: "Beauty", url: "/ParadiseHairBeauty", emoji: "💄" },
  { name: "Luminous Dental", category: "Dental", url: "/LuminousDental", emoji: "🦷" },
  { name: "Duds n Suds", category: "Laundry", url: "/DudsnSuds", emoji: "🧺" },
  { name: "Joe McSweeney", category: "Butcher", url: "/JoeMcSweeney", emoji: "🥩" },
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category))).sort()];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const filtered = projects.filter(p => {
    const matchCat = filter === "All" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f] pt-20 pb-16 px-6 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: "radial-gradient(circle at 30% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 70% 50%, #8b5cf6 0%, transparent 50%)"}} />
        <div className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Web Design Studio</p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Goran<span className="text-indigo-400">Design</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Premium websites for local businesses in Cork & Munster.
            <br/>Fast. Beautiful. Affordable.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-indigo-400 text-lg">✓</span> Custom design</span>
            <span className="flex items-center gap-2"><span className="text-indigo-400 text-lg">✓</span> Mobile-first</span>
            <span className="flex items-center gap-2"><span className="text-indigo-400 text-lg">✓</span> SEO ready</span>
            <span className="flex items-center gap-2"><span className="text-indigo-400 text-lg">✓</span> Monthly support</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-indigo-600 py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm font-semibold text-white text-center">
          <span>🏆 {projects.length}+ Projects Completed</span>
          <span>📍 Cork & Munster</span>
          <span>⚡ 48h Turnaround</span>
          <span>💰 From €299</span>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Work</h2>
          <p className="text-gray-400">Browse our portfolio of local business websites</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search businesses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat} {cat === "All" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <a
              key={p.url}
              href={p.url}
              className={`group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-indigo-300 transition">{p.name}</h3>
              <p className="text-gray-500 text-xs">{p.category}</p>
              <div className="mt-3 flex items-center gap-1 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition">
                View site <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">No projects found.</div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-t border-white/5 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Want a website like this?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Get a professional website for your business. Fast turnaround, affordable prices, full support.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:goranboljat@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Get in Touch
          </a>
          <a
            href="tel:+353"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition border border-white/20"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 py-6 px-6 text-center text-gray-600 text-sm">
        © 2026 GoranDesign · Cork, Ireland · goranboljat@gmail.com
      </div>
    </div>
  );
}
