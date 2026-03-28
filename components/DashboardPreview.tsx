const NODES = [
  // Hub — Constitution (center)
  { id: 0, x: 268, y: 185, r: 16, domain: "hub",     label: "Конституция РК",    sublabel: "уровень 1" },
  { id: 1, x: 310, y: 158, r:  8, domain: "hub",     label: "Закон о НПА",       sublabel: "" },
  { id: 2, x: 225, y: 160, r:  7, domain: "hub",     label: "",                  sublabel: "" },

  // Digital cluster (right)
  { id: 3, x: 422, y: 112, r: 14, domain: "digital", label: "ПП РК №156",        sublabel: "20.03.2021" },  // CONFLICT
  { id: 4, x: 466, y: 76,  r: 11, domain: "digital", label: "Приказ №387",       sublabel: "Минцифры" },   // CONFLICT
  { id: 5, x: 480, y: 130, r:  6, domain: "digital", label: "",                  sublabel: "" },
  { id: 6, x: 456, y: 164, r:  5, domain: "digital", label: "",                  sublabel: "" },
  { id: 7, x: 490, y: 198, r:  5, domain: "digital", label: "",                  sublabel: "" },
  { id: 8, x: 400, y: 152, r:  5, domain: "digital", label: "",                  sublabel: "" },
  { id: 9, x: 504, y: 104, r:  4, domain: "digital", label: "",                  sublabel: "" },

  // Labor cluster (bottom-left)
  { id: 10, x: 108, y: 252, r: 14, domain: "labor",  label: "ТК РК",             sublabel: "ст. 52" },     // CONFLICT
  { id: 11, x: 68,  y: 212, r: 10, domain: "labor",  label: "Приказ №127",       sublabel: "МТиСЗН" },    // CONFLICT
  { id: 12, x: 145, y: 285, r:  6, domain: "labor",  label: "",                  sublabel: "" },
  { id: 13, x: 72,  y: 288, r:  5, domain: "labor",  label: "",                  sublabel: "" },
  { id: 14, x: 162, y: 228, r:  5, domain: "labor",  label: "",                  sublabel: "" },
  { id: 15, x: 108, y: 318, r:  4, domain: "labor",  label: "",                  sublabel: "" },

  // Ecology cluster (bottom-center)
  { id: 16, x: 294, y: 305, r: 13, domain: "ecology", label: "Эко. кодекс",     sublabel: "ст. 192" },    // CONFLICT
  { id: 17, x: 337, y: 274, r: 10, domain: "ecology", label: "Приказ №163",     sublabel: "Минэкология" },// CONFLICT
  { id: 18, x: 256, y: 342, r:  5, domain: "ecology", label: "",                sublabel: "" },
  { id: 19, x: 350, y: 318, r:  6, domain: "ecology", label: "",                sublabel: "" },
  { id: 20, x: 312, y: 350, r:  4, domain: "ecology", label: "",                sublabel: "" },

  // Finance cluster (top-left)
  { id: 21, x: 108, y: 104, r: 11, domain: "finance", label: "НК РК",           sublabel: "" },
  { id: 22, x: 70,  y: 136, r:  6, domain: "finance", label: "",                sublabel: "" },
  { id: 23, x: 142, y: 82,  r:  6, domain: "finance", label: "",                sublabel: "" },
  { id: 24, x: 164, y: 124, r:  5, domain: "finance", label: "",                sublabel: "" },
  { id: 25, x: 72,  y: 86,  r:  4, domain: "finance", label: "",                sublabel: "" },
  { id: 26, x: 184, y: 160, r:  5, domain: "finance", label: "",                sublabel: "" },
];

const CONFLICT_IDS = new Set([3, 4, 10, 11, 16, 17]);

const CONFLICT_EDGES = [
  { a: 3,  b: 4,  dur: "1.5s", label: "30дн ≠ 15дн" },
  { a: 10, b: 11, dur: "1.8s", label: "2мес ≠ 30дн" },
  { a: 16, b: 17, dur: "1.6s", label: "МИО ≠ Комитет" },
];

const NORMAL_EDGES: [number, number][] = [
  [0,3],[0,10],[0,16],[0,21],[0,1],[0,2],
  [1,5],[2,12],[3,5],[3,8],[4,5],[4,9],[5,6],[6,7],
  [10,12],[10,14],[11,13],[11,14],[12,15],[13,15],
  [16,18],[16,19],[17,19],[17,20],[18,20],
  [21,22],[21,23],[22,25],[23,24],[24,26],[25,22],
  [14,26],[7,19],[15,18],[26,8],[24,1],
];

const DOMAIN_COLOR: Record<string, { fill: string; stroke: string; bg: string }> = {
  digital:  { fill: "#1E3A8A", stroke: "#1E3A8A", bg: "#EFF6FF" },
  labor:    { fill: "#92400E", stroke: "#92400E", bg: "#FFFBEB" },
  ecology:  { fill: "#065F46", stroke: "#065F46", bg: "#ECFDF5" },
  finance:  { fill: "#5B21B6", stroke: "#5B21B6", bg: "#F5F3FF" },
  hub:      { fill: "#374151", stroke: "#374151", bg: "#F9FAFB" },
};

const DOMAINS = [
  { name: "Цифровое регулирование",        entropy: 73, conflicts: 4, active: true  },
  { name: "Трудовые отношения",            entropy: 61, conflicts: 3, active: false },
  { name: "Экология · Природопользование", entropy: 54, conflicts: 2, active: false },
  { name: "Финансы · Налогообложение",     entropy: 48, conflicts: 2, active: false },
  { name: "Здравоохранение",               entropy: 41, conflicts: 1, active: false },
  { name: "Образование",                   entropy: 29, conflicts: 0, active: false },
];

export default function DashboardPreview() {
  return (
    <section style={{ padding: "100px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 48 }} data-reveal>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            color: "var(--red)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16,
          }}>Продукт · Интерфейс</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: 16,
          }}>
            Это дашборд, который откроет судья.<br />
            <span style={{ fontStyle: "italic" }}>Граф. Клик. Противоречие.</span>
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: "1.05rem", maxWidth: 560 }}>
            1,312 нодов. 4 красных пульсирующих ребра в домене «Цифровое регулирование».
            Клик — split-view двух норм с объяснением от Gemini 2.5 Flash.
          </p>
        </div>

        {/* ────── BROWSER MOCKUP ────── */}
        <div
          data-reveal data-reveal-delay="1"
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 32px 80px rgba(15,14,12,0.12), 0 2px 8px rgba(15,14,12,0.06)",
          }}
        >

          {/* Browser chrome */}
          <div style={{
            background: "#EFEDE8",
            height: 42,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            gap: 14,
            borderBottom: "1px solid var(--border)",
          }}>
            <div style={{ display: "flex", gap: 6 }}>
              {(["#FF5F57","#FEBC2E","#28C840"] as const).map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "5px 16px",
                width: 320,
              }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path d="M6.5 1a5.5 5.5 0 1 0 3.478 9.787l3.618 3.618.707-.707-3.618-3.618A5.5 5.5 0 0 0 6.5 1Z"
                    fill="#ABA59C" />
                </svg>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#ABA59C" }}>
                  localhost:5173 — Entropy Engine
                </span>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#C8C2B8" }}>
              Decentrathon 5.0
            </div>
          </div>

          {/* ── APP NAV BAR ── */}
          <div style={{
            background: "#FFFFFF",
            height: 52,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: 0,
            borderBottom: "1px solid var(--border)",
          }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingRight: 20, borderRight: "1px solid var(--border)" }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%", background: "var(--red)",
              }} />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
                color: "var(--ink)", letterSpacing: "0.02em",
              }}>entropy-engine</span>
            </div>

            {/* Breadcrumb */}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "0 20px",
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--ink-3)",
            }}>
              <span>Анализ НПА</span>
              <span style={{ color: "var(--border-strong)" }}>/</span>
              <span style={{ color: "var(--ink)", fontWeight: 500 }}>Граф противоречий</span>
            </div>

            {/* Search */}
            <div style={{
              marginLeft: "auto",
              display: "flex", alignItems: "center", gap: 8,
              background: "var(--bg-muted)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "6px 12px",
              width: 260,
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M6.5 1a5.5 5.5 0 1 0 3.478 9.787l3.618 3.618.707-.707L7.085 11.787A5.5 5.5 0 0 0 6.5 1Z"
                  fill="var(--ink-4)" />
              </svg>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-4)" }}>
                Поиск по НПА, ведомству...
              </span>
            </div>

            {/* Conflict badge */}
            <div style={{
              marginLeft: 12,
              display: "flex", alignItems: "center", gap: 6,
              background: "#FEF2F2",
              border: "1px solid #FECACA",
              borderRadius: 6,
              padding: "6px 12px",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 6, height: 6 }}>
                <svg width="6" height="6" viewBox="0 0 6 6" style={{ overflow: "visible" }}>
                  <circle cx="3" cy="3" r="3" fill="var(--red)">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--red)", fontWeight: 600 }}>
                12 конфликтов
              </span>
            </div>

            {/* User badge */}
            <div style={{
              marginLeft: 12,
              display: "flex", alignItems: "center", gap: 7,
              padding: "5px 12px",
              background: "var(--bg-muted)",
              border: "1px solid var(--border)",
              borderRadius: 6,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "var(--ink)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600,
              }}>D</div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-2)" }}>
                Decentraton
              </span>
            </div>
          </div>

          {/* ── MAIN LAYOUT ── */}
          <div style={{ display: "grid", gridTemplateColumns: "224px 1fr 304px", height: 476, background: "var(--bg)" }}>

            {/* ── SIDEBAR ── */}
            <div style={{
              background: "#FFFFFF",
              borderRight: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}>
              {/* Domains section */}
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{
                  padding: "14px 16px 8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10, fontWeight: 600,
                  color: "var(--ink-4)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid var(--border)",
                }}>Правовые домены</div>

                {DOMAINS.map((d) => (
                  <div key={d.name} style={{
                    padding: "10px 16px",
                    borderLeft: `2px solid ${d.active ? "var(--red)" : "transparent"}`,
                    background: d.active ? "#FEF2F2" : "transparent",
                  }}>
                    <div style={{
                      display: "flex", alignItems: "flex-start",
                      justifyContent: "space-between", gap: 6, marginBottom: 6,
                    }}>
                      <div style={{
                        fontSize: 12,
                        color: d.active ? "var(--ink)" : "var(--ink-3)",
                        fontWeight: d.active ? 600 : 400,
                        lineHeight: 1.4, flex: 1,
                      }}>{d.name}</div>
                      {d.conflicts > 0 ? (
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700,
                          color: "var(--red)", background: "#FEF2F2",
                          border: "1px solid #FECACA",
                          padding: "1px 6px", borderRadius: 4, flexShrink: 0,
                        }}>{d.conflicts}</span>
                      ) : (
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: 10,
                          color: "var(--green)", background: "var(--green-light)",
                          border: "1px solid #A7F3D0",
                          padding: "1px 6px", borderRadius: 4, flexShrink: 0,
                        }}>✓</span>
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{
                        flex: 1, height: 3,
                        background: "var(--bg-muted)", borderRadius: 2, overflow: "hidden",
                      }}>
                        <div style={{
                          height: "100%",
                          width: `${d.entropy}%`,
                          background: d.entropy > 60 ? "var(--red)" : d.entropy > 44 ? "#D97706" : "#059669",
                          borderRadius: 2,
                          opacity: d.active ? 1 : 0.5,
                        }} />
                      </div>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 10,
                        color: d.active ? "var(--red)" : "var(--ink-4)",
                        width: 36, textAlign: "right", flexShrink: 0,
                      }}>{d.entropy}/100</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Filters */}
              <div style={{ borderTop: "1px solid var(--border)" }}>
                <div style={{
                  padding: "10px 16px 6px",
                  fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                  color: "var(--ink-4)", letterSpacing: "0.15em", textTransform: "uppercase",
                }}>Тип документа</div>
                {[
                  { label: "Постановления Правительства", checked: true  },
                  { label: "Приказы министерств",         checked: true  },
                  { label: "Кодексы и законы",            checked: true  },
                ].map(({ label, checked }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "5px 16px",
                  }}>
                    <div style={{
                      width: 13, height: 13,
                      border: checked ? "none" : "1px solid var(--border)",
                      borderRadius: 3,
                      background: checked ? "var(--ink)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {checked && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span style={{ fontSize: 11, color: "var(--ink-2)" }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* Stats footer */}
              <div style={{
                padding: "10px 16px",
                borderTop: "1px solid var(--border)",
                background: "var(--bg-muted)",
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)", lineHeight: 1.8 }}>
                  <div>1 312 НПА · 8 423 связи</div>
                  <div>12 конфликтов подтверждено</div>
                  <div style={{ color: "var(--red)", marginTop: 2 }}>● Цифровое регулирование</div>
                </div>
              </div>
            </div>

            {/* ── GRAPH CANVAS ── */}
            <div style={{
              background: "var(--bg-card)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}>
              {/* Graph toolbar */}
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 14px",
                borderBottom: "1px solid var(--border)",
                background: "#FFFFFF",
                flexShrink: 0,
              }}>
                {/* Zoom buttons */}
                {["＋","－","⤢"].map((btn) => (
                  <div key={btn} style={{
                    width: 28, height: 28, border: "1px solid var(--border)",
                    borderRadius: 5, background: "var(--bg-muted)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-3)",
                    cursor: "default",
                  }}>{btn}</div>
                ))}

                <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 2px" }} />

                {/* Active filter chip */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "#FEF2F2", border: "1px solid #FECACA",
                  borderRadius: 5, padding: "4px 10px",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1E3A8A" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--red)" }}>
                    Цифровое регулирование
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FECACA" }}>×</span>
                </div>

                <div style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)" }}>
                  1 312 нодов · 4 конфликта
                </div>
              </div>

              {/* SVG Graph */}
              <div style={{ flex: 1, position: "relative" }}>
                <svg viewBox="0 0 560 400" width="100%" height="100%" style={{ display: "block" }}>

                  {/* Cluster halos */}
                  <circle cx="452" cy="126" r="80" fill="#EFF6FF" fillOpacity="0.8" />
                  <circle cx="108" cy="263" r="72" fill="#FFFBEB" fillOpacity="0.8" />
                  <circle cx="302" cy="315" r="66" fill="#ECFDF5" fillOpacity="0.8" />
                  <circle cx="112" cy="112" r="62" fill="#F5F3FF" fillOpacity="0.8" />

                  {/* Cluster domain labels */}
                  <text x="510" y="76" fontFamily="'DM Mono', monospace" fontSize="9" fill="#93C5FD" textAnchor="middle">Цифровые услуги</text>
                  <text x="62" y="162" fontFamily="'DM Mono', monospace" fontSize="9" fill="#FCD34D" textAnchor="middle">Трудовые</text>
                  <text x="302" y="368" fontFamily="'DM Mono', monospace" fontSize="9" fill="#6EE7B7" textAnchor="middle">Экология</text>
                  <text x="96" y="56" fontFamily="'DM Mono', monospace" fontSize="9" fill="#C4B5FD" textAnchor="middle">Финансы</text>

                  {/* Normal edges */}
                  {NORMAL_EDGES.map(([a, b], i) => {
                    const na = NODES[a], nb = NODES[b];
                    return (
                      <line key={`ne-${i}`}
                        x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                        stroke="#D1D5DB" strokeOpacity="0.8" strokeWidth="1"
                      />
                    );
                  })}

                  {/* Conflict edges — pulsing red */}
                  {CONFLICT_EDGES.map((e, i) => {
                    const na = NODES[e.a], nb = NODES[e.b];
                    const mx = (na.x + nb.x) / 2;
                    const my = (na.y + nb.y) / 2;
                    return (
                      <g key={`ce-${i}`}>
                        {/* Glow */}
                        <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                          stroke="#B91C1C" strokeWidth="10" strokeOpacity="0.08">
                          <animate attributeName="stroke-opacity" values="0.04;0.14;0.04" dur={e.dur} repeatCount="indefinite"/>
                        </line>
                        {/* Line */}
                        <line x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                          stroke="#B91C1C" strokeWidth="2" strokeOpacity="0.9">
                          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur={e.dur} repeatCount="indefinite"/>
                        </line>
                        {/* Mid label */}
                        <rect x={mx - 22} y={my - 9} width={44} height={16} rx="3"
                          fill="#FEF2F2" stroke="#FECACA" strokeWidth="1"
                        />
                        <text x={mx} y={my + 4} textAnchor="middle"
                          fontFamily="'DM Mono', monospace" fontSize="8"
                          fill="#B91C1C" fontWeight="600"
                        >{e.label}</text>
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  {NODES.map((n) => {
                    const isConflict = CONFLICT_IDS.has(n.id);
                    const dc = DOMAIN_COLOR[n.domain];
                    return (
                      <g key={`n-${n.id}`}>
                        {/* Conflict pulse ring */}
                        {isConflict && (
                          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none"
                            stroke="#B91C1C" strokeWidth="1.5" strokeOpacity="0.3">
                            <animate attributeName="r" values={`${n.r+6};${n.r+14};${n.r+6}`} dur="1.8s" repeatCount="indefinite"/>
                            <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite"/>
                          </circle>
                        )}
                        {/* Node fill */}
                        <circle cx={n.x} cy={n.y} r={n.r}
                          fill={isConflict ? "#FEF2F2" : dc.bg}
                          stroke={isConflict ? "#B91C1C" : dc.stroke}
                          strokeWidth={isConflict ? "2" : "1.5"}
                          strokeOpacity={isConflict ? "1" : "0.6"}
                        />
                        {/* Node dot center */}
                        <circle cx={n.x} cy={n.y} r={n.r * 0.38}
                          fill={isConflict ? "#B91C1C" : dc.fill}
                          fillOpacity="0.85"
                        />
                        {/* Label */}
                        {n.label && (
                          <>
                            <text x={n.x} y={n.y + n.r + 12}
                              textAnchor="middle"
                              fontFamily="'DM Sans', system-ui, sans-serif"
                              fontSize={n.r >= 13 ? "10" : "9"}
                              fontWeight="600"
                              fill={isConflict ? "#B91C1C" : dc.fill}
                            >{n.label}</text>
                            {n.sublabel && (
                              <text x={n.x} y={n.y + n.r + 22}
                                textAnchor="middle"
                                fontFamily="'DM Mono', monospace"
                                fontSize="8"
                                fill={isConflict ? "#DC2626" : "#9CA3AF"}
                                fillOpacity="0.8"
                              >{n.sublabel}</text>
                            )}
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Graph status bar */}
              <div style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "6px 14px",
                borderTop: "1px solid var(--border)",
                background: "var(--bg-muted)",
                flexShrink: 0,
              }}>
                {[
                  { dot: "#1E3A8A", label: "Цифровые" },
                  { dot: "#92400E", label: "Трудовые" },
                  { dot: "#065F46", label: "Экология" },
                  { dot: "#5B21B6", label: "Финансы" },
                ].map(({ dot, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: dot, opacity: 0.7 }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)" }}>{label}</span>
                  </div>
                ))}
                <div style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)" }}>
                  react-force-graph-2d
                </div>
              </div>
            </div>

            {/* ── RIGHT DETAIL PANEL ── */}
            <div style={{
              background: "#FFFFFF",
              borderLeft: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}>
              {/* Panel header */}
              <div style={{
                padding: "14px 18px",
                borderBottom: "1px solid var(--border)",
                background: "#FFFFFF",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: "1rem",
                    fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em",
                  }}>Противоречие #01</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)" }}>из 12</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                    color: "var(--red)",
                    background: "#FEF2F2", border: "1px solid #FECACA",
                    padding: "2px 8px", borderRadius: 10, letterSpacing: "0.08em",
                  }}>КОНФЛИКТ</span>
                  <div style={{
                    flex: 1, height: 4,
                    background: "var(--bg-muted)", borderRadius: 2, overflow: "hidden",
                  }}>
                    <div style={{ width: "94%", height: "100%", background: "var(--red)", borderRadius: 2 }} />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    fontWeight: 700, color: "var(--red)",
                  }}>94%</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-4)", marginTop: 6 }}>
                  Competing amendments · Цифровые услуги
                </div>
              </div>

              {/* Norm A */}
              <div style={{ padding: "12px 18px", borderBottom: "1px solid var(--border)" }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                  color: "var(--ink-4)", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginBottom: 8,
                }}>Норма А — приоритет</div>
                <div style={{
                  background: "var(--bg-muted)",
                  border: "1px solid var(--border)",
                  borderRadius: 8, padding: "10px 12px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                    color: "var(--ink-2)", marginBottom: 2,
                  }}>ПП РК №156 · 20.03.2021</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    color: "var(--ink-4)", marginBottom: 8,
                  }}>Правительство РК · уровень 5</div>
                  <p style={{ fontSize: 11, color: "var(--ink-2)", lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;...срок рассмотрения заявления...{" "}
                    <mark style={{
                      background: "#FEF9C3", color: "#92400E",
                      fontWeight: 700, fontStyle: "normal",
                      padding: "1px 4px", borderRadius: 3,
                    }}>30 рабочих дней</mark>
                    {" "}со дня подачи...&rdquo;
                  </p>
                </div>
              </div>

              {/* VS */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "8px 18px",
                borderBottom: "1px solid var(--border)",
              }}>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "1rem",
                  fontWeight: 700, color: "var(--red)", fontStyle: "italic",
                }}>VS</span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>

              {/* Norm B */}
              <div style={{ padding: "12px 18px", borderBottom: "1px solid var(--border)" }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                  color: "var(--ink-4)", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginBottom: 8,
                }}>Норма Б — конфликт</div>
                <div style={{
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  borderRadius: 8, padding: "10px 12px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                    color: "var(--ink-2)", marginBottom: 2,
                  }}>Приказ Минцифры №387 · 12.08.2022</div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    color: "var(--ink-4)", marginBottom: 8,
                  }}>Мин. цифровых технологий · уровень 6</div>
                  <p style={{ fontSize: 11, color: "var(--ink-2)", lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;...государственная услуга по регистрации ЭЦП...{" "}
                    <mark style={{
                      background: "#FECACA", color: "var(--red)",
                      fontWeight: 700, fontStyle: "normal",
                      padding: "1px 4px", borderRadius: 3,
                    }}>15 рабочих дней</mark>
                    {" "}с момента регистрации...&rdquo;
                  </p>
                </div>
              </div>

              {/* Explanation */}
              <div style={{ padding: "12px 18px", flex: 1 }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700,
                  color: "var(--ink-4)", textTransform: "uppercase",
                  letterSpacing: "0.15em", marginBottom: 8,
                }}>Объяснение (Gemini 2.5 Flash)</div>
                <p style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.75 }}>
                  Два НПА устанавливают несовместимые сроки для одной процедуры.
                  По иерархии НПА, Постановление Правительства (уровень 5) имеет
                  приоритет над Приказом министерства (уровень 6).
                </p>
                <div style={{
                  marginTop: 10,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10, color: "var(--red)",
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  borderRadius: 6, padding: "6px 10px",
                }}>
                  ПП Правительства {">"} Приказ министерства
                </div>
              </div>

              {/* Action buttons */}
              <div style={{
                display: "flex", gap: 6, padding: "12px 18px",
                borderTop: "1px solid var(--border)",
                background: "var(--bg-muted)",
              }}>
                {[
                  { label: "← Пред.", style: {} },
                  { label: "Экспорт ↗", style: { color: "var(--red)", borderColor: "#FECACA", background: "#FEF2F2" } },
                  { label: "След. →", style: {} },
                ].map(({ label, style }) => (
                  <div key={label} style={{
                    flex: 1, padding: "7px",
                    textAlign: "center" as const,
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--ink-3)",
                    background: "#FFFFFF",
                    cursor: "default",
                    ...style,
                  }}>{label}</div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Legend */}
        <div data-reveal data-reveal-delay="2" style={{
          marginTop: 20,
          display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
        }}>
          {[
            { dot: "#1E3A8A", label: "Цифровые услуги" },
            { dot: "#92400E", label: "Трудовые отношения" },
            { dot: "#065F46", label: "Экология" },
            { dot: "#5B21B6", label: "Финансы" },
          ].map(({ dot, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: dot }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-4)" }}>{label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 2, background: "var(--red)", borderRadius: 1 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--red)" }}>
              Подтверждённый конфликт
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
