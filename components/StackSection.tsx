const stack = [
  { name: "FastAPI", role: "Backend API", cost: "Free" },
  { name: "NetworkX", role: "Graph engine", cost: "Free" },
  { name: "mDeBERTa-v3", role: "NLI фильтр (local)", cost: "Free" },
  { name: "sentence-transformers", role: "Embeddings /analyze", cost: "Free" },
  { name: "Gemini 2.5 Flash", role: "Classify + explain", cost: "Free tier" },
  { name: "React + Vite", role: "Dashboard frontend", cost: "Free" },
  { name: "react-force-graph-2d", role: "Canvas граф 5K+ нод", cost: "Free" },
  { name: "Recharts", role: "Entropy timeline", cost: "Free" },
  { name: "Tailwind CSS 4", role: "Стили", cost: "Free" },
  { name: "Qdrant", role: "Vector DB (LawVision)", cost: "Free tier" },
  { name: "Python 3.11+", role: "Pipeline scripts", cost: "Free" },
  { name: "UMAP + HDBSCAN", role: "Domain clustering", cost: "Free" },
];

export default function StackSection() {
  return (
    <section style={{
      padding: "100px 0",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg-muted)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ marginBottom: 48 }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 500,
            color: "var(--red)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Технологический стек</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}>
            Production-grade.<br />
            <span style={{ fontStyle: "italic" }}>$0 total cost.</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 1,
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 32,
        }} data-reveal>
          {stack.map((s) => (
            <div key={s.name} style={{
              background: "var(--bg-card)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>
                {s.name}
              </div>
              <div style={{
                fontSize: 12, color: "var(--ink-3)",
              }}>{s.role}</div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--green)",
                marginTop: 4,
              }}>{s.cost}</div>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "24px 32px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
        }} data-reveal>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "3rem",
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>$0</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>
              Total infrastructure cost
            </div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11, color: "var(--ink-4)",
            }}>
              // полностью на free tier · production-ready · масштабируется до 10,000+ НПА · no vendor lock-in
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
