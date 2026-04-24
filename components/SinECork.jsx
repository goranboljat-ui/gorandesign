"use client";

import { useState, useEffect, useRef } from "react";

const AMBER = "#d4891a";
const AMBER_LIGHT = "#f0a832";
const DARK = "#0d0a06";
const WOOD = "#1a1208";

const galleryImgs = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4f873c4f4_generated_image.png", label: "The Bar" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7d8dfdede_generated_image.png", label: "Live Sessions" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f963be456_generated_image.png", label: "Snug Corner" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7c38225ec_generated_image.png", label: "Whiskey Wall" },
];

const reviews = [
  { name: "Ciara M.", stars: 5, text: "Best trad session in Cork, no question. The atmosphere is electric and the pints are always perfect." },
  { name: "Tomás O'B.", stars: 5, text: "Sin É is a Cork institution. Been coming here for 20 years and it never disappoints." },
  { name: "Sarah K.", stars: 5, text: "Walked in as a tourist, left feeling like a local. The music was incredible, the staff even better." },
];

function StarRating({ count }) {
  return <span style={{ color: AMBER }}>{Array(count).fill("★").join("")}</span>;
}

function AnimatedSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ ...style, transition: "opacity 0.7s ease, transform 0.7s ease", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}>
      {children}
    </div>
  );
}

export default function SinECork() {
  const [activeMenu, setActiveMenu] = useState("beer");
  const [activeFood, setActiveFood] = useState("classics");
  const [showBooking, setShowBooking] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const drinkMenus = {
    beer: [
      { name: "Guinness", desc: "The classic. Always perfect.", price: "€6.50", icon: "🍺" },
      { name: "Beamish", desc: "Cork's own. Smooth & creamy.", price: "€6.00", icon: "🍺" },
      { name: "Hophead IPA", desc: "8 Degrees Brewing, East Cork", price: "€7.00", icon: "🍺" },
      { name: "Franciscan Well Rebel Red", desc: "Cork craft, rich & malty", price: "€7.50", icon: "🍺" },
    ],
    whiskey: [
      { name: "Jameson", desc: "The Irish classic. Triple distilled.", price: "€6.50", icon: "🥃" },
      { name: "Redbreast 12", desc: "Single pot still. Complex, rich.", price: "€11.00", icon: "🥃" },
      { name: "Green Spot", desc: "Unfiltered, fruity & spicy.", price: "€9.00", icon: "🥃" },
      { name: "Teeling Small Batch", desc: "Rum cask finish. Smooth.", price: "€8.50", icon: "🥃" },
    ],
    cocktails: [
      { name: "Irish Mule", desc: "Jameson, ginger beer, lime", price: "€10.00", icon: "🍹" },
      { name: "Cork Sour", desc: "Beamish stout, citrus, egg white", price: "€11.00", icon: "🍹" },
      { name: "Trad Session", desc: "Poitín, honey, lemon, thyme", price: "€12.00", icon: "🍹" },
      { name: "Blackberry Bramble", desc: "Gin, blackberry, lemon, soda", price: "€10.50", icon: "🍹" },
    ],
    wine: [
      { name: "Rioja Crianza", desc: "Spanish red, oak-aged, medium body", price: "€7.50", icon: "🍷" },
      { name: "Marlborough Sauvignon", desc: "Crisp NZ white, citrus & tropical", price: "€8.00", icon: "🍷" },
      { name: "Prosecco", desc: "Italian sparkling, dry & refreshing", price: "€7.00", icon: "🥂" },
      { name: "House Red / White", desc: "Carefully selected, great value", price: "€6.50", icon: "🍷" },
    ],
  };

  const foodMenus = {
    classics: [
      { name: "Sin É Burger", desc: "8oz beef patty, smoked cheddar, pickled onion, brioche", price: "€14", icon: "🍔" },
      { name: "Chicken Wings", desc: "Buffalo or BBQ, blue cheese dip, celery", price: "€12", icon: "🍗" },
      { name: "Fish & Chips", desc: "Battered cod, hand-cut chips, tartare sauce, lemon", price: "€15", icon: "🐟" },
      { name: "Loaded Nachos", desc: "Cheese, jalapeños, salsa, sour cream, guacamole", price: "€11", icon: "🫔" },
    ],
    platters: [
      { name: "The Sharer Board", desc: "Wings, nachos, sliders, onion rings — feeds 4", price: "€38", icon: "🍽️" },
      { name: "Cheeseboard", desc: "Irish artisan cheeses, chutney, crackers, grapes", price: "€16", icon: "🧀" },
      { name: "Charcuterie Platter", desc: "Cured meats, pickles, sourdough, mustard", price: "€18", icon: "🥩" },
      { name: "Garlic Bread Platter", desc: "Stone-baked, herb butter, melted cheese", price: "€8", icon: "🍞" },
    ],
    bites: [
      { name: "Crispy Calamari", desc: "Lemon aioli, fresh herbs", price: "€9", icon: "🦑" },
      { name: "Soup of the Day", desc: "With brown soda bread & butter", price: "€7", icon: "🍲" },
      { name: "Onion Rings", desc: "Beer-battered, smoky mayo", price: "€6", icon: "🧅" },
      { name: "Garlic Mushrooms", desc: "On sourdough toast, parmesan", price: "€8", icon: "🍄" },
    ],
  };

  const events = [
    { day: "Every Night", title: "Live Trad Session", time: "6:30 PM", desc: "Authentic Irish trad music. No stage, no barriers — just pure music in the snug.", icon: "🎻", color: "#d4891a" },
    { day: "Every Thursday", title: "Trad Quiz Night", time: "8:00 PM", desc: "Test your knowledge with €200 prize pot. Teams of 2–6. Register at the bar.", icon: "🧠", color: "#7ab87a" },
    { day: "Every Weekend", title: "Sports Screenings", time: "All Day", desc: "All major matches on our big screens. GAA, Rugby, Soccer, NFL. Never miss a game.", icon: "📺", color: "#5a9ad4" },
    { day: "First Sunday", title: "Céilí Dancing", time: "4:00 PM", desc: "Monthly Céilí — all welcome, beginners included. A true Cork tradition.", icon: "💃", color: "#c9403a" },
  ];

  return (
    <div style={{ background: DARK, color: "#f0e6d0", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* Desktop Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(13,10,6,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(212,137,26,0.15)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#f0e6d0", letterSpacing: 2, fontStyle: "italic" }}>Sin É</div>
            <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.4em", textTransform: "uppercase", marginTop: -2 }}>Est. 1889 · Coburg St, Cork</div>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }} className="hidden-mobile">
            {["home", "menu", "events", "booking", "contact"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setActiveNav(s)} style={{ color: activeNav === s ? AMBER : "#9a8a70", textDecoration: "none", transition: "color 0.3s" }}>{s}</a>
            ))}
          </div>
          <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: DARK, border: "none", padding: "10px 22px", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
            Book a Table
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4f873c4f4_generated_image.png" alt="Sin É" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        {/* Warm amber gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, rgba(212,137,26,0.25) 0%, transparent 60%), linear-gradient(to top, rgba(13,10,6,1) 0%, rgba(13,10,6,0.4) 50%, rgba(13,10,6,0.2) 100%)" }} />
        
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 32px 80px" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 1, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase" }}>Est. 1889 · Coburg Street · Cork</span>
            </div>
            <h1 style={{ fontSize: "clamp(60px, 12vw, 110px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 24px", fontStyle: "italic", letterSpacing: -2 }}>
              Sin É
            </h1>
            <p style={{ fontSize: 20, color: "#c4b090", fontWeight: 300, lineHeight: 1.6, marginBottom: 40, maxWidth: 500 }}>
              Cork's most beloved traditional pub. Live trad every night. Real pints. Pure craic.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: DARK, border: "none", padding: "16px 36px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
                Book a Table
              </button>
              <a href="#menu" style={{ border: "1px solid rgba(240,230,208,0.4)", color: "#f0e6d0", padding: "16px 36px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                Explore Drinks
              </a>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
              {[["1889", "Established"], ["7 Nights", "Live Music"], ["14k+", "Followers"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: AMBER_LIGHT }}>{val}</div>
                  <div style={{ fontSize: 11, color: "#7a6a50", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS MENU */}
      <section id="menu" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What We Serve</div>
              <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: 0 }}>The Drinks</h2>
            </div>
          </AnimatedSection>

          {/* Beer image highlight */}
          <AnimatedSection style={{ marginBottom: 48, borderRadius: 2, overflow: "hidden", position: "relative", height: 280 }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8bb3bd8f0_generated_image.png" alt="Drinks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,10,6,0.9) 0%, transparent 60%)", display: "flex", alignItems: "center", padding: 48 }}>
              <div>
                <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Crafted With Care</div>
                <div style={{ fontSize: 32, fontWeight: 900, fontStyle: "italic" }}>From local craft to<br/>classic Irish pours.</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: `1px solid rgba(212,137,26,0.2)` }}>
            {[["beer", "🍺 Beer"], ["whiskey", "🥃 Whiskey"], ["cocktails", "🍹 Cocktails"], ["wine", "🍷 Wine"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveMenu(key)} style={{ flex: 1, padding: "14px 8px", background: "none", border: "none", borderBottom: activeMenu === key ? `2px solid ${AMBER}` : "2px solid transparent", color: activeMenu === key ? AMBER : "#6a5a40", fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s", fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {drinkMenus[activeMenu].map((item, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,137,26,0.12)", padding: 24, transition: "all 0.3s" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{item.name}</h3>
                  <span style={{ color: AMBER, fontWeight: 700, fontSize: 16, whiteSpace: "nowrap", marginLeft: 8 }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: "#7a6a50", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD MENU */}
      <section style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>Pub Kitchen</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: 0 }}>The Food</h2>
          </AnimatedSection>

          <AnimatedSection style={{ marginBottom: 48, borderRadius: 2, overflow: "hidden", position: "relative", height: 260 }}>
            <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9b61297d1_generated_image.png" alt="Food" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(26,18,8,0.9) 0%, transparent 60%)", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: 48 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Honest Pub Food</div>
                <div style={{ fontSize: 32, fontWeight: 900, fontStyle: "italic" }}>Bold flavours.<br/>Generous portions.</div>
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: `1px solid rgba(212,137,26,0.2)` }}>
            {[["classics", "🍔 Classics"], ["platters", "🍽️ Platters"], ["bites", "🧆 Bites"]].map(([key, label]) => (
              <button key={key} onClick={() => setActiveFood(key)} style={{ flex: 1, padding: "14px 8px", background: "none", border: "none", borderBottom: activeFood === key ? `2px solid ${AMBER}` : "2px solid transparent", color: activeFood === key ? AMBER : "#6a5a40", fontSize: 13, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s", fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {foodMenus[activeFood].map((item, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,137,26,0.1)", padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{item.name}</h3>
                  <span style={{ color: AMBER, fontWeight: 700, fontSize: 16, whiteSpace: "nowrap", marginLeft: 8 }}>{item.price}</span>
                </div>
                <p style={{ margin: 0, color: "#7a6a50", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE EVENTS */}
      <section id="events" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ marginBottom: 60 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What's On</div>
                <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: 0, lineHeight: 1.1 }}>Live Events<br/>& Sessions</h2>
              </div>
              <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7d8dfdede_generated_image.png" alt="Live Music" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(13,10,6,0.3)" }} />
              </div>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20 }}>
            {events.map((ev, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: ev.color }} />
                <div style={{ fontSize: 36, marginBottom: 16 }}>{ev.icon}</div>
                <div style={{ fontSize: 10, color: ev.color, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>{ev.day}</div>
                <h3 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800 }}>{ev.title}</h3>
                <div style={{ color: AMBER, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{ev.time}</div>
                <p style={{ margin: 0, color: "#7a6a50", fontSize: 14, lineHeight: 1.6 }}>{ev.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>The Atmosphere</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: 0 }}>Inside Sin É</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {galleryImgs.map((img, i) => (
              <AnimatedSection key={i} style={{ position: "relative", height: i === 0 ? 360 : 240, overflow: "hidden", gridColumn: i === 0 ? "1 / -1" : "auto" }}>
                <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 24px 20px", background: "linear-gradient(to top, rgba(13,10,6,0.9), transparent)" }}>
                  <span style={{ color: "#f0e6d0", fontSize: 15, fontWeight: 600 }}>{img.label}</span>
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
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What People Say</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: 0 }}>Reviews</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {reviews.map((r, i) => (
              <AnimatedSection key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,137,26,0.12)", padding: 32, position: "relative" }}>
                <div style={{ fontSize: 40, color: AMBER, opacity: 0.3, position: "absolute", top: 20, right: 24, fontFamily: "Georgia", lineHeight: 1 }}>"</div>
                <StarRating count={r.stars} />
                <p style={{ margin: "16px 0", color: "#c4b090", fontSize: 16, lineHeight: 1.7, fontStyle: "italic" }}>"{r.text}"</p>
                <div style={{ color: "#6a5a40", fontSize: 13, fontWeight: 600 }}>— {r.name}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 24px", background: WOOD }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ color: AMBER, fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>Come Visit</div>
            <h2 style={{ fontSize: 48, fontWeight: 900, fontStyle: "italic", margin: "0 0 40px" }}>Find Us</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }}>
              {[
                { icon: "📍", label: "Address", val: "8 Coburg Street\nCork T23 KF5N" },
                { icon: "📞", label: "Phone", val: "021 450 2266" },
                { icon: "🕐", label: "Hours", val: "Mon–Sun\n12:30 – 11:30 PM" },
              ].map((c, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,137,26,0.1)", padding: 24 }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ color: AMBER, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>{c.label}</div>
                  <div style={{ color: "#c4b090", fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.val}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setShowBooking(true)} style={{ background: AMBER, color: DARK, border: "none", padding: "18px 48px", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer", width: "100%" }}>
              Book a Table
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(212,137,26,0.15)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "#4a3a20", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", margin: 0 }}>© 2025 Sin É · 8 Coburg Street, Cork · Est. 1889</p>
      </footer>

      {/* MOBILE STICKY BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(13,10,6,0.97)", borderTop: "1px solid rgba(212,137,26,0.2)", display: "flex", backdropFilter: "blur(12px)" }} className="mobile-nav">
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "menu", icon: "🍺", label: "Menu" },
          { id: "events", icon: "🎻", label: "Events" },
          { id: "booking", icon: "📅", label: "Book", action: () => setShowBooking(true) },
          { id: "contact", icon: "📍", label: "Contact" },
        ].map(({ id, icon, label, action }) => (
          <a key={id} href={action ? undefined : `#${id}`} onClick={action} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: activeNav === id ? AMBER : "#5a4a30", textDecoration: "none", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.3s", gap: 4 }}
            onClickCapture={() => setActiveNav(id)}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>

      {/* BOOKING MODAL */}
      {showBooking && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 16, backdropFilter: "blur(8px)" }} onClick={() => setShowBooking(false)}>
          <div style={{ background: WOOD, border: `1px solid rgba(212,137,26,0.3)`, padding: 36, width: "100%", maxWidth: 460, maxHeight: "90vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div style={{ color: AMBER, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 8 }}>Reservation</div>
            <h3 style={{ margin: "0 0 28px", fontSize: 28, fontWeight: 900, fontStyle: "italic" }}>Book Your Table</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { placeholder: "Your Name", type: "text" },
                { placeholder: "Phone Number", type: "tel" },
                { placeholder: "Email Address", type: "email" },
              ].map((f, i) => (
                <input key={i} type={f.type} placeholder={f.placeholder} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,137,26,0.2)", color: "#f0e6d0", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <input type="date" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,137,26,0.2)", color: "#9a8a70", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
                <input type="time" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,137,26,0.2)", color: "#9a8a70", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
              </div>
              <select style={{ background: WOOD, border: "1px solid rgba(212,137,26,0.2)", color: "#9a8a70", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit" }}>
                <option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5–8 Guests</option><option>9+ Guests</option>
              </select>
              <textarea placeholder="Special requests (optional)" rows={3} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,137,26,0.2)", color: "#f0e6d0", padding: "14px 16px", fontSize: 14, outline: "none", fontFamily: "inherit", resize: "none" }} />
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button style={{ flex: 1, background: AMBER, color: DARK, border: "none", padding: "16px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
                Confirm Booking
              </button>
              <button onClick={() => setShowBooking(false)} style={{ padding: "16px 20px", background: "none", border: "1px solid rgba(255,255,255,0.1)", color: "#6a5a40", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
                Cancel
              </button>
            </div>
            <p style={{ textAlign: "center", color: "#4a3a20", fontSize: 12, marginTop: 16 }}>
              Or call us: <a href="tel:0214502266" style={{ color: AMBER }}>021 450 2266</a>
            </p>
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
