"use client";
import { useState } from "react";

const menuCategories = [
  { name: "Starters", items: [
    { name: "Soup of the Day", price: "€7", desc: "Served with brown bread" },
    { name: "Garlic Bread", price: "€5", desc: "Toasted sourdough with garlic butter" },
    { name: "Calamari", price: "€10", desc: "Crispy squid rings with aioli" },
  ]},
  { name: "Mains", items: [
    { name: "Beef Burger", price: "€16", desc: "Aged beef patty, cheddar, lettuce, tomato" },
    { name: "Chicken Caesar", price: "€14", desc: "Grilled chicken, romaine, parmesan, croutons" },
    { name: "Fish & Chips", price: "€15", desc: "Fresh cod in beer batter, mushy peas, tartare" },
    { name: "Vegan Bowl", price: "€13", desc: "Roasted veg, quinoa, tahini dressing" },
  ]},
  { name: "Desserts", items: [
    { name: "Chocolate Fondant", price: "€8", desc: "Warm chocolate cake with vanilla ice cream" },
    { name: "Cheesecake", price: "€7", desc: "Classic New York style with berry coulis" },
  ]},
];

const testimonials = [
  { name: "Sean O.", text: "Best burger in Cork city, no question. Always fresh, always great service.", stars: 5 },
  { name: "Aoife M.", text: "Love this place — cosy, affordable and the food is consistently excellent.", stars: 5 },
  { name: "Mark D.", text: "Great spot for a casual dinner. The fish & chips are unreal.", stars: 5 },
];

export default function Nosh19() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#111", color: "#eee", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#1a1a1a", borderBottom: "3px solid #d4282a", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "26px" }}>🍜</span>
          <div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#d4282a" }}>Nosh 19</div>
            <div style={{ fontSize: "10px", color: "#888", letterSpacing: "2px", textTransform: "uppercase" }}>Restaurant & Bar</div>
          </div>
        </div>
        <button onClick={() => setModalOpen(true)} style={{ background: "#d4282a", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Reserve</button>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80" alt="Nosh 19" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "20px" }}>
          <div style={{ fontSize: "12px", letterSpacing: "4px", color: "#d4282a", marginBottom: "8px", textTransform: "uppercase" }}>19 Princes Street · Cork City</div>
          <h1 style={{ fontSize: "clamp(32px,8vw,56px)", fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>Nosh 19</h1>
          <p style={{ color: "#ccc", fontSize: "16px", margin: "0 0 24px" }}>Fresh food · Great cocktails · Good vibes</p>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#d4282a", color: "#fff", border: "none", padding: "14px 36px", borderRadius: "6px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            🍽️ Reserve a Table
          </button>
        </div>
      </div>

      {/* MENU */}
      <div id="menu" style={{ padding: "50px 20px", background: "#111" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#d4282a", marginBottom: "8px" }}>Our Menu</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Fresh ingredients, bold flavours</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "30px", flexWrap: "wrap" }}>
          {menuCategories.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{ padding: "10px 24px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "14px",
                background: activeTab === i ? "#d4282a" : "#222", color: activeTab === i ? "#fff" : "#aaa" }}>
              {cat.name}
            </button>
          ))}
        </div>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {menuCategories[activeTab].items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid #222" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{item.name}</div>
                <div style={{ color: "#888", fontSize: "13px" }}>{item.desc}</div>
              </div>
              <div style={{ color: "#d4282a", fontWeight: 700, fontSize: "16px", whiteSpace: "nowrap", marginLeft: "16px" }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ padding: "50px 20px", background: "#1a1a1a" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#d4282a", marginBottom: "30px" }}>What People Say</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#222", borderLeft: "4px solid #d4282a", borderRadius: "8px", padding: "20px" }}>
              <div style={{ color: "#d4282a", marginBottom: "8px" }}>{"★".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#bbb", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: "#d4282a", fontSize: "14px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "50px 20px", background: "#111", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#d4282a", marginBottom: "30px" }}>Find Us</h2>
        <div style={{ background: "#1a1a1a", borderRadius: "12px", padding: "30px", maxWidth: "500px", margin: "0 auto 30px" }}>
          {[["📍", "Address", "19 Princes Street, Cork City"], ["📞", "Phone", "021 427 1900"], ["⏰", "Hours", "Daily: 12:00 – 22:00"]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px", textAlign: "left" }}>
              <span style={{ fontSize: "24px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "#d4282a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "15px" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "600px", margin: "0 auto 24px" }}>
          <iframe
            title="Nosh 19 Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.1!2d-8.4729!3d51.8979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900c9e7a1b1b%3A0x1!2s19+Princes+Street%2C+Cork!5e0!3m2!1sen!2sie!4v1"
            width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
          />
        </div>
        <button onClick={() => setModalOpen(true)}
          style={{ background: "#d4282a", color: "#fff", border: "none", padding: "16px 40px", borderRadius: "6px", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
          🍜 Reserve a Table
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#555", letterSpacing: "0.1em", marginBottom: 16 }}>© 2025 Nosh 19 · 19 Princes Street, Cork</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Nosh+19+Princes+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/nosh19cork" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/nosh19cork/" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#1a1a1a", borderRadius: "16px", padding: "30px", maxWidth: "420px", width: "100%", border: "2px solid #d4282a" }}>
            <h3 style={{ color: "#d4282a", marginTop: 0 }}>Book a Table</h3>
            <a href="mailto:info@nash19.com" style={{ display: "block", background: "#d4282a", color: "#fff", padding: "14px", borderRadius: "8px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>✉️ info@nash19.com</a>
            <a href="tel:0214271900" style={{ display: "block", background: "#222", color: "#fff", padding: "14px", borderRadius: "8px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 Call Us</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #444", color: "#aaa", borderRadius: "8px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
