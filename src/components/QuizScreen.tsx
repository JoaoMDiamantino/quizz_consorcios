import { motion } from 'framer-motion'
import type { Question, Nivel } from '../types'
import { ProgressBar } from './ProgressBar'
import { ScoreDisplay } from './ScoreDisplay'
import { FeedbackCard } from './FeedbackCard'

const NIVEL_LABEL: Record<Nivel, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

const NIVEL_COLOR: Record<Nivel, string> = {
  iniciante: 'bg-blue-100 text-blue-700',
  intermediario: 'bg-amber-100 text-amber-700',
  avancado: 'bg-red-100 text-red-700',
}

interface QuizScreenProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  score: number
  isAnswered: boolean
  isCorrect: boolean
  isLast: boolean
  onAnswer: (resposta: boolean) => void
  onNext: () => void
}

export function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  score,
  isAnswered,
  isCorrect,
  isLast,
  onAnswer,
  onNext,
}: QuizScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col">
      <div className="w-full max-w-lg mx-auto px-4 pt-5 pb-2">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <ProgressBar current={currentIndex} total={totalQuestions} />
          </div>
          <ScoreDisplay score={score} total={totalQuestions} />
        </div>
        <p className="text-xs text-white/40 mt-1.5">
          Pergunta {currentIndex + 1} de {totalQuestions}
        </p>
      </div>

      <div className="flex-1 flex items-start justify-center px-4 pb-6 pt-2">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${NIVEL_COLOR[question.nivel]}`}
            >
              {NIVEL_LABEL[question.nivel]}
            </span>
            <img src="/logo-confiax.png" alt="Confiax" className="h-9" />
          </div>

          <p className="text-gray-900 font-semibold text-lg leading-snug mb-6">
            {question.afirmacao}
          </p>

          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onAnswer(true)}
              disabled={isAnswered}
              className={`py-4 rounded-2xl font-bold text-lg transition-all duration-200
                ${isAnswered
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md hover:shadow-lg hover:from-emerald-400 hover:to-green-500'
                }`}
            >
              ✅ Verdadeiro
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => onAnswer(false)}
              disabled={isAnswered}
              className={`py-4 rounded-2xl font-bold text-lg transition-all duration-200
                ${isAnswered
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md hover:shadow-lg hover:from-red-400 hover:to-rose-500'
                }`}
            >
              ❌ Falso
            </motion.button>
          </div>

          <FeedbackCard
            isVisible={isAnswered}
            isCorrect={isCorrect}
            explicacao={question.explicacao}
            onNext={onNext}
            isLast={isLast}
          />
        </motion.div>
      </div>
    </div>
  )
}
