import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { buscarRanking } from '../services/ranking'
import type { ScoreRow } from '../services/ranking'

interface RankingScreenProps {
  apelidoAtual: string
  onReiniciar: () => void
}

const MEDAL: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' }

const ROW_STYLE: Record<number, string> = {
  1: 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200',
  2: 'bg-gradient-to-r from-slate-50 to-gray-100 border-slate-200',
  3: 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200',
}

const SCORE_COLOR: Record<number, string> = {
  1: 'text-amber-600',
  2: 'text-slate-500',
  3: 'text-orange-500',
}

export function RankingScreen({ apelidoAtual, onReiniciar }: RankingScreenProps) {
  const [rows, setRows] = useState<ScoreRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    buscarRanking(10)
      .then(data => setRows(data))
      .catch(() => setError('Não foi possível carregar o ranking.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

        <div className="p-6">
          <img src="/logo-confiax.png" alt="Confiax" className="h-16 mx-auto mb-4" />
          <h2 className="text-xl font-extrabold text-center text-gray-900 mb-1">
            🏆 Ranking Top 10
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Maiores pontuações de todos os tempos
          </p>

          {loading && (
            <p className="text-center text-gray-400 py-8">Carregando ranking...</p>
          )}

          {error && (
            <p className="text-center text-error py-4">{error}</p>
          )}

          {!loading && !error && (
            <div className="space-y-2">
              {rows.map((row, i) => {
                const pos = i + 1
                const isMe = row.apelido === apelidoAtual
                const rowStyle = ROW_STYLE[pos] ?? 'bg-gray-50 border-transparent'
                const scoreColor = SCORE_COLOR[pos] ?? 'text-gray-700'
                return (
                  <motion.div
                    key={row.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2
                      ${isMe
                        ? 'bg-blue-50 border-blue-300'
                        : rowStyle
                      }`}
                  >
                    <span className="text-lg w-8 text-center font-bold text-gray-500">
                      {MEDAL[pos] ?? pos}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold truncate text-sm
                        ${isMe ? 'text-blue-700' : pos === 1 ? 'text-amber-700' : 'text-gray-900'}`}>
                        {row.apelido} {isMe && '(você)'}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{row.titulo}</p>
                    </div>
                    <span className={`font-bold text-base ${isMe ? 'text-blue-600' : scoreColor}`}>
                      {row.pontuacao}/20
                    </span>
                  </motion.div>
                )
              })}
            </div>
          )}

          <button
            onClick={onReiniciar}
            className="mt-6 w-full border-2 border-gray-200 text-gray-600 font-semibold
                       py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            Jogar Novamente
          </button>
        </div>
      </motion.div>
    </div>
  )
}
