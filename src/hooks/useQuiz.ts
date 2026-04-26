import { useState, useCallback } from 'react'
import { questions } from '../data/questions'
import type { QuizState, Titulo } from '../types'

function calcularTitulo(score: number): Titulo {
  if (score === 20) return 'Mestre dos Consórcios'
  if (score >= 16)  return 'Especialista Confiax'
  if (score >= 11)  return 'Conhecedor de Consórcios'
  if (score >= 6)   return 'Investidor em Formação'
  return 'Curioso Imobiliário'
}

const INITIAL_STATE: QuizState = {
  currentIndex: 0,
  score: 0,
  answers: [],
  isAnswered: false,
  isFinished: false,
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>(INITIAL_STATE)

  const currentQuestion = questions[state.currentIndex]
  const isLastQuestion = state.currentIndex === questions.length - 1
  const titulo = calcularTitulo(state.score)
  const lastAnswerCorrect =
    state.isAnswered &&
    state.answers[state.currentIndex] === currentQuestion?.resposta

  const responder = useCallback(
    (resposta: boolean) => {
      if (state.isAnswered) return
      const correct = resposta === questions[state.currentIndex].resposta
      setState(prev => ({
        ...prev,
        answers: [...prev.answers, resposta],
        score: correct ? prev.score + 1 : prev.score,
        isAnswered: true,
      }))
    },
    [state.isAnswered, state.currentIndex]
  )

  const avancar = useCallback(() => {
    if (!state.isAnswered) return
    if (isLastQuestion) {
      setState(prev => ({ ...prev, isFinished: true }))
    } else {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        isAnswered: false,
      }))
    }
  }, [state.isAnswered, isLastQuestion])

  const reiniciar = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  return {
    currentQuestion,
    currentIndex: state.currentIndex,
    score: state.score,
    isAnswered: state.isAnswered,
    isFinished: state.isFinished,
    lastAnswerCorrect,
    titulo,
    totalQuestions: questions.length,
    responder,
    avancar,
    reiniciar,
  }
}
