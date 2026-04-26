interface ScoreDisplayProps {
  score: number
  total: number
}

export function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  return (
    <div className="flex items-center gap-1 text-sm font-bold">
      <span className="text-cyan-300">{score}</span>
      <span className="text-white/40">/</span>
      <span className="text-white/70">{total}</span>
    </div>
  )
}
