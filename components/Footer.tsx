export default function Footer() {
  return (
    <footer style={{
      padding: "80px 0 48px",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* CTA block */}
        <div style={{
          textAlign: "center",
          marginBottom: 80,
          padding: "64px 32px",
          background: "var(--ink)",
          borderRadius: 20,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(185,28,28,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 70% 30%, rgba(146,64,14,0.1) 0%, transparent 40%)`,
          }} />
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 500,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>Демо</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            marginBottom: 20,
          }}>
            Откройте дашборд.<br />
            <span style={{ color: "#F87171", fontStyle: "italic" }}>Увидите граф.</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.1rem",
            maxWidth: 480,
            margin: "0 auto 36px",
            lineHeight: 1.7,
          }}>
            1,312 узлов. 4 красных пульсирующих ребра в домене "Цифровое регулирование".
            Клик — split view двух норм с несовместимыми сроками.
          </p>
          <div style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 500,
            color: "var(--ink)",
            background: "#FFFFFF",
            padding: "14px 32px",
            borderRadius: 8,
            letterSpacing: "0.02em",
          }}>
            localhost:5173
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              marginBottom: 6,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--red)",
              }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13, fontWeight: 500,
                color: "var(--ink)",
              }}>entropy-engine</span>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11, color: "var(--ink-4)",
            }}>
              AI-система детектирования противоречий в НПА РК · Team Decentraton
            </div>
          </div>

          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, color: "var(--ink-4)",
            textAlign: "right",
          }}>
            <div>Decentrathon 5.0 · 2026</div>
            <div style={{ marginTop: 4 }}>Built with FastAPI · React · NetworkX · Gemini</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
