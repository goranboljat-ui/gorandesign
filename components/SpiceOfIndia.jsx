"use client";
import { useState } from "react";

const menuCategories = [
  { name: "Starters", items: [
    { name: "Samosa (2 pcs)", price: "€6", desc: "Crispy pastry filled with spiced potato and peas" },
    { name: "Onion Bhaji", price: "€6", desc: "Golden fried onion fritters with mint chutney" },
    { name: "Chicken Tikka", price: "€9", desc: "Tender grilled chicken marinated in yoghurt and spices" },
    { name: "Prawn Puri", price: "€10", desc: "Spiced prawns on puffed bread" },
  ]},
  { name: "Mains", items: [
    { name: "Butter Chicken", price: "€16", desc: "Creamy tomato sauce, mild spices — a classic" },
    { name: "Lamb Rogan Josh", price: "€17", desc: "Slow-cooked lamb in aromatic Kashmiri sauce" },
    { name: "Palak Paneer", price: "€14", desc: "Fresh spinach with homemade cottage cheese" },
    { name: "Prawn Masala", price: "€18", desc: "Tiger prawns in rich, spiced masala sauce" },
    { name: "Chicken Biryani", price: "€16", desc: "Fragrant basmati rice with spiced chicken" },
  ]},
  { name: "Sides", items: [
    { name: "Garlic Naan", price: "€3", desc: "Soft leavened bread with garlic butter" },
    { name: "Basmati Rice", price: "€3", desc: "Fluffy long-grain rice" },
    { name: "Mango Lassi", price: "€4", desc: "Refreshing yoghurt drink with mango" },
  ]},
];

const testimonials = [
  { name: "Paul K.", text: "Hands down the best Indian in Cork. The butter chicken is incredible.", stars: 5 },
  { name: "Deirdre M.", text: "Authentic flavours, generous portions and great value. Will always come back.", stars: 5 },
  { name: "James O.", text: "The lamb rogan josh is extraordinary. Highly recommend for a proper curry night.", stars: 5 },
];

export default function SpiceOfIndia() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f0800", color: "#eee", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#1a0e00", borderBottom: "3px solid #e8962e", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "26px" }}>🌶️</span>
          <div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#e8962e" }}>Spice of India</div>
            <div style={{ fontSize: "10px", color: "#888", letterSpacing: "2px", textTransform: "uppercase" }}>Indian Restaurant</div>
          </div>
        </div>
        <button onClick={() => setModalOpen(true)} style={{ background: "#e8962e", color: "#000", border: "none", padding: "10px 20px", borderRadius: "4px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Book Table</button>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80" alt="Spice of India" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,8,0,0.7)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "20px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#e8962e", marginBottom: "8px", textTransform: "uppercase" }}>Bishopstown · Cork</div>
          <h1 style={{ fontSize: "clamp(32px,8vw,54px)", fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>Spice of India</h1>
          <p style={{ color: "#ccc", fontSize: "16px", margin: "0 0 24px" }}>Authentic Indian cuisine · Dine in & Takeaway</p>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#e8962e", color: "#000", border: "none", padding: "14px 36px", borderRadius: "4px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            🍛 Book a Table
          </button>
        </div>
      </div>

      {/* MENU */}
      <div id="menu" style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#e8962e", marginBottom: "8px" }}>Our Menu</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Authentic recipes, freshly prepared every day</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "30px", flexWrap: "wrap" }}>
          {menuCategories.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{ padding: "10px 24px", borderRadius: "4px", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "14px",
                background: activeTab === i ? "#e8962e" : "#1a1000", color: activeTab === i ? "#000" : "#aaa" }}>
              {cat.name}
            </button>
          ))}
        </div>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {menuCategories[activeTab].items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid #1a1000" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{item.name}</div>
                <div style={{ color: "#888", fontSize: "13px" }}>{item.desc}</div>
              </div>
              <div style={{ color: "#e8962e", fontWeight: 700, fontSize: "16px", whiteSpace: "nowrap", marginLeft: "16px" }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ padding: "50px 20px", background: "#1a0e00" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#e8962e", marginBottom: "30px" }}>What People Say</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#221200", borderLeft: "4px solid #e8962e", borderRadius: "8px", padding: "20px" }}>
              <div style={{ color: "#e8962e", marginBottom: "8px" }}>{"★".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#bbb", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: "#e8962e", fontSize: "14px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "50px 20px", background: "#0f0800", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#e8962e", marginBottom: "30px" }}>Find Us</h2>
        <div style={{ background: "#1a0e00", borderRadius: "12px", padding: "30px", maxWidth: "500px", margin: "0 auto 30px" }}>
          {[["📍", "Address", "Bishopstown Road, Cork"], ["📞", "Phone", "021 454 6838"], ["⏰", "Hours", "Daily: 17:00 – 23:00"]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px", textAlign: "left" }}>
              <span style={{ fontSize: "24px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "#e8962e", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "15px" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: "8px", overflow: "hidden", maxWidth: "600px", margin: "0 auto 24px" }}>
          <iframe
            title="Spice of India Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.1!2d-8.5241!3d51.8831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484490b6e1e1e1e1%3A0x1!2sSpice+of+India%2C+Bishopstown+Rd%2C+Cork!5e0!3m2!1sen!2sie!4v1"
            width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
          />
        </div>
        <a href="tel:0214546838"
          style={{ display: "inline-block", background: "#e8962e", color: "#000", padding: "16px 40px", borderRadius: "4px", fontSize: "18px", fontWeight: 700, textDecoration: "none" }}>
          📞 Call to Book
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#080400", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#555", letterSpacing: "0.1em", marginBottom: 16 }}>© 2025 Spice of India · Bishopstown, Cork</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Spice+of+India+Bishopstown+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/spiceofindiabp" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/spiceofindia_cork/" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#1a0e00", borderRadius: "12px", padding: "30px", maxWidth: "420px", width: "100%", border: "2px solid #e8962e" }}>
            <h3 style={{ color: "#e8962e", marginTop: 0 }}>Reserve a Table</h3>
            <a href="tel:0214546838" style={{ display: "block", background: "#e8962e", color: "#000", padding: "14px", borderRadius: "6px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 021-454-6838</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #444", color: "#aaa", borderRadius: "6px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
