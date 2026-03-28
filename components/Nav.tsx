"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,246,241,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--red)",
            animation: "pulseRed 2.5s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 500, fontSize: 13,
            color: "var(--ink)",
            letterSpacing: "0.02em",
          }}>entropy-engine</span>
        </div>

        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11, fontWeight: 500,
          color: "var(--ink-3)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "var(--bg-muted)",
          border: "1px solid var(--border)",
          padding: "5px 12px",
          borderRadius: 20,
        }}>
          Decentrathon 5.0 · 2026
        </div>
      </div>
    </nav>
  );
}
