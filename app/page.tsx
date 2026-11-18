"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>ncopy - Paste & Copy</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        style={{ width: "100%", height: 200, padding: 12, fontSize: 16, borderRadius: 10 }}
      />
      <br /><br />
      <button onClick={copy} style={{ padding: "12px 24px", fontSize: 16, borderRadius: 10, background: "#fff", color: "#000", border: "none" }}>
        {copied ? "Copied ✅" : "Copy Text"}
      </button>
    </main>
  );
}
