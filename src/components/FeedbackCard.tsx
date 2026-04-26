import { motion, AnimatePresence } from 'framer-motion'

interface FeedbackCardProps {
  isVisible: boolean
  isCorrect: boolean
  explicacao: string
  onNext: () => void
  isLast: boolean
}

export function FeedbackCard({
  isVisible,
  isCorrect,
  explicacao,
  onNext,
  isLast,
}: FeedbackCardProps) {
  const bgClass = isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
  const textClass = isCorrect ? 'text-emerald-700' : 'text-red-700'
  const label = isCorrect ? '✅ Correto!' : '❌ Incorreto!'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="feedback"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`mt-4 p-4 rounded-2xl border-2 ${bgClass}`}
        >
          <p className={`font-bold text-base mb-2 ${textClass}`}>{label}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{explicacao}</p>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="mt-4 w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white
                       font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-blue-500
                       transition-all duration-200 shadow-md"
          >
            {isLast ? 'Ver Resultado 🏆' : 'Próxima Pergunta →'}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
