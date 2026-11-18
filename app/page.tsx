"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { id: "about", label: "About" },
    { id: "copy", label: "Copy Trading" },
    { id: "masters", label: "Master Traders" },
    { id: "airdrop", label: "Airdrop" },
    { id: "academy", label: "Academy" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id: string) => { setPage(id); setMenuOpen(false); window.scrollTo(0,0); };

  const btn = { background: "#00e5b8", color: "#000", border: "none", padding: "12px 20px", borderRadius: "999px", fontWeight: 800, cursor: "pointer" };
  const btnOutline = { background: "transparent", color: "#00e5b8", border: "1px solid #00e5b8", padding: "10px 18px", borderRadius: "999px", fontWeight: 700, cursor: "pointer" };
  const card = { background: "#0f1a1a", border: "1px solid #1e3a3a", borderRadius: "16px", padding: "20px" };
  const badge = { display: "inline-block", background: "#0a2e2a", color: "#00e5b8", border: "1px solid #00e5b8", padding: "7px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 800, letterSpacing: "1px" };

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* HEADER */}
      <header style={{ padding: "18px 20px", borderBottom: "1px solid #222", position: "sticky", top: 0, background: "#000", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <div onClick={() => go("home")} style={{ cursor: "pointer", fontSize: "30px", fontWeight: 900, letterSpacing: "-1px" }}>
            <span style={{ color: "#00e5b8" }}>naija</span>copy
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid #333", color: "#fff", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>☰ Menu</button>
        </div>
        {menuOpen && (
          <div style={{ maxWidth: "1100px", margin: "14px auto 0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {nav.map(n => (
              <button key={n.id} onClick={() => go(n.id)} style={{ background: page===n.id ? "#00e5b8" : "#111", color: page===n.id ? "#000" : "#fff", border: "1px solid #333", padding: "9px 14px", borderRadius: "999px", cursor: "pointer", fontWeight: 700 }}>{n.label}</button>
            ))}
            <button onClick={() => go("signin")} style={btnOutline}>Sign in</button>
          </div>
        )}
        <div style={{ maxWidth: "1100px", margin: "14px auto 0", display: "flex", flexWrap: "wrap", gap: "18px", fontSize: "14px", color: "#ddd" }}>
          <span style={{cursor:"pointer"}} onClick={()=>go("about")}>About</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("copy")}>Copy Trading</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("masters")}>Master Traders</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("airdrop")}>Airdrop</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("academy")}>Academy</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("contact")}>Contact</span>
        </div>
        <div style={{ maxWidth: "1100px", margin: "12px auto 0" }}>
          <button onClick={()=>go("signin")} style={btnOutline}>Sign in</button>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px 20px 60px" }}>

        {/* HOME */}
        {page==="home" && (
          <div>
            <span style={badge}>PRE-LAUNCH DEVELOPMENT</span>
            <h1 style={{ fontSize: "44px", lineHeight: "1.05", fontWeight: 900, margin: "18px 0" }}>
              Building a smarter<br/>approach to <span style={{color:"#00e5b8"}}>digital<br/>asset education.</span>
            </h1>
            <p style={{ color: "#ccc", fontSize: "18px", lineHeight: "1.6", maxWidth: "650px" }}>
              NaijaCopy is developing educational resources and planned copy-trading technology to make cryptocurrency knowledge more accessible. Learn about digital asset markets, trading strategies and risk management before making your own decisions.
            </p>
            <p style={{ color: "#888", fontSize: "14px", marginTop: "14px" }}>Copy trading is not currently available for live trading. Cryptocurrency markets are volatile and risky.</p>
            <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <button onClick={()=>go("copy")} style={btn}>Explore Copy Trading →</button>
              <button onClick={()=>go("academy")} style={btnOutline}>Visit Academy</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginTop: "36px" }}>
              <div style={card}><h3>📚 Learn First</h3><p style={{color:"#aaa"}}>Academy lessons on crypto, risk & strategy.</p><button onClick={()=>go("academy")} style={btnOutline}>Start Learning</button></div>
              <div style={card}><h3>👥 Master Traders</h3><p style={{color:"#aaa"}}>See profiles of traders you can follow later.</p><button onClick={()=>go("masters")} style={btnOutline}>View Traders</button></div>
              <div style={card}><h3>🎁 Airdrop</h3><p style={{color:"#aaa"}}>Join early community and earn rewards.</p><button onClick={()=>go("airdrop")} style={btnOutline}>Claim Spot</button></div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        {page==="about" && (
          <div>
            <span style={badge}>ABOUT NAIJACOPY</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Built for Naija. <span style={{color:"#00e5b8"}}>Built for learning.</span></h1>
            <p style={{color:"#ccc", lineHeight:1.7}}>NaijaCopy is a Nigerian-focused platform building education-first tools for digital assets. Our mission is simple: make crypto knowledge clear, safe and accessible — before anyone risks money.</p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px", marginTop:"20px"}}>
              <div style={card}><h3>🎯 Our Mission</h3><p style={{color:"#aaa"}}>Help Nigerians understand markets, not just follow hype.</p></div>
              <div style={card}><h3>🛡️ Risk First</h3><p style={{color:"#aaa"}}>We teach risk management before trading strategies.</p></div>
              <div style={card}><h3>🇳🇬 Local Focus</h3><p style={{color:"#aaa"}}>Content made for Naija traders, in simple language.</p></div>
            </div>
            <button onClick={()=>go("contact")} style={{...btn, marginTop:"20px"}}>Contact Us</button>
          </div>
        )}

        {/* COPY TRADING */}
        {page==="copy" && (
          <div>
            <span style={badge}>COPY TRADING — COMING SOON</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Follow the pros. <span style={{color:"#00e5b8"}}>Learn as you go.</span></h1>
            <p style={{color:"#ccc", lineHeight:1.7}}>Planned copy-trading will let you follow Master Traders and see their strategies with full transparency. No live trading yet — we are still in development.</p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px", marginTop:"20px"}}>
              <div style={card}><h3>1. Choose a Trader</h3><p style={{color:"#aaa"}}>Check win rate, risk level and history.</p></div>
              <div style={card}><h3>2. Set Your Risk</h3><p style={{color:"#aaa"}}>You control how much you allocate.</p></div>
              <div style={card}><h3>3. Learn & Track</h3><p style={{color:"#aaa"}}>See why they trade, not just what they trade.</p></div>
            </div>
            <button onClick={()=>go("masters")} style={{...btn, marginTop:"20px"}}>See Master Traders</button>
          </div>
        )}

        {/* MASTER TRADERS */}
        {page==="masters" && (
          <div>
            <span style={badge}>MASTER TRADERS</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Meet the <span style={{color:"#00e5b8"}}>Masters.</span></h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px"}}>
              {[
                {name:"Trader A — Lagos", win:"68% Win Rate", risk:"Low Risk"},
                {name:"Trader B — Abuja", win:"72% Win Rate", risk:"Medium Risk"},
                {name:"Trader C — PH", win:"65% Win Rate", risk:"Low Risk"},
              ].map(t=>(
                <div key={t.name} style={card}>
                  <div style={{width:"50px", height:"50px", borderRadius:"50%", background:"#00e5b8", color:"#000", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:"20px"}}>{t.name[0]}</div>
                  <h3 style={{margin:"12px 0 4px"}}>{t.name}</h3>
                  <p style={{color:"#00e5b8", fontWeight:700}}>{t.win} • {t.risk}</p>
                  <p style={{color:"#aaa", fontSize:"14px"}}>Demo profile — real traders will be verified before launch.</p>
                  <button onClick={()=>go("copy")} style={btnOutline}>Follow (Soon)</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AIRDROP */}
        {page==="airdrop" && (
          <div style={{textAlign:"center"}}>
            <span style={badge}>AIRDROP</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Early users get <span style={{color:"#00e5b8"}}>rewarded.</span></h1>
            <p style={{color:"#ccc"}}>Join the waitlist to secure your early spot. More details will be announced soon.</p>
            <div style={{...card, maxWidth:"480px", margin:"20px auto"}}>
              <input placeholder="Enter your email" style={{width:"100%", padding:"14px", borderRadius:"10px", border:"1px solid #333", background:"#000", color:"#fff", marginBottom:"12px"}} />
              <input placeholder="Your wallet address (optional)" style={{width:"100%", padding:"14px", borderRadius:"10px", border:"1px solid #333", background:"#000", color:"#fff", marginBottom:"12px"}} />
              <button style={{...btn, width:"100%"}} onClick={()=>alert("You have joined the waitlist!")}>Join Waitlist 🎁</button>
              <p style={{color:"#888", fontSize:"12px", marginTop:"10px"}}>No payment needed. Beware of fake airdrop scams.</p>
            </div>
          </div>
        )}"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { id: "about", label: "About" },
    { id: "copy", label: "Copy Trading" },
    { id: "masters", label: "Master Traders" },
    { id: "airdrop", label: "Airdrop" },
    { id: "academy", label: "Academy" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id: string) => { setPage(id); setMenuOpen(false); window.scrollTo(0,0); };

  const btn = { background: "#00e5b8", color: "#000", border: "none", padding: "12px 20px", borderRadius: "999px", fontWeight: 800, cursor: "pointer" };
  const btnOutline = { background: "transparent", color: "#00e5b8", border: "1px solid #00e5b8", padding: "10px 18px", borderRadius: "999px", fontWeight: 700, cursor: "pointer" };
  const card = { background: "#0f1a1a", border: "1px solid #1e3a3a", borderRadius: "16px", padding: "20px" };
  const badge = { display: "inline-block", background: "#0a2e2a", color: "#00e5b8", border: "1px solid #00e5b8", padding: "7px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 800, letterSpacing: "1px" };

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* HEADER */}
      <header style={{ padding: "18px 20px", borderBottom: "1px solid #222", position: "sticky", top: 0, background: "#000", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <div onClick={() => go("home")} style={{ cursor: "pointer", fontSize: "30px", fontWeight: 900, letterSpacing: "-1px" }}>
            <span style={{ color: "#00e5b8" }}>naija</span>copy
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid #333", color: "#fff", padding: "8px 12px", borderRadius: "8px", cursor: "pointer" }}>☰ Menu</button>
        </div>
        {menuOpen && (
          <div style={{ maxWidth: "1100px", margin: "14px auto 0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {nav.map(n => (
              <button key={n.id} onClick={() => go(n.id)} style={{ background: page===n.id ? "#00e5b8" : "#111", color: page===n.id ? "#000" : "#fff", border: "1px solid #333", padding: "9px 14px", borderRadius: "999px", cursor: "pointer", fontWeight: 700 }}>{n.label}</button>
            ))}
            <button onClick={() => go("signin")} style={btnOutline}>Sign in</button>
          </div>
        )}
        <div style={{ maxWidth: "1100px", margin: "14px auto 0", display: "flex", flexWrap: "wrap", gap: "18px", fontSize: "14px", color: "#ddd" }}>
          <span style={{cursor:"pointer"}} onClick={()=>go("about")}>About</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("copy")}>Copy Trading</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("masters")}>Master Traders</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("airdrop")}>Airdrop</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("academy")}>Academy</span>
          <span style={{cursor:"pointer"}} onClick={()=>go("contact")}>Contact</span>
        </div>
        <div style={{ maxWidth: "1100px", margin: "12px auto 0" }}>
          <button onClick={()=>go("signin")} style={btnOutline}>Sign in</button>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px 20px 60px" }}>

        {/* HOME */}
        {page==="home" && (
          <div>
            <span style={badge}>PRE-LAUNCH DEVELOPMENT</span>
            <h1 style={{ fontSize: "44px", lineHeight: "1.05", fontWeight: 900, margin: "18px 0" }}>
              Building a smarter<br/>approach to <span style={{color:"#00e5b8"}}>digital<br/>asset education.</span>
            </h1>
            <p style={{ color: "#ccc", fontSize: "18px", lineHeight: "1.6", maxWidth: "650px" }}>
              NaijaCopy is developing educational resources and planned copy-trading technology to make cryptocurrency knowledge more accessible. Learn about digital asset markets, trading strategies and risk management before making your own decisions.
            </p>
            <p style={{ color: "#888", fontSize: "14px", marginTop: "14px" }}>Copy trading is not currently available for live trading. Cryptocurrency markets are volatile and risky.</p>
            <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <button onClick={()=>go("copy")} style={btn}>Explore Copy Trading →</button>
              <button onClick={()=>go("academy")} style={btnOutline}>Visit Academy</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginTop: "36px" }}>
              <div style={card}><h3>📚 Learn First</h3><p style={{color:"#aaa"}}>Academy lessons on crypto, risk & strategy.</p><button onClick={()=>go("academy")} style={btnOutline}>Start Learning</button></div>
              <div style={card}><h3>👥 Master Traders</h3><p style={{color:"#aaa"}}>See profiles of traders you can follow later.</p><button onClick={()=>go("masters")} style={btnOutline}>View Traders</button></div>
              <div style={card}><h3>🎁 Airdrop</h3><p style={{color:"#aaa"}}>Join early community and earn rewards.</p><button onClick={()=>go("airdrop")} style={btnOutline}>Claim Spot</button></div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        {page==="about" && (
          <div>
            <span style={badge}>ABOUT NAIJACOPY</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Built for Naija. <span style={{color:"#00e5b8"}}>Built for learning.</span></h1>
            <p style={{color:"#ccc", lineHeight:1.7}}>NaijaCopy is a Nigerian-focused platform building education-first tools for digital assets. Our mission is simple: make crypto knowledge clear, safe and accessible — before anyone risks money.</p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px", marginTop:"20px"}}>
              <div style={card}><h3>🎯 Our Mission</h3><p style={{color:"#aaa"}}>Help Nigerians understand markets, not just follow hype.</p></div>
              <div style={card}><h3>🛡️ Risk First</h3><p style={{color:"#aaa"}}>We teach risk management before trading strategies.</p></div>
              <div style={card}><h3>🇳🇬 Local Focus</h3><p style={{color:"#aaa"}}>Content made for Naija traders, in simple language.</p></div>
            </div>
            <button onClick={()=>go("contact")} style={{...btn, marginTop:"20px"}}>Contact Us</button>
          </div>
        )}

        {/* COPY TRADING */}
        {page==="copy" && (
          <div>
            <span style={badge}>COPY TRADING — COMING SOON</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Follow the pros. <span style={{color:"#00e5b8"}}>Learn as you go.</span></h1>
            <p style={{color:"#ccc", lineHeight:1.7}}>Planned copy-trading will let you follow Master Traders and see their strategies with full transparency. No live trading yet — we are still in development.</p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px", marginTop:"20px"}}>
              <div style={card}><h3>1. Choose a Trader</h3><p style={{color:"#aaa"}}>Check win rate, risk level and history.</p></div>
              <div style={card}><h3>2. Set Your Risk</h3><p style={{color:"#aaa"}}>You control how much you allocate.</p></div>
              <div style={card}><h3>3. Learn & Track</h3><p style={{color:"#aaa"}}>See why they trade, not just what they trade.</p></div>
            </div>
            <button onClick={()=>go("masters")} style={{...btn, marginTop:"20px"}}>See Master Traders</button>
          </div>
        )}

        {/* MASTER TRADERS */}
        {page==="masters" && (
          <div>
            <span style={badge}>MASTER TRADERS</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Meet the <span style={{color:"#00e5b8"}}>Masters.</span></h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px"}}>
              {[
                {name:"Trader A — Lagos", win:"68% Win Rate", risk:"Low Risk"},
                {name:"Trader B — Abuja", win:"72% Win Rate", risk:"Medium Risk"},
                {name:"Trader C — PH", win:"65% Win Rate", risk:"Low Risk"},
              ].map(t=>(
                <div key={t.name} style={card}>
                  <div style={{width:"50px", height:"50px", borderRadius:"50%", background:"#00e5b8", color:"#000", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:"20px"}}>{t.name[0]}</div>
                  <h3 style={{margin:"12px 0 4px"}}>{t.name}</h3>
                  <p style={{color:"#00e5b8", fontWeight:700}}>{t.win} • {t.risk}</p>
                  <p style={{color:"#aaa", fontSize:"14px"}}>Demo profile — real traders will be verified before launch.</p>
                  <button onClick={()=>go("copy")} style={btnOutline}>Follow (Soon)</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AIRDROP */}
        {page==="airdrop" && (
          <div style={{textAlign:"center"}}>
            <span style={badge}>AIRDROP</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Early users get <span style={{color:"#00e5b8"}}>rewarded.</span></h1>
            <p style={{color:"#ccc"}}>Join the waitlist to secure your early spot. More details will be announced soon.</p>
            <div style={{...card, maxWidth:"480px", margin:"20px auto"}}>
              <input placeholder="Enter your email" style={{width:"100%", padding:"14px", borderRadius:"10px", border:"1px solid #333", background:"#000", color:"#fff", marginBottom:"12px"}} />
              <input placeholder="Your wallet address (optional)" style={{width:"100%", padding:"14px", borderRadius:"10px", border:"1px solid #333", background:"#000", color:"#fff", marginBottom:"12px"}} />
              <button style={{...btn, width:"100%"}} onClick={()=>alert("You have joined the waitlist!")}>Join Waitlist 🎁</button>
              <p style={{color:"#888", fontSize:"12px", marginTop:"10px"}}>No payment needed. Beware of fake airdrop scams.</p>
            </div>
          </div>
        )}

        {/* ACADEMY */}
        {page==="academy" && (
          <div>
            <span style={badge}>ACADEMY</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Learn crypto <span style={{color:"#00e5b8"}}>the right way.</span></h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px"}}>
              <div style={card}><h3>Lesson 1: What is Crypto?</h3><p style={{color:"#aaa"}}>Bitcoin, blockchain & how it works in simple English.</p><button style={btnOutline}>Start Lesson</button></div>
              <div style={card}><h3>Lesson 2: Risk Management</h3><p style={{color:"#aaa"}}>Never risk money you cannot afford to lose.</p><button style={btnOutline}>Start Lesson</button

        {/* ACADEMY */}
        {page==="academy" && (
          <div>
            <span style={badge}>ACADEMY</span>
            <h1 style={{fontSize:"36px", fontWeight:900, margin:"14px 0"}}>Learn crypto <span style={{color:"#00e5b8"}}>the right way.</span></h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"14px"}}>
              <div style={card}><h3>Lesson 1: What is Crypto?</h3><p style={{color:"#aaa"}}>Bitcoin, blockchain & how it works in simple English.</p><button style={btnOutline}>Start Lesson</button></div>
              <div style={card}><h3>Lesson 2: Risk Management</h3><p style={{color:"#aaa"}}>Never risk money you cannot afford to lose.</p><button style={btnOutline}>Start Lesson</button
