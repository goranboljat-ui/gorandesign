"use client";
import { useState } from "react";

const slides = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/167b6f98b_generated_image.png", caption: "Fresh seafood — caught locally" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7f9d7d078_generated_image.png", caption: "East Cork's hidden gem" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/afde63802_generated_image.png", caption: "Fish goujons — a Schooner classic" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9f927a5c5_generated_image.png", caption: "Great food, cosy atmosphere" },
];

const menuData = [
  {
    category: "🍟 Starters",
    items: [
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/97fce7633_generated_image.png", name: "Garlic Mushrooms", desc: "Pan-fried in garlic butter, cream sauce, toasted bread", price: "€7.50" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9f927a5c5_generated_image.png", name: "Nachos", desc: "Loaded with melted cheese, jalapeños, salsa, sour cream", price: "€8.50" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/7f9d7d078_generated_image.png", name: "Mussels", desc: "Steamed in white wine, garlic and cream, with crusty bread", price: "€10.00" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/afde63802_generated_image.png", name: "Soup of the Day", desc: "Homemade daily soup served with brown bread and butter", price: "€6.00" },
    ],
  },
  {
    category: "🐟 Seafood Mains",
    items: [
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/afde63802_generated_image.png", name: "Fish Goujons", desc: "Crispy golden goujons, tartare sauce, lemon, chunky chips — house favourite", price: "€14.00" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/167b6f98b_generated_image.png", name: "Fish & Chips", desc: "Beer-battered cod, mushy peas, chunky chips, malt vinegar", price: "€14.50" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ab03ab500_generated_image.png", name: "Scampi", desc: "Crispy breaded scampi, tartare sauce, lemon, garden salad", price: "€14.00" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/385f22435_generated_image.png", name: "Hake of the Day", desc: "Pan-fried fresh hake, seasonal vegetables, lemon butter sauce", price: "€16.00" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/385f22435_generated_image.png", name: "Fish of the Day", desc: "Ask your server — fresh catch from East Cork waters", price: "Market Price" },
    ],
  },
  {
    category: "🍔 Pub Classics",
    items: [
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bec3713fa_generated_image.png", name: "Pub Burger", desc: "8oz beef patty, cheddar, bacon, lettuce, tomato, brioche bun, chips", price: "€13.50" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bec3713fa_generated_image.png", name: "Chicken Burger", desc: "Crispy chicken fillet, coleslaw, mayo, brioche bun, chips", price: "€13.00" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9f927a5c5_generated_image.png", name: "Irish Stew", desc: "Slow-cooked lamb, root vegetables, soda bread", price: "€13.50" },
      { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/9f927a5c5_generated_image.png", name: "Irish Lunch Special", desc: "Rotating daily special — ask staff for today's dish", price: "€12.00" },
    ],
  },
];

const reviews = [
  { name: "Grainne H.", platform: "Google ⭐⭐⭐⭐⭐", text: "The Schooner is always our go-to place in East Cork. The fish goujons were divine and so reasonably priced. Despite being full and crazy busy, Tina greeted us with a smile. Food and service is always great — definitely value for money." },
  { name: "Tracey O'S.", platform: "Google ⭐⭐⭐⭐⭐", text: "Fab place and service. Great service from the lovely staff and the food was divine. Gorgeous fresh fish — we had the fish goujons and hake. To our surprise the prices were so reasonable. We'll be back for sure!" },
  { name: "Mark H.", platform: "Google ⭐⭐⭐⭐⭐", text: "Went down to Schooner, I'll go back again — great spot. Adam behind the bar is the best barman I've ever met. He knew I wanted a Coors straight away. A credit to the place." },
  { name: "Jan Murray", platform: "Google ⭐⭐⭐⭐⭐", text: "Great variety of food, very friendly staff. Fish goujons were delicious, as were the nachos — all washed down with an ice cold pint of Coors Light." },
  { name: "Stephen K.", platform: "Google ⭐⭐⭐⭐⭐", text: "One of the nicest, cosiest, cleanest pubs I've ever been in. A must visit. Porter is top notch too." },
];

export default function SchoonerBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [activeMenuCat, setActiveMenuCat] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const NAVY = "#1a2f4a";
  const TEAL = "#2a7a6a";
  const GOLD = "#c8980a";
  const LIGHTGOLD = "#e8b820";
  const TEXT = "#c8d8c0";
  const DIM = "#6a8878";
  const BG = "#0a0f0c";
  const CARD = "#080c09";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: BG, color: "#e8efe0", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: CARD, borderBottom: `2px solid ${TEAL}`, position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>⚓</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: LIGHTGOLD, letterSpacing: 1 }}>The Schooner Bar</div>
            <div style={{ fontSize: "0.58rem", color: DIM, letterSpacing: 3, textTransform: "uppercase" }}>Whitegate · East Cork · Fresh Seafood & Live Music</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8efe0", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: CARD, borderBottom: `1px solid ${TEAL}`, padding: "1rem 1.5rem" }}>
          {[["Gallery","#gallery"],["Menu","#menu"],["Reviews","#reviews"],["Find Us","#findus"]].map(([l, href]) => (
            <a key={l} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid #0f1a12", color: "#e8efe0", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "74vh", minHeight: 420, overflow: "hidden" }}>
        <img src={slides[0].src} alt="The Schooner Bar Whitegate" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,12,9,0.15) 0%, rgba(8,12,9,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: `1px solid ${TEAL}`, color: LIGHTGOLD, padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>⚓ Fresh Seafood · Live Music · East Cork</div>
          <h1 style={{ fontSize: "clamp(2.2rem,8vw,4.2rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>The Schooner Bar</h1>
          <p style={{ color: LIGHTGOLD, fontSize: "1rem", marginBottom: "0.4rem", letterSpacing: 1 }}>Whitegate's hidden gem — fresh fish & great craic</p>
          <p style={{ color: TEXT, fontStyle: "italic", marginBottom: "2rem", maxWidth: 360 }}>"One of the nicest, cosiest pubs I've ever been in." — Google Review ⭐⭐⭐⭐⭐</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214661519" style={{ background: TEAL, color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=Schooner+Bar+Whitegate+Cork" target="_blank" rel="noopener noreferrer" style={{ border: `2px solid ${TEAL}`, color: LIGHTGOLD, padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY */}
        <section id="gallery" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a12" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTGOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(8,12,9,0.9) 0%, transparent 100%)", padding: "1.5rem 1.2rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: LIGHTGOLD, fontSize: "0.9rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: DIM, fontSize: "0.8rem" }}>{current + 1}/{slides.length}</span>
            </div>
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: `1px solid rgba(232,184,32,0.3)`, color: LIGHTGOLD, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: `1px solid rgba(232,184,32,0.3)`, color: LIGHTGOLD, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 4, overflow: "hidden", border: i === current ? `2px solid ${TEAL}` : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 50, objectFit: "cover", opacity: i === current ? 1 : 0.4 }} />
              </div>
            ))}
          </div>
        </section>

        {/* MENU */}
        <section id="menu" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a12" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Food Menu</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTGOLD, fontWeight: "bold", marginBottom: "0.5rem" }}>What We Serve</h2>
          <p style={{ color: TEXT, fontSize: "0.9rem", marginBottom: "2rem", fontStyle: "italic" }}>Fresh seafood, pub classics & great daily specials — all made with local East Cork ingredients</p>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "2px solid #0f1a12" }}>
            {menuData.map((cat, i) => (
              <button key={i} onClick={() => setActiveMenuCat(i)} style={{
                flex: 1, padding: "11px 4px", background: "none", border: "none",
                borderBottom: activeMenuCat === i ? `2px solid ${LIGHTGOLD}` : "2px solid transparent",
                color: activeMenuCat === i ? LIGHTGOLD : DIM,
                fontSize: "0.72rem", letterSpacing: "0.05em", cursor: "pointer",
                fontFamily: "inherit", fontWeight: activeMenuCat === i ? 700 : 400, transition: "all .3s",
                textAlign: "center"
              }}>{cat.category}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {menuData[activeMenuCat].items.map((item, ii) => (
              <div key={ii} style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center" }}>
                <img src={item.img} alt={item.name} style={{ width: 90, height: 90, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ padding: "0.75rem 1rem", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ fontWeight: "bold", color: "#e8efe0", fontSize: "0.95rem" }}>{item.name}</div>
                    <div style={{ color: LIGHTGOLD, fontWeight: "bold", whiteSpace: "nowrap", fontSize: "0.9rem" }}>{item.price}</div>
                  </div>
                  <div style={{ color: TEXT, fontSize: "0.82rem", marginTop: 4, lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: DIM, fontSize: "0.82rem", fontStyle: "italic", textAlign: "center", marginTop: "1.5rem" }}>
            🐟 Fresh catch changes daily · Ask staff for today's specials
          </p>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a12" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>About</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTGOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Whitegate's Hidden Gem</h2>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "1.2rem" }}>
            Tucked into the beautiful East Cork village of Whitegate, The Schooner Bar is one of those rare pubs that gets everything right — fresh food, friendly faces, and an atmosphere that makes you want to stay all evening.
          </p>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "2rem" }}>
            Known across East Cork for their outstanding fresh seafood — particularly the fish goujons and hake — The Schooner is a dog-friendly, community-centred pub with live music, live sports, and a staff that genuinely goes above and beyond. Bartender Adam Daly even remembers your pint before you ask.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🐟", label: "Fresh Local Seafood Daily" },
              { icon: "🎶", label: "Live Music Weekends" },
              { icon: "⚽", label: "Live Sports on TV" },
              { icon: "🐶", label: "Dog Friendly" },
              { icon: "🌊", label: "East Cork Village Setting" },
              { icon: "🍺", label: "Great Pints — Coors, Guinness" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 8, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: TEXT, fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a12" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTGOLD, fontWeight: "bold", marginBottom: "2rem" }}>What People Say</h2>
          {reviews.map(({ name, platform, text }) => (
            <div key={name} style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: DIM, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{platform}</div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: LIGHTGOLD, fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* HOURS + FIND US */}
        <section id="findus" style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTGOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Find Us</h2>

          <div style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 10, overflow: "hidden", marginBottom: "1.2rem" }}>
            {[
              ["Monday – Tuesday", "5:00 PM – 12:00 AM"],
              ["Wednesday", "Closed"],
              ["Thursday", "5:00 PM – 12:00 AM"],
              ["Friday", "4:00 PM – 12:30 AM"],
              ["Saturday", "12:00 PM – 12:30 AM"],
              ["Sunday", "12:30 PM – 12:00 AM"],
            ].map(([d, h], i, arr) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.85rem 1.2rem", borderBottom: i < arr.length - 1 ? "1px solid #0f1a12" : "none", opacity: h === "Closed" ? 0.5 : 1 }}>
                <span style={{ color: TEXT }}>{d}</span>
                <span style={{ color: h === "Closed" ? DIM : LIGHTGOLD, fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #0f1a12", marginBottom: "1.2rem" }}>
            <iframe
              title="The Schooner Bar Whitegate"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.0!2d-8.1580!3d51.8340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844e1234abcdef%3A0x1!2sSchooner+Bar+Whitegate+Cork!5e0!3m2!1sen!2sie!4v1"
              width="100%" height="220"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: LIGHTGOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: TEXT }}>Middle Rd, Mosestown, Whitegate, Co. Cork</div>
              </div>
            </div>
            <a href="tel:+353214661519" style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: LIGHTGOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: TEXT }}>+353 21 466 1519</div>
              </div>
            </a>
            <a href="https://www.facebook.com/schooner.bar.9/" target="_blank" rel="noopener noreferrer" style={{ background: CARD, border: "1px solid #0f1a12", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📘</span>
              <div>
                <div style={{ color: LIGHTGOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Facebook</div>
                <div style={{ color: TEXT }}>Schooner Bar Whitegate</div>
              </div>
            </a>
          </div>

          <a href="https://maps.google.com/?q=Schooner+Bar+Middle+Rd+Whitegate+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: TEAL, color: "#fff", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: CARD, borderTop: `2px solid ${TEAL}`, padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: DIM, fontSize: "0.9rem" }}>© 2025 The Schooner Bar · Middle Rd, Whitegate, Co. Cork · +353 21 466 1519</p>
        <p style={{ color: TEAL, fontSize: "0.75rem", marginTop: "0.4rem" }}>⚓ Fresh Seafood · 🎶 Live Music · ⚽ Live Sports · 🐶 Dog Friendly</p>
      </footer>

      {/* MOBILE NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(8,12,9,0.97)", borderTop: "1px solid #0f1a12", display: "flex" }}>
        {[["⚓","Home","#"],["🍽️","Menu","#menu"],["⭐","Reviews","#reviews"],["📍","Find Us","#findus"]].map(([ic, lb, href]) => (
          <a key={lb} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: DIM, textDecoration: "none", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>
      <div style={{ height: 60 }} />
    </div>
  );
}
