export default function ProblemSection() {
  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left — text */}
          <div data-reveal>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11, fontWeight: 500,
              color: "var(--red)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>Проблема</div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 24,
            }}>
              Законодатели создают{" "}
              <span style={{ fontStyle: "italic" }}>конфликты</span>{" "}
              быстрее, чем юристы их замечают.
            </h2>

            <p style={{ color: "var(--ink-2)", lineHeight: 1.8, marginBottom: 20, fontSize: "1.05rem" }}>
              В Казахстане ежегодно принимается 200–400 новых НПА. Каждый из них может
              противоречить десяткам действующих норм — из других ведомств, принятых
              в другие годы, регулирующих ту же ситуацию иначе.
            </p>

            <p style={{ color: "var(--ink-2)", lineHeight: 1.8, marginBottom: 20, fontSize: "1.05rem" }}>
              Ручная проверка 1,312 НПА на взаимные противоречия требует{" "}
              <strong style={{ color: "var(--ink)" }}>оценочно 6+ месяцев</strong> работы
              команды из 5 юристов. Это{" "}
              <strong style={{ color: "var(--ink)" }}>858,000 потенциальных пар</strong>{" "}
              для проверки. Никто этого не делает.
            </p>

            <p style={{ color: "var(--ink-2)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Результат — бизнес, граждане и госорганы живут в условиях{" "}
              <strong style={{ color: "var(--red)" }}>правовой неопределённости</strong>:
              два ведомства дают разные инструкции по одной и той же процедуре,
              и обе ссылаются на действующее законодательство.
            </p>
          </div>

          {/* Right — stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }} data-reveal data-reveal-delay="2">
            {[
              {
                num: "858,240",
                label: "потенциальных пар НПА",
                detail: "C(1312, 2) — количество пар при ручной проверке каждого с каждым",
                color: "var(--ink)",
                border: "var(--border)",
              },
              {
                num: "~150",
                label: "пар-кандидатов после граф-анализа",
                detail: "Паттерны A–D отсекают 99.98% нерелевантных пар за секунды",
                color: "var(--blue)",
                border: "#BFDBFE",
              },
              {
                num: "~50",
                label: "пар после NLI-фильтра",
                detail: "mDeBERTa multilingual-nli-2mil7 — бесплатно, локально, 80.3% точность на RU",
                color: "var(--amber)",
                border: "#FDE68A",
              },
              {
                num: "12",
                label: "подтверждённых конфликтов",
                detail: "Gemini 2.5 Flash + ручная верификация. Precision: 85% на CONFLICT",
                color: "var(--red)",
                border: "#FECACA",
              },
            ].map((s) => (
              <div key={s.num} style={{
                background: "var(--bg-card)",
                border: `1px solid ${s.border}`,
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex", alignItems: "flex-start", gap: 20,
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem", fontWeight: 700,
                  lineHeight: 1, color: s.color,
                  minWidth: 100,
                  letterSpacing: "-0.02em",
                }}>{s.num}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>
                    {s.label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11, color: "var(--ink-4)", lineHeight: 1.5,
                  }}>{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — evidence row */}
        <div style={{
          marginTop: 64,
          padding: "32px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
        }} data-reveal>
          {[
            {
              stat: "10.2pp",
              label: "прирост F1 от граф-анализа",
              cite: "GraphCompliance (2025) — без графа NLI-модели пропускают структурные конфликты",
            },
            {
              stat: "89.5%",
              label: "precision при NLI+LLM pipeline",
              cite: "LegalWiz (2025) — NLI-only даёт лишь 37.3%; гибрид с LLM утраивает точность",
            },
            {
              stat: "≥99%",
              label: "recall на тестовой выборке",
              cite: "ALICE (2024) — logic+LLM hybrid: 99% accuracy, 83% precision на legal contradictions",
            },
          ].map((e) => (
            <div key={e.stat} style={{
              background: "var(--bg-card)", padding: "24px 28px",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem", fontWeight: 700,
                color: "var(--ink)", lineHeight: 1,
                letterSpacing: "-0.02em", marginBottom: 8,
              }}>{e.stat}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
                {e.label}
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, color: "var(--ink-4)", lineHeight: 1.5,
              }}>{e.cite}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
