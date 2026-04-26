import { supabase } from '../lib/supabase'

export interface ScoreRow {
  id: string
  apelido: string
  pontuacao: number
  titulo: string
  created_at: string
}

export async function salvarScore(
  apelido: string,
  pontuacao: number,
  titulo: string
): Promise<void> {
  const { error } = await supabase
    .from('scores')
    .insert({ apelido, pontuacao, titulo })
  if (error) throw error
}

export async function buscarRanking(limit = 10): Promise<ScoreRow[]> {
  const { data, error } = await supabase
    .from('scores')
    .select('id, apelido, pontuacao, titulo, created_at')
    .order('pontuacao', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(limit)
  if (error) throw error
  return data ?? []
}
