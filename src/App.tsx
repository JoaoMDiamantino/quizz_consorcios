import { useState, useEffect } from 'react'
import type { Screen } from './types'
import { useQuiz } from './hooks/useQuiz'
import { StartScreen }   from './components/StartScreen'
import { QuizScreen }    from './components/QuizScreen'
import { ResultScreen }  from './components/ResultScreen'
import { RankingScreen } from './components/RankingScreen'

export default function App() {
  const [screen, setScreen]   = useState<Screen>('start')
  const [apelido, setApelido] = useState('')
  const quiz = useQuiz()

  useEffect(() => {
    if (quiz.isFinished && screen === 'quiz') {
      setScreen('result')
    }
  }, [quiz.isFinished, screen])

  function handleStart(nick: string) {
    setApelido(nick)
    quiz.reiniciar()
    setScreen('quiz')
  }

  return (
    <>
      {screen === 'start' && (
        <StartScreen onStart={handleStart} onVerRanking={() => setScreen('ranking')} />
      )}

      {screen === 'quiz' && quiz.currentQuestion && (
        <QuizScreen
          question={quiz.currentQuestion}
          currentIndex={quiz.currentIndex}
          totalQuestions={quiz.totalQuestions}
          score={quiz.score}
          isAnswered={quiz.isAnswered}
          isCorrect={quiz.lastAnswerCorrect}
          isLast={quiz.currentIndex === quiz.totalQuestions - 1}
          onAnswer={quiz.responder}
          onNext={quiz.avancar}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          apelido={apelido}
          score={quiz.score}
          total={quiz.totalQuestions}
          titulo={quiz.titulo}
          onVerRanking={() => setScreen('ranking')}
          onReiniciar={() => { quiz.reiniciar(); setScreen('start') }}
        />
      )}

      {screen === 'ranking' && (
        <RankingScreen
          apelidoAtual={apelido}
          onReiniciar={() => { quiz.reiniciar(); setScreen('start') }}
        />
      )}
    </>
  )
}
