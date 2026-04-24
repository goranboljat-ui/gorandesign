"use client";

import { useState, useEffect } from "react";

const statusColors = {
  "Potencijalni": "bg-yellow-100 text-yellow-800",
  "Kontaktiran": "bg-blue-100 text-blue-800",
  "U pregovorima": "bg-orange-100 text-orange-800",
  "Aktivan klijent": "bg-green-100 text-green-800",
  "Odbijen": "bg-red-100 text-red-800",
};

const emptyForm = {
  ime: "", kontakt: "", email: "", instagram: "", grad: "Midleton",
  vrsta_biznisa: "", status: "Potencijalni", cijena_izrade: "",
  mjesecna_naknada: "", napomene: "", web_url: "", demo_url: "", demo_napravljen: false
};

export default function Dashboard() {
  const [klijenti, setKlijenti] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("Svi");
  const [activeTab, setActiveTab] = useState("potencijalni");

  useEffect(() => { loadKlijenti(); }, []);

  async function loadKlijenti() {
    setLoading(true);
    const data = await Klijent.list();
    setKlijenti(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...form,
      cijena_izrade: form.cijena_izrade ? Number(form.cijena_izrade) : null,
      mjesecna_naknada: form.mjesecna_naknada ? Number(form.mjesecna_naknada) : null,
    };
    if (editId) {
      await Klijent.update(editId, payload);
    } else {
      await Klijent.create(payload);
    }
    setForm(emptyForm);
    setShowForm(false);
    setEditId(null);
    loadKlijenti();
  }

  function handleEdit(k) {
    setForm({
      ime: k.ime || "", kontakt: k.kontakt || "", email: k.email || "",
      instagram: k.instagram || "", grad: k.grad || "Midleton",
      vrsta_biznisa: k.vrsta_biznisa || "", status: k.status || "Potencijalni",
      cijena_izrade: k.cijena_izrade || "", mjesecna_naknada: k.mjesecna_naknada || "",
      napomene: k.napomene || "", web_url: k.web_url || "",
      demo_url: k.demo_url || "", demo_napravljen: k.demo_napravljen || false
    });
    setEditId(k.id);
    setShowForm(true);
  }

  async function handleDelete(id) {
    if (confirm("Obriši klijenta?")) {
      await Klijent.delete(id);
      loadKlijenti();
    }
  }

  const demos = klijenti.filter(k => k.demo_napravljen);
  const potencijalni = klijenti.filter(k => filterStatus === "Svi" ? true : k.status === filterStatus);
  const aktivni = klijenti.filter(k => k.status === "Aktivan klijent").length;
  const totalIzrada = klijenti.filter(k => k.status === "Aktivan klijent").reduce((s, k) => s + (k.cijena_izrade || 0), 0);
  const totalMjesecno = klijenti.filter(k => k.status === "Aktivan klijent").reduce((s, k) => s + (k.mjesecna_naknada || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🌐 Web Freelance CRM</h1>
            <p className="text-gray-400 text-sm">Prati klijente, deme i prihode</p>
          </div>
          <button
            onClick={() => { setForm(emptyForm); setEditId(null); setShowForm(true); }}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition text-sm"
          >
            + Novi klijent
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border text-center">
            <p className="text-gray-400 text-xs mb-1">Ukupno klijenata</p>
            <p className="text-3xl font-bold text-blue-600">{klijenti.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border text-center">
            <p className="text-gray-400 text-xs mb-1">Demo stranica</p>
            <p className="text-3xl font-bold text-indigo-600">{demos.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border text-center">
            <p className="text-gray-400 text-xs mb-1">Aktivni klijenti</p>
            <p className="text-3xl font-bold text-green-600">{aktivni}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border text-center">
            <p className="text-gray-400 text-xs mb-1">Mjes. prihod</p>
            <p className="text-3xl font-bold text-purple-600">{totalMjesecno}€</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-5 border-b border-gray-200">
          {[
            { key: "potencijalni", label: "👥 Klijenti", count: klijenti.length },
            { key: "demos", label: "🖥️ Napravljene stranice", count: demos.length },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-4 py-2 text-sm font-semibold border-b-2 transition -mb-px ${activeTab === t.key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              {t.label} <span className="ml-1 bg-gray-100 text-gray-500 text-xs px-1.5 py-0.5 rounded-full">{t.count}</span>
            </button>
          ))}
        </div>

        {/* TAB: DEMO STRANICE */}
        {activeTab === "demos" && (
          <div>
            <p className="text-sm text-gray-400 mb-4">Demo stranice koje si napravio za potencijalne klijente. Pošalji im link!</p>
            <div className="grid md:grid-cols-3 gap-4">
              {demos.map(k => (
                <div key={k.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-100 h-28 flex items-center justify-center text-5xl">
                    {k.vrsta_biznisa?.toLowerCase().includes("frizer") || k.vrsta_biznisa?.toLowerCase().includes("nokti") ? "💅" :
                     k.vrsta_biznisa?.toLowerCase().includes("kafi") || k.vrsta_biznisa?.toLowerCase().includes("sandwich") ? "🥪" :
                     k.vrsta_biznisa?.toLowerCase().includes("refill") || k.vrsta_biznisa?.toLowerCase().includes("zero") ? "🌱" : "🌐"}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{k.ime}</h3>
                    <p className="text-xs text-gray-400 mb-3">{k.vrsta_biznisa} · {k.grad}</p>
                    <div className="flex flex-col gap-1 text-xs mb-3">
                      {k.kontakt && (
                        <a href={`tel:${k.kontakt}`} className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition">
                          📞 {k.kontakt}
                        </a>
                      )}
                      {k.instagram && (
                        <a href={`https://instagram.com/${k.instagram.replace("@","")}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-pink-500 hover:text-pink-700 transition">
                          📸 {k.instagram}
                        </a>
                      )}
                      {k.email && (
                        <a href={`mailto:${k.email}`} className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition">
                          ✉️ {k.email}
                        </a>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {k.demo_url && (
                        <a
                          href={k.demo_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 bg-blue-600 text-white text-xs py-2 rounded-xl font-semibold text-center hover:bg-blue-700 transition"
                        >
                          👁️ Pogledaj demo
                        </a>
                      )}
                      <button
                        onClick={() => { navigator.clipboard.writeText(k.demo_url); alert("Link kopiran!"); }}
                        className="bg-gray-100 text-gray-600 text-xs py-2 px-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                      >
                        📋 Kopiraj
                      </button>
                    </div>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[k.status] || "bg-gray-100 text-gray-600"}`}>
                        {k.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: KLIJENTI */}
        {activeTab === "potencijalni" && (
          <div>
            {/* Filter */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {["Svi", "Potencijalni", "Kontaktiran", "U pregovorima", "Aktivan klijent", "Odbijen"].map(s => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition ${filterStatus === s ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"}`}
                >
                  {s} {s === "Svi" ? `(${klijenti.length})` : `(${klijenti.filter(k => k.status === s).length})`}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="text-center py-12 text-gray-400">Učitavanje...</div>
            ) : potencijalni.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-4xl mb-2">👥</p>
                <p>Nema klijenata s ovim statusom.</p>
              </div>
            ) : (
              <div className="grid gap-3">
                {potencijalni.map(k => (
                  <div key={k.id} className="bg-white rounded-2xl p-4 shadow-sm border flex items-start justify-between gap-4 hover:shadow-md transition">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{k.ime}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[k.status] || "bg-gray-100 text-gray-600"}`}>{k.status}</span>
                        {k.vrsta_biznisa && <span className="text-xs text-gray-400">{k.vrsta_biznisa}</span>}
                        {k.demo_napravljen && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">🖥️ Demo</span>}
                      </div>
                      <div className="flex gap-3 mt-1.5 text-xs text-gray-500 flex-wrap">
                        {k.grad && <span>📍 {k.grad}</span>}
                        {k.kontakt && <a href={`tel:${k.kontakt}`} className="hover:text-blue-600">📞 {k.kontakt}</a>}
                        {k.email && <a href={`mailto:${k.email}`} className="hover:text-blue-600">✉️ {k.email}</a>}
                        {k.instagram && <a href={`https://instagram.com/${k.instagram.replace("@","")}`} target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-700">📸 {k.instagram}</a>}
                        {k.demo_url && <a href={k.demo_url} target="_blank" rel="noreferrer" className="text-indigo-500 hover:text-indigo-700">🔗 Demo</a>}
                        {k.web_url && <a href={k.web_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">🌐 Web</a>}
                      </div>
                      {k.napomene && <p className="text-xs text-gray-400 mt-1 italic">"{k.napomene}"</p>}
                      <div className="flex gap-3 mt-1.5 text-xs font-medium">
                        {k.cijena_izrade ? <span className="text-green-600">Izrada: {k.cijena_izrade}€</span> : null}
                        {k.mjesecna_naknada ? <span className="text-purple-600">Mjes: {k.mjesecna_naknada}€/mj</span> : null}
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => handleEdit(k)} className="text-blue-500 hover:text-blue-700 text-xs font-medium">Uredi</button>
                      <button onClick={() => handleDelete(k.id)} className="text-red-400 hover:text-red-600 text-xs font-medium">Briši</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">{editId ? "Uredi klijenta" : "Novi klijent"}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input required placeholder="Ime / naziv firme *" value={form.ime} onChange={e => setForm({...form, ime: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="Telefon" value={form.kontakt} onChange={e => setForm({...form, kontakt: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="Instagram (npr. @ime)" value={form.instagram} onChange={e => setForm({...form, instagram: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="Grad" value={form.grad} onChange={e => setForm({...form, grad: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="Vrsta biznisa" value={form.vrsta_biznisa} onChange={e => setForm({...form, vrsta_biznisa: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                {["Potencijalni", "Kontaktiran", "U pregovorima", "Aktivan klijent", "Odbijen"].map(s => <option key={s}>{s}</option>)}
              </select>
              <div className="flex gap-2">
                <input type="number" placeholder="Cijena izrade (€)" value={form.cijena_izrade} onChange={e => setForm({...form, cijena_izrade: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <input type="number" placeholder="Mjes. naknada (€)" value={form.mjesecna_naknada} onChange={e => setForm({...form, mjesecna_naknada: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
              <input placeholder="URL web stranice" value={form.web_url} onChange={e => setForm({...form, web_url: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <input placeholder="URL demo stranice" value={form.demo_url} onChange={e => setForm({...form, demo_url: e.target.value})} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" checked={form.demo_napravljen} onChange={e => setForm({...form, demo_napravljen: e.target.checked})} className="rounded" />
                Demo stranica napravljena
              </label>
              <textarea placeholder="Napomene..." value={form.napomene} onChange={e => setForm({...form, napomene: e.target.value})} rows={2} className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
              <div className="flex gap-2 pt-1">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">Spremi</button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">Odustani</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
