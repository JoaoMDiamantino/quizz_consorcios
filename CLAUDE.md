# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational true/false quiz web app about real estate consortiums (consórcios imobiliários) for the **Confiax** brand. 20 questions with progressive difficulty, immediate feedback, and a public leaderboard backed by Supabase.

## Commands

```bash
npm run dev        # start dev server (Vite)
npm run build      # production build
npm run preview    # preview production build
npm run type-check # tsc --noEmit
npm run lint       # eslint src/
```

## Environment Variables

Required in `.env.local`:
```
VITE_SUPABASE_URL=https://<project>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

## Architecture

**Stack:** React 19 + Vite + TypeScript + Tailwind CSS + Framer Motion + Supabase

```
src/
├── components/       # UI screens and widgets
│   ├── StartScreen   # nickname input + start button
│   ├── QuizScreen    # question display + V/F buttons
│   ├── FeedbackCard  # animated correct/wrong feedback with explanation
│   ├── ProgressBar   # top progress strip (question X of 20)
│   ├── ScoreDisplay  # live score counter
│   ├── ResultScreen  # final score, earned title, ranking position
│   └── RankingScreen # top-10 leaderboard from Supabase
├── data/
│   └── questions.ts  # array of 20 questions (id, nivel, afirmacao, resposta, explicacao)
├── hooks/
│   └── useQuiz.ts    # all quiz state: current question, score, phase, navigation
├── lib/
│   └── supabase.ts   # Supabase client instance
├── services/
│   └── ranking.ts    # salvarScore() and buscarRanking() — Supabase reads/writes
├── types/
│   └── index.ts      # shared TypeScript types
├── App.tsx           # screen router (start → quiz → result → ranking)
└── main.tsx
```

### Key Data Flow

1. `App.tsx` owns the active screen state; passes `nickname` down from `StartScreen`
2. `useQuiz.ts` manages all quiz progression — question index, score accumulation, title calculation
3. On `ResultScreen`, `salvarScore()` is called once to persist to Supabase; `buscarRanking()` fetches the leaderboard for `RankingScreen`

### Question Structure

```typescript
interface Question {
  id: number;
  nivel: 'iniciante' | 'intermediario' | 'avancado'; // Q1-7, Q8-14, Q15-20
  afirmacao: string;
  resposta: boolean;
  explicacao: string;
}
```

### Scoring / Titles

| Score | Title |
|-------|-------|
| 0–5   | Curioso Imobiliário |
| 6–10  | Investidor em Formação |
| 11–15 | Conhecedor de Consórcios |
| 16–19 | Especialista Confiax |
| 20    | Mestre dos Consórcios |

### Supabase Schema

```sql
CREATE TABLE scores (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  apelido   TEXT NOT NULL,
  pontuacao INTEGER NOT NULL CHECK (pontuacao >= 0 AND pontuacao <= 20),
  titulo    TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_scores_pontuacao ON scores (pontuacao DESC, created_at ASC);
-- RLS: public SELECT and INSERT, no UPDATE/DELETE
```

## Design Tokens

| Token   | Value     | Usage |
|---------|-----------|-------|
| primary | `#1E40AF` | main buttons, accents |
| success | `#16A34A` | correct answer feedback |
| error   | `#DC2626` | wrong answer feedback |
| neutral | `#F9FAFB` | legacy token (kept for compatibility) |
| gold    | `#F59E0B` | rank #1 highlight, perfect-score ring |
| text    | `#111827` | body text inside cards |

**Visual direction:** Dark Premium — all screens use `bg-gradient-to-br from-slate-900 to-blue-900`. Content surfaces are white cards with `rounded-3xl shadow-2xl` and a `h-1.5` cyan-blue top accent stripe. Progress bar track is `bg-white/20` with a `from-blue-400 to-cyan-400` fill. Score ring on ResultScreen is an animated SVG `motion.circle` whose stroke color shifts from slate → indigo → blue → gold based on score tier.

Mobile-first, tested at 375px and 1280px. V/F buttons full-width on mobile. Feedback card uses Framer Motion animation.
