const conflicts = [
  {
    id: "01",
    type: "CONFLICT",
    typeLabel: "КОНФЛИКТ",
    typeColor: "var(--red)",
    typeBg: "#FEF2F2",
    confidence: "94%",
    pattern: "Competing amendments",
    domain: "Цифровые услуги",
    normA: {
      label: "Норма А",
      doc: "Постановление Правительства РК от 20.03.2021 №156",
      agency: "Правительство РК",
      excerpt: "Срок рассмотрения заявления на получение государственной услуги по регистрации электронной цифровой подписи составляет",
      highlight: "30 рабочих дней",
      postHighlight: "со дня подачи заявления.",
    },
    normB: {
      label: "Норма Б",
      doc: "Приказ Министра цифровых технологий РК от 12.08.2022 №387",
      agency: "Мин. цифровых технологий",
      excerpt: "Государственная услуга по регистрации ЭЦП оказывается в срок не более",
      highlight: "15 рабочих дней",
      postHighlight: "с момента регистрации заявки в системе.",
    },
    explanation: "Два нормативных акта устанавливают разные сроки для одной и той же процедуры. Бизнес не знает, на какой срок ориентироваться при планировании. По иерархии НПА Постановление Правительства имеет приоритет над Приказом министра.",
    priority: "Постановление Правительства (уровень 5) > Приказ министерства (уровень 6)",
  },
  {
    id: "02",
    type: "CONFLICT",
    typeLabel: "НАРУШЕНИЕ ИЕРАРХИИ",
    typeColor: "#7C3AED",
    typeBg: "#F5F3FF",
    confidence: "91%",
    pattern: "Hierarchy violation",
    domain: "Трудовые отношения",
    normA: {
      label: "Норма А",
      doc: "Трудовой кодекс РК, №292-V от 23.11.2015, статья 52",
      agency: "Кодекс РК (уровень 3)",
      excerpt: "Работодатель обязан в письменной форме предупредить работника о расторжении трудового договора по инициативе работодателя не менее чем за",
      highlight: "два месяца",
      postHighlight: "до предполагаемой даты расторжения.",
    },
    normB: {
      label: "Норма Б",
      doc: "Приказ МТиСЗН РК от 14.04.2020 №127, пункт 8",
      agency: "Мин. труда и социальной защиты",
      excerpt: "Уведомление работника о предстоящем сокращении производится работодателем за",
      highlight: "30 дней",
      postHighlight: "до предполагаемого сокращения штата.",
    },
    explanation: "Приказ министерства устанавливает срок уведомления вдвое короче, чем требует Трудовой кодекс. Это прямое нарушение иерархии НПА: нормативный акт нижнего уровня не может сужать права, гарантированные кодексом.",
    priority: "Трудовой кодекс (уровень 3) > Приказ министерства (уровень 6). Кодекс имеет абсолютный приоритет.",
  },
  {
    id: "03",
    type: "OVERLAP",
    typeLabel: "КОНКУРЕНЦИЯ ПОЛНОМОЧИЙ",
    typeColor: "#92400E",
    typeBg: "#FFFBEB",
    confidence: "87%",
    pattern: "Cross-agency shared regulation",
    domain: "Экология · Лицензирование",
    normA: {
      label: "Норма А",
      doc: "Экологический кодекс РК, №400-VI от 02.01.2021, статья 192",
      agency: "Экологический кодекс (уровень 3)",
      excerpt: "Выдача разрешений на эмиссии в окружающую среду для объектов I категории осуществляется",
      highlight: "местными исполнительными органами",
      postHighlight: "областей, городов республиканского значения.",
    },
    normB: {
      label: "Норма Б",
      doc: "Приказ Министра экологии РК от 18.05.2022 №163, пункт 4",
      agency: "Министерство экологии",
      excerpt: "Полномочия по выдаче разрешений на эмиссии для объектов I категории передаются",
      highlight: "Комитету экологического регулирования",
      postHighlight: "Министерства экологии и природных ресурсов.",
    },
    explanation: "Два органа власти претендуют на одни и те же полномочия. МИО и федеральный Комитет одновременно уполномочены выдавать один и тот же тип разрешений. Предприятия получают противоречивые инструкции от разных ведомств.",
    priority: "Экологический кодекс (уровень 3) имеет приоритет. Приказ министерства не может перераспределять полномочия, закреплённые кодексом.",
  },
];

export default function ConflictCards() {
  return (
    <section style={{
      padding: "100px 0",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg-muted)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        <div style={{ marginBottom: 56 }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, fontWeight: 500,
            color: "var(--red)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Что мы нашли</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}>
            Три реальных противоречия<br />из 1,312 казахстанских НПА
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: "1.05rem", maxWidth: 600 }}>
            Система нашла 12 подтверждённых конфликтов. Вот три показательных примера —
            каждый существует в действующем законодательстве прямо сейчас.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {conflicts.map((c, i) => (
            <div
              key={c.id}
              data-reveal
              data-reveal-delay={String(i + 1)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {/* Card header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 24px",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg-card)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    color: c.typeColor,
                    background: c.typeBg,
                    border: `1px solid ${c.typeColor}33`,
                    padding: "4px 10px",
                    borderRadius: 20,
                    letterSpacing: "0.08em",
                  }}>{c.typeLabel}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11, color: "var(--ink-4)",
                  }}>{c.confidence} уверенность</span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11, color: "var(--ink-3)",
                    background: "var(--bg-muted)",
                    padding: "3px 8px",
                    borderRadius: 4,
                    border: "1px solid var(--border)",
                  }}>{c.domain}</span>
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12, fontWeight: 600,
                  color: "var(--ink-4)",
                }}>#{c.id}</div>
              </div>

              {/* Two-column norm comparison */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 0,
              }}>
                {/* Norm A */}
                <div style={{ padding: "28px 28px 24px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: 8,
                  }}>{c.normA.label}</div>
                  <div style={{
                    fontSize: 12, fontWeight: 600,
                    color: "var(--ink-2)",
                    marginBottom: 4,
                    fontFamily: "var(--font-mono)",
                  }}>{c.normA.doc}</div>
                  <div style={{
                    fontSize: 11, color: "var(--ink-4)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: 16,
                  }}>{c.normA.agency}</div>
                  <p style={{
                    fontSize: "0.95rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}>
                    &ldquo;{c.normA.excerpt}{" "}
                    <mark style={{
                      background: "#FEF9C3",
                      color: "var(--amber)",
                      fontWeight: 700,
                      fontStyle: "normal",
                      padding: "1px 3px",
                      borderRadius: 3,
                    }}>{c.normA.highlight}</mark>
                    {" "}{c.normA.postHighlight}&rdquo;
                  </p>
                </div>

                {/* VS divider */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 20px",
                  borderLeft: "1px solid var(--border)",
                  borderRight: "1px solid var(--border)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: c.typeColor,
                    fontStyle: "italic",
                  }}>VS</div>
                </div>

                {/* Norm B */}
                <div style={{ padding: "28px 28px 24px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: 8,
                  }}>{c.normB.label}</div>
                  <div style={{
                    fontSize: 12, fontWeight: 600,
                    color: "var(--ink-2)",
                    marginBottom: 4,
                    fontFamily: "var(--font-mono)",
                  }}>{c.normB.doc}</div>
                  <div style={{
                    fontSize: 11, color: "var(--ink-4)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: 16,
                  }}>{c.normB.agency}</div>
                  <p style={{
                    fontSize: "0.95rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}>
                    &ldquo;{c.normB.excerpt}{" "}
                    <mark style={{
                      background: "#FEE2E2",
                      color: "var(--red)",
                      fontWeight: 700,
                      fontStyle: "normal",
                      padding: "1px 3px",
                      borderRadius: 3,
                    }}>{c.normB.highlight}</mark>
                    {" "}{c.normB.postHighlight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Explanation */}
              <div style={{
                borderTop: "1px solid var(--border)",
                padding: "20px 28px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                background: "var(--bg-muted)",
              }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 8,
                  }}>Объяснение (Gemini 2.5 Flash)</div>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-2)", lineHeight: 1.65 }}>
                    {c.explanation}
                  </p>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10, fontWeight: 600,
                    color: "var(--ink-4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 8,
                  }}>Приоритет по иерархии НПА</div>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--ink-2)",
                    lineHeight: 1.65,
                  }}>
                    {c.priority}
                  </p>
                  <div style={{ marginTop: 12 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--ink-4)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      padding: "3px 8px",
                      borderRadius: 4,
                    }}>pattern: {c.pattern}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
