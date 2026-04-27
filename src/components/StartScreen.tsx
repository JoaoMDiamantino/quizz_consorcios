import { useState } from 'react'
import { motion } from 'framer-motion'

interface StartScreenProps {
  onStart: (apelido: string) => void
  onVerRanking: () => void
}

export function StartScreen({ onStart, onVerRanking }: StartScreenProps) {
  const [apelido, setApelido] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = apelido.trim()
    if (trimmed.length < 2) {
      setError('Digite um apelido com pelo menos 2 caracteres.')
      return
    }
    if (trimmed.length > 30) {
      setError('Apelido deve ter no máximo 30 caracteres.')
      return
    }
    onStart(trimmed)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

        <div className="p-8">
          <div className="flex justify-center mb-8">
            <img src="/logo-confiax.png" alt="Confiax" className="h-20" />
          </div>

          <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-2 leading-tight">
            Quiz Consórcios<br />Imobiliários
          </h1>
          <p className="text-center text-gray-400 text-sm mb-8">
            20 perguntas · Verdadeiro ou Falso · 3 níveis
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="apelido"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Seu apelido para o ranking
            </label>
            <input
              id="apelido"
              type="text"
              value={apelido}
              onChange={e => { setApelido(e.target.value); setError('') }}
              placeholder="Ex: JoãoInvestidor"
              maxLength={30}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900
                         placeholder-gray-400 focus:outline-none focus:border-blue-500
                         transition-colors duration-200 bg-gray-50"
            />
            {error && (
              <p className="text-error text-xs mt-2">{error}</p>
            )}

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-5 w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white
                         font-bold py-4 rounded-xl text-lg shadow-lg
                         hover:from-blue-600 hover:to-blue-500 transition-all duration-200"
            >
              Iniciar Quiz →
            </motion.button>
          </form>

          <button
            onClick={onVerRanking}
            className="mt-4 w-full text-blue-600 font-semibold text-sm py-2 rounded-xl
                       hover:bg-blue-50 transition-colors duration-200"
          >
            🏆 Ver Ranking
          </button>

          <p className="text-center text-gray-400 text-xs mt-4">
            Conteúdo educativo sobre consórcios imobiliários
          </p>
        </div>
      </motion.div>
    </div>
  )
}
