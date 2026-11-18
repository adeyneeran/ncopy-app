"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("ncopy-history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveHistory = (list: string[]) => {
    setHistory(list);
    localStorage.setItem("ncopy-history", JSON.stringify(list));
  };

  const copyText = async (t: string, label: string) => {
    await navigator.clipboard.writeText(t);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
    if (t && !history.includes(t)) {
      saveHistory([t, ...history].slice(0, 20));
    }
  };

  const clearAll = () => {
    saveHistory([]);
    setText("");
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f6f6f4", color: "#111", fontFamily: "sans-serif", padding: 16 }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>ncopy<span style={{ color: "#666" }}>.</span></h1>
          <span style={{ fontSize: 12, background: "#111", color: "#fff", padding: "6px 12px", borderRadius: 20 }}>v2 Premium</span>
        </div>

        <p style={{ color: "#666", marginTop: 0 }}>Paste, copy & keep your texts in one place.</p>

        <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
            style={{ width: "100%", height: 140, border: "1px solid #eee", borderRadius: 12, padding: 12, fontSize: 16, outline: "none", resize: "none", boxSizing: "border-box" }}
          />
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button onClick={() => copyText(text, "main")} disabled={!text} style={{ flex: 1, padding: "14px", borderRadius: 12, border: "none", background: "#111", color: "#fff", fontSize: 15, fontWeight: 600 }}>
              {copied === "main" ? "Copied ✅" : "Copy Text"}
            </button>
            <button onClick={() => setText("")} style={{ padding: "14px 20px", borderRadius: 12, border: "1px solid #eee", background: "#fff", fontSize: 15 }}>
              Clear
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#999", marginBottom: 0, textAlign: "right" }}>{text.length} characters</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
          <h3 style={{ margin: 0 }}>History ({history.length})</h3>
          {history.length > 0 && <button onClick={clearAll} style={{ border: "none", background: "none", color: "#e00", fontSize: 13 }}>Clear All</button>}
        </div>

        {history.length === 0 ? (
          <p style={{ background: "#fff", padding: 20, borderRadius: 12, color: "#999", textAlign: "center" }}>No history yet. Copy something first.</p>
        ) : (
          history.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: 14, marginTop: 10, display: "flex", justifyContent: "space-between", gap: 10 }}>
              <p style={{ margin: 0, fontSize: 14, flex: 1, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{item.length > 120 ? item.slice(0, 120) + "..." : item}</p>
              <button onClick={() => copyText(item, "h" + i)} style={{ border: "none", background: "#f0f0f0", borderRadius: 8, padding: "8px 12px", height: "fit-content" }}>
                {copied === "h" + i ? "✅" : "Copy"}
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
