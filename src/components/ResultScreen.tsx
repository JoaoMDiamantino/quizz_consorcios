import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { Titulo } from '../types'
import { salvarScore } from '../services/ranking'

interface ResultScreenProps {
  apelido: string
  email: string
  score: number
  total: number
  titulo: Titulo
  onVerRanking: () => void
  onReiniciar: () => void
}

const TITULO_DESCRICAO: Record<Titulo, string> = {
  'Curioso Imobiliário':      'Você está começando a jornada. Explore mais sobre consórcios!',
  'Investidor em Formação':   'Boa base! Com mais estudo, você chegará longe.',
  'Conhecedor de Consórcios': 'Você já domina os fundamentos. Impressionante!',
  'Especialista Confiax':     'Conhecimento avançado! Você pensa como um estrategista.',
  'Mestre dos Consórcios':    'Perfeito! Você é uma referência em consórcios imobiliários.',
}

function getRingColor(score: number, total: number): string {
  if (score === total) return '#F59E0B'
  if (score >= 16) return '#3B82F6'
  if (score >= 11) return '#6366F1'
  return '#64748B'
}

export function ResultScreen({
  apelido,
  email,
  score,
  total,
  titulo,
  onVerRanking,
  onReiniciar,
}: ResultScreenProps) {
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    salvarScore(apelido, score, titulo, email)
      .then(() => { if (!cancelled) setSaved(true) })
      .catch(() => { if (!cancelled) setError('Não foi possível salvar sua pontuação.') })
    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pct = Math.round((score / total) * 100)
  const r = 50
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - score / total)
  const ringColor = getRingColor(score, total)
  const emoji = score === total ? '🏆' : score >= 16 ? '🥇' : score >= 11 ? '🎯' : '📚'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

        <div className="p-8 text-center">
          <img src="/logo-confiax.png" alt="Confiax" className="h-16 mx-auto mb-6" />

          <div className="text-4xl mb-4">{emoji}</div>

          <h2 className="text-xl font-extrabold text-gray-900 mb-1">{titulo}</h2>
          <p className="text-gray-400 text-sm mb-6">{TITULO_DESCRICAO[titulo]}</p>

          <div className="relative inline-flex items-center justify-center mb-4">
            <svg viewBox="0 0 120 120" width="136" height="136" className="-rotate-90">
              <circle
                cx="60" cy="60" r={r}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="10"
              />
              <motion.circle
                cx="60" cy="60" r={r}
                fill="none"
                stroke={ringColor}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-gray-900">{score}</span>
              <span className="text-xs text-gray-400 font-medium">de {total}</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-6 font-medium">{pct}% de acerto</p>

          {error && (
            <p className="text-error text-xs mb-4">{error}</p>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={onVerRanking}
              disabled={!saved && !error}
              className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold
                         py-3 rounded-xl hover:from-blue-600 hover:to-blue-500 transition-all
                         duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saved ? 'Ver Ranking Completo' : error ? 'Ver Ranking Completo' : 'Salvando...'}
            </button>

            <button
              onClick={onReiniciar}
              className="w-full border-2 border-gray-200 text-gray-600 font-semibold
                         py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
