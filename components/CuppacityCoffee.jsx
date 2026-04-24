"use client";
import { useState } from "react";

// GALLERY: Masonry 2-col — artisan coffee shop, organic feel
const col1 = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/18e7975f6_generated_image.png", h: 260 },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/506d254e2_generated_image.png", h: 170 },
];
const col2 = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6b13b4bec_generated_image.png", h: 170 },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b8c847611_generated_image.png", h: 260 },
];
const allImgs = [
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/18e7975f6_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/506d254e2_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6b13b4bec_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b8c847611_generated_image.png",
];

export default function CuppacityCoffee() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fdf8f2", color: "#1a1208", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={allImgs[lightbox]} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < allImgs.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}
      <nav style={{ background: "#2c1a0a", borderBottom: "3px solid #c8860a", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>☕</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#f0c060", letterSpacing: 1 }}>Cuppacity</div>
            <div style={{ fontSize: "0.58rem", color: "#c8860a", letterSpacing: 3, textTransform: "uppercase" }}>Speciality Coffee · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0c060", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#2c1a0a", borderBottom: "1px solid #c8860a", padding: "1rem 1.5rem" }}>
          {["Gallery", "Menu", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #3a2010", color: "#f0c060", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", height: "68vh", minHeight: 380, overflow: "hidden" }}>
        <img src={allImgs[0]} alt="Cuppacity Coffee" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(44,26,10,0.1) 0%, rgba(44,26,10,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: "1px solid #c8860a", color: "#f0c060", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>Speciality Coffee · Cork</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>Cuppacity</h1>
          <p style={{ color: "#c8860a", fontSize: "1rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "0.5rem" }}>Speciality Coffee Shop</p>
          <p style={{ color: "#7a5020", fontStyle: "italic", marginBottom: "2rem" }}>"This is how coffee should taste — every single morning."</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:+353214272700" style={{ background: "#c8860a", color: "#fff", padding: "0.85rem 2rem", borderRadius: 6, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=Cuppacity+Coffee+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #c8860a", color: "#f0c060", padding: "0.85rem 2rem", borderRadius: 6, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Masonry 2-col */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8b0" }}>
          <p style={{ color: "#c8860a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col1.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 0 : 1)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                  <img src={img.src} alt="" style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col2.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 2 : 3)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                  <img src={img.src} alt="" style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* MENU — odmah iza gallery */}
        <section id="menu" style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8b0" }}>
          <p style={{ color: "#c8860a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Serve</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", marginBottom: "0.5rem" }}>Our Menu</h2>
          <p style={{ color: "#6a4820", fontSize: "0.9rem", marginBottom: "2rem", fontStyle: "italic" }}>Bagels · Wraps · Paninis · Breakfast · Coffee · Frappes · Smoothies</p>

          {[
            {
              category: "☕ Coffee",
              items: [
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/850ada7c0_generated_image.png", name: "Latte", desc: "Silky espresso with steamed milk, latte art on top", price: "€3.80" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/850ada7c0_generated_image.png", name: "Flat White", desc: "Double ristretto, velvety microfoam — classic Cuppacity style", price: "€3.80" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/850ada7c0_generated_image.png", name: "Cappuccino", desc: "Equal parts espresso, steamed milk and foam", price: "€3.60" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/850ada7c0_generated_image.png", name: "Americano", desc: "Espresso with hot water — bold and smooth", price: "€3.20" },
              ]
            },
            {
              category: "🧊 Frappes & Cold Drinks",
              items: [
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0a8159395_generated_image.png", name: "Caramel Frappe", desc: "Blended iced coffee, caramel syrup, whipped cream drizzle", price: "€5.20" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0a8159395_generated_image.png", name: "Chocolate Frappe", desc: "Rich chocolate blended with ice and cream", price: "€5.20" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0a8159395_generated_image.png", name: "Homemade Peach Iced Tea", desc: "House-made, light and refreshing — customer favourite", price: "€4.00" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0a8159395_generated_image.png", name: "Smoothie of the Day", desc: "Fresh blended fruit — ask staff for today's flavour", price: "€5.00" },
              ]
            },
            {
              category: "🥯 Bagels & Wraps",
              items: [
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3bcc59053_generated_image.png", name: "Egg & Cheese Bagel", desc: "Toasted bagel, free-range egg, melted cheddar — guest favourite", price: "€7.50" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3bcc59053_generated_image.png", name: "Italian Bagel", desc: "Ham, sundried tomatoes, mozzarella — egg substitution available", price: "€8.00" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3e98c98ad_generated_image.png", name: "Veggie Panini", desc: "Grilled veggies, pesto, mozzarella — fully customisable", price: "€7.50" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3e98c98ad_generated_image.png", name: "Bacon & Brie Panini", desc: "Crispy bacon, creamy Brie, cranberry chutney on toasted ciabatta", price: "€8.50" },
              ]
            },
            {
              category: "🍳 Breakfast",
              items: [
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bd076cf9b_generated_image.png", name: "Full Irish Breakfast", desc: "Clonakilty sausages, bacon, egg, black pudding, beans, toast", price: "€11.50" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/1b1ba4d9b_generated_image.png", name: "Pancakes", desc: "Fluffy stack with fresh fruit and Nutella drizzle", price: "€9.00" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/1b1ba4d9b_generated_image.png", name: "Waffles", desc: "Belgian waffles with seasonal toppings and cream", price: "€9.50" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bd076cf9b_generated_image.png", name: "Soup of the Day", desc: "Homemade daily soup served with brown bread", price: "€6.00" },
              ]
            },
            {
              category: "🧁 Cakes & Pastries",
              items: [
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3cc287edb_generated_image.png", name: "Triple Chocolate Muffin", desc: "Rich triple chocolate — a Cuppacity signature", price: "€3.80" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/36c8f4371_generated_image.png", name: "Homemade Scone", desc: "Freshly baked daily with butter and jam", price: "€3.20" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3cc287edb_generated_image.png", name: "Danish Pastry", desc: "Flaky, buttery pastry — rotating flavours daily", price: "€3.50" },
                { img: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3cc287edb_generated_image.png", name: "Donut", desc: "Classic glazed or filled — ask what's fresh today", price: "€3.00" },
              ]
            },
          ].map((cat, ci) => (
            <div key={ci} style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#2c1a0a", fontWeight: "bold", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #c8860a", display: "inline-block" }}>{cat.category}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((item, ii) => (
                  <div key={ii} style={{ background: "#fff8ee", border: "1px solid #ead8b0", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", gap: 0 }}>
                    <img src={item.img} alt={item.name} style={{ width: 90, height: 90, objectFit: "cover", flexShrink: 0 }} />
                    <div style={{ padding: "0.75rem 1rem", flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                        <div style={{ fontWeight: "bold", color: "#1a1208", fontSize: "0.95rem" }}>{item.name}</div>
                        <div style={{ color: "#c8860a", fontWeight: "bold", whiteSpace: "nowrap", fontSize: "0.95rem" }}>{item.price}</div>
                      </div>
                      <div style={{ color: "#6a4820", fontSize: "0.82rem", marginTop: 4, lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p style={{ color: "#b09060", fontSize: "0.82rem", fontStyle: "italic", textAlign: "center" }}>Vegetarian options available · Substitutions welcome · Ask our staff</p>
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8b0" }}>
          <p style={{ color: "#c8860a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", marginBottom: "2rem" }}>What People Say</h2>
          {[
            { name: "Laura K.", stars: 5, text: "This is how coffee should taste — every single morning. The baristas here actually care about what they're making. Best flat white in Cork, no question." },
            { name: "Ronan P.", stars: 5, text: "Found this by accident and now I can't start my day anywhere else. The coffee is exceptional and the space is just lovely. A proper gem." },
            { name: "Anna W.", stars: 5, text: "Friendly staff, beautiful space, and coffee that's been made with real thought and care. The kind of cafe that makes you feel at home immediately." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#fff8ee", border: "1px solid #ead8b0", borderRadius: 12, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#c8860a", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#6a4820", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#b09060", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8b0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { icon: "☕", name: "Espresso", price: "€2.50" },
              { icon: "☕", name: "Flat White", price: "€3.80" },
              { icon: "🥛", name: "Oat Latte", price: "€4.20" },
              { icon: "🧊", name: "Iced Coffee", price: "€4.50" },
              { icon: "🥐", name: "Pastry of the Day", price: "€3.50" },
              { icon: "🥗", name: "Lunch Special", price: "€9.00" },
            ].map(({ icon, name, price }) => (
              <div key={name} style={{ background: "#fff8ee", border: "1px solid #ead8b0", borderRadius: 10, padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{icon}</span>
                  <span style={{ color: "#1a1208", fontWeight: "bold", fontSize: "0.9rem" }}>{name}</span>
                </div>
                <span style={{ color: "#c8860a", fontWeight: "bold" }}>{price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <div style={{ background: "#2c1a0a", borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {[["Mon–Fri", "07:30–17:00"], ["Saturday", "08:00–16:00"], ["Sunday", "09:00–15:00"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #3a2010" : "none" }}>
                <span style={{ color: "#c8860a" }}>{d}</span>
                <span style={{ color: "#f0c060", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff8ee", border: "1px solid #ead8b0", borderRadius: 8, padding: "1rem 1.2rem" }}>
            <div style={{ color: "#1a1208" }}>📍 Cork City</div>
            <a href="tel:+353214272700" style={{ color: "#c8860a", textDecoration: "none", display: "block", marginTop: 6 }}>📞 (021) 427 2700</a>
          </div>
        </section>
      </div>
      <footer style={{ background: "#2c1a0a", borderTop: "3px solid #c8860a", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#3a2010", fontSize: "0.9rem" }}>© 2025 Cuppacity · Cork City · <a href="tel:+353214272700" style={{ color: "#c8860a" }}>(021) 427 2700</a></p>
      </footer>
    </div>
  );
}
