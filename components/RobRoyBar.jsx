"use client";

import { useState } from "react";

const slides = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/fdb4e388f_generated_image.png", caption: "A proper pub — Cobh style" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4abefee34_generated_image.png", caption: "Whiskey & gin selection" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png", caption: "The perfect pint, every time" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a005144d5_generated_image.png", caption: "Find your favourite corner" },
];

const liveMusic = [
  { artist: "Trad Session — The Lanes", day: "Sunday", time: "2:00 PM", genre: "Traditional Irish" },
  { artist: "Tom Murray", day: "Sunday", time: "5:30 PM", genre: "Folk & Ballads" },
  { artist: "Shane Keane", day: "Saturday", time: "10:00 PM", genre: "Live Music" },
  { artist: "Ronan O'Driscoll", day: "Friday", time: "10:00 PM", genre: "Live Music" },
];

const drinks = {
  beers: [
    { name: "Guinness", desc: "Classic Irish stout — perfectly poured", price: "€6.00" },
    { name: "Beamish", desc: "Cork's own — smooth and creamy", price: "€5.80" },
    { name: "Heineken", desc: "Crisp European lager", price: "€5.80" },
    { name: "Hop House 13", desc: "Irish lager with a hoppy twist", price: "€6.20" },
    { name: "White Gypsy Blonde", desc: "Craft blonde ale — light and refreshing", price: "€6.50" },
    { name: "Craft IPA", desc: "Rotating local craft selection", price: "€6.80" },
  ],
  whiskey: [
    { name: "Jameson", desc: "Ireland's most beloved — smooth and approachable", price: "€6.00" },
    { name: "Redbreast 12", desc: "Single pot still — rich and complex", price: "€9.00" },
    { name: "Teeling Single Grain", desc: "Dublin distillery — light and fruity", price: "€8.50" },
    { name: "Connemara Peated", desc: "Irish peated whiskey — smoky and rare", price: "€9.50" },
    { name: "Powers Gold Label", desc: "A Cork favourite — spicy and warm", price: "€6.00" },
    { name: "Midleton Very Rare", desc: "Premium Irish — ask your bartender", price: "€POA" },
  ],
  gin: [
    { name: "Dingle Gin", desc: "Kerry botanicals — floral and citrus", price: "€7.50" },
    { name: "Gunpowder Irish Gin", desc: "Juniper-forward with citrus peel", price: "€7.50" },
    { name: "Hendrick's", desc: "Scottish classic — cucumber & rose", price: "€7.50" },
    { name: "Tanqueray", desc: "Crisp London Dry — a timeless classic", price: "€7.00" },
  ],
  food: [
    { name: "Soup of the Day", desc: "Homemade, served with brown bread", price: "€6.50" },
    { name: "Fish & Chips", desc: "Beer-battered cod, chunky chips, mushy peas", price: "€14.00" },
    { name: "Sea Bass", desc: "Pan-fried, seasonal vegetables", price: "€16.00" },
    { name: "Pub Burger", desc: "8oz beef, cheddar, bacon, brioche bun", price: "€13.50" },
    { name: "Irish Stew", desc: "Slow-cooked lamb, root vegetables, soda bread", price: "€14.00" },
    { name: "Veggie Option", desc: "Ask staff — rotating plant-based dish", price: "€11.00" },
  ],
};

export default function RobRoyBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("beers");
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const BLUE = "#3a5a8a";
  const LIGHTBLUE = "#8ab0d8";
  const TEXT = "#c0d0e0";
  const DIM = "#7a9abe";
  const BG = "#0a0c10";
  const CARD = "#060809";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: BG, color: "#e8dfc8", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: CARD, borderBottom: `2px solid ${BLUE}`, position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>⚔️</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: LIGHTBLUE, letterSpacing: 1 }}>The Rob Roy Bar</div>
            <div style={{ fontSize: "0.58rem", color: DIM, letterSpacing: 3, textTransform: "uppercase" }}>Est. 1824 · Pearse Square · Cobh · Co. Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8dfc8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: CARD, borderBottom: `1px solid ${BLUE}`, padding: "1rem 1.5rem" }}>
          {[["Gallery","#gallery"],["Drinks & Food","#drinks"],["Live Music","#livemusic"],["Reviews","#reviews"],["Find Us","#findus"]].map(([l, href]) => (
            <a key={l} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid #0f1218", color: "#e8dfc8", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={slides[0].src} alt="Rob Roy Bar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,8,9,0.2) 0%, rgba(6,8,9,0.93) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: `1px solid ${BLUE}`, color: LIGHTBLUE, padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>🎶 Live Music Every Weekend · Est. 1824</div>
          <h1 style={{ fontSize: "clamp(2rem,7vw,3.8rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.1, marginBottom: "0.5rem" }}>The Rob Roy Bar</h1>
          <p style={{ color: LIGHTBLUE, fontSize: "1rem", marginBottom: "0.5rem" }}>Cobh's finest — craft beers, gins, whiskeys & live music</p>
          <p style={{ color: "#a0c0e0", fontStyle: "italic", marginBottom: "2rem" }}>"Coolest bar in Cobh. Live music most weekends. Well worth a visit." — Yelp</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353857162793" style={{ background: BLUE, color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=Rob+Roy+Bar+Pearse+Square+Cobh+Cork" target="_blank" rel="noopener noreferrer" style={{ border: `2px solid ${BLUE}`, color: LIGHTBLUE, padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      {/* LIVE MUSIC BANNER */}
      <div id="livemusic" style={{ background: "linear-gradient(135deg, #0d1a2e 0%, #060d1a 100%)", borderTop: `3px solid ${BLUE}`, borderBottom: `3px solid ${BLUE}`, padding: "2.2rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
            <span style={{ fontSize: 22 }}>🎶</span>
            <span style={{ color: LIGHTBLUE, fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", fontWeight: "bold" }}>Live Music — Every Weekend</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "1rem" }}>
            {liveMusic.map((event, i) => (
              <div key={i} style={{ background: "rgba(58,90,138,0.15)", border: "1px solid rgba(58,90,138,0.4)", borderRadius: 10, padding: "1rem 1.4rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: "bold", color: "#c8dff0", marginBottom: 3 }}>🎸 {event.artist}</div>
                  <div style={{ color: TEXT, fontSize: "0.88rem" }}>📅 {event.day} &nbsp;·&nbsp; ⏰ {event.time}</div>
                  <div style={{ color: DIM, fontSize: "0.78rem", marginTop: 3, fontStyle: "italic" }}>{event.genre} · Free entry</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: DIM, fontSize: "0.8rem", fontStyle: "italic" }}>* Follow @robroybarcobh on Instagram for latest schedule</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY */}
        <section id="gallery" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1218" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(6,8,9,0.88) 0%, transparent 100%)", padding: "1.5rem 1.2rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: LIGHTBLUE, fontSize: "0.9rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: DIM, fontSize: "0.8rem" }}>{current + 1}/{slides.length}</span>
            </div>
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(138,176,216,0.3)", color: LIGHTBLUE, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(138,176,216,0.3)", color: LIGHTBLUE, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 4, overflow: "hidden", border: i === current ? `2px solid ${BLUE}` : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 50, objectFit: "cover", opacity: i === current ? 1 : 0.4 }} />
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1218" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>About</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>Est. 1824 — Cobh's Heritage Pub</h2>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "1.2rem" }}>
            Since 1824, The Rob Roy Bar has been welcoming locals, seafarers, and travellers at the heart of Cobh's Pearse Square. Two centuries of history, maritime charm, and some of the best craic in Cork Harbour.
          </p>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "2rem" }}>
            Ideally located near the Titanic Experience and Cobh Heritage Centre, it's the perfect stop whether you're exploring the town or just need a proper pint. Walls lined with maritime memorabilia, cosy booths, and live music every weekend.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🎶", label: "Live Music Every Weekend" },
              { icon: "📶", label: "Free WiFi" },
              { icon: "🍺", label: "Craft Beers on Tap" },
              { icon: "🥃", label: "Irish Whiskey & Gin Selection" },
              { icon: "🍽️", label: "Homemade Food Menu" },
              { icon: "⚓", label: "Est. 1824 — Maritime Heritage" },
              { icon: "🎲", label: "Board Games — Back Room" },
              { icon: "📍", label: "Near Titanic Experience" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 8, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: TEXT, fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DRINKS & FOOD */}
        <section id="drinks" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1218" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Serve</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>Drinks & Food</h2>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 28, borderBottom: `2px solid #1a2030` }}>
            {[["beers","🍺 Beers"],["whiskey","🥃 Whiskey"],["gin","🌿 Gin"],["food","🍽️ Food"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{
                flex: 1, padding: "11px 4px", background: "none", border: "none",
                borderBottom: activeTab === k ? `2px solid ${LIGHTBLUE}` : "2px solid transparent",
                color: activeTab === k ? LIGHTBLUE : DIM,
                fontSize: "0.78rem", letterSpacing: "0.1em", cursor: "pointer",
                fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400, transition: "all .3s"
              }}>{l}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {drinks[activeTab].map((item, i) => (
              <div key={i} style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div>
                  <div style={{ color: "#e8dfc8", fontWeight: "bold", marginBottom: 3 }}>{item.name}</div>
                  <div style={{ color: TEXT, fontSize: "0.82rem" }}>{item.desc}</div>
                </div>
                <div style={{ color: LIGHTBLUE, fontWeight: "bold", whiteSpace: "nowrap", fontSize: "0.95rem" }}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1218" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "2rem" }}>What People Say</h2>
          {[
            { name: "Yelp Reviewer", platform: "Yelp ⭐⭐⭐⭐⭐", text: "Coolest bar in Cobh. Live music most weekends. Quiet during the week but really busy Saturdays. Well worth a visit." },
            { name: "TripAdvisor Guest", platform: "TripAdvisor ⭐⭐⭐⭐⭐", text: "Very friendly staff, lots of great beers, and traditional Irish music. We had a beer at the bar and visited with the bartender before going sightseeing. The owner is a very talented banjo player!" },
            { name: "Wanderlog", platform: "Wanderlog ⭐⭐⭐⭐⭐", text: "The Rob Roy was the perfect place for our first pints in Ireland. Recommended by a local, and he did not let me down. The local beers were wonderful — a proper Irish welcome." },
            { name: "Michael S.", platform: "Google ⭐⭐⭐⭐⭐", text: "Great local pub. Clean, great pints, great staff and live music. What's not to like." },
            { name: "Yelp — Craft Beer Fan", platform: "Yelp ⭐⭐⭐⭐⭐", text: "I tried a White Gypsy Blonde which was quite good. Very friendly atmosphere, bar staff were terrific. Lots of beer on tap." },
          ].map(({ name, platform, text }) => (
            <div key={name} style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: DIM, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{platform}</div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: LIGHTBLUE, fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* HOURS */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1218" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>We're Open</h2>
          <div style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 10, overflow: "hidden" }}>
            {[["Mon – Thu", "12:00 – 23:30"], ["Fri – Sat", "12:00 – 00:30"], ["Sunday", "12:00 – 23:00"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #0f1218" : "none" }}>
                <span style={{ color: TEXT }}>{d}</span>
                <span style={{ color: LIGHTBLUE, fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FIND US */}
        <section id="findus" style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: LIGHTBLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a2030", marginBottom: "1.2rem" }}>
            <iframe
              title="Rob Roy Bar Cobh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5!2d-8.2980!3d51.8510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484460a0b7d3e7c1%3A0x1!2sRob%20Roy%20Bar%2C%20Pearse%20Sq%2C%20Cobh!5e0!3m2!1sen!2sie!4v1"
              width="100%" height="220"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: LIGHTBLUE, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: TEXT }}>2/3 Pearse Square, Cobh, Co. Cork</div>
              </div>
            </div>
            <a href="tel:+353857162793" style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: LIGHTBLUE, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: TEXT }}>+353 85 716 2793</div>
              </div>
            </a>
            <a href="https://www.instagram.com/robroybarcobh/" target="_blank" rel="noopener noreferrer" style={{ background: CARD, border: "1px solid #1a2030", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📸</span>
              <div>
                <div style={{ color: LIGHTBLUE, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Instagram</div>
                <div style={{ color: TEXT }}>@robroybarcobh</div>
              </div>
            </a>
          </div>
          <a href="https://maps.google.com/?q=Rob+Roy+Bar+Pearse+Square+Cobh+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: BLUE, color: "#fff", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: CARD, borderTop: `2px solid ${BLUE}`, padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: DIM, fontSize: "0.9rem" }}>© 2025 The Rob Roy Bar · 2/3 Pearse Square, Cobh · Co. Cork · Est. 1824</p>
        <p style={{ color: BLUE, fontSize: "0.75rem", marginTop: "0.4rem" }}>🎶 Live Music Every Weekend · 🍺 Craft Beers · 🥃 Whiskey & Gin</p>
      </footer>

      {/* MOBILE NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(6,8,9,0.97)", borderTop: "1px solid #1a2030", display: "flex" }}>
        {[["⚔️","Home","#"],["🎶","Music","#livemusic"],["🍺","Drinks","#drinks"],["⭐","Reviews","#reviews"],["📍","Find Us","#findus"]].map(([ic, lb, href]) => (
          <a key={lb} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: DIM, textDecoration: "none", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>
      <div style={{ height: 60 }} />
    </div>
  );
}
