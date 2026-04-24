"use client";
import { useState } from "react";

const slides = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/fdb4e388f_generated_image.png", caption: "200+ years of Cork hospitality" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4abefee34_generated_image.png", caption: "Extensive whiskey & spirits selection" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png", caption: "The perfect pint, every time" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a005144d5_generated_image.png", caption: "Sports on every screen, all day" },
];

const whiskeys = [
  { name: "Jameson", type: "Irish Blended", price: "€6.00" },
  { name: "Redbreast 12", type: "Single Pot Still", price: "€9.00" },
  { name: "Powers Gold Label", type: "Irish Blended", price: "€6.00" },
  { name: "Teeling Single Grain", type: "Dublin Distillery", price: "€8.50" },
  { name: "Connemara Peated", type: "Irish Single Malt", price: "€9.50" },
  { name: "Bushmills Black Bush", type: "Irish Blended", price: "€7.00" },
  { name: "Writers Tears", type: "Pot Still & Malt Blend", price: "€8.00" },
  { name: "Green Spot", type: "Single Pot Still", price: "€9.00" },
];

const gins = [
  { name: "Dingle Gin", type: "Kerry Botanicals", price: "€7.50" },
  { name: "Gunpowder Irish Gin", type: "Juniper & Citrus", price: "€7.50" },
  { name: "Pink Gin", type: "House Favourite", price: "€7.00" },
  { name: "Hendrick's", type: "Scottish Classic", price: "€7.50" },
  { name: "Tanqueray", type: "London Dry", price: "€7.00" },
  { name: "Bombay Sapphire", type: "Light & Floral", price: "€7.00" },
];

const sports = [
  { icon: "⚽", sport: "Soccer / Football", note: "All Premier League, Champions League & FAI" },
  { icon: "🏉", sport: "Rugby", note: "Six Nations, Heineken Cup & URC" },
  { icon: "🏐", sport: "GAA", note: "All county championship & All-Ireland games" },
  { icon: "🥊", sport: "Boxing", note: "All major fights live" },
  { icon: "🏇", sport: "Horse Racing", note: "Full Cheltenham & Galway coverage" },
];

const reviews = [
  { name: "TripAdvisor Guest", platform: "TripAdvisor ⭐⭐⭐⭐⭐", text: "Great atmosphere and friendly staff. The pink gin is delicious too!! Good music on around 9PM also. Highly recommend." },
  { name: "Declan F.", platform: "TripAdvisor ⭐⭐⭐⭐⭐", text: "Loads of fun and the DJ was excellent. Bar staff were so helpful. Fun, lively and a place you would be very welcome. Great local pub." },
  { name: "Yelp Reviewer", platform: "Yelp ⭐⭐⭐⭐", text: "Great traditional pub which is popular with the locals. It's an excellent place to watch sports. Friendly staff, good atmosphere." },
  { name: "Middlesbrough Fan", platform: "TripAdvisor ⭐⭐⭐⭐⭐", text: "Watched a football game here, then a DJ started — the whole busy pub was singing along to Beatles songs. Brilliant night, brilliant pub." },
  { name: "Cork Local", platform: "Google ⭐⭐⭐⭐⭐", text: "One of Cork's oldest pubs. Been coming here for years. Good pints, great staff, always a great atmosphere on match days." },
];

export default function RobRoyCorkCity() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("whiskey");
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const RED = "#8a1a1a";
  const LIGHTRED = "#c84040";
  const GOLD = "#c8a060";
  const TEXT = "#d0c0a8";
  const DIM = "#9a8060";
  const BG = "#0c0a08";
  const CARD = "#110e0a";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: BG, color: "#e8dfc8", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#080604", borderBottom: `2px solid ${RED}`, position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>⚔️</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: GOLD, letterSpacing: 1 }}>The Rob Roy</div>
            <div style={{ fontSize: "0.58rem", color: DIM, letterSpacing: 3, textTransform: "uppercase" }}>Est. 200+ Years · Cook Street · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8dfc8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#080604", borderBottom: `1px solid ${RED}`, padding: "1rem 1.5rem" }}>
          {[["Gallery","#gallery"],["Sports","#sports"],["Whiskey & Gin","#drinks"],["Private Bar","#private"],["Reviews","#reviews"],["Find Us","#findus"]].map(([l, href]) => (
            <a key={l} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid #1a1208", color: "#e8dfc8", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={slides[0].src} alt="The Rob Roy Cork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,6,4,0.2) 0%, rgba(8,6,4,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: `1px solid ${RED}`, color: GOLD, padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>🏆 Sports Bar · Traditional Irish Pub · Cork City Centre</div>
          <h1 style={{ fontSize: "clamp(2.2rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>The Rob Roy</h1>
          <p style={{ color: GOLD, fontSize: "1rem", marginBottom: "0.4rem", letterSpacing: 2 }}>Cork's Oldest Sports Bar — Over 200 Years</p>
          <p style={{ color: TEXT, fontStyle: "italic", marginBottom: "2rem", maxWidth: 360 }}>"Fun, lively and a place you would be very welcome." — TripAdvisor</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214272777" style={{ background: RED, color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=28+Cook+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ border: `2px solid ${RED}`, color: GOLD, padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      {/* SPORTS BANNER */}
      <div id="sports" style={{ background: "linear-gradient(135deg, #1a0808 0%, #0e0504 100%)", borderTop: `3px solid ${RED}`, borderBottom: `3px solid ${RED}`, padding: "2.2rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
            <span style={{ fontSize: 22 }}>📺</span>
            <span style={{ color: GOLD, fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", fontWeight: "bold" }}>Live Sports — Every Game, Every Screen</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {sports.map((s, i) => (
              <div key={i} style={{ background: "rgba(138,26,26,0.12)", border: "1px solid rgba(138,26,26,0.35)", borderRadius: 10, padding: "1rem" }}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ color: GOLD, fontWeight: "bold", fontSize: "0.95rem", marginBottom: 3 }}>{s.sport}</div>
                <div style={{ color: TEXT, fontSize: "0.8rem" }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY */}
        <section id="gallery" style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(8,6,4,0.9) 0%, transparent 100%)", padding: "1.5rem 1.2rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: GOLD, fontSize: "0.9rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: DIM, fontSize: "0.8rem" }}>{current + 1}/{slides.length}</span>
            </div>
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(200,160,96,0.3)", color: GOLD, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(200,160,96,0.3)", color: GOLD, fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 4, overflow: "hidden", border: i === current ? `2px solid ${RED}` : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 50, objectFit: "cover", opacity: i === current ? 1 : 0.4 }} />
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>About</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Cork's Oldest & Most Loved</h2>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "1.2rem" }}>
            Tucked into Cook Street, steps from Oliver Plunkett Street and Patrick Street, The Rob Roy is one of Cork City's oldest and most beloved traditional Irish pubs — serving customers for over 200 years.
          </p>
          <p style={{ color: TEXT, lineHeight: 1.9, marginBottom: "2rem" }}>
            Whether you're in for a quiet pint on a weekday, catching a live match on the big screens, or joining the craic on a Saturday night with DJ and live music — The Rob Roy delivers every time. Particularly popular with the over-23s crowd who know what a proper pub should feel like.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "📺", label: "Live Sports Every Day" },
              { icon: "🥃", label: "Whiskeys & Gins Selection" },
              { icon: "🎶", label: "DJ & Live Music Nights" },
              { icon: "🎉", label: "Private Bar for Events" },
              { icon: "🏙️", label: "Cork City Centre Location" },
              { icon: "🕐", label: "Open from 11am Daily" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 8, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: TEXT, fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHISKEY & GIN */}
        <section id="drinks" style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Spirits Selection</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Whiskey & Gin</h2>
          <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            We stock an extensive range of Irish whiskeys, gins, vodkas and other spirits. Not sure where to start? Our friendly staff will find the perfect drink for your taste.
          </p>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "2px solid #1a1208" }}>
            {[["whiskey","🥃 Whiskey"],["gin","🌿 Gin"]].map(([k, l]) => (
              <button key={k} onClick={() => setActiveTab(k)} style={{
                flex: 1, padding: "11px 4px", background: "none", border: "none",
                borderBottom: activeTab === k ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === k ? GOLD : DIM,
                fontSize: "0.88rem", letterSpacing: "0.1em", cursor: "pointer",
                fontFamily: "inherit", fontWeight: activeTab === k ? 700 : 400
              }}>{l}</button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {(activeTab === "whiskey" ? whiskeys : gins).map((item, i) => (
              <div key={i} style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div>
                  <div style={{ color: "#e8dfc8", fontWeight: "bold", marginBottom: 3 }}>{item.name}</div>
                  <div style={{ color: TEXT, fontSize: "0.82rem" }}>{item.type}</div>
                </div>
                <div style={{ color: GOLD, fontWeight: "bold", whiteSpace: "nowrap" }}>{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRIVATE BAR */}
        <section id="private" style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Events & Functions</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Private Bar</h2>
          <p style={{ color: TEXT, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            The Rob Roy is delighted to cater for group occasions — birthdays, corporate events, sports parties and more. Choose from our Main Bar section or book the exclusive First Floor Private Bar.
          </p>
          {[
            { title: "Option 1 — Main Bar", icon: "🍺", points: ["Reserved seating for your group", "1 Bottle of Prosecco on arrival", "Special party beer & spirit prices", "Free or value party food menu"] },
            { title: "Option 2 — Private Bar", icon: "🎉", points: ["Exclusive First Floor Private Bar", "Catering for 20+ guests", "€50 deposit (refunded on the night)", "1 Bottle of Prosecco + party prices + food menu"] },
          ].map((pkg, i) => (
            <div key={i} style={{ background: CARD, border: `1px solid ${i === 1 ? RED : "#1a1208"}`, borderRadius: 10, padding: "1.4rem", marginBottom: "1rem" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{pkg.icon}</div>
              <div style={{ color: GOLD, fontWeight: "bold", fontSize: "1.05rem", marginBottom: 10 }}>{pkg.title}</div>
              {pkg.points.map((p, j) => (
                <div key={j} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: RED }}>✓</span>
                  <span style={{ color: TEXT, fontSize: "0.9rem" }}>{p}</span>
                </div>
              ))}
            </div>
          ))}
          <a href="tel:+353214272777" style={{ display: "block", background: RED, color: "#fff", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem", marginTop: "0.5rem" }}>
            📞 Book Your Party — Call Us
          </a>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "2rem" }}>What People Say</h2>
          {reviews.map(({ name, platform, text }) => (
            <div key={name} style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: DIM, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{platform}</div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: GOLD, fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* HOURS + FIND US */}
        <section id="findus" style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: GOLD, fontWeight: "bold", marginBottom: "1.5rem" }}>Find Us</h2>

          <div style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 10, overflow: "hidden", marginBottom: "1.2rem" }}>
            {[["Monday – Saturday", "11:00 AM – Late"], ["Sunday", "12:30 PM – Late"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 1 ? "1px solid #1a1208" : "none" }}>
                <span style={{ color: TEXT }}>{d}</span>
                <span style={{ color: GOLD, fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a1208", marginBottom: "1.2rem" }}>
            <iframe
              title="The Rob Roy Cork City"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.8!2d-8.4760!3d51.8990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484490342b1b21b7%3A0x1!2s28%20Cook%20St%2C%20Cork!5e0!3m2!1sen!2sie!4v1"
              width="100%" height="220"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: GOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: TEXT }}>28/29 Cook Street, Cork City, T12 YF70</div>
                <div style={{ color: DIM, fontSize: "0.82rem", marginTop: 2 }}>Adjacent to Oliver Plunkett St & Patrick St</div>
              </div>
            </div>
            <a href="tel:+353214272777" style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: GOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: TEXT }}>+353 21 427 2777</div>
              </div>
            </a>
            <a href="mailto:info.robroybar@gmail.com" style={{ background: CARD, border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>✉️</span>
              <div>
                <div style={{ color: GOLD, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Email</div>
                <div style={{ color: TEXT }}>info.robroybar@gmail.com</div>
              </div>
            </a>
          </div>
          <a href="https://maps.google.com/?q=28+Cook+Street+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: RED, color: "#fff", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: "#080604", borderTop: `2px solid ${RED}`, padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: DIM, fontSize: "0.9rem" }}>© 2025 The Rob Roy · 28/29 Cook Street, Cork City · +353 21 427 2777</p>
        <p style={{ color: RED, fontSize: "0.75rem", marginTop: "0.4rem" }}>📺 Live Sports · 🥃 Whiskey & Gin · 🎉 Private Bar Available</p>
      </footer>

      {/* MOBILE NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(8,6,4,0.97)", borderTop: "1px solid #1a1208", display: "flex" }}>
        {[["⚔️","Home","#"],["📺","Sports","#sports"],["🥃","Drinks","#drinks"],["🎉","Events","#private"],["📍","Find Us","#findus"]].map(([ic, lb, href]) => (
          <a key={lb} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: DIM, textDecoration: "none", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>
      <div style={{ height: 60 }} />
    </div>
  );
}
