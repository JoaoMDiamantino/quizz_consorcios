interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round(((current + 1) / total) * 100)

  return (
    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out rounded-full"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={current + 1}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Pergunta ${current + 1} de ${total}`}
      />
    </div>
  )
}
