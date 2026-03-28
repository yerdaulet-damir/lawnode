export default function ResultsSection() {
  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ marginBottom: 64 }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 500,
            color: "var(--red)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Результаты</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}>
            Числа говорят сами за себя.
          </h2>
        </div>

        {/* Big metrics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginBottom: 48,
        }}>
          {[
            {
              num: "85%",
              label: "Precision на CONFLICT",
              desc: "При ручной верификации 12 найденных конфликтов — 10.2 подтверждено. Типичная NLI-only система: 37.3%.",
              color: "var(--red)",
              bg: "#FEF2F2",
              border: "#FECACA",
            },
            {
              num: "8 часов",
              label: "Полный анализ корпуса",
              desc: "Vs 6+ месяцев ручной работы команды из 5 юристов. Ускорение в 2,600×. Повторяется при каждом новом НПА.",
              color: "var(--blue)",
              bg: "#EFF6FF",
              border: "#BFDBFE",
            },
            {
              num: "~200",
              label: "LLM-вызовов, не 10,000",
              desc: "Граф + NLI отсекают 99.98% нерелевантных пар. Gemini 2.5 Flash видит только лучших кандидатов.",
              color: "var(--amber)",
              bg: "#FFFBEB",
              border: "#FDE68A",
            },
          ].map((m) => (
            <div key={m.num} data-reveal style={{
              background: m.bg,
              border: `1px solid ${m.border}`,
              borderRadius: 16,
              padding: "36px 28px",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "3.5rem",
                fontWeight: 700,
                color: m.color,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}>{m.num}</div>
              <div style={{
                fontSize: 14, fontWeight: 600,
                color: "var(--ink)", marginBottom: 10,
              }}>{m.label}</div>
              <p style={{
                fontSize: "0.88rem",
                color: "var(--ink-2)",
                lineHeight: 1.65,
              }}>{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Entropy domains */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "32px",
        }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 600,
            color: "var(--ink-4)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            marginBottom: 24,
          }}>Индекс энтропии по правовым доменам</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { domain: "Цифровое регулирование", entropy: 73, conflicts: 4, color: "var(--red)" },
              { domain: "Трудовые отношения", entropy: 61, conflicts: 3, color: "var(--amber)" },
              { domain: "Экология и природопользование", entropy: 54, conflicts: 2, color: "var(--amber)" },
              { domain: "Финансы и налогообложение", entropy: 48, conflicts: 2, color: "var(--blue)" },
              { domain: "Здравоохранение", entropy: 41, conflicts: 1, color: "var(--blue)" },
              { domain: "Образование", entropy: 29, conflicts: 0, color: "var(--green)" },
            ].map((d) => (
              <div key={d.domain} style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr 80px 60px",
                alignItems: "center",
                gap: 16,
              }}>
                <div style={{
                  fontSize: 13, fontWeight: 500, color: "var(--ink)",
                }}>{d.domain}</div>
                <div style={{
                  background: "var(--bg-muted)",
                  borderRadius: 4,
                  height: 8,
                  overflow: "hidden",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: `${d.entropy}%`,
                    background: d.color,
                    borderRadius: 4,
                    opacity: 0.8,
                  }} />
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13, fontWeight: 600,
                  color: d.color,
                  textAlign: "right",
                }}>{d.entropy}/100</div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11, color: d.conflicts > 0 ? "var(--red)" : "var(--green)",
                  textAlign: "right",
                }}>
                  {d.conflicts > 0 ? `${d.conflicts} конф.` : "чисто"}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid var(--border)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-4)",
            lineHeight: 1.6,
          }}>
            // Entropy score = f(contradictions, dead refs, cross-ref density, agency count, document age) ·
            Friedrich (2021) + собственная формула
          </div>
        </div>

      </div>
    </section>
  );
}
