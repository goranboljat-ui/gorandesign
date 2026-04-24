"use client";

import { useState } from "react";

const heroImg = "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/fc7e75b68_generated_image.png";

const pizzas = [
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5d4023d6a_generated_image.png",
    name: "Margherita",
    desc: "Tomato sauce, fresh mozzarella, basil (vgo)",
    price: "€13",
    tag: "Vegetarian",
  },
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ded22f643_generated_image.png",
    name: "Mushroom Truffle",
    desc: "Mushrooms, truffle oil, mozzarella, fresh parsley (vgo)",
    price: "€14",
    tag: "Vegetarian",
  },
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/16093fd64_generated_image.png",
    name: "Pepperoni",
    desc: "Tomato sauce, mozzarella, generous pepperoni — a classic",
    price: "€14",
    tag: "Best Seller",
  },
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/553131ffd_generated_image.png",
    name: "BBQ Chicken",
    desc: "BBQ base, grilled chicken, red onion, cheddar & mozzarella",
    price: "€15",
    tag: null,
  },
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/22153fbd1_generated_image.png",
    name: "Four Cheese",
    desc: "Mozzarella, gorgonzola, parmesan, ricotta, honey drizzle",
    price: "€15",
    tag: null,
  },
  {
    img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/16093fd64_generated_image.png",
    name: "Big Blue Special",
    desc: "Pepperoni, mushroom, olives, roasted peppers, mozzarella",
    price: "€16",
    tag: "House Favourite",
  },
];

const reviews = [
  { name: "Sarah M.", stars: 5, text: "Two pepperoni pizzas and a bag of chips — absolutely delicious! The bases are perfect, not too doughy, the right amount of tomato and cheese. And that sea view while you eat? Unreal." },
  { name: "Ciarán B.", stars: 5, text: "Hands down the best pizza in East Cork. Thin base, quality toppings, and you're eating with the Atlantic right in front of you. What more could you want?" },
  { name: "Emma K.", stars: 5, text: "Found this place by accident on a Sunday drive. The mushroom truffle pizza was incredible. The terrace setting with the sea breeze — we'll definitely be back." },
];

export default function BigBluePizza() {
  const [menuOpen, setMenuOpen] = useState(false);

  const BLUE = "#0a2a4a";
  const MIDBLUE = "#1a4a7a";
  const ACCENT = "#1e90d0";
  const GOLD = "#f0a020";
  const BG = "#f0f6ff";
  const WHITE = "#ffffff";
  const TEXT = "#1a2a3a";
  const DIM = "#5a7a9a";

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: BG, color: TEXT, minHeight: "100vh" }}>

      {/* NAV — bez subtitle */}
      <nav style={{ background: BLUE, borderBottom: `3px solid ${ACCENT}`, position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🍕</span>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: WHITE, letterSpacing: 1 }}>Big Blue Pizza</div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: WHITE, fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: BLUE, borderBottom: `1px solid ${ACCENT}`, padding: "1rem 1.5rem" }}>
          {[["🍕 Menu", "#menu"], ["⭐ Reviews", "#reviews"], ["📍 Find Us", "#findus"]].map(([l, href]) => (
            <a key={l} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", borderBottom: `1px solid ${MIDBLUE}`, color: WHITE, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "76vh", minHeight: 440, overflow: "hidden" }}>
        <img src={heroImg} alt="Big Blue Pizza Ballycotton sea view" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,42,74,0.2) 0%, rgba(10,42,74,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: `1px solid ${ACCENT}`, color: ACCENT, padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>🌊 Ballycotton · East Cork · Open Terrace with Sea View</div>
          <h1 style={{ fontSize: "clamp(2.4rem,9vw,4.5rem)", fontWeight: "bold", color: WHITE, lineHeight: 1.05, marginBottom: "0.5rem" }}>Big Blue Pizza</h1>
          <p style={{ color: ACCENT, fontSize: "1rem", letterSpacing: 2, marginBottom: "0.5rem" }}>Thin crust · Made fresh to order · Eat with the Atlantic in front of you</p>
          <p style={{ color: "#a0c0e0", fontStyle: "italic", marginBottom: "2rem", maxWidth: 380 }}>"The bases are perfect — and that sea view while you eat? Unreal."</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353834346578" style={{ background: ACCENT, color: WHITE, padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Order Now</a>
            <a href="#menu" style={{ border: `2px solid ${ACCENT}`, color: WHITE, padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>🍕 See Menu</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* SEA VIEW HIGHLIGHT */}
        <section style={{ padding: "3rem 0", borderBottom: `1px solid #c0d8f0` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🌊", title: "Sea View Terrace", desc: "Eat your pizza with the Atlantic Ocean right in front of you — Ballycotton Bay at its finest" },
              { icon: "🍕", title: "Fresh to Order", desc: "Every pizza stretched and topped to order. Thin base, quality ingredients, proper char" },
              { icon: "☀️", title: "Open Air Dining", desc: "Outdoor terrace open when the sun shows up — and sometimes when it doesn't" },
              { icon: "🔥", title: "Stone Baked", desc: "Traditional pizza oven for that crispy base and perfectly melted toppings every time" },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: BLUE, fontSize: "0.9rem", marginBottom: 6 }}>{title}</div>
                <div style={{ color: DIM, fontSize: "0.78rem", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MENU */}
        <section id="menu" style={{ padding: "3.5rem 0", borderBottom: `1px solid #c0d8f0` }}>
          {/* Veliki naslov prije menija */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ color: DIM, letterSpacing: 4, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.75rem" }}>🌊 Ballycotton · East Cork</p>
            <h2 style={{ fontSize: "clamp(1.6rem,6vw,2.6rem)", color: BLUE, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 3, lineHeight: 1.2, marginBottom: "0.5rem" }}>
              OPEN TERRACE<br/>WITH SEA VIEW
            </h2>
            <div style={{ width: 60, height: 3, background: ACCENT, margin: "1rem auto 1.5rem" }} />
            <p style={{ color: DIM, fontSize: "0.9rem", fontStyle: "italic" }}>Thin crust · Stone baked · Made fresh to order · Gluten-free base available</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {pizzas.map((p, i) => (
              <div key={i} style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center" }}>
                <img src={p.img} alt={p.name} style={{ width: 100, height: 100, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ padding: "0.75rem 1rem", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: "bold", color: BLUE, fontSize: "0.98rem" }}>{p.name}</span>
                      {p.tag && (
                        <span style={{ background: p.tag === "Best Seller" ? GOLD : p.tag === "House Favourite" ? ACCENT : "#e0f0e0", color: p.tag === "Best Seller" ? "#5a3000" : p.tag === "House Favourite" ? WHITE : "#2a6a2a", fontSize: "0.62rem", padding: "2px 8px", borderRadius: 20, fontWeight: "bold", letterSpacing: 0.5, textTransform: "uppercase" }}>{p.tag}</span>
                      )}
                    </div>
                    <div style={{ color: ACCENT, fontWeight: "bold", whiteSpace: "nowrap", fontSize: "1rem" }}>{p.price}</div>
                  </div>
                  <div style={{ color: DIM, fontSize: "0.82rem", marginTop: 4, lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Sides */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.1rem", color: BLUE, fontWeight: "bold", marginBottom: "1rem", display: "inline-block", borderBottom: `2px solid ${ACCENT}`, paddingBottom: "0.3rem" }}>🍟 Sides</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "Pickly Fries", desc: "House fries with seasoning", price: "€5" },
                { name: "Garlic Bread", desc: "Toasted with garlic butter", price: "€4" },
              ].map((s) => (
                <div key={s.name} style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 10, padding: "0.85rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: "bold", color: BLUE }}>{s.name}</div>
                    <div style={{ color: DIM, fontSize: "0.8rem" }}>{s.desc}</div>
                  </div>
                  <div style={{ color: ACCENT, fontWeight: "bold" }}>{s.price}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ color: DIM, fontSize: "0.82rem", fontStyle: "italic", textAlign: "center", marginTop: "1.5rem" }}>🌿 Gluten-free base available · Vegan cheese on request</p>
        </section>

        {/* REVIEWS */}
        <section id="reviews" style={{ padding: "3.5rem 0", borderBottom: `1px solid #c0d8f0` }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: BLUE, fontWeight: "bold", marginBottom: "2rem" }}>What People Say</h2>
          {reviews.map(({ name, stars, text }) => (
            <div key={name} style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: GOLD, marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: DIM, fontSize: "0.82rem" }}>— {name}, Google Review</span>
            </div>
          ))}
        </section>

        {/* HOURS + FIND US */}
        <section id="findus" style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: DIM, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: BLUE, fontWeight: "bold", marginBottom: "1.5rem" }}>Find Us</h2>

          <div style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 10, overflow: "hidden", marginBottom: "1.2rem" }}>
            {[
              ["Monday – Wednesday", "Closed"],
              ["Thursday – Friday", "4:00 PM – 8:00 PM"],
              ["Saturday – Sunday", "1:00 PM – 8:00 PM"],
            ].map(([d, h], i, arr) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < arr.length - 1 ? `1px solid #c0d8f0` : "none", opacity: h === "Closed" ? 0.45 : 1 }}>
                <span style={{ color: TEXT }}>{d}</span>
                <span style={{ color: h === "Closed" ? DIM : ACCENT, fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>

          <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid #c0d8f0`, marginBottom: "1.2rem" }}>
            <iframe
              title="Big Blue Pizza Ballycotton"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.0!2d-8.0050!3d51.8260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmlnIEJsdWUgUGl6emEgQmFsbHljb3R0b24!5e0!3m2!1sen!2sie!4v1"
              width="100%" height="220"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <div style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: TEXT }}>Ballycotton, Co. Cork, Ireland</div>
              </div>
            </div>
            <a href="tel:+353834346578" style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: TEXT }}>083 434 6578</div>
              </div>
            </a>
            <a href="mailto:bigbluecork@gmail.com" style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>✉️</span>
              <div>
                <div style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Email</div>
                <div style={{ color: TEXT }}>bigbluecork@gmail.com</div>
              </div>
            </a>
            <a href="https://www.instagram.com/big_blue_pizza/" target="_blank" rel="noopener noreferrer" style={{ background: WHITE, border: `1px solid #c0d8f0`, borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}>
              <span>📸</span>
              <div>
                <div style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Instagram</div>
                <div style={{ color: TEXT }}>@big_blue_pizza</div>
              </div>
            </a>
          </div>

          <a href="https://maps.google.com/?q=Big+Blue+Pizza+Ballycotton+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: ACCENT, color: WHITE, padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: BLUE, borderTop: `2px solid ${ACCENT}`, padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#a0c0e0", fontSize: "0.9rem" }}>© 2025 Big Blue Pizza · Ballycotton, Co. Cork · 083 434 6578</p>
        <p style={{ color: ACCENT, fontSize: "0.75rem", marginTop: "0.4rem" }}>🌊 Sea View Terrace · 🍕 Fresh to Order · 🔥 Stone Baked</p>
      </footer>

      {/* MOBILE NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: `rgba(10,42,74,0.97)`, borderTop: `1px solid ${MIDBLUE}`, display: "flex" }}>
        {[["🍕", "Menu", "#menu"], ["⭐", "Reviews", "#reviews"], ["📍", "Find Us", "#findus"], ["📞", "Order", "tel:+353834346578"]].map(([ic, lb, href]) => (
          <a key={lb} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: "#a0c0e0", textDecoration: "none", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>
      <div style={{ height: 60 }} />
    </div>
  );
}
