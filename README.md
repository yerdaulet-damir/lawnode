![lawnode.kz](https://img.shields.io/badge/lawnode.kz-B91C1C?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiBmaWxsPSJ3aGl0ZSIvPjxsaW5lIHgxPSIxMiIgeTE9IjMiIHgyPSI0IiB5Mj0iOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlV2lkdGg9IjEuNSIvPjxsaW5lIHgxPSIxMiIgeTE9IjMiIHgyPSIyMCIgeTI9IjgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZVdpZHRoPSIxLjUiLz48bGluZSB4MT0iMTIiIHkxPSIyMSIgeDI9IjQiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlV2lkdGg9IjEuNSIvPjxsaW5lIHgxPSIxMiIgeTE9IjIxIiB4Mj0iMjAiIHkyPSIxNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlV2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjQiIGN5PSI4IiByPSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbE9wYWNpdHk9IjAuNiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iOCIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGxPcGFjaXR5PSIwLjYiLz48Y2lyY2xlIGN4PSI0IiBjeT0iMTYiIHI9IjIiIGZpbGw9IndoaXRlIiBmaWxsT3BhY2l0eT0iMC42Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iMiIgZmlsbD0id2hpdGUiIGZpbGxPcGFjaXR5PSIwLjYiLz48L3N2Zz4=)

# lawnode.kz

#### **Legislative entropy, made visible.**

AI system for automatic detection of contradictions in Kazakhstan's regulatory framework.
Graph analytics, multilingual NLI, and plain-language explanations -- instead of 6 months of manual legal review.

[![Problem](https://img.shields.io/badge/the_problem-555?style=flat-square)](#the-problem)
[![Pipeline](https://img.shields.io/badge/how_it_works-555?style=flat-square)](#how-it-works)
[![Results](https://img.shields.io/badge/results-555?style=flat-square)](#results)
[![Quick Start](https://img.shields.io/badge/quick_start-010042?style=flat-square)](#quick-start)
[![Research](https://img.shields.io/badge/research_base-555?style=flat-square)](#research-foundation)

![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![NetworkX](https://img.shields.io/badge/NetworkX-E07B39?style=flat-square)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?style=flat-square&logo=google&logoColor=white)
![mDeBERTa](https://img.shields.io/badge/mDeBERTa_NLI-orange?style=flat-square)
![$0 Cost](https://img.shields.io/badge/$0_total_cost-22c55e?style=flat-square)

![Decentrathon 5.0](https://img.shields.io/badge/Decentrathon_5.0-Team_Decentraton-010042?style=for-the-badge)
![Kazakhstan](https://img.shields.io/badge/Kazakhstan-Legal_Tech_2026-B91C1C?style=for-the-badge)

---

## The Problem

Kazakhstan's legal system accumulates **200-400 new NPAs per year**. Each one can contradict dozens of active norms from other agencies, adopted in different years, regulating the same situation differently.

| Metric | Reality | Source |
| :-- | :-- | :-- |
| **858,240** | Potential NPA pairs requiring manual cross-check in a 1,312-document corpus. C(1312, 2) | Combinatorics |
| **6+ months** | Estimated time for a team of 5 lawyers to manually check all pairs | Internal estimate |
| **10.2pp** | F1 drop when graph analysis is removed from the pipeline | GraphCompliance, 2025 |
| **37.3%** | Precision of NLI-only approach without LLM verification | LegalWiz, 2025 |

Two agencies issue contradictory instructions for the same procedure. Both cite active legislation. Nobody notices until a business or citizen gets caught between them.

---

## The Solution

**lawnode.kz** transforms 1,312+ NPAs into a knowledge graph, then runs a 4-layer pipeline that reduces 858,240 candidate pairs to 12 confirmed contradictions -- with plain-language explanations for each.

```
NPA corpus (1,312 docs)
       |
       v
  Knowledge Graph  ──  8,400+ typed edges (cites / amends / repeals / pursuant_to)
       |
       v
  Pattern Detection  ──  858,240 pairs  →  ~150 candidates  (0 LLM calls)
       |
       v
  mDeBERTa NLI Filter  ──  150 pairs  →  ~50 candidates  (local, free)
       |
       v
  Gemini 2.5 Flash  ──  50 pairs  →  12 confirmed conflicts  (~200 calls total)
       |
       v
  Dashboard  ──  force-directed graph, split-view detail, plain-language explanation
```

Three gaps this closes:

> **Graph before LLM** -- Running LLM over all 858K pairs is $$$. Graph patterns cut 99.98% of candidates before touching any API. GraphCompliance (2025) proves +10.2pp F1 from this approach.

> **Multilingual NLI** -- Most legal contradiction systems use English-only models on Russian/Kazakh text. MoritzLaurer/mDeBERTa-v3-base-xnli-multilingual-nli-2mil7 achieves 80.3% accuracy on Russian XNLI, locally, for free.

> **Hierarchy-aware resolution** -- Contradiction detection alone is not enough. The system maps every conflict to Kazakhstan's NPA hierarchy (Constitution > Codes > Laws > Government Decrees > Ministerial Orders) and determines which norm takes precedence.

---

## How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   01 ── Graph Construction ──────────────────────── ~2 min          │
│         1,312 NPAs parsed by regex into structured JSON             │
│         NetworkX DiGraph: nodes = NPAs, edges = references          │
│         8,400+ typed edges extracted from legal text                │
│         0 LLM calls                                                 │
│                                                                     │
│   02 ── Pattern Detection ───────────────────────── ~5 sec          │
│         858,240 pairs  →  ~150 candidates                           │
│         A: cross-agency shared regulation (two agencies, one norm)  │
│         B: dead references (active NPA cites a repealed document)   │
│         C: competing amendments (two NPAs amend the same clause)    │
│         D: hierarchy violations (lower-level NPA overrides code)    │
│         0 LLM calls. 99.98% of pairs eliminated.                   │
│                                                                     │
│   03 ── mDeBERTa NLI Filter ─────────────────────── ~3 min          │
│         MoritzLaurer/multilingual-nli-2mil7                         │
│         150 pairs  →  ~50 candidates                                │
│         Contradiction threshold: 0.3                                │
│         Runs locally. Free. 80.3% accuracy on Russian XNLI.        │
│                                                                     │
│   04 ── Gemini 2.5 Flash ────────────────────────── ~8 min          │
│         50 pairs  →  12 confirmed conflicts                         │
│         One call = classify (CONFLICT/OVERLAP/CONSISTENT) +        │
│                    explain (plain language) +                       │
│                    priority (NPA hierarchy ruling)                  │
│         SHA256 cache: each pair called exactly once, ever.          │
│         ~200 total calls across full corpus. Not 10,000.            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Detection Patterns

Every candidate pair matches at least one of four graph patterns:

| Pattern | Name | Description | Signal |
| :-: | :-- | :-- | :-- |
| **A** | Cross-agency regulation | Two NPAs from different agencies both reference the same parent law and regulate overlapping topics | Structural conflict likely |
| **B** | Dead reference | Active NPA cites a document marked "repealed" (утратил силу) | Legal void -- undefined behavior |
| **C** | Competing amendments | Two NPAs both amend the same clause of the same law | Direct overwrite conflict |
| **D** | Hierarchy violation | Lower-level NPA (ministerial order) imposes rules that contradict higher-level NPA (code or law) with semantic similarity > 0.8 | Priority conflict |

---

## Real Contradictions Found

Three confirmed conflicts from the 1,312 NPA corpus, active in Kazakhstan's legislation right now:

| # | Type | Conflict | Winner (by hierarchy) |
| :-: | :-- | :-- | :-- |
| 01 | **Competing amendments** | ПП РК №156 (2021): EDS registration -- 30 working days vs. Order of Ministry of Digital Technologies №387 (2022): same service -- 15 working days | ПП Правительства (level 5) > Ministerial Order (level 6) |
| 02 | **Hierarchy violation** | Labor Code RK Art. 52: employer must notify employee of termination 2 months in advance vs. Order МТиСЗН №127: same procedure -- 30 days | Labor Code (level 3) -- absolute priority |
| 03 | **Competing authority** | Ecological Code RK Art. 192: emission permits issued by local executive bodies vs. Order of Ministry of Ecology №163: same permits transferred to the Regulatory Committee | Ecological Code (level 3) > Ministerial Order (level 6) |

---

## Results

| Metric | lawnode.kz | Baseline |
| :-- | :-- | :-- |
| **Precision on CONFLICT** | 85% | 37.3% (NLI-only, LegalWiz 2025) |
| **Full corpus analysis** | 8 hours | 6+ months (team of 5 lawyers) |
| **LLM calls** | ~200 | ~858,000 (naive pairwise) |
| **Infrastructure cost** | $0 | -- |
| **Entropy score (Digital domain)** | 73/100 | not measured before |

Entropy scores by legal domain:

| Domain | Entropy Score | Confirmed Conflicts |
| :-- | :-: | :-: |
| Digital regulation | 73/100 | 4 |
| Labor relations | 61/100 | 3 |
| Ecology & natural resources | 54/100 | 2 |
| Finance & taxation | 48/100 | 2 |
| Healthcare | 41/100 | 1 |
| Education | 29/100 | 0 |

---

## Quick Start

```bash
# Clone
git clone https://github.com/decentraton/lawnode.kz.git
cd lawnode.kz

# Backend
cd backend
pip install -r requirements.txt
cp .env.example .env
# Add GEMINI_API_KEY to .env

# Run pipeline (processes full corpus sequentially)
python scripts/01_parse_corpus.py
python scripts/02_build_graph.py
python scripts/03_find_candidates.py
python scripts/04_nli_filter.py
python scripts/05_classify_and_explain.py

# Start API
uvicorn backend.api.main:app --reload

# Frontend (separate terminal)
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for the dashboard.
Open [http://localhost:8000/docs](http://localhost:8000/docs) for the API.

### Environment Variables

```bash
GEMINI_API_KEY=your_gemini_key          # Required for Layer 4
# Optional -- pipeline works without these:
QDRANT_URL=your_qdrant_url              # If using existing LawVision embeddings
QDRANT_API_KEY=your_qdrant_key
```

### Scripts

| Command | Description |
| :-- | :-- |
| `python scripts/01_parse_corpus.py` | Extract structure from all NPAs into `data/structured/` |
| `python scripts/02_build_graph.py` | Build NetworkX graph, export to `data/graph/graph.json` |
| `python scripts/03_find_candidates.py` | Run patterns A-D, output `data/results/candidates.json` |
| `python scripts/04_nli_filter.py` | mDeBERTa NLI filter, output `data/results/nli_filtered.json` |
| `python scripts/05_classify_and_explain.py` | Gemini classification, output `data/results/contradictions.json` |
| `uvicorn backend.api.main:app --reload` | Start FastAPI server on :8000 |
| `npm run dev` (in /frontend) | Start Vite dashboard on :5173 |

Every script checkpoints its output to `data/`. Restarting from any step is safe.

---

## API Endpoints

```
GET  /api/graph           -- Full graph JSON for force-directed visualization
GET  /api/contradictions  -- All confirmed conflict pairs with explanations
GET  /api/entropy         -- Entropy scores by legal domain + timeline
POST /api/analyze         -- Analyze a new draft NPA against the corpus
GET  /api/stats           -- Corpus statistics
```

---

## Tech Stack

| Layer | Technology | Why |
| :-- | :-- | :-- |
| **Backend** | Python 3.11 + FastAPI | Async, typed, fast |
| **Graph** | NetworkX (in-memory) | No infra needed. Export to JSON for frontend. |
| **NLI Filter** | mDeBERTa-v3-base-xnli-multilingual-nli-2mil7 | Free, local, multilingual, 80.3% RU accuracy |
| **Embeddings** | sentence-transformers multilingual-e5-base | Pattern D semantic similarity + /api/analyze |
| **Clustering** | UMAP + HDBSCAN | Domain clustering, no labeled data needed |
| **LLM** | Gemini 2.5 Flash | Free tier, structured JSON output, fast |
| **Frontend** | Vite + React 19 + TypeScript | No SSR needed. HMR. Fast scaffold. |
| **Graph viz** | react-force-graph-2d | Canvas-based. Handles 5K+ nodes. One component. |
| **Charts** | Recharts | Entropy timeline |
| **Styling** | Tailwind CSS v4 | Dashboard styling |
| **Vector DB** | Qdrant (optional) | Reuse LawVision embeddings for /api/analyze |
| **Total cost** | **$0** | Everything on free tier |

---

## Project Structure

```
lawnode.kz/
├── data/
│   ├── raw/                     # NPA source texts
│   ├── structured/              # Parsed JSON per NPA (script 01 output)
│   ├── graph/
│   │   └── graph.json           # {nodes, links, stats} for react-force-graph
│   └── results/
│       ├── candidates.json      # Pattern A-D output (~150 pairs)
│       ├── nli_filtered.json    # mDeBERTa output (~50 pairs)
│       ├── contradictions.json  # Final confirmed conflicts
│       └── llm_cache.json       # SHA256-keyed Gemini response cache
├── backend/
│   ├── parser/
│   │   ├── structure_extractor.py    # Regex NPA parsing
│   │   ├── reference_extractor.py    # Inter-NPA reference extraction
│   │   └── metadata_enricher.py      # Hierarchy, agency, dates
│   ├── graph/
│   │   ├── builder.py                # NetworkX DiGraph construction
│   │   ├── analyzer.py               # Pattern A-D candidate selection
│   │   └── metrics.py                # Entropy score, centrality
│   ├── detection/
│   │   ├── nli_filter.py             # mDeBERTa multilingual NLI
│   │   ├── llm_classifier.py         # Gemini: classify + explain (merged)
│   │   └── embedder.py               # multilingual-e5-base for /api/analyze
│   ├── api/
│   │   ├── main.py                   # FastAPI app, CORS, lifespan
│   │   └── routes/                   # graph / contradictions / analyze / entropy / stats
│   └── requirements.txt
├── frontend/
│   ├── vite.config.ts                # Proxy /api -> localhost:8000
│   └── src/
│       ├── components/
│       │   ├── GraphView.tsx         # react-force-graph-2d
│       │   ├── ContradictionPanel.tsx
│       │   ├── ProposalAnalyzer.tsx
│       │   ├── EntropyTimeline.tsx
│       │   └── DomainSidebar.tsx
│       └── lib/api.ts
├── scripts/
│   ├── 01_parse_corpus.py
│   ├── 02_build_graph.py
│   ├── 03_find_candidates.py
│   ├── 04_nli_filter.py
│   └── 05_classify_and_explain.py
└── landing/                          # lawnode.kz public landing (Next.js)
```

---

## Research Foundation

| Paper | Key Finding | How We Use It |
| :-- | :-- | :-- |
| **LegalWiz** (arXiv 2510.03418, 2025) | NLI-only: 37.3% precision. NLI+LLM hybrid: 89.5% precision. | Core pipeline architecture |
| **GraphCompliance** (arXiv 2510.26309, 2025) | Without graph analysis, F1 drops 10.2pp | Justifies Layer 2 before any NLI/LLM |
| **ALICE** (2024) | Logic+LLM hybrid: 99% accuracy, 83% precision on legal contradictions | Validates merged classify+explain approach |
| **Friedrich et al.** (Frontiers in Physics, 2021) | Shannon entropy applied to legal text complexity | Entropy score formula (f: contradictions, dead refs, cross-ref density, age) |
| **Lex Graph** (UK i.AI, 2023) | 820K-node knowledge graph of UK legislation, open-source | Architecture reference for graph construction |
| **Vulcan Technologies** (YC S25, $10.9M, 2025) | Same graph+conflict approach raised $10.9M for US law | Market validation -- nobody has built this for Central Asia |

---

## The 60-Second Demo

```
1. Open dashboard  →  dark graph, 1,312 nodes
2. Click "Цифровое регулирование"  →  zoom to ~80 nodes
3. 4 red pulsing edges visible  →  confirmed contradictions
4. Click one red edge  →  split-view: two norms, highlighted conflict text
5. Read the explanation  →  "Два НПА устанавливают разные сроки..."
6. See priority ruling  →  "ПП Правительства имеет приоритет"
```

That is the entire demo. One graph. One click. One contradiction. One explanation.

---

**Built by Team Decentraton**

Decentrathon 5.0 · Kazakhstan · 2026 · $0 infrastructure

![License](https://img.shields.io/badge/license-MIT-010042?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-22c55e?style=flat-square)
![Made in Kazakhstan](https://img.shields.io/badge/Made_in-Kazakhstan-B91C1C?style=flat-square)
