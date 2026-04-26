# PRD — Quiz Web: Consórcios Imobiliários
**Produto:** Quiz educativo verdadeiro ou falso sobre Consórcios Imobiliários  
**Marca:** Confiax  
**Data:** 2026-04-25  
**Status:** Pronto para desenvolvimento

---

## 1. Contexto e Objetivo de Negócio

A Confiax (https://www.confiaxseguros.com.br/) quer posicionar-se como referência no mercado de consórcios imobiliários. O Quiz é uma ferramenta de topo de funil: educa investidores iniciantes de forma interativa, constrói autoridade de marca e cria um ranking público que estimula o compartilhamento orgânico.

**Objetivo primário:** Educar o público sobre consórcios imobiliários de forma progressiva, divertida e acessível.

**Objetivo secundário:** Gerar engajamento e reconhecimento de marca (Confiax), com potencial de expansão futura para captura de leads.

---

## 2. Público-Alvo

**Persona principal:** Investidor iniciante  
- Idade: 25–45 anos  
- Tem algum conhecimento financeiro básico (poupança, CDB, ações)  
- Nunca investiu ou está começando a investir em imóveis  
- Usa smartphone no dia a dia  
- Busca alternativas ao financiamento tradicional

---

## 3. Escopo do Produto (MVP)

### 3.1 Funcionalidades Incluídas

| # | Funcionalidade | Prioridade |
|---|---|---|
| 1 | Quiz de 20 perguntas Verdadeiro/Falso | Must Have |
| 2 | Progressão automática de dificuldade (Iniciante → Avançado) | Must Have |
| 3 | Feedback imediato por pergunta (acerto e erro) com explicação | Must Have |
| 4 | Barra de progresso visual (pergunta X de 20) | Must Have |
| 5 | Score acumulado em tempo real | Must Have |
| 6 | Perfil/título final baseado na pontuação | Must Have |
| 7 | Ranking público com apelido | Must Have |
| 8 | Design responsivo (mobile + desktop) | Must Have |
| 9 | Identidade visual Confiax | Must Have |

### 3.2 Fora do Escopo (MVP)

- Login / autenticação de usuários
- Histórico de partidas por usuário
- Painel administrativo para editar perguntas
- Captura de e-mail / integração com CRM
- Timer por pergunta
- Modo multiplayer

---

## 4. Fluxo de Usuário

```
[Tela Inicial]
  → Logo Confiax + título + botão "Iniciar Quiz"
  → Campo: "Qual é o seu apelido?" (obrigatório para ranking)

[Quiz — 20 Perguntas]
  → Pergunta exibida com afirmação
  → Botões: ✅ Verdadeiro | ❌ Falso
  → Após resposta:
      - Feedback visual (verde = certo / vermelho = errado)
      - Explicação da resposta correta (sempre, acerto ou erro)
      - Score atualizado
      - Botão "Próxima pergunta"
  → Barra de progresso no topo

[Tela de Resultado]
  → Pontuação final (X de 20)
  → Perfil/Título conquistado
  → Posição no Ranking
  → Botão "Ver Ranking Completo"
  → Botão "Jogar Novamente"

[Tela de Ranking]
  → Top 10 maiores pontuações (apelido + score)
  → Posição do jogador atual destacada
  → Botão "Jogar Novamente"
```

---

## 5. Conteúdo — Estrutura das Perguntas

### 5.1 Distribuição por Nível

| Nível | Perguntas | Bloco de Conteúdo |
|---|---|---|
| Iniciante | 1–7 | Conceitos básicos |
| Intermediário | 8–14 | Regras, custos e contemplação |
| Avançado | 15–20 | Alavancagem e estratégias |

### 5.2 Blocos de Conteúdo

**Bloco 1 — Conceitos Básicos (Iniciante)**
- O que é consórcio e como funciona
- Diferença entre consórcio e financiamento
- O que é uma cota de consórcio
- O que é um grupo de consórcio
- Administradora de consórcio: papel e regulação (Banco Central)
- Prazo típico de um consórcio imobiliário
- O que é a carta de crédito

**Bloco 2 — Regras e Custos (Intermediário)**
- Taxa de administração (não há juros, mas há taxa)
- Fundo de reserva e sua finalidade
- Seguro de vida e seguro do bem
- Uso do FGTS no consórcio
- O que acontece ao cancelar o consórcio
- Atualização do valor da carta de crédito
- Inadimplência e exclusão do grupo

**Bloco 3 — Contemplação, Lance e Estratégias Avançadas (Avançado)**
- Como funciona o sorteio mensal
- Tipos de lance: livre, fixo e embutido
- Lance embutido: o que é e como funciona
- Estratégia de múltiplas cotas para alavancagem
- Consórcio como ferramenta de investimento vs. especulação
- Liquidez da carta de crédito: restrições e possibilidades

### 5.3 Exemplo de Pergunta (formato JSON)

```json
{
  "id": 1,
  "nivel": "iniciante",
  "afirmacao": "No consórcio imobiliário, o participante paga juros mensais sobre o valor do bem.",
  "resposta": false,
  "explicacao": "Falso. O consórcio não cobra juros. O participante paga apenas a taxa de administração e, em alguns casos, o fundo de reserva. Essa é uma das principais vantagens em relação ao financiamento bancário."
}
```

---

## 6. Gamificação — Perfis/Títulos Finais

| Pontuação | Título | Descrição exibida |
|---|---|---|
| 0–5 | Curioso Imobiliário | "Você está começando a jornada. Explore mais sobre consórcios!" |
| 6–10 | Investidor em Formação | "Boa base! Com mais estudo, você chegará longe." |
| 11–15 | Conhecedor de Consórcios | "Você já domina os fundamentos. Impressionante!" |
| 16–19 | Especialista Confiax | "Conhecimento avançado! Você pensa como um estrategista." |
| 20 | Mestre dos Consórcios | "Perfeito! Você é uma referência em consórcios imobiliários." |

---

## 7. Especificações Técnicas

### 7.1 Stack

| Camada | Tecnologia |
|---|---|
| Front-end | React 18 + Vite |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Animações | Framer Motion (feedback de resposta) |
| Backend / API | Supabase (PostgreSQL + REST API) |
| Hospedagem | Vercel (front-end) |
| Banco de dados | Supabase (free tier) |

### 7.2 Estrutura de Arquivos

```
quiz-confiax/
├── public/
│   └── logo-confiax.svg
├── src/
│   ├── components/
│   │   ├── StartScreen.tsx       # Tela inicial + campo apelido
│   │   ├── QuizScreen.tsx        # Tela da pergunta
│   │   ├── FeedbackCard.tsx      # Card de feedback pós-resposta
│   │   ├── ProgressBar.tsx       # Barra de progresso
│   │   ├── ScoreDisplay.tsx      # Score em tempo real
│   │   ├── ResultScreen.tsx      # Tela de resultado + título
│   │   └── RankingScreen.tsx     # Tela de ranking
│   ├── data/
│   │   └── questions.ts          # Array com as 20 perguntas
│   ├── hooks/
│   │   └── useQuiz.ts            # Lógica central do quiz (estado, navegação)
│   ├── lib/
│   │   └── supabase.ts           # Cliente Supabase
│   ├── services/
│   │   └── ranking.ts            # Funções: salvar score, buscar ranking
│   ├── types/
│   │   └── index.ts              # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── .env.local                    # VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

### 7.3 Schema do Banco de Dados (Supabase)

```sql
-- Tabela de scores do ranking
CREATE TABLE scores (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  apelido     TEXT NOT NULL,
  pontuacao   INTEGER NOT NULL CHECK (pontuacao >= 0 AND pontuacao <= 20),
  titulo      TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Índice para ranking
CREATE INDEX idx_scores_pontuacao ON scores (pontuacao DESC, created_at ASC);

-- Row Level Security: leitura pública, inserção pública
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "leitura publica" ON scores FOR SELECT USING (true);
CREATE POLICY "insercao publica" ON scores FOR INSERT WITH CHECK (true);
```

### 7.4 Variáveis de Ambiente

```env
VITE_SUPABASE_URL=https://<project>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

### 7.5 Serviço de Ranking

```typescript
// src/services/ranking.ts
import { supabase } from '../lib/supabase'

export async function salvarScore(apelido: string, pontuacao: number, titulo: string) {
  return supabase.from('scores').insert({ apelido, pontuacao, titulo })
}

export async function buscarRanking(limit = 10) {
  return supabase
    .from('scores')
    .select('apelido, pontuacao, titulo, created_at')
    .order('pontuacao', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(limit)
}
```

---

## 8. Design e UX

### 8.1 Estilo Geral

- **Estilo:** Minimalista e profissional
- **Tipografia:** Inter ou Geist (sans-serif, legível)
- **Layout:** Card centralizado, fundo neutro (branco ou cinza-50)
- **Espaçamento:** Generoso — sem poluição visual
- **Responsivo:** Mobile-first com breakpoints para tablet e desktop

### 8.2 Paleta de Cores (sugestão — ajustar conforme identidade Confiax)

| Token | Cor | Uso |
|---|---|---|
| `primary` | `#1E40AF` (azul escuro) | Botões principais, destaque |
| `success` | `#16A34A` (verde) | Resposta correta |
| `error` | `#DC2626` (vermelho) | Resposta incorreta |
| `neutral` | `#F9FAFB` (cinza claro) | Fundo da página |
| `text` | `#111827` | Texto principal |

### 8.3 Componentes Visuais

- **Botões V/F:** grandes, com ícone (✅ / ❌), ocupam 100% da largura no mobile
- **Feedback:** card animado que aparece após a resposta com cor verde/vermelho
- **Barra de progresso:** faixa horizontal no topo, preenchimento animado
- **Score:** exibido no canto superior direito durante o quiz
- **Ranking:** tabela limpa com posição, apelido, pontuação e título

---

## 9. Métricas de Sucesso

| Métrica | Meta (primeiros 90 dias) |
|---|---|
| Sessões iniciadas | > 500 |
| Taxa de conclusão do quiz | > 60% |
| Entradas no ranking | > 300 |
| NPS / feedback positivo | > 70% aprovação |

---

## 10. Critérios de Aceite (Definition of Done)

- [ ] 20 perguntas cadastradas em `questions.ts` com afirmação, resposta e explicação
- [ ] Progressão automática respeitando os 3 níveis
- [ ] Feedback exibido após cada resposta (acerto e erro)
- [ ] Explicação da resposta correta exibida sempre
- [ ] Barra de progresso funcional
- [ ] Score atualizado em tempo real
- [ ] Título/perfil final calculado corretamente
- [ ] Score salvo no Supabase ao final do quiz
- [ ] Ranking público carregado do Supabase
- [ ] Layout responsivo testado em mobile (375px) e desktop (1280px)
- [ ] Deploy funcional no Vercel
- [ ] Logo e nome "Confiax" presentes em todas as telas

---

## 11. Fases de Entrega

| Fase | Entregável | Estimativa |
|---|---|---|
| 1 | Setup do projeto (Vite + React + TS + Tailwind) + estrutura de arquivos | 1h |
| 2 | Banco de dados Supabase configurado + serviço de ranking | 1h |
| 3 | Lógica central do quiz (`useQuiz`) + perguntas em JSON | 2h |
| 4 | Componentes de UI: StartScreen, QuizScreen, FeedbackCard | 2h |
| 5 | Componentes de UI: ResultScreen, RankingScreen | 1h |
| 6 | Estilização final + responsividade + identidade Confiax | 2h |
| 7 | Testes manuais + deploy no Vercel | 1h |
| **Total** | | **~10h** |
