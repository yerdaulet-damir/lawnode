const steps = [
  {
    num: "01",
    title: "Структурный граф НПА",
    time: "~2 минуты",
    desc: "1,312 НПА разбираются regex-парсером на статьи, пункты и метаданные. NetworkX строит ориентированный граф: узлы — НПА, рёбра — ссылки (\"cites\", \"amends\", \"repeals\", \"pursuant_to\"). Итог: граф с 1,312 узлами и 8,400+ рёбрами.",
    tags: [
      { label: "NetworkX DiGraph", color: "var(--blue)" },
      { label: "regex extraction", color: "var(--ink-3)" },
      { label: "0 LLM-вызовов", color: "var(--green)" },
    ],
    stat: "8,400+",
    statLabel: "извлечённых связей",
  },
  {
    num: "02",
    title: "Граф-паттерны → кандидаты",
    time: "~5 секунд",
    desc: "Четыре алгоритмических паттерна без LLM: (A) два ведомства регулируют одну норму, (B) активная ссылка на отменённый НПА, (C) два НПА вносят изменения в одну статью, (D) разноуровневые НПА на одну тему. Из 858K пар — 150 кандидатов.",
    tags: [
      { label: "Pattern A: cross-agency", color: "var(--amber)" },
      { label: "Pattern B: dead refs", color: "var(--red)" },
      { label: "Pattern C: amendments", color: "var(--amber)" },
      { label: "Pattern D: hierarchy", color: "var(--red)" },
    ],
    stat: "99.98%",
    statLabel: "пар отсечено без LLM",
  },
  {
    num: "03",
    title: "NLI-фильтр (mDeBERTa)",
    time: "~3 минуты",
    desc: "MoritzLaurer/mDeBERTa-v3-base-xnli-multilingual-nli-2mil7 проверяет каждую пару на contradiction probability. Бесплатно, локально, поддерживает русский язык (80.3% accuracy на Russian XNLI). Порог 0.3 оставляет ~50 пар.",
    tags: [
      { label: "multilingual NLI", color: "var(--blue)" },
      { label: "local inference", color: "var(--green)" },
      { label: "80.3% RU accuracy", color: "var(--blue)" },
    ],
    stat: "~50",
    statLabel: "пар передаётся в LLM",
  },
  {
    num: "04",
    title: "Gemini 2.5 Flash: классификация + объяснение",
    time: "~8 минут",
    desc: "Один LLM-вызов = классификация (CONFLICT/OVERLAP/CONSISTENT/SPECIFICATION) + объяснение на естественном языке + иерархический приоритет. Кэш по SHA256 — никогда не вызывается дважды. ~200 вызовов на весь корпус, не 10,000.",
    tags: [
      { label: "Gemini 2.5 Flash", color: "var(--amber)" },
      { label: "classify + explain merged", color: "var(--green)" },
      { label: "SHA256 кэш", color: "var(--ink-3)" },
    ],
    stat: "~200",
    statLabel: "LLM-вызовов на весь корпус",
  },
];

export default function PipelineSection() {
  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ marginBottom: 56 }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 500,
            color: "var(--red)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Как работает</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}>
            Четыре слоя.<br />
            <span style={{ fontStyle: "italic" }}>Один рабочий день.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: "1.05rem", maxWidth: 560 }}>
            Без перебора — каждый слой агрессивно сокращает пространство поиска перед передачей следующему.
            Граф устраняет 99.98% нерелевантных пар до того, как LLM видит хоть один токен.
          </p>
        </div>

        {/* Pipeline funnel */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          marginBottom: 64,
          background: "var(--border)",
          borderRadius: 12,
          overflow: "hidden",
        }} data-reveal>
          {[
            { label: "858K пар", sub: "входит", bg: "var(--bg-card)" },
            { label: "150 пар", sub: "после графа", bg: "#FFF7ED" },
            { label: "50 пар", sub: "после NLI", bg: "#FEF2F2" },
            { label: "12 конфликтов", sub: "подтверждено", bg: "#FEF2F2" },
          ].map((f, i) => (
            <div key={i} style={{
              background: f.bg,
              padding: "20px",
              textAlign: "center",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem", fontWeight: 700,
                color: i === 3 ? "var(--red)" : "var(--ink)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginBottom: 6,
              }}>{f.label}</div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, color: "var(--ink-4)",
              }}>{f.sub}</div>
              {i < 3 && (
                <div style={{
                  position: "absolute", right: -10,
                  top: "50%", transform: "translateY(-50%)",
                  color: "var(--ink-4)", fontSize: 18, zIndex: 1,
                }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              data-reveal
              data-reveal-delay={String(i + 1)}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 160px",
                gap: 32,
                padding: "36px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                alignItems: "start",
              }}
            >
              {/* Step number */}
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "var(--border-strong)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}>{s.num}</div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11, color: "var(--ink-4)",
                  marginTop: 4,
                }}>{s.time}</div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}>{s.title}</h3>
                <p style={{
                  color: "var(--ink-2)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  marginBottom: 16,
                }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((t) => (
                    <span key={t.label} style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11, fontWeight: 500,
                      padding: "4px 10px",
                      borderRadius: 4,
                      background: "var(--bg-muted)",
                      border: "1px solid var(--border)",
                      color: t.color,
                    }}>{t.label}</span>
                  ))}
                </div>
              </div>

              {/* Stat */}
              <div style={{
                textAlign: "right",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: 4,
                }}>{s.stat}</div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11, color: "var(--ink-4)",
                  lineHeight: 1.4,
                }}>{s.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
