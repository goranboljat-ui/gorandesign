"use client";

import { useState, useEffect, useRef } from "react";

const AMBER = "#c8860a";
const AMBER_LIGHT = "#e09c1a";
const DARK = "#08090a";
const WOOD = "#0f1008";

const galleryImgs = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/cd0d83c28_generated_image.png", label: "500+ World Beers" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8bb3bd8f0_generated_image.png", label: "On Tap" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4f873c4f4_generated_image.png", label: "The Bar" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7c38225ec_generated_image.png", label: "Whiskey Selection" },
];

const reviews = [
  { name: "Donal F.", stars: 5, text: "Best craft beer bar in Ireland. Anton knows every single beer on the shelf by name. Absolute legend." },
  { name: "Maria T.", stars: 5, text: "500+ beers and Anton will find the perfect one for you. This place is one of a kind." },
  { name: "Padraig S.", stars: 5, text: "Came in for one pint, stayed for four hours. That says everything about this place." },
];

function AnimatedSection({ children, style = {}, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ ...style, transition: "opacity 0.8s ease, transform 0.8s ease", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)" }}>
      {children}
    </div>
  );
}

export default function AbbotsAleHouse() {
  const [activeMenu, setActiveMenu] = useState("craft");
  const [activeFood, setActiveFood] = useState("classics");
  const [showBooking, setShowBooking] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const drinkMenus = {
    craft: [
      { name: "8 Degrees Sunburnt IPA", desc: "East Cork IPA. Tropical, citrusy, bold.", price: "€7.50", icon: "🍺" },
      { name: "Whites of Wexford Saison", desc: "Farmhouse ale. Spicy, earthy, refreshing.", price: "€7.00", icon: "🍺" },
      { name: "O'Hara's Irish Stout", desc: "Classic Irish dry stout. Chocolate & coffee.", price: "€6.50", icon: "🍺" },
      { name: "Kinnegar Rustbucket", desc: "Rye pale ale. Peppery, biscuit, clean finish.", price: "€7.00", icon: "🍺" },
      { name: "Galway Bay Full Sail", desc: "West Coast IPA. Pine, grapefruit, bitter.", price: "€7.50", icon: "🍺" },
      { name: "Today's Guest Tap", desc: "Rotating — ask Anton what's on.", price: "€POA", icon: "🍺" },
    ],
    world: [
      { name: "Chimay Blue", desc: "Belgian Trappist. Dark, rich, complex.", price: "€9.00", icon: "🍺" },
      { name: "Weihenstephaner Hefeweizen", desc: "Bavarian wheat. Banana, clove, creamy.", price: "€8.00", icon: "🍺" },
      { name: "Rochefort 10", desc: "Belgian quad. Prune, raisin, spice.", price: "€10.50", icon: "🍺" },
      { name: "Sierra Nevada Torpedo", desc: "American IPA. Citrus, pine, resinous.", price: "€8.50", icon: "🍺" },
      { name: "Duvel", desc: "Belgian strong golden. Deceptively easy.", price: "€8.50", icon: "🍺" },
      { name: "Estrella Damm Inedit", desc: "Ferran Adrià's food-pairing lager.", price: "€7.50", icon: "🍺" },
    ],
    whiskey: [
      { name: "Redbreast 15", desc: "Single pot still. Sherry cask finish. Exceptional.", price: "€13.00", icon: "🥃" },
      { name: "Writers' Tears Copper Pot", desc: "Light, fruity, honeyed. A Cork favourite.", price: "€9.50", icon: "🥃" },
      { name: "Teeling Single Grain", desc: "Californian wine cask. Fruity, smooth.", price: "€9.00", icon: "🥃" },
      { name: "Midleton Very Rare", desc: "The pinnacle of Irish whiskey craft.", price: "€24.00", icon: "🥃" },
    ],
  };

  const foodMenus = {
    classics: [
      { name: "The Craft Burger", desc: "8oz local beef, aged cheddar, bacon jam, brioche, craft ale chips", price: "€15", icon: "🍔" },
      { name: "Beer-Battered Chicken", desc: "IPA batter, chipotle mayo, pickled slaw", price: "€13", icon: "🍗" },
      { name: "Ale & Cheese Toastie", desc: "Gruyère, cheddar, caramelised onion, sourdough", price: "€10", icon: "🥪" },
      { name: "Loaded Fries", desc: "Craft ale cheese sauce, crispy bacon, scallions", price: "€9", icon: "🍟" },
    ],
    platters: [
      { name: "The Beer Lover's Board", desc: "Artisan meats, 3 Irish cheeses, pickles, sourdough — for 2–4", price: "€32", icon: "🍽️" },
      { name: "Pub Sharing Platter", desc: "Wings, toasties, onion rings, dips — for 3–6", price: "€36", icon: "🧆" },
      { name: "Craft Cheese Selection", desc: "4 Irish artisan cheeses, crackers, fig jam, grapes", price: "€18", icon: "🧀" },
    ],
    bites: [
      { name: "Pulled Pork Sliders", desc: "Slow-cooked, IPA BBQ sauce, pickled jalapeño", price: "€10", icon: "🫓" },
      { name: "Beer Cheese Dip", desc: "Warm craft ale cheese, pretzel bites for dipping", price: "€8", icon: "🥣" },
      { name: "Crispy Squid", desc: "Lemon, chilli, garlic aioli", price: "€9", icon: "🦑" },
    ],
  };

  const events = [
    { day: "Every Week", title: "New Tap Tuesday", time: "From 5 PM", desc: "A new world beer on tap every Tuesday. First pint at a special intro price — first come, first served.", icon: "🆕", color: AMBER },
    { day: "Every Thursday", title: "Beer & Banter Quiz", time: "8:30 PM", desc: "Cork's best pub quiz. Beer categories, music rounds, €150 prize. Teams of 2–6 welcome.", icon: "🧠", color: "#7ab87a" },
    { day: "Every Weekend", title: "Live Music Sessions", time: "Fri 8PM · Sat 7PM", desc: "Local bands and singer-songwriters. Acoustic, blues, folk and everything in between.", icon: "🎸", color: "#c9403a" },
    { day: "Monthly", title: "Private Party Upstairs", time: "Enquire for dates", desc: "Hire our cozy upstairs bar for your birthday, celebration or corporate event. Fully stocked.", icon: "🎉", color: "#9b6db5" },
  ];

  return (
    <div style={{ background: DARK, color: "#e8dfc8", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* Desktop Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(8,9,10,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,134,10,0.2)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#e8dfc8", letterSpacing: 1 }}>Abbot's Ale House</div>
            <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.4em", textTransform: "uppercase" }}>Cork's Craft Beer Specialist</div>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }} className="hidden-mobile">
            {["home","menu","events","booking","contact"].map(s => (
              <a key={s} href={s === "booking" ? undefined : `#${s}`} onClick={s === "booking" ? () => setShowBooking(true) : undefined} style={{ color: activeNav === s ? AMBER : "#6a5a38", textDecoration: "none", transition: "color 0.3s" }}>{s}</a>
            ))}
          </div>
          <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: "#fff", border: "none", padding: "10px 22px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
            Book a Table
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/cd0d83c28_generated_image.png" alt="Abbot's Ale House" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.3) saturate(1.3)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(200,134,10,0.2) 0%, transparent 55%), linear-gradient(to top, rgba(8,9,10,1) 0%, rgba(8,9,10,0.3) 60%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 32px 80px" }}>
          <div style={{ maxWidth: 660 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase" }}>17 Devonshire Street · Cork City</span>
            </div>
            <h1 style={{ fontSize: "clamp(50px, 10vw, 96px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 8px", letterSpacing: -2 }}>Abbot's</h1>
            <h1 style={{ fontSize: "clamp(50px, 10vw, 96px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 24px", letterSpacing: -2, color: AMBER_LIGHT }}>Ale House</h1>
            <p style={{ fontSize: 18, color: "#a09070", fontWeight: 300, lineHeight: 1.6, marginBottom: 40, maxWidth: 480 }}>
              120+ Irish craft beers. 500+ world beers. 10 rotating taps. And Anton — who knows every single one.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: "#fff", border: "none", padding: "16px 36px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
                Book a Table
              </button>
              <a href="#menu" style={{ border: "1px solid rgba(232,223,200,0.35)", color: "#e8dfc8", padding: "16px 36px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
                Explore Beers
              </a>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
              {[["120+", "Irish Beers"], ["500+", "World Beers"], ["10", "Rotating Taps"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: AMBER_LIGHT }}>{val}</div>
                  <div style={{ fontSize: 11, color: "#5a4a28", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS MENU */}
      <section id="menu" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What We Pour</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>The Beers</h2>
          </AnimatedSection>

          <AnimatedSection style={{ marginBottom: 48, overflow: "hidden", position: "relative", height: 280 }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8bb3bd8f0_generated_image.png" alt="Beers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,9,10,0.92) 0%, transparent 55%)", display: "flex", alignItems: "center", padding: 48 }}>
              <div>
                <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Ask Anton</div>
                <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.2 }}>He knows every beer<br/>by name. And by taste.</div>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: `1px solid rgba(200,134,10,0.2)` }}>
            {[["craft","🍺 Irish Craft"], ["world","🌍 World Beers"], ["whiskey","🥃 Whiskey"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveMenu(key)} style={{ flex: 1, padding: "14px 8px", background: "none", border: "none", borderBottom: activeMenu === key ? `2px solid ${AMBER}` : "2px solid transparent", color: activeMenu === key ? AMBER : "#5a4a28", fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s", fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {drinkMenus[activeMenu].map((item, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(200,134,10,0.12)", padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{item.name}</h3>
                  <span style={{ color: AMBER, fontWeight: 700, fontSize: 15, whiteSpace: "nowrap", marginLeft: 8 }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: "#6a5a38", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>Pub Kitchen</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>The Food</h2>
          </AnimatedSection>

          <AnimatedSection style={{ marginBottom: 48, overflow: "hidden", position: "relative", height: 240 }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9b61297d1_generated_image.png" alt="Food" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(15,16,8,0.9) 0%, transparent 60%)", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: 48 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Crafted to Match</div>
                <div style={{ fontSize: 28, fontWeight: 900 }}>Food that pairs perfectly<br/>with great beer.</div>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: `1px solid rgba(200,134,10,0.2)` }}>
            {[["classics","🍔 Classics"], ["platters","🍽️ Platters"], ["bites","🧆 Bites"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveFood(key)} style={{ flex: 1, padding: "14px 8px", background: "none", border: "none", borderBottom: activeFood === key ? `2px solid ${AMBER}` : "2px solid transparent", color: activeFood === key ? AMBER : "#5a4a28", fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s", fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {foodMenus[activeFood].map((item, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(200,134,10,0.1)", padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{item.name}</h3>
                  <span style={{ color: AMBER, fontWeight: 700, fontSize: 15, whiteSpace: "nowrap", marginLeft: 8 }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: "#6a5a38", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What's On</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>Live Events</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20 }}>
            {events.map((ev, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: ev.color }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{ev.icon}</div>
                <div style={{ fontSize: 10, color: ev.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>{ev.day}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800 }}>{ev.title}</h3>
                <div style={{ color: AMBER, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{ev.time}</div>
                <p style={{ margin: 0, color: "#6a5a38", fontSize: 14, lineHeight: 1.6 }}>{ev.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>The Experience</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>Inside the Ale House</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {galleryImgs.map((img, i) => (
              <AnimatedSection key={i} style={{ position: "relative", height: i < 2 ? 300 : 220, overflow: "hidden" }}>
                <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 20px 16px", background: "linear-gradient(to top, rgba(8,9,10,0.9), transparent)" }}>
                  <span style={{ color: "#e8dfc8", fontSize: 14, fontWeight: 600 }}>{img.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>Word on the Street</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: 0 }}>Reviews</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {reviews.map((r, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(200,134,10,0.12)", padding: 32, position: "relative" }}>
                <div style={{ fontSize: 40, color: AMBER, opacity: 0.25, position: "absolute", top: 20, right: 24 }}>"</div>
                <span style={{ color: AMBER }}>{"★".repeat(r.stars)}</span>
                <p style={{ margin: "16px 0", color: "#b0a080", fontSize: 16, lineHeight: 1.7, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ color: "#5a4a28", fontSize: 13, fontWeight: 600 }}>— {r.name}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>Where to Find Us</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, margin: "0 0 40px" }}>Come for a Pint</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
              {[
                { icon: "📍", label: "Address", val: "17 Devonshire Street\nCork T23 X799" },
                { icon: "📞", label: "Phone", val: "021 450 7116" },
                { icon: "🍺", label: "Hours", val: "Mon–Thu: 3–11:30\nFri–Sat: 3–12:00\nSun: 3–11:00" },
              ].map((c, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(200,134,10,0.1)", padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ color: AMBER, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>{c.label}</div>
                  <div style={{ color: "#a09070", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.val}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: "#fff", border: "none", padding: "18px 48px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", width: "100%" }}>
              Book a Table / Private Party
            </button>
          </AnimatedSection>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(200,134,10,0.12)", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "#3a2a10", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", margin: 0 }}>© 2025 Abbot's Ale House · 17 Devonshire Street, Cork</p>
      </footer>

      {/* MOBILE BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(8,9,10,0.97)", borderTop: "1px solid rgba(200,134,10,0.2)", display: "flex", backdropFilter: "blur(12px)" }} className="mobile-nav">
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "menu", icon: "🍺", label: "Beers" },
          { id: "events", icon: "🎸", label: "Events" },
          { id: "booking", icon: "📅", label: "Book", action: () => setShowBooking(true) },
          { id: "contact", icon: "📍", label: "Find Us" },
        ].map(({ id, icon, label, action }) => (
          <a key={id} href={action ? undefined : `#${id}`} onClick={action} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: activeNav === id ? AMBER : "#4a3a18", textDecoration: "none", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.3s", gap: 4 }}
            onClickCapture={() => setActiveNav(id)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* BOOKING MODAL */}
      {showBooking && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16, backdropFilter: "blur(8px)" }} onClick={() => setShowBooking(false)}>
          <div style={{ background: WOOD, border: `1px solid rgba(200,134,10,0.3)`, padding: 36, width: "100%", maxWidth: 460, maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div style={{ color: AMBER, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Reservation</div>
            <h3 style={{ margin: "0 0 28px", fontSize: 26, fontWeight: 900 }}>Book Your Table</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["Your Name","text"],["Phone Number","tel"],["Email","email"]].map(([ph, t], i) => (
                <input key={i} type={t} placeholder={ph} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,134,10,0.2)", color: "#e8dfc8", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input type="date" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,134,10,0.2)", color: "#8a7a50", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
                <input type="time" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,134,10,0.2)", color: "#8a7a50", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
              </div>
              <select style={{ background: "#0f1008", border: "1px solid rgba(200,134,10,0.2)", color: "#8a7a50", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5–8 Guests</option><option>Private Party (9+)</option>
              </select>
              <textarea placeholder="Notes (private hire, special occasion...)" rows={3} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,134,10,0.2)", color: "#e8dfc8", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", resize: "none" }} />
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button style={{ flex: 1, background: AMBER, color: "#fff", border: "none", padding: "16px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>Confirm</button>
              <button onClick={() => setShowBooking(false)} style={{ padding: "16px 20px", background: "none", border: "1px solid rgba(255,255,255,0.08)", color: "#5a4a28", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Cancel</button>
            </div>
            <p style={{ textAlign: "center", color: "#3a2a10", fontSize: 12, marginTop: 16 }}>Call: <a href="tel:0214507116" style={{ color: AMBER }}>021 450 7116</a></p>
          </div>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .mobile-nav { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-nav { display: flex !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
    </div>
  );
}
