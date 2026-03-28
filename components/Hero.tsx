export default function Hero() {
  return (
    <section style={{
      paddingTop: 140, paddingBottom: 100,
      borderBottom: "1px solid var(--border)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle background texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(185,28,28,0.04) 0%, transparent 60%),
                          radial-gradient(circle at 80% 20%, rgba(146,64,14,0.04) 0%, transparent 50%)`,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Label */}
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11, fontWeight: 500,
          color: "var(--ink-3)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 32,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{
            display: "inline-block", width: 32, height: 1,
            background: "var(--red)",
          }} />
          Исследование · Законодательство РК · Автоматический анализ
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.2rem, 7vw, 6rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          maxWidth: 820,
          marginBottom: 32,
        }}>
          1,312 законов.{" "}
          <span style={{
            fontStyle: "italic",
            color: "var(--red)",
          }}>Противоречия</span>{" "}
          есть.<br />Никто их не видит.
        </h1>

        <p style={{
          fontSize: "1.2rem",
          color: "var(--ink-2)",
          maxWidth: 580,
          lineHeight: 1.7,
          marginBottom: 56,
          fontWeight: 400,
        }}>
          Entropy Engine — первая система автоматического обнаружения конфликтов
          в нормативно-правовых актах Казахстана. Граф-аналитика, нейросетевые NLI-модели
          и объяснения на естественном языке — вместо юриста с 6 месяцами работы.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}>
          {[
            { label: "NetworkX граф · 1,312 нод", color: "var(--ink-3)" },
            { label: "mDeBERTa NLI · multilingual", color: "var(--blue)" },
            { label: "Gemini 2.5 Flash · объяснения", color: "var(--amber)" },
            { label: "12 подтверждённых конфликтов", color: "var(--red)" },
          ].map((t) => (
            <span key={t.label} style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12, fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 20,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: t.color,
            }}>{t.label}</span>
          ))}
        </div>

        {/* Key metrics grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 1,
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          {[
            { num: "1,312", label: "НПА в корпусе", sub: "Конституция, кодексы, законы, постановления, приказы", color: "var(--ink)" },
            { num: "340K+", label: "нормативных блоков", sub: "Статьи, пункты, подпункты — разобранные и размеченные", color: "var(--blue)" },
            { num: "12", label: "реальных конфликтов", sub: "Подтверждено AI+юрист. Точность pipeline — 85%", color: "var(--red)" },
            { num: "8ч", label: "вместо 6 месяцев", sub: "Время полного анализа корпуса автоматически", color: "var(--amber)" },
          ].map((m) => (
            <div key={m.num} style={{
              background: "var(--bg-card)",
              padding: "32px 28px",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.8rem",
                fontWeight: 700,
                lineHeight: 1,
                color: m.color,
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}>{m.num}</div>
              <div style={{
                fontSize: 13, fontWeight: 600,
                color: "var(--ink)", marginBottom: 6,
              }}>{m.label}</div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, color: "var(--ink-4)",
                lineHeight: 1.5,
              }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
