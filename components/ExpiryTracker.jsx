"use client";
import { useState, useEffect, useRef } from "react";

const SHELF_LIFE = {"Dairy":7,"Meat & Fish":3,"Fruits & Vegetables":5,"Bread & Bakery":5,"Leftovers":3,"Drinks":14,"Condiments & Sauces":90,"Frozen":90,"Snacks":30,"Other":14};
const CATEGORY_EMOJI = {"Dairy":"🥛","Meat & Fish":"🥩","Fruits & Vegetables":"🥦","Bread & Bakery":"🍞","Leftovers":"🍱","Drinks":"🥤","Condiments & Sauces":"🫙","Frozen":"🧊","Snacks":"🍫","Other":"❓"};
const LOCATIONS = ["Fridge","Freezer","Pantry"];

// Theme — light
const T = {
  bg: '#f2f1f8',
  card: '#ffffff',
  cardBorder: '#e5e7eb',
  text: '#111827',
  textSub: '#6b7280',
  textMuted: '#9ca3af',
  header: 'linear-gradient(135deg,#7c3aed,#db2777)',
  accent: '#7c3aed',
  accentSoft: 'rgba(124,58,237,0.1)',
  pill: '#f3f4f6',
  pillActive: 'linear-gradient(135deg,#7c3aed,#db2777)',
  pillTextActive: '#fff',
  pillText: '#374151',
  soon: '#f59e0b',
  soonBg: '#fffbeb',
  soonBorder: '#fde68a',
  expired: '#ef4444',
  expiredBg: '#fef2f2',
  expiredBorder: '#fecaca',
  fresh: '#22c55e',
  navBg: '#ffffff',
  navBorder: '#e5e7eb',
  inputBg: '#f9fafb',
  inputBorder: '#e5e7eb',
  spinner: '#7c3aed',
};

function addDays(s,d){const x=new Date(s);x.setDate(x.getDate()+d);return x.toISOString().split("T")[0];}
function daysUntil(exp){const t=new Date();t.setHours(0,0,0,0);const e=new Date(exp);e.setHours(0,0,0,0);return Math.round((e-t)/86400000);}
function getStatus(d){if(d<0)return"Expired";if(d===0)return"Expires Today";if(d<=2)return"Use Soon";return"Fresh";}
function fmtDate(d){if(!d)return"-";return new Date(d).toLocaleDateString("en-IE",{day:"numeric",month:"short"});}
function today(){return new Date().toISOString().split("T")[0];}
const EMPTY={name:"",category:"Dairy",location:"Fridge",purchase_date:today(),expiry_date:addDays(today(),7),expiry_date_approx:false,expiry_date_manual:false,quantity:"1",notes:"",reminder_days_before:2,_barcode:""};

function StatusBadge({days}){
  if(days<0)return<span style={{background:'#fef2f2',color:'#ef4444',border:'1px solid #fecaca',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:700}}>Expired</span>;
  if(days===0)return<span style={{background:'#fff7ed',color:'#f97316',border:'1px solid #fed7aa',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:700}}>Today!</span>;
  if(days<=2)return<span style={{background:'#fffbeb',color:'#d97706',border:'1px solid #fde68a',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:700}}>⚠ {days}d</span>;
  if(days<=5)return<span style={{background:'#f0fdf4',color:'#16a34a',border:'1px solid #bbf7d0',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:700}}>{days}d</span>;
  return<span style={{background:'#f5f3ff',color:'#7c3aed',border:'1px solid #ddd6fe',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:600}}>{days}d</span>;
}

// Nutrition helpers
function cleanForSearch(name){return name.replace(/^\d+\s+/g,'').replace(/\b\d+\s*(g|kg|ml|l|x|pack|pcs|piece)\b/gi,'').replace(/\b(large|medium|small|mini|jumbo|organic|free range|barn|smoked|fresh|frozen|whole|half|sliced|reduced fat|low fat|semi-skimmed|skimmed|full fat|extra|selected|classic)\b/gi,'').replace(/\s+/g,' ').trim();}
async function fetchWithTimeout(url,ms=6000){const ctrl=new AbortController();const tid=setTimeout(()=>ctrl.abort(),ms);try{const r=await fetch(url,{signal:ctrl.signal});clearTimeout(tid);return r;}catch(e){clearTimeout(tid);throw e;}}
function parseOFFProduct(p,query){const n=p.nutriments||{};const hasData=n['energy-kcal_100g']!=null||n['proteins_100g']!=null;if(!hasData)return null;return{found:true,source:'openfoodfacts',name:p.product_name||p.product_name_en||query,brand:p.brands||'',category:p.categories_tags?.[0]?.replace('en:','')||'',nutriscore:p.nutriscore_grade||null,nutrition:{calories:n['energy-kcal_100g']??null,protein:n['proteins_100g']??null,carbs:n['carbohydrates_100g']??null,fat:n['fat_100g']??null,fiber:n['fiber_100g']??null,sugar:n['sugars_100g']??null,salt:n['salt_100g']??null,saturated_fat:n['saturated-fat_100g']??null}};}
async function fetchNutritionByName(name){const clean=cleanForSearch(name);const short=clean.split(' ').slice(0,2).join(' ');const variants=[...new Set([name,clean,short])].filter(Boolean);for(const q of variants){try{const url=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,product_name_en,brands,categories_tags,nutriscore_grade,nutriments`;const r=await fetchWithTimeout(url,7000);if(!r.ok)continue;const d=await r.json();if(d.products?.length>0){const best=d.products.reduce((a,b)=>Object.keys(b.nutriments||{}).length>Object.keys(a.nutriments||{}).length?b:a);const parsed=parseOFFProduct(best,q);if(parsed)return parsed;}}catch(_){}}return{found:false};}
async function fetchNutritionByBarcode(barcode){try{const cached=await ProductCache.filter({barcode});if(cached?.length>0){const c=cached[0];return{found:true,source:'cache',name:c.name,brand:c.brand||'',category:c.category||'',nutriscore:c.nutriscore||null,nutrition:{calories:c.calories??null,protein:c.protein??null,carbs:c.carbs??null,fat:c.fat??null,fiber:c.fiber??null,sugar:c.sugar??null,salt:c.salt??null,saturated_fat:c.saturated_fat??null}};}}catch(_){}try{const r=await fetchWithTimeout(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,7000);const d=await r.json();if(d.status===1&&d.product){const p=d.product;const n=p.nutriments||{};const result={found:true,source:'openfoodfacts',name:p.product_name||p.product_name_en||'',brand:p.brands||'',category:p.categories_tags?.[0]?.replace('en:','')||'',nutriscore:p.nutriscore_grade||null,nutrition:{calories:n['energy-kcal_100g']??null,protein:n['proteins_100g']??null,carbs:n['carbohydrates_100g']??null,fat:n['fat_100g']??null,fiber:n['fiber_100g']??null,sugar:n['sugars_100g']??null,salt:n['salt_100g']??null,saturated_fat:n['saturated-fat_100g']??null}};if(result.name)ProductCache.create({barcode,name:result.name,brand:result.brand,category:result.category,nutriscore:result.nutriscore,source:'openfoodfacts',...result.nutrition}).catch(()=>{});return result;}}catch(_){}return{found:false};}
async function generateRecipesFromFridge(items){const payload=items.filter(i=>i.status!=="Consumed").map(i=>({name:i.name,category:i.category,days_until_expiry:daysUntil(i.expiry_date)}));const res=await fetch("/functions/generateRecipes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:payload}),credentials:"include"});if(!res.ok){const err=await res.json().catch(()=>({}));throw new Error(err.error||"AI error");}const data=await res.json();return data.recipes||[];}

// ── Nutrition Panel ──
function NutritionPanel({item,onClose}){
  const[data,setData]=useState(null);const[loading,setLoading]=useState(true);const[fetchState,setFetchState]=useState('loading');const[searchQuery,setSearchQuery]=useState('');const[searching,setSearching]=useState(false);
  async function doSearch(q){setSearching(true);setFetchState('loading');try{const j=await fetchNutritionByName(q||item.name);setData(j);setFetchState(j.found?'ok':'notFound');}catch(e){setData({found:false});setFetchState('error');}setSearching(false);}
  useEffect(()=>{let c=false;async function load(){setLoading(true);setFetchState('loading');try{const j=await fetchNutritionByName(item.name);if(!c){setData(j);setFetchState(j.found?'ok':'notFound');}}catch(e){if(!c){setData({found:false});setFetchState('error');}}if(!c)setLoading(false);}load();return()=>{c=true;};},[item.name]);
  const n=data?.nutrition;const score=data?.nutriscore?.toLowerCase();const days=daysUntil(item.expiry_date);
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:50,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'16px'}} onClick={onClose}>
      <div style={{background:T.card,borderRadius:'24px',width:'100%',maxWidth:'400px',overflow:'hidden',boxShadow:'0 25px 50px rgba(0,0,0,0.15)'}} onClick={e=>e.stopPropagation()}>
        <div style={{background:T.header,padding:'20px'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
            <span style={{fontSize:'32px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span>
            <button onClick={onClose} style={{color:'rgba(255,255,255,0.7)',fontSize:'20px',background:'none',border:'none',cursor:'pointer'}}>✕</button>
          </div>
          <h2 style={{color:'#fff',fontWeight:800,fontSize:'18px',margin:0}}>{item.name}</h2>
          <p style={{color:'rgba(255,255,255,0.8)',fontSize:'12px',marginTop:'4px'}}>{item.category} · {item.quantity} · {item.location||"Fridge"}</p>
          <div style={{display:'flex',gap:'8px',marginTop:'8px',flexWrap:'wrap'}}><StatusBadge days={days}/>{score&&<span style={{background:'rgba(255,255,255,0.25)',color:'#fff',fontSize:'11px',padding:'2px 8px',borderRadius:'99px',fontWeight:700}}>Nutri-Score {score.toUpperCase()}</span>}</div>
        </div>
        <div style={{padding:'12px 20px',background:'#f9fafb',borderBottom:'1px solid #e5e7eb',display:'flex',gap:'16px',fontSize:'12px',color:T.textMuted}}>
          <span>🛒 {fmtDate(item.purchase_date)}</span>
          <span>⏱ {item.expiry_date_approx&&!item.expiry_date_manual?`~${fmtDate(item.expiry_date)}`:`Exp ${fmtDate(item.expiry_date)}`}</span>
        </div>
        <div style={{padding:'20px'}}>
          {loading&&<div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'24px',gap:'8px'}}><div style={{width:20,height:20,border:'2px solid #7c3aed',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/><span style={{fontSize:'13px',color:T.textSub}}>Looking up nutrition...</span></div>}
          {!loading&&(fetchState==='notFound'||fetchState==='error')&&(
            <div style={{padding:'8px 0'}}>
              <div style={{textAlign:'center',marginBottom:'12px'}}>
                <p style={{fontSize:'28px',margin:'0 0 4px'}}>{fetchState==='error'?"⚠️":"🔍"}</p>
                <p style={{fontSize:'13px',fontWeight:600,color:T.text}}>{fetchState==='error'?"Connection error":"Not found"}</p>
                <p style={{fontSize:'11px',color:T.textMuted,marginTop:'4px'}}>Try a simpler name:</p>
              </div>
              <div style={{display:'flex',gap:'8px'}}>
                <input value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyDown={e=>e.key==='Enter'&&searchQuery.trim()&&doSearch(searchQuery.trim())} placeholder={`e.g. "${item.name.split(' ').slice(0,2).join(' ')}"`}
                  style={{flex:1,background:T.inputBg,border:`1px solid ${T.inputBorder}`,borderRadius:'12px',padding:'8px 12px',fontSize:'13px',color:T.text,outline:'none'}}/>
                <button disabled={searching||!searchQuery.trim()} onClick={()=>doSearch(searchQuery.trim())}
                  style={{background:T.accent,color:'#fff',padding:'8px 16px',borderRadius:'12px',fontWeight:700,fontSize:'13px',border:'none',cursor:'pointer',opacity:searching||!searchQuery.trim()?0.4:1}}>
                  {searching?"...":"Go"}
                </button>
              </div>
            </div>
          )}
          {!loading&&data?.found&&n&&(
            <>
              <p style={{fontSize:'11px',fontWeight:700,color:T.textMuted,marginBottom:'12px',textTransform:'uppercase',letterSpacing:'0.05em'}}>Nutrition per 100g</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
                {[["🔥 Calories",n.calories,"kcal"],["💪 Protein",n.protein,"g"],["🍚 Carbs",n.carbs,"g"],["🧈 Fat",n.fat,"g"],["🌾 Fibre",n.fiber,"g"],["🍬 Sugar",n.sugar,"g"],["🧂 Salt",n.salt,"g"],["⚡ Sat.Fat",n.saturated_fat,"g"]]
                  .filter(([,v])=>v!=null).map(([label,val,unit])=>(
                  <div key={label} style={{background:T.accentSoft,borderRadius:'12px',padding:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <span style={{fontSize:'11px',color:T.textSub}}>{label}</span>
                    <span style={{fontSize:'13px',fontWeight:800,color:T.text}}>{Number(val).toFixed(1)}<span style={{fontSize:'10px',fontWeight:400,color:T.textMuted,marginLeft:'2px'}}>{unit}</span></span>
                  </div>
                ))}
              </div>
              {data.brand&&<p style={{fontSize:'11px',color:T.textMuted,marginTop:'12px',textAlign:'center'}}>Brand: {data.brand}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Barcode Scanner ──
function BarcodeScanner({onResult,onClose}){
  const containerRef=useRef(null);const[status,setStatus]=useState("Starting camera...");const[error,setError]=useState(null);const startedRef=useRef(false);
  useEffect(()=>{let mounted=true;async function init(){if(!window.Quagga){const loaded=await new Promise(res=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@ericblade/quagga2@1.8.4/dist/quagga.min.js";s.onload=()=>res(true);s.onerror=()=>res(false);document.head.appendChild(s);});if(!loaded){if(mounted)setError("Could not load scanner.");return;}}if(!mounted||!containerRef.current)return;try{await new Promise((resolve,reject)=>{window.Quagga.init({inputStream:{type:"LiveStream",target:containerRef.current,constraints:{facingMode:"environment",width:{min:640,ideal:1280},height:{min:480,ideal:720}}},locator:{patchSize:"medium",halfSample:true},numOfWorkers:0,frequency:10,decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader"]},locate:true},(err)=>{if(err)reject(err);else resolve();});});window.Quagga.start();startedRef.current=true;if(mounted)setStatus("📦 Point at barcode");window.Quagga.onDetected((result)=>{const code=result?.codeResult?.code;if(!code||!mounted)return;if(!/^\d{8,14}$/.test(code))return;window.Quagga.offDetected();if(startedRef.current){window.Quagga.stop();startedRef.current=false;}onResult(code);});}catch(e){if(mounted)setError("Camera error: "+(e?.message||"unknown"));}}init();return()=>{mounted=false;if(startedRef.current&&window.Quagga){try{window.Quagga.stop();}catch(_){}startedRef.current=false;}};},[]); 
  return(
    <div style={{position:'fixed',inset:0,background:'#000',zIndex:50,display:'flex',flexDirection:'column'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 20px',background:'rgba(0,0,0,0.8)'}}>
        <span style={{color:'#fff',fontWeight:800,fontSize:'16px'}}>Scan Barcode</span>
        <button onClick={onClose} style={{color:'rgba(255,255,255,0.7)',background:'none',border:'none',fontSize:'20px',cursor:'pointer'}}>✕</button>
      </div>
      <div style={{flex:1,position:'relative',overflow:'hidden'}}>
        {error?<div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',gap:'12px',padding:'20px',background:'#111'}}>
          <p style={{color:'#ef4444',textAlign:'center',fontSize:'14px'}}>{error}</p>
          <button onClick={onClose} style={{background:T.accent,color:'#fff',padding:'10px 24px',borderRadius:'12px',border:'none',cursor:'pointer',fontWeight:700}}>Close</button>
        </div>:(
          <><div ref={containerRef} style={{width:'100%',height:'100%'}}/>
          <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',pointerEvents:'none'}}>
            <p style={{color:'#fff',fontWeight:800,fontSize:'22px',textShadow:'0 2px 8px rgba(0,0,0,0.8)',marginBottom:'24px'}}>{status}</p>
            <div style={{width:'70%',maxWidth:'280px',aspectRatio:'1.5',border:'2px dashed rgba(255,255,255,0.8)',borderRadius:'12px',boxShadow:'0 0 0 9999px rgba(0,0,0,0.45)'}}/>
          </div></>
        )}
      </div>
      <div style={{background:'rgba(0,0,0,0.8)',padding:'16px 20px'}}>
        <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'14px',padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
          <span style={{color:'rgba(255,255,255,0.8)',fontSize:'14px'}}>📅 Purchase Date</span>
          <span style={{color:'#fff',fontWeight:700,fontSize:'14px'}}>Today</span>
        </div>
        <label style={{display:'block',background:T.header,borderRadius:'14px',padding:'14px',textAlign:'center',cursor:'pointer'}}>
          <input type="file" accept="image/*" capture="environment" onChange={async(e)=>{const file=e.target.files?.[0];if(!file)return;}} style={{display:'none'}}/>
          <span style={{color:'#fff',fontWeight:800,fontSize:'15px'}}>Take Photo / Upload Receipt</span>
        </label>
        <p style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',textAlign:'center',marginTop:'8px'}}>Good lighting = better results.</p>
      </div>
    </div>
  );
}

// ── Receipt Scanner ──
function ReceiptScanner({onItemsFound,onClose}){
  const[step,setStep]=useState("idle");const[image,setImage]=useState(null);const[progress,setProgress]=useState(0);const[parsedItems,setParsedItems]=useState([]);const[selected,setSelected]=useState([]);
  async function handleFile(e){const file=e.target.files?.[0];if(!file)return;const url=URL.createObjectURL(file);setImage(url);setStep("parsing");setProgress(10);try{const base64=await new Promise(res=>{const reader=new FileReader();reader.onload=ev=>res(ev.target.result.split(',')[1]);reader.readAsDataURL(file);});setProgress(30);const resp=await fetch("/functions/parseReceipt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:base64,purchaseDate:today()}),credentials:"include"});setProgress(80);const data=await resp.json();if(!resp.ok){console.error('parseReceipt error:',data);alert('Error: '+(data.error||'Unknown error'));setStep('idle');return;}setProgress(100);const items=(data.items||[]).map(item=>({...item,purchase_date:item.purchase_date||today(),status:'Fresh',reminder_days_before:2}));console.log('Receipt items found:',items.length,items);setParsedItems(items);setSelected(items.map((_,i)=>i));setStep('done');}catch(err){console.error('Receipt parse failed:',err);alert('Could not parse receipt: '+err.message);setStep('idle');}}
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:50,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'16px'}} onClick={onClose}>
      <div style={{background:T.card,borderRadius:'24px',width:'100%',maxWidth:'400px',overflow:'hidden',boxShadow:'0 25px 50px rgba(0,0,0,0.15)',maxHeight:'85vh',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
        <div style={{background:T.header,padding:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><h2 style={{color:'#fff',fontWeight:800,fontSize:'18px',margin:0}}>📸 Scan Receipt</h2><p style={{color:'rgba(255,255,255,0.7)',fontSize:'12px',marginTop:'4px'}}>Auto-import items</p></div>
          <button onClick={onClose} style={{color:'rgba(255,255,255,0.7)',background:'none',border:'none',fontSize:'20px',cursor:'pointer'}}>✕</button>
        </div>
        <div style={{padding:'20px'}}>
          {step==="idle"&&(<div><p style={{color:T.textSub,fontSize:'13px',marginBottom:'16px',textAlign:'center'}}>Take a photo of your receipt</p><label style={{display:'block',background:T.header,borderRadius:'14px',padding:'14px',textAlign:'center',cursor:'pointer',marginBottom:'8px'}}><input type="file" accept="image/*" capture="environment" onChange={handleFile} style={{display:'none'}}/><span style={{color:'#fff',fontWeight:800,fontSize:'15px'}}>📷 Take Photo / Upload Receipt</span></label><p style={{color:T.textMuted,fontSize:'12px',textAlign:'center'}}>Good lighting = better results.</p></div>)}
          {step==="parsing"&&(<div style={{textAlign:'center',padding:'32px 0'}}>{image&&<img src={image} alt="receipt" style={{width:'120px',margin:'0 auto 16px',borderRadius:'12px',objectFit:'contain',maxHeight:'160px',display:'block'}}/>}<div style={{fontSize:'36px',marginBottom:'12px'}}>🧾</div><p style={{color:T.text,fontWeight:600,fontSize:'14px'}}>Reading receipt... {progress}%</p><div style={{width:'100%',background:'#e5e7eb',borderRadius:'99px',height:'6px',marginTop:'12px'}}><div style={{height:'100%',borderRadius:'99px',background:T.header,width:`${progress}%`,transition:'width 0.3s'}}/></div></div>)}
          {step==="done"&&(<div><p style={{color:T.text,fontWeight:700,fontSize:'14px',marginBottom:'4px'}}>Found {parsedItems.length} items</p><p style={{color:T.textMuted,fontSize:'12px',marginBottom:'12px'}}>Uncheck items you don't want</p><div style={{display:'flex',flexDirection:'column',gap:'8px',maxHeight:'260px',overflowY:'auto',marginBottom:'16px'}}>{parsedItems.length===0&&<p style={{textAlign:'center',color:T.textMuted,padding:'16px',fontSize:'13px'}}>No food detected.</p>}{parsedItems.map((item,i)=>(<div key={i} onClick={()=>setSelected(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i])} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px',borderRadius:'14px',border:`1px solid ${selected.includes(i)?'#ddd6fe':'#e5e7eb'}`,background:selected.includes(i)?'#f5f3ff':'#f9fafb',cursor:'pointer',opacity:selected.includes(i)?1:0.5}}><div style={{width:20,height:20,borderRadius:'50%',border:`2px solid ${selected.includes(i)?T.accent:'#d1d5db'}`,background:selected.includes(i)?T.accent:'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{selected.includes(i)&&<span style={{color:'#fff',fontSize:'10px'}}>✓</span>}</div><span style={{fontSize:'18px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span><div><p style={{color:T.text,fontWeight:600,fontSize:'13px',margin:0}}>{item.name}</p><p style={{color:T.textMuted,fontSize:'11px',marginTop:'2px'}}>{item.category} · exp {fmtDate(item.expiry_date)}</p></div></div>))}</div>{parsedItems.length>0&&<button onClick={()=>{onItemsFound(parsedItems.filter((_,i)=>selected.includes(i)));onClose();}} style={{width:'100%',background:T.header,color:'#fff',padding:'14px',borderRadius:'14px',fontWeight:800,fontSize:'14px',border:'none',cursor:'pointer'}}>➕ Add {selected.length} Items</button>}</div>)}
        </div>
      </div>
    </div>
  );
}

// ── Food Card ──
function FoodCard({item,onConsumed,onDelete,onTap,onEdit}){
  const startX=useRef(null);const[offset,setOffset]=useState(0);const[swiping,setSwiping]=useState(false);
  const days=daysUntil(item.expiry_date);const progress=offset/-120;
  const dayBg=days<0?'#fef2f2':days<=2?'#fffbeb':'#f0fdf4';
  const dayBorder=days<0?'#fecaca':days<=2?'#fde68a':'#bbf7d0';
  return(
    <div style={{position:'relative',overflow:'hidden',borderRadius:'16px',marginBottom:'10px'}}>
      <div style={{position:'absolute',inset:0,borderRadius:'16px',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:'24px',background:`rgba(34,197,94,${Math.min(1,progress*1.5)})`,transition:swiping?'none':'background 0.3s'}}>
        <div style={{color:'#fff',textAlign:'center',opacity:progress*2,transform:`scale(${0.7+progress*0.3})`,transition:swiping?'none':'all 0.3s'}}><p style={{fontSize:'24px',margin:0}}>✅</p><p style={{fontSize:'11px',fontWeight:700,margin:0}}>{progress>0.6?"Release!":"Eaten!"}</p></div>
      </div>
      <div style={{transform:`translateX(${offset}px)`,transition:swiping?'none':'transform 0.3s ease',background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'16px',padding:'14px 16px',cursor:'pointer',boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}
        onTouchStart={e=>{startX.current=e.touches[0].clientX;setSwiping(true);}}
        onTouchMove={e=>{if(startX.current==null)return;setOffset(Math.max(-120,Math.min(0,e.touches[0].clientX-startX.current)));}}
        onTouchEnd={()=>{setSwiping(false);if(offset<-80)onConsumed(item.id);else setOffset(0);startX.current=null;}}
        onClick={()=>Math.abs(offset)<5&&onTap(item)}>
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'12px'}}>
          <div style={{display:'flex',alignItems:'flex-start',gap:'12px',flex:1,minWidth:0}}>
            <span style={{fontSize:'28px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:'flex',alignItems:'center',gap:'8px',flexWrap:'wrap',marginBottom:'2px'}}>
                <h3 style={{color:T.text,fontWeight:800,fontSize:'15px',margin:0}}>{item.name}</h3>
                <StatusBadge days={days}/>
              </div>
              <p style={{color:T.textSub,fontSize:'12px',margin:'2px 0'}}>{item.category} · {item.quantity}</p>
              <p style={{color:T.textMuted,fontSize:'11px',margin:0}}>
                {item.expiry_date_approx&&!item.expiry_date_manual?<span style={{color:'#f59e0b'}}>~{fmtDate(item.expiry_date)}</span>:<span>Expires: {fmtDate(item.expiry_date)}</span>}
              </p>
              {item.notes&&<p style={{color:T.textMuted,fontSize:'11px',fontStyle:'italic',margin:'2px 0'}}>"{item.notes}"</p>}
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'6px',alignItems:'flex-end',flexShrink:0}}>
            <button onClick={e=>{e.stopPropagation();onConsumed(item.id);}} style={{background:'#22c55e',color:'#fff',fontSize:'11px',padding:'6px 10px',borderRadius:'10px',fontWeight:700,border:'none',cursor:'pointer'}}>✅ Eaten</button>
            <div style={{display:'flex',gap:'6px'}}>
              <button onClick={e=>{e.stopPropagation();onEdit(item);}} style={{color:T.accent,fontSize:'11px',fontWeight:600,background:'none',border:'none',cursor:'pointer'}}>Edit</button>
              <span style={{color:T.textMuted}}>·</span>
              <button onClick={e=>{e.stopPropagation();onDelete(item.id);}} style={{color:'#ef4444',fontSize:'11px',fontWeight:600,background:'none',border:'none',cursor:'pointer'}}>Del</button>
            </div>
          </div>
        </div>
        <div style={{marginTop:'10px',height:'3px',background:'#f3f4f6',borderRadius:'99px',overflow:'hidden'}}>
          <div style={{height:'100%',borderRadius:'99px',background:days<0?'#ef4444':days<=2?'#f59e0b':days<=5?'#22c55e':'#7c3aed',width:days<0?'100%':`${Math.max(5,100-(days/30)*100)}%`}}/>
        </div>
        <p style={{fontSize:'10px',color:T.textMuted,marginTop:'6px',userSelect:'none',pointerEvents:'none'}}>← Swipe to eat · Tap for nutrition</p>
      </div>
    </div>
  );
}

// ── Shopping List ──
function ShoppingList({items,onClose}){
  const[list,setList]=useState([]);const[custom,setCustom]=useState('');const consumed=items.filter(i=>i.status==="Consumed");
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:50,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'16px'}} onClick={onClose}>
      <div style={{background:T.card,borderRadius:'24px',width:'100%',maxWidth:'400px',boxShadow:'0 25px 50px rgba(0,0,0,0.15)',maxHeight:'85vh',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
        <div style={{background:'linear-gradient(135deg,#059669,#0d9488)',padding:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><h2 style={{color:'#fff',fontWeight:800,fontSize:'18px',margin:0}}>🛒 Shopping List</h2><p style={{color:'rgba(255,255,255,0.7)',fontSize:'12px',marginTop:'4px'}}>{list.length} items</p></div>
          <button onClick={onClose} style={{color:'rgba(255,255,255,0.7)',background:'none',border:'none',fontSize:'20px',cursor:'pointer'}}>✕</button>
        </div>
        <div style={{padding:'16px 20px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'16px'}}>
            <input value={custom} onChange={e=>setCustom(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&custom.trim()){setList(l=>[...l,{name:custom.trim(),category:'Other',done:false}]);setCustom('');}}} placeholder="Add item..."
              style={{flex:1,background:T.inputBg,border:`1px solid ${T.inputBorder}`,borderRadius:'12px',padding:'10px 14px',fontSize:'13px',color:T.text,outline:'none'}}/>
            <button onClick={()=>{if(custom.trim()){setList(l=>[...l,{name:custom.trim(),category:'Other',done:false}]);setCustom('');}}} style={{background:'#059669',color:'#fff',padding:'10px 16px',borderRadius:'12px',fontWeight:700,fontSize:'16px',border:'none',cursor:'pointer'}}>+</button>
          </div>
          {consumed.length>0&&<div style={{marginBottom:'16px'}}><p style={{fontSize:'11px',fontWeight:700,color:T.textMuted,textTransform:'uppercase',marginBottom:'8px'}}>Re-buy consumed</p><div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>{consumed.slice(0,8).map(item=>(<button key={item.id} onClick={()=>{if(!list.find(l=>l.name===item.name))setList(l=>[...l,{name:item.name,category:item.category,done:false}]);}} style={{background:'#f0fdf4',border:'1px solid #bbf7d0',color:'#16a34a',fontSize:'11px',padding:'4px 8px',borderRadius:'8px',fontWeight:600,cursor:'pointer'}}>+ {item.name}</button>))}</div></div>}
          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            {list.length===0&&<p style={{textAlign:'center',color:T.textMuted,padding:'24px',fontSize:'13px'}}>List is empty.</p>}
            {list.map((item,i)=>(<div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px',borderRadius:'14px',background:item.done?'#f9fafb':T.card,border:`1px solid ${T.cardBorder}`}}>
              <button onClick={()=>setList(l=>l.map((x,idx)=>idx===i?{...x,done:!x.done}:x))} style={{width:20,height:20,borderRadius:'50%',border:`2px solid ${item.done?'#22c55e':'#d1d5db'}`,background:item.done?'#22c55e':'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,cursor:'pointer'}}>{item.done&&<span style={{color:'#fff',fontSize:'10px'}}>✓</span>}</button>
              <span style={{fontSize:'18px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span>
              <span style={{flex:1,color:item.done?T.textMuted:T.text,textDecoration:item.done?'line-through':'none',fontSize:'13px'}}>{item.name}</span>
              <button onClick={()=>setList(l=>l.filter((_,idx)=>idx!==i))} style={{color:T.textMuted,background:'none',border:'none',cursor:'pointer',fontSize:'16px'}}>✕</button>
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Recipes Tab ──
function RecipesTab({items}){
  const[view,setView]=useState("generate");const[loading,setLoading]=useState(false);const[recipes,setRecipes]=useState([]);const[generated,setGenerated]=useState(false);const[saved,setSaved]=useState([]);
  const activeItems=items.filter(i=>i.status!=="Consumed");const expiringSoon=activeItems.filter(i=>{const d=daysUntil(i.expiry_date);return d>=0&&d<=3;}).length;
  useEffect(()=>{Recipe.list().then(r=>{if(r&&r.length)setSaved(r);}).catch(()=>{});},[]);
  async function generate(){if(activeItems.length===0){alert("No items!");return;}setLoading(true);try{const r=await generateRecipesFromFridge(activeItems);setRecipes(r);setGenerated(true);}catch(e){alert("AI error: "+(e.message||"unknown"));}setLoading(false);}
  async function saveRecipe(recipe){try{const s=await Recipe.create({title:recipe.title,description:recipe.description||"",ingredients:recipe.ingredients||[],steps:recipe.steps||[],prep_time:recipe.prep_time||"",servings:recipe.servings||2,is_healthy:false,tags:recipe.tags||[],used_items:recipe.used_items||[]});setSaved(s=>[...s,s]);}catch(e){alert("Could not save.");}}
  async function deleteRecipe(id){if(!confirm("Delete?"))return;await Recipe.delete(id);setSaved(s=>s.filter(r=>r.id!==id));}
  function RecipeCard({recipe,index,isSaved}){
    const[open,setOpen]=useState(false);
    return(
      <div style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'16px',marginBottom:'10px',overflow:'hidden',boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
        <div style={{padding:'14px 16px',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'flex-start'}} onClick={()=>setOpen(o=>!o)}>
          <div style={{flex:1}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'4px'}}>
              <span style={{background:T.header,color:'#fff',fontSize:'11px',fontWeight:700,padding:'2px 8px',borderRadius:'99px'}}>#{index+1}</span>
              {recipe.is_healthy&&<span style={{background:'#f0fdf4',color:'#16a34a',border:'1px solid #bbf7d0',fontSize:'11px',padding:'2px 8px',borderRadius:'99px'}}>🥗 Healthy</span>}
            </div>
            <h3 style={{color:T.text,fontWeight:800,fontSize:'15px',margin:'0 0 4px'}}>{recipe.title}</h3>
            <div style={{display:'flex',gap:'12px',fontSize:'12px',color:T.textSub}}>
              {recipe.prep_time&&<span>⏱ {recipe.prep_time}</span>}
              {recipe.servings&&<span>👥 {recipe.servings} servings</span>}
            </div>
            {recipe.used_items?.length>0&&<p style={{fontSize:'11px',color:'#f97316',marginTop:'4px',fontWeight:600}}>Uses {recipe.used_items.length} expiring items</p>}
          </div>
          <span style={{color:T.textMuted,fontSize:'18px'}}>{open?"▲":"▼"}</span>
        </div>
        {open&&(<div style={{padding:'0 16px 16px',borderTop:`1px solid ${T.cardBorder}`}}>
          <p style={{fontSize:'11px',fontWeight:700,color:T.textMuted,textTransform:'uppercase',marginBottom:'8px',marginTop:'12px'}}>Ingredients</p>
          <ul style={{margin:0,padding:0,listStyle:'none'}}>{(recipe.ingredients||[]).map((ing,i)=><li key={i} style={{fontSize:'13px',color:T.textSub,display:'flex',gap:'8px',marginBottom:'4px'}}><span style={{color:T.accent}}>•</span>{ing}</li>)}</ul>
          <p style={{fontSize:'11px',fontWeight:700,color:T.textMuted,textTransform:'uppercase',marginBottom:'8px',marginTop:'12px'}}>Steps</p>
          <ol style={{margin:0,padding:0,listStyle:'none'}}>{(recipe.steps||[]).map((step,i)=><li key={i} style={{fontSize:'13px',color:T.textSub,display:'flex',gap:'8px',marginBottom:'8px'}}><span style={{background:T.accent,color:'#fff',fontSize:'11px',fontWeight:700,width:20,height:20,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:'2px'}}>{i+1}</span>{step}</li>)}</ol>
          <div style={{display:'flex',gap:'8px',marginTop:'12px',flexWrap:'wrap'}}>
            {!isSaved&&<button onClick={()=>saveRecipe(recipe)} style={{background:T.accent,color:'#fff',padding:'10px 16px',borderRadius:'12px',fontSize:'13px',fontWeight:700,border:'none',cursor:'pointer',flex:1}}>💾 Save</button>}
            {isSaved&&<button onClick={()=>deleteRecipe(recipe.id)} style={{padding:'10px 12px',borderRadius:'12px',fontSize:'13px',border:`1px solid #fecaca`,background:'#fef2f2',color:'#ef4444',cursor:'pointer'}}>🗑 Delete</button>}
          </div>
        </div>)}
      </div>
    );
  }
  return(
    <div style={{marginTop:'16px'}}>
      <div style={{display:'flex',background:'#f3f4f6',borderRadius:'14px',padding:'4px',marginBottom:'16px',gap:'4px'}}>
        {[["generate","🤖 Generate"],["saved",`📖 Saved${saved.length>0?` (${saved.length})`:''}`]].map(([key,label])=>(
          <button key={key} onClick={()=>setView(key)} style={{flex:1,padding:'10px',borderRadius:'10px',fontSize:'12px',fontWeight:700,border:'none',cursor:'pointer',background:view===key?T.header:'transparent',color:view===key?'#fff':T.textSub,transition:'all 0.2s'}}>{label}</button>
        ))}
      </div>
      {view==="generate"&&(<>
        <div style={{background:T.accentSoft,border:`1px solid #ddd6fe`,borderRadius:'18px',padding:'16px',marginBottom:'16px',textAlign:'center'}}>
          <div style={{fontSize:'48px',marginBottom:'8px'}}>🤖</div>
          <p style={{color:T.text,fontWeight:800,fontSize:'16px',margin:'0 0 4px'}}>Generate Recipes with AI</p>
          <p style={{color:T.textSub,fontSize:'12px',margin:'0 0 8px'}}>{activeItems.length} items in your fridge/pantry</p>
          {expiringSoon>0&&<p style={{fontSize:'12px',fontWeight:600,color:'#f97316',background:'#fff7ed',border:'1px solid #fed7aa',borderRadius:'10px',padding:'6px 12px',margin:'0 0 12px',display:'inline-block'}}>⚠ {expiringSoon} expiring in 3 days — AI will prioritize them!</p>}
          <button onClick={generate} disabled={loading||activeItems.length===0} style={{width:'100%',background:T.header,color:'#fff',padding:'14px',borderRadius:'14px',fontWeight:800,fontSize:'14px',border:'none',cursor:'pointer',opacity:loading||activeItems.length===0?0.5:1}}>
            {loading?"🤖 Thinking...":generated?"🔄 Generate New Recipes":"✨ Generate Recipes with AI"}
          </button>
        </div>
        {loading&&<div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'40px',gap:'12px'}}><div style={{width:40,height:40,border:`4px solid ${T.accent}`,borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/><p style={{color:T.textSub,fontWeight:600,fontSize:'13px'}}>AI is checking your fridge...</p></div>}
        {!loading&&generated&&recipes.map((r,i)=><RecipeCard key={i} recipe={r} index={i} isSaved={false}/>)}
        {!loading&&!generated&&<div style={{textAlign:'center',padding:'40px',color:T.textMuted}}><p style={{fontSize:'36px',margin:'0 0 8px'}}>🤖</p><p style={{fontWeight:600,fontSize:'14px',margin:'0 0 4px',color:T.textSub}}>Tap Generate to get AI meal ideas</p></div>}
      </>)}
      {view==="saved"&&(<>{saved.length===0?<div style={{textAlign:'center',padding:'40px',color:T.textMuted}}><p style={{fontSize:'36px',margin:'0 0 8px'}}>📖</p><p style={{fontWeight:600,fontSize:'14px',color:T.textSub}}>No saved recipes yet</p></div>:saved.map((r,i)=><RecipeCard key={r.id} recipe={r} index={i} isSaved={true}/>)}</>)}
    </div>
  );
}

// ── Stats Tab ──
function StatsTab({items}){
  const consumed=items.filter(i=>i.status==="Consumed");const expired=items.filter(i=>daysUntil(i.expiry_date)<0&&i.status!=="Consumed");
  const catCounts=Object.keys(CATEGORY_EMOJI).map(c=>({cat:c,count:items.filter(i=>i.category===c&&i.status!=="Consumed").length})).filter(x=>x.count>0).sort((a,b)=>b.count-a.count);
  return(
    <div style={{marginTop:'16px'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'16px'}}>
        {[["🍽","Consumed",consumed.length,"#22c55e"],["🚨","Expired",expired.length,"#ef4444"],["📦","Total Items",items.length,T.accent],["🌱","Saved","~"+Math.max(0,consumed.length-expired.length)+" items","#f59e0b"]].map(([icon,label,val,color])=>(
          <div key={label} style={{background:T.card,borderRadius:'16px',padding:'16px',border:`1px solid ${T.cardBorder}`,boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
            <p style={{fontSize:'28px',margin:'0 0 4px'}}>{icon}</p>
            <p style={{fontSize:'22px',fontWeight:800,color,margin:'0 0 2px'}}>{val}</p>
            <p style={{fontSize:'12px',color:T.textSub,margin:0}}>{label}</p>
          </div>
        ))}
      </div>
      <div style={{background:T.card,borderRadius:'16px',padding:'16px',border:`1px solid ${T.cardBorder}`,boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
        <p style={{color:T.textMuted,fontSize:'11px',fontWeight:700,textTransform:'uppercase',marginBottom:'12px'}}>By Category</p>
        {catCounts.map(({cat,count})=>(
          <div key={cat} style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'10px'}}>
            <span style={{fontSize:'20px',width:28,textAlign:'center'}}>{CATEGORY_EMOJI[cat]}</span>
            <div style={{flex:1}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px'}}><span style={{color:T.text,fontSize:'13px'}}>{cat}</span><span style={{color:T.textMuted,fontSize:'12px'}}>{count}</span></div>
              <div style={{height:'4px',background:'#f3f4f6',borderRadius:'99px',overflow:'hidden'}}><div style={{height:'100%',background:T.header,borderRadius:'99px',width:`${(count/Math.max(1,items.length))*100}%`}}/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Add Food Form ──
function AddFoodForm({form,setForm,editId,onSubmit,onClose,onScanBarcode,onScanReceipt}){
  const CATS=["Dairy","Meat & Fish","Fruits & Vegetables","Bread & Bakery","Leftovers","Drinks","Condiments & Sauces","Frozen","Snacks","Other"];
  const RECENT=["Milk","Eggs","Chicken Fillet","Banana","Cottage Cheese","Mozzarella Roll","Greek Yogurt","Butter","Cheddar","Bread"];
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',zIndex:50,display:'flex',alignItems:'flex-end',justifyContent:'center'}} onClick={onClose}>
      <div style={{background:'#f8f7ff',width:'100%',maxWidth:'440px',borderRadius:'24px 24px 0 0',maxHeight:'95vh',overflowY:'auto',paddingBottom:'32px'}} onClick={e=>e.stopPropagation()}>
        <div style={{padding:'20px 20px 0'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
            <h2 style={{color:T.text,fontWeight:900,fontSize:'24px',margin:0}}>+ Add Food</h2>
            <button onClick={onClose} style={{color:T.textSub,background:'#e5e7eb',border:'none',borderRadius:'50%',width:32,height:32,cursor:'pointer',fontSize:'16px'}}>✕</button>
          </div>
          <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Product Name" required
            style={{width:'100%',background:T.card,border:`1px solid ${T.inputBorder}`,borderRadius:'14px',padding:'14px 16px',fontSize:'15px',color:T.text,outline:'none',boxSizing:'border-box',marginBottom:'12px'}}/>
          <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'16px'}}>
            {RECENT.slice(0,6).map(n=>(<button key={n} onClick={()=>setForm(f=>({...f,name:n}))} style={{background:T.accentSoft,border:`1px solid #ddd6fe`,color:T.accent,fontSize:'12px',padding:'4px 10px',borderRadius:'20px',cursor:'pointer',fontWeight:500}}>{n}</button>))}
          </div>
          <p style={{color:T.textSub,fontSize:'13px',fontWeight:600,marginBottom:'8px'}}>Location</p>
          <div style={{display:'flex',gap:'8px',marginBottom:'16px'}}>
            {LOCATIONS.map(loc=>(<button key={loc} onClick={()=>setForm(f=>({...f,location:loc}))} style={{flex:1,padding:'10px',borderRadius:'12px',fontSize:'13px',fontWeight:700,border:'none',cursor:'pointer',background:form.location===loc?T.header:'#f3f4f6',color:form.location===loc?'#fff':T.textSub}}>{loc}</button>))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'8px',marginBottom:'16px'}}>
            {["Dairy","Meat & Fish","Fruits & Vegetables","Bread & Bakery","Drinks","Condiments & Sauces","Snacks","Other"].map(cat=>(<button key={cat} onClick={()=>setForm(f=>({...f,category:cat,expiry_date:addDays(f.purchase_date,SHELF_LIFE[cat])}))} style={{background:form.category===cat?T.accentSoft:T.card,border:`1px solid ${form.category===cat?'#ddd6fe':T.cardBorder}`,borderRadius:'14px',padding:'10px 4px',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:'4px'}}><span style={{fontSize:'22px'}}>{CATEGORY_EMOJI[cat]||"🛒"}</span><span style={{fontSize:'10px',color:form.category===cat?T.accent:T.textSub,fontWeight:600,textAlign:'center',lineHeight:'1.2'}}>{cat}</span></button>))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'12px'}}>
            <div style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px 14px'}}>
              <p style={{color:T.textMuted,fontSize:'11px',fontWeight:600,margin:'0 0 4px'}}>Purchase Date 📅</p>
              <input type="date" value={form.purchase_date} onChange={e=>setForm(f=>({...f,purchase_date:e.target.value}))} style={{background:'none',border:'none',color:T.text,fontSize:'13px',fontWeight:700,outline:'none',width:'100%'}}/>
            </div>
            <div style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px 14px'}}>
              <p style={{color:T.textMuted,fontSize:'11px',fontWeight:600,margin:'0 0 4px'}}>Expiry Date 📅</p>
              <input type="date" value={form.expiry_date} onChange={e=>setForm(f=>({...f,expiry_date:e.target.value,expiry_date_manual:true,expiry_date_approx:false}))} style={{background:'none',border:'none',color:T.text,fontSize:'13px',fontWeight:700,outline:'none',width:'100%'}}/>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'16px'}}>
            <div style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px 14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{color:T.textSub,fontSize:'13px',fontWeight:600}}>Quantity</span>
              <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <button onClick={()=>setForm(f=>({...f,quantity:String(Math.max(1,parseInt(f.quantity||1)-1))}))} style={{background:'#f3f4f6',border:'none',borderRadius:'6px',width:24,height:24,color:T.text,cursor:'pointer',fontWeight:700}}>−</button>
                <span style={{color:T.text,fontWeight:800,minWidth:'16px',textAlign:'center'}}>{form.quantity||1}</span>
                <button onClick={()=>setForm(f=>({...f,quantity:String(parseInt(f.quantity||1)+1)}))} style={{background:'#f3f4f6',border:'none',borderRadius:'6px',width:24,height:24,color:T.text,cursor:'pointer',fontWeight:700}}>+</button>
              </div>
            </div>
            <div style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px 14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{color:T.textSub,fontSize:'13px',fontWeight:600}}>Alert</span>
              <select value={form.reminder_days_before} onChange={e=>setForm(f=>({...f,reminder_days_before:parseInt(e.target.value)}))} style={{background:'none',border:'none',color:T.text,fontSize:'13px',fontWeight:700,outline:'none'}}>
                <option value={1}>1 day</option><option value={2}>2 days</option><option value={3}>3 days</option><option value={5}>5 days</option>
              </select>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'16px'}}>
            <button onClick={onScanBarcode} style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px',color:T.textSub,fontSize:'13px',fontWeight:600,cursor:'pointer'}}>📷 Scan Barcode</button>
            <button onClick={onScanReceipt} style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px',color:T.textSub,fontSize:'13px',fontWeight:600,cursor:'pointer'}}>🧾 Scan Receipt</button>
          </div>
          <button onClick={onSubmit} style={{width:'100%',background:T.header,color:'#fff',padding:'16px',borderRadius:'16px',fontWeight:900,fontSize:'16px',border:'none',cursor:'pointer',boxShadow:'0 4px 16px rgba(124,58,237,0.25)'}}>
            {editId?"💾 Update Item":"+ Add to "+form.location}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── AI CHAT POPUP ──
function AIChatPopup(){
  const[open,setOpen]=useState(false);
  const[image,setImage]=useState(null);
  const[uploading,setUploading]=useState(false);
  const[result,setResult]=useState(null);
  const[adding,setAdding]=useState(false);
  const[done,setDone]=useState(false);
  const fileRef=useRef();

  async function handleImage(e){
    const file=e.target.files[0];
    if(!file)return;
    setImage(URL.createObjectURL(file));
    setResult(null);setDone(false);
    setUploading(true);
    try{
      const formData=new FormData();
      formData.append('file',file);
      formData.append('type','receipt');
      const res=await fetch('/api/functions/parseReceipt',{method:'POST',body:formData});
      const data=await res.json();
      setResult(data.items||[]);
    }catch(err){setResult([]);}
    setUploading(false);
  }

  async function addToTracker(){
    if(!result||result.length===0)return;
    setAdding(true);
    try{
      await Promise.all(result.map(item=>FoodItem.create({
        name:item.name,
        category:item.category||'Other',
        purchase_date:new Date().toISOString().split('T')[0],
        expiry_date:item.expiry_date,
        expiry_date_approx:true,
        quantity:'1',
        status:'Active',
        location:item.location||'Pantry',
        reminder_days_before:2,
      })));
      setDone(true);
    }catch(e){}
    setAdding(false);
  }

  return(
    <>
      {/* Toggle button */}
      <button
        onClick={()=>{setOpen(o=>!o);setImage(null);setResult(null);setDone(false);}}
        style={{
          position:'fixed',bottom:'88px',right:'20px',zIndex:200,
          width:'56px',height:'56px',borderRadius:'50%',
          background:'linear-gradient(135deg,#7c3aed,#db2777)',
          display:'flex',alignItems:'center',justifyContent:'center',
          boxShadow:'0 4px 20px rgba(124,58,237,0.4)',
          fontSize:'24px',border:'none',cursor:'pointer',
        }}
      >
        {open ? '✕' : '🤖'}
      </button>

      {/* Popup */}
      {open&&(
        <div style={{
          position:'fixed',bottom:'160px',right:'20px',zIndex:199,
          width:'320px',background:'#fff',borderRadius:'20px',
          boxShadow:'0 8px 40px rgba(0,0,0,0.25)',
          overflow:'hidden',border:'1px solid #e5e7eb',
        }}>
          {/* Header */}
          <div style={{background:'linear-gradient(135deg,#7c3aed,#db2777)',padding:'12px 16px',display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{fontSize:'22px'}}>🤖</span>
            <div style={{flex:1}}>
              <p style={{color:'#fff',fontWeight:800,fontSize:'14px',margin:0}}>Pedro AI Assistant</p>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:'11px',margin:0}}>Fotografiraj račun → dodaj namirnice</p>
            </div>
          </div>

          {/* Body */}
          <div style={{padding:'16px',display:'flex',flexDirection:'column',gap:'12px'}}>
            {!done?(
              <>
                {/* Upload zone */}
                <div
                  onClick={()=>fileRef.current.click()}
                  style={{
                    border:'2px dashed #d1d5db',borderRadius:'12px',
                    padding:'20px',textAlign:'center',cursor:'pointer',
                    background:image?'#f9fafb':'#fff',
                    transition:'border-color 0.2s',
                  }}
                >
                  {image?(
                    <img src={image} style={{maxWidth:'100%',maxHeight:'150px',borderRadius:'8px',objectFit:'contain'}} />
                  ):(
                    <>
                      <p style={{fontSize:'32px',margin:'0 0 4px'}}>📷</p>
                      <p style={{fontSize:'13px',fontWeight:600,color:'#374151',margin:'0 0 2px'}}>Dodaj sliku računa</p>
                      <p style={{fontSize:'11px',color:'#9ca3af',margin:0}}>Klikni za odabir ili fotografiraj</p>
                    </>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleImage} style={{display:'none'}} />

                {/* Status */}
                {uploading&&(
                  <div style={{textAlign:'center',padding:'8px',color:'#7c3aed',fontSize:'13px',fontWeight:600}}>
                    🔍 Analiziram račun...
                  </div>
                )}

                {/* Results */}
                {result&&result.length>0&&!uploading&&(
                  <>
                    <div style={{maxHeight:'160px',overflowY:'auto',display:'flex',flexDirection:'column',gap:'6px'}}>
                      {result.map((item,i)=>(
                        <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 10px',background:'#f9fafb',borderRadius:'8px',fontSize:'12px'}}>
                          <span style={{fontWeight:600,color:'#111'}}>{item.name}</span>
                          <span style={{color:'#6b7280'}}>{item.expiry_date}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addToTracker}
                      disabled={adding}
                      style={{
                        background:'linear-gradient(135deg,#7c3aed,#db2777)',
                        color:'#fff',fontWeight:700,fontSize:'14px',
                        padding:'12px',borderRadius:'12px',border:'none',cursor:'pointer',
                      }}
                    >
                      {adding?'Dodajem...':'✅ Dodaj sve u tracker'}
                    </button>
                  </>
                )}

                {result&&result.length===0&&!uploading&&(
                  <p style={{textAlign:'center',fontSize:'13px',color:'#ef4444'}}>Nisam pronašao namirnice. Pokušaj s jasnijom slikom.</p>
                )}
              </>
            ):(
              <div style={{textAlign:'center',padding:'20px'}}>
                <p style={{fontSize:'36px',margin:'0 0 8px'}}>✅</p>
                <p style={{fontWeight:700,fontSize:'15px',color:'#111',margin:'0 0 4px'}}>Namirnice dodane!</p>
                <p style={{fontSize:'12px',color:'#6b7280',margin:'0 0 16px'}}>Sve je upisano u tracker.</p>
                <button onClick={()=>{setImage(null);setResult(null);setDone(false);}} style={{background:'#f3f4f6',border:'none',borderRadius:'10px',padding:'10px 20px',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>
                  Skeniraj još jedan
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ── MAIN ──
export default function ExpiryTracker(){
  const[items,setItems]=useState([]);const[settings,setSettings]=useState({reminder_time:"08:00",reminder_enabled:true,notify_days_before:2});const[settingsId,setSettingsId]=useState(null);
  const[tab,setTab]=useState("home");const[showForm,setShowForm]=useState(false);const[form,setForm]=useState(EMPTY);const[editId,setEditId]=useState(null);
  const[loading,setLoading]=useState(true);const[filter,setFilter]=useState("All");
  const[nutritionItem,setNutritionItem]=useState(null);const[showShopping,setShowShopping]=useState(false);
  const[showBarcode,setShowBarcode]=useState(false);const[showReceipt,setShowReceipt]=useState(false);
  const[barcodeLoading,setBarcodeLoading]=useState(false);const[showBarcodeManual,setShowBarcodeManual]=useState(false);
  const[scannedBarcode,setScannedBarcode]=useState("");const[manualName,setManualName]=useState("");const[manualSearching,setManualSearching]=useState(false);

  useEffect(()=>{loadAll();},[]);
  async function loadAll(){
    setLoading(true);
    try{let foodData=[];let settingsData=[];
      try{foodData=await FoodItem.list();}catch(e){console.error("FoodItem error:",e);}
      try{settingsData=await AppSettings.list();}catch(e){console.error("Settings error:",e);}
      const updated=foodData.map(item=>{if(item.status==="Consumed")return item;if(!item.expiry_date)return item;return{...item,status:getStatus(daysUntil(item.expiry_date))};});
      setItems(updated);
      if(settingsData.length>0){setSettings(settingsData[0]);setSettingsId(settingsData[0].id);}
      else{try{const s=await AppSettings.create({reminder_time:"08:00",reminder_enabled:true,notify_days_before:2});setSettings(s);setSettingsId(s.id);}catch(e){}}
    }catch(e){console.error("loadAll error:",e);}
    setLoading(false);
  }
  async function handleSubmit(e){if(e?.preventDefault)e.preventDefault();if(!form.name.trim()){alert("Enter a product name.");return;}const{_barcode,expiry_date_approx,...rest}=form;const payload={...rest,quantity:form.quantity||"1",status:getStatus(daysUntil(form.expiry_date)),expiry_date_approx:expiry_date_approx||false};if(editId)await FoodItem.update(editId,payload);else await FoodItem.create(payload);if(_barcode&&!editId){ProductCache.filter({barcode:_barcode}).then(existing=>{if(!existing?.length)ProductCache.create({barcode:_barcode,name:form.name,brand:"",category:form.category,nutriscore:null,source:"user"}).catch(()=>{});}).catch(()=>{});}setForm(EMPTY);setShowForm(false);setEditId(null);loadAll();}
  async function markConsumed(id){await FoodItem.update(id,{status:"Consumed"});loadAll();}
  async function markRestored(id){const item=items.find(i=>i.id===id);if(item)await FoodItem.update(id,{status:getStatus(daysUntil(item.expiry_date))});loadAll();}
  async function deleteItem(id){if(confirm("Delete?"))await FoodItem.delete(id);loadAll();}
  async function handleBarcodeResult(barcode){setShowBarcode(false);setBarcodeLoading(true);try{const data=await fetchNutritionByBarcode(barcode);if(data.found&&data.name){const cat=mapCategory(data.category,data.name);setForm({...EMPTY,name:data.name,category:cat,expiry_date:addDays(today(),SHELF_LIFE[cat]),expiry_date_approx:true,expiry_date_manual:false,quantity:data.quantity||"1",_barcode:barcode});setEditId(null);setShowForm(true);}else{setScannedBarcode(barcode);setShowBarcodeManual(true);}}catch(e){setScannedBarcode(barcode);setShowBarcodeManual(true);}setBarcodeLoading(false);}
  function mapCategory(cat,productName){const n=(productName||"").toLowerCase();const c=(cat||"").toLowerCase();const combined=n+" "+c;if(/milk|cheese|yogurt|butter|cream|cheddar|mozzarella|feta|ricotta|skimmed/.test(combined))return"Dairy";if(/egg/.test(combined))return"Dairy";if(/chicken|beef|pork|lamb|turkey|salmon|tuna|cod|fish|seafood|prawn|mince|steak|sausage|bacon|ham/.test(combined))return"Meat & Fish";if(/hummus|houmous|tahini|pesto|mayo|ketchup|mustard|relish|dressing|vinegar|soy sauce|hot sauce|bbq|jam|marmalade|honey|nutella/.test(combined))return"Condiments & Sauces";if(/bread|bagel|baguette|roll|bun|wrap|tortilla|pitta|croissant|muffin|scone|pastry|cake|biscuit|cookie/.test(combined))return"Bread & Bakery";if(/apple|banana|orange|grape|strawberr|berr|melon|mango|pear|peach|kiwi|lemon|lime|avocado|salad|lettuce|spinach|carrot|broccoli|cabbage|onion|potato|tomato|cucumber|pepper|mushroom/.test(combined))return"Fruits & Vegetables";if(/frozen|ice cream/.test(combined))return"Frozen";if(/crisp|chip|popcorn|chocolate|candy|sweet|snack|nut/.test(combined))return"Snacks";if(/juice|smoothie|water|soda|cola|beer|wine|cider|drink/.test(combined))return"Drinks";if(/leftover|soup|stew|curry|pasta|rice|pizza/.test(combined))return"Leftovers";return"Other";}
  async function handleReceiptItems(newItems){for(const item of newItems)await FoodItem.create(item);loadAll();}

  const activeItems=items.filter(i=>i.status!=="Consumed");
  const fridgeItems=activeItems.filter(i=>!i.location||i.location==="Fridge");
  const freezerItems=activeItems.filter(i=>i.location==="Freezer");
  const pantryItems=activeItems.filter(i=>i.location==="Pantry");
  const consumedItems=items.filter(i=>i.status==="Consumed");
  const expiringSoon=activeItems.filter(i=>{const d=daysUntil(i.expiry_date);return d>=0&&d<=settings.notify_days_before;});
  const expired=activeItems.filter(i=>daysUntil(i.expiry_date)<0);
  const useThisWeek=activeItems.filter(i=>{const d=daysUntil(i.expiry_date);return d>=0&&d<=7;}).sort((a,b)=>daysUntil(a.expiry_date)-daysUntil(b.expiry_date));
  const tabItems=tab==="freezer"?freezerItems:tab==="pantry"?pantryItems:fridgeItems;
  const filteredItems=(filter==="All"?tabItems:filter==="⚠️ Expiring"?tabItems.filter(i=>daysUntil(i.expiry_date)<=3):tabItems.filter(i=>i.category===filter)).sort((a,b)=>daysUntil(a.expiry_date)-daysUntil(b.expiry_date));
  const TABS=[{key:"home",icon:"🏠",label:"Home"},{key:"fridge",icon:"🧊",label:"Fridge"},{key:"freezer",icon:"❄️",label:"Freezer"},{key:"pantry",icon:"🏪",label:"Pantry"},{key:"recipes",icon:"🤖",label:"Recipes"},{key:"stats",icon:"📊",label:"Stats"}];

  return(
    <div style={{minHeight:'100vh',background:T.bg,fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',paddingBottom:'80px'}}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} *{box-sizing:border-box}`}</style>

      {/* HEADER */}
      <div style={{background:T.header,padding:'52px 20px 20px'}}>
        <div style={{maxWidth:'440px',margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <span style={{fontSize:'32px'}}>🥗</span>
              <div>
                <h1 style={{color:'#fff',fontWeight:900,fontSize:'22px',margin:0}}>Expiry Tracker</h1>
                <p style={{color:'rgba(255,255,255,0.8)',fontSize:'12px',margin:'2px 0 0'}}>Stop wasting food. Stay fresh.</p>
              </div>
            </div>
            <div style={{display:'flex',gap:'8px'}}>
              <button onClick={()=>setShowShopping(true)} style={{background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',width:38,height:38,borderRadius:'12px',cursor:'pointer',fontSize:'16px',display:'flex',alignItems:'center',justifyContent:'center'}}>🛒</button>
            </div>
          </div>
          {/* Stat cards */}
          <div style={{display:'flex',gap:'10px',overflowX:'auto',scrollbarWidth:'none',paddingBottom:'4px'}}>
            {[["Fridge",fridgeItems.length,false],["Freezer",freezerItems.length,false],["Pantry",pantryItems.length,false],["Soon",expiringSoon.length,expiringSoon.length>0],["Expired",expired.length,expired.length>0]].map(([label,count,alert])=>(
              <div key={label} onClick={()=>label==="Fridge"?setTab("fridge"):label==="Freezer"?setTab("freezer"):label==="Pantry"?setTab("pantry"):null}
                style={{flexShrink:0,background:alert?(label==="Soon"?'#f59e0b':'#ef4444'):'rgba(255,255,255,0.95)',borderRadius:'18px',padding:'14px 18px',minWidth:'80px',textAlign:'center',cursor:'pointer',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
                {alert&&<p style={{fontSize:'14px',margin:'0 0 2px'}}>⚠️</p>}
                <p style={{color:alert?'#fff':T.text,fontSize:'28px',fontWeight:900,margin:'0 0 2px',lineHeight:1}}>{count}</p>
                <p style={{color:alert?'rgba(255,255,255,0.85)':T.textSub,fontSize:'11px',fontWeight:600,margin:0}}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:'440px',margin:'0 auto',padding:'16px 20px 0'}}>

        {/* HOME */}
        {tab==="home"&&(<>
          {loading&&<div style={{display:'flex',justifyContent:'center',padding:'40px'}}><div style={{width:36,height:36,border:`3px solid ${T.accent}`,borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/></div>}
          {!loading&&(<>
            {expiringSoon.length>0&&(
              <div style={{background:T.soonBg,border:`1px solid ${T.soonBorder}`,borderRadius:'14px',padding:'12px 16px',marginBottom:'12px',display:'flex',alignItems:'center',gap:'10px',cursor:'pointer'}} onClick={()=>setTab('fridge')}>
                <span style={{fontSize:'18px'}}>🔔</span>
                <span style={{color:'#92400e',fontWeight:600,fontSize:'13px'}}>{expiringSoon.length} expiring within {settings.notify_days_before} days</span>
              </div>
            )}
            {expired.length>0&&(
              <div style={{background:T.expiredBg,border:`1px solid ${T.expiredBorder}`,borderRadius:'14px',padding:'12px 16px',marginBottom:'12px',display:'flex',alignItems:'center',gap:'10px',cursor:'pointer'}} onClick={()=>setTab('fridge')}>
                <span style={{fontSize:'18px'}}>🚨</span>
                <span style={{color:'#991b1b',fontWeight:600,fontSize:'13px'}}>{expired.length} expired item{expired.length>1?"s":""} — check now</span>
              </div>
            )}
            {useThisWeek.length>0&&(<>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
                <p style={{color:T.text,fontWeight:800,fontSize:'17px',margin:0}}>Use this week</p>
                <button onClick={()=>setTab('fridge')} style={{color:T.accent,fontSize:'12px',fontWeight:700,background:'none',border:'none',cursor:'pointer'}}>Ed →</button>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'16px'}}>
                {useThisWeek.slice(0,5).map(item=>{
                  const d=daysUntil(item.expiry_date);
                  return(
                    <div key={item.id} style={{background:T.card,border:`1px solid ${T.cardBorder}`,borderRadius:'16px',padding:'12px 14px',display:'flex',alignItems:'center',gap:'12px',cursor:'pointer',boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}} onClick={()=>setNutritionItem(item)}>
                      <span style={{fontSize:'24px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span>
                      <div style={{flex:1,minWidth:0}}>
                        <p style={{color:T.text,fontWeight:700,fontSize:'14px',margin:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{item.name}</p>
                        <p style={{color:T.textMuted,fontSize:'11px',margin:'2px 0 0'}}>{item.category}</p>
                      </div>
                      <span style={{background:d<=2?T.expiredBg:d<=5?T.soonBg:'#f0fdf4',color:d<=2?T.expired:d<=5?T.soon:T.fresh,fontSize:'13px',fontWeight:800,padding:'6px 10px',borderRadius:'10px',flexShrink:0,border:`1px solid ${d<=2?T.expiredBorder:d<=5?T.soonBorder:'#bbf7d0'}`}}>{d===0?"Today":d+"d"}</span>
                    </div>
                  );
                })}
              </div>
            </>)}
            <button onClick={()=>{setForm(EMPTY);setEditId(null);setShowForm(true);}} style={{width:'100%',background:T.header,color:'#fff',padding:'16px',borderRadius:'16px',fontWeight:900,fontSize:'16px',border:'none',cursor:'pointer',boxShadow:'0 4px 16px rgba(124,58,237,0.25)'}}>
              + Add Food
            </button>
          </>)}
        </>)}

        {/* FRIDGE / FREEZER / PANTRY */}
        {(tab==="fridge"||tab==="freezer"||tab==="pantry")&&(<>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
            <h2 style={{color:T.text,fontWeight:900,fontSize:'20px',margin:0}}>
              {tab==="fridge"?"🧊 Fridge":tab==="freezer"?"❄️ Freezer":"🏪 Pantry"}
              <span style={{color:T.textMuted,fontWeight:400,fontSize:'14px',marginLeft:'8px'}}>{tabItems.length}</span>
            </h2>
            <button onClick={()=>{setForm({...EMPTY,location:tab.charAt(0).toUpperCase()+tab.slice(1)});setEditId(null);setShowForm(true);}} style={{background:T.header,color:'#fff',padding:'8px 16px',borderRadius:'12px',fontWeight:700,fontSize:'13px',border:'none',cursor:'pointer'}}>+ Add</button>
          </div>
          <div style={{display:'flex',gap:'8px',overflowX:'auto',paddingBottom:'8px',marginBottom:'12px',scrollbarWidth:'none'}}>
            {["All","⚠️ Expiring","Dairy","Meat & Fish","Fruits & Vegetables","Bread & Bakery","Drinks","Snacks"].map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{flexShrink:0,padding:'6px 14px',borderRadius:'99px',fontSize:'12px',fontWeight:600,border:'none',cursor:'pointer',background:filter===f?T.header:'#e5e7eb',color:filter===f?'#fff':T.textSub}}>
                {f}
              </button>
            ))}
          </div>
          {loading&&<div style={{display:'flex',justifyContent:'center',padding:'40px'}}><div style={{width:36,height:36,border:`3px solid ${T.accent}`,borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/></div>}
          {!loading&&filteredItems.length===0&&(
            <div style={{textAlign:'center',padding:'60px 20px'}}>
              <p style={{fontSize:'48px',margin:'0 0 12px'}}>📭</p>
              <p style={{color:T.textSub,fontWeight:600,fontSize:'15px',margin:'0 0 4px'}}>Nothing here yet</p>
              <p style={{color:T.textMuted,fontSize:'13px',margin:0}}>Tap + Add to get started</p>
            </div>
          )}
          {!loading&&filteredItems.map(item=>(
            <FoodCard key={item.id} item={item} onConsumed={markConsumed} onDelete={deleteItem} onTap={setNutritionItem} onEdit={item=>{setForm({name:item.name,category:item.category,location:item.location||"Fridge",purchase_date:item.purchase_date||today(),expiry_date:item.expiry_date,expiry_date_approx:item.expiry_date_approx||false,expiry_date_manual:item.expiry_date_manual||false,quantity:item.quantity||"1",notes:item.notes||"",reminder_days_before:item.reminder_days_before||2,_barcode:""});setEditId(item.id);setShowForm(true);}}/>
          ))}
          {tab==="fridge"&&consumedItems.length>0&&(
            <div style={{marginTop:'20px'}}>
              <p style={{color:T.textMuted,fontSize:'12px',fontWeight:700,textTransform:'uppercase',marginBottom:'10px'}}>✅ Consumed ({consumedItems.length})</p>
              {consumedItems.slice(0,5).map(item=>(
                <div key={item.id} style={{background:'#f9fafb',border:`1px solid ${T.cardBorder}`,borderRadius:'14px',padding:'12px 14px',display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px',opacity:0.7}}>
                  <span style={{fontSize:'20px'}}>{CATEGORY_EMOJI[item.category]||"🛒"}</span>
                  <div style={{flex:1}}><p style={{color:T.textSub,fontWeight:600,fontSize:'13px',margin:0,textDecoration:'line-through'}}>{item.name}</p></div>
                  <button onClick={()=>markRestored(item.id)} style={{color:T.accent,fontSize:'11px',background:'none',border:'none',cursor:'pointer',fontWeight:600}}>Restore</button>
                  <button onClick={()=>deleteItem(item.id)} style={{color:'#ef4444',fontSize:'11px',background:'none',border:'none',cursor:'pointer',fontWeight:600}}>Del</button>
                </div>
              ))}
            </div>
          )}
        </>)}

        {tab==="recipes"&&<RecipesTab items={items}/>}
        {tab==="stats"&&<StatsTab items={items}/>}
      </div>

      {/* BOTTOM NAV */}
      <div style={{position:'fixed',bottom:0,left:0,right:0,background:T.navBg,borderTop:`1px solid ${T.navBorder}`,display:'flex',padding:'8px 0 20px',zIndex:20}}>
        {TABS.map(({key,icon,label})=>(
          <button key={key} onClick={()=>setTab(key)} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:'2px',background:'none',border:'none',cursor:'pointer',padding:'6px 0'}}>
            <span style={{fontSize:'20px',filter:tab===key?'none':'grayscale(1)',opacity:tab===key?1:0.4}}>{icon}</span>
            <span style={{fontSize:'10px',fontWeight:700,color:tab===key?T.accent:T.textMuted}}>{label}</span>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button onClick={()=>{setForm(EMPTY);setEditId(null);setShowForm(true);}} style={{position:'fixed',bottom:'80px',right:'20px',width:56,height:56,borderRadius:'50%',background:T.header,color:'#fff',fontSize:'28px',border:'none',cursor:'pointer',boxShadow:'0 4px 20px rgba(124,58,237,0.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:15}}>+</button>

      {/* MODALS */}
      {showForm&&<AddFoodForm form={form} setForm={setForm} editId={editId} onSubmit={handleSubmit} onClose={()=>{setShowForm(false);setEditId(null);setForm(EMPTY);}} onScanBarcode={()=>{setShowForm(false);setShowBarcode(true);}} onScanReceipt={()=>{setShowForm(false);setShowReceipt(true);}}/>}
      {showBarcode&&<BarcodeScanner onResult={handleBarcodeResult} onClose={()=>setShowBarcode(false)}/>}
      {showReceipt&&<ReceiptScanner onItemsFound={handleReceiptItems} onClose={()=>setShowReceipt(false)}/>}
      {showShopping&&<ShoppingList items={items} onClose={()=>setShowShopping(false)}/>}
      {nutritionItem&&<NutritionPanel item={nutritionItem} onClose={()=>setNutritionItem(null)}/>}
      {barcodeLoading&&<div style={{position:'fixed',inset:0,background:'rgba(255,255,255,0.9)',zIndex:50,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'12px'}}><div style={{width:48,height:48,border:`4px solid ${T.accent}`,borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/><p style={{color:T.textSub,fontWeight:700,fontSize:'14px'}}>Looking up product...</p></div>}
      {showBarcodeManual&&(
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',zIndex:50,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'16px'}} onClick={()=>{setShowBarcodeManual(false);setManualName('');}}>
          <div style={{background:T.card,borderRadius:'24px',width:'100%',maxWidth:'400px',padding:'24px',boxShadow:'0 25px 50px rgba(0,0,0,0.15)'}} onClick={e=>e.stopPropagation()}>
            <h3 style={{color:T.text,fontWeight:800,fontSize:'16px',margin:'0 0 4px'}}>Product not found</h3>
            <p style={{color:T.textMuted,fontSize:'12px',margin:'0 0 16px'}}>Barcode: {scannedBarcode}</p>
            <input value={manualName} onChange={e=>setManualName(e.target.value)} placeholder="e.g. Cheddar Cheese" autoFocus
              style={{width:'100%',background:T.inputBg,border:`1px solid ${T.inputBorder}`,borderRadius:'12px',padding:'12px 14px',fontSize:'14px',color:T.text,outline:'none',marginBottom:'12px'}}/>
            <button disabled={manualSearching||!manualName.trim()} onClick={async()=>{if(!manualName.trim())return;const cat=mapCategory("",manualName);setForm({...EMPTY,name:manualName.trim(),category:cat,expiry_date:addDays(today(),SHELF_LIFE[cat]),expiry_date_approx:true,expiry_date_manual:false,_barcode:scannedBarcode});setEditId(null);setShowBarcodeManual(false);setManualName('');setShowForm(true);}}
              style={{width:'100%',background:T.header,color:'#fff',padding:'14px',borderRadius:'14px',fontWeight:800,fontSize:'14px',border:'none',cursor:'pointer',opacity:manualSearching||!manualName.trim()?0.5:1}}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Floating AI Chat Button */}
      <AIChatPopup />
    </div>
  );
}
