const papers = [
  {
    title: "LegalWiz: A Hybrid NLI+LLM Framework",
    year: "2025",
    finding: "NLI-only: 37.3% precision. Hybrid NLI+LLM: 89.5% precision. Именно наш pipeline.",
    metric: "89.5%",
    source: "arXiv:2510.03418v2",
    tag: "CORE APPROACH",
    tagColor: "var(--red)",
  },
  {
    title: "GraphCompliance: Legal Contradiction via Knowledge Graphs",
    year: "2025",
    finding: "Без граф-анализа F1 падает на 10.2pp. Граф — не украшение, это необходимый первый слой.",
    metric: "+10.2pp F1",
    source: "arXiv:2510.26309v1",
    tag: "ГРАФ-ОСНОВАНИЕ",
    tagColor: "var(--blue)",
  },
  {
    title: "ALICE: Logic + LLM Hybrid Legal Analysis",
    year: "2024",
    finding: "99% accuracy, 83% precision на legal contradiction detection с logic+LLM подходом.",
    metric: "99% acc",
    source: "ALICE Framework, 2024",
    tag: "ТОЧНОСТЬ",
    tagColor: "var(--green)",
  },
  {
    title: "Friedrich: Shannon Entropy for Legal Complexity",
    year: "2021",
    finding: "Первое применение энтропийных метрик к правовым текстам. Основа нашего entropy score.",
    metric: "entropy score",
    source: "Friedrich et al., 2021",
    tag: "ЭНТРОПИЯ",
    tagColor: "var(--amber)",
  },
  {
    title: "Lex Graph (UK Gov i.AI)",
    year: "2023",
    finding: "820K нодов UK-законодательства в knowledge graph. Open-source. Подтверждает масштабируемость подхода.",
    metric: "820K нодов",
    source: "github.com/i-dot-ai/lex-graph",
    tag: "ПРЕЦЕДЕНТ",
    tagColor: "var(--ink-3)",
  },
  {
    title: "Vulcan ($10.9M, YC S25)",
    year: "2025",
    finding: "Стартап на том же подходе (graph + conflict + confidence) привлёк $10.9M. Рынок подтверждён.",
    metric: "$10.9M",
    source: "YC S25 · Legal AI",
    tag: "РЫНОК",
    tagColor: "var(--ink-2)",
  },
];

export default function ResearchSection() {
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
          }}>Академическая база</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}>
            Каждое решение —<br />
            <span style={{ fontStyle: "italic" }}>из рецензируемой литературы.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: "1.05rem", maxWidth: 560 }}>
            Мы не придумывали pipeline. Мы синтезировали лучшее из шести исследований 2021–2025 годов.
          </p>
        </div>

        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
        }} data-reveal>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Работа", "Ключевой результат", "Метрика", "Применение"].map((h) => (
                  <th key={h} style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--ink-4)",
                    padding: "14px 20px",
                    textAlign: "left",
                    background: "var(--bg-muted)",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {papers.map((p, i) => (
                <tr key={p.title} style={{
                  borderBottom: i < papers.length - 1 ? "1px solid var(--border)" : "none",
                  transition: "background 0.15s",
                }}>
                  <td style={{ padding: "18px 20px", verticalAlign: "top" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 3 }}>
                      {p.title}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11, color: "var(--ink-4)",
                    }}>{p.source} · {p.year}</div>
                  </td>
                  <td style={{
                    padding: "18px 20px",
                    fontSize: 13, color: "var(--ink-2)",
                    lineHeight: 1.6,
                    verticalAlign: "top",
                    maxWidth: 300,
                  }}>{p.finding}</td>
                  <td style={{ padding: "18px 20px", verticalAlign: "top" }}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem", fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                    }}>{p.metric}</div>
                  </td>
                  <td style={{ padding: "18px 20px", verticalAlign: "top" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10, fontWeight: 600,
                      color: p.tagColor,
                      background: "var(--bg-muted)",
                      border: "1px solid var(--border)",
                      padding: "4px 10px",
                      borderRadius: 20,
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}>{p.tag}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
