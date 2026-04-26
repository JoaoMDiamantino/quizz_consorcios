export type Nivel = 'iniciante' | 'intermediario' | 'avancado'

export interface Question {
  id: number
  nivel: Nivel
  afirmacao: string
  resposta: boolean
  explicacao: string
}

export type Screen = 'start' | 'quiz' | 'result' | 'ranking'

export type Titulo =
  | 'Curioso Imobiliário'
  | 'Investidor em Formação'
  | 'Conhecedor de Consórcios'
  | 'Especialista Confiax'
  | 'Mestre dos Consórcios'

export interface QuizState {
  currentIndex: number
  score: number
  answers: boolean[]
  isAnswered: boolean
  isFinished: boolean
}
