import { useCallback, useEffect, useState } from 'react'

type DateInput = string | Date

type ProgressRange = {
  start?: DateInput
  end?: DateInput
}

type UseProgressOptions = {
  grader?: ProgressRange
  ta?: ProgressRange
  refreshIntervalMs?: number
}

function toMillis(d?: DateInput): number | undefined {
  if (!d) return undefined
  return typeof d === 'string' ? new Date(d).getTime() : d.getTime()
}

function clampPercent(n: number) {
  return Math.max(0, Math.min(100, n))
}

function computePercent(startMs?: number, endMs?: number, nowMs = Date.now()) {
  if (!startMs || !endMs || endMs <= startMs) {
    if (startMs && endMs && nowMs >= (endMs ?? 0)) return 100
    return 0
  }
  return clampPercent(((nowMs - startMs) / (endMs - startMs)) * 100)
}

/**
 * useProgress
 * Returns progress percentages for grader and ta (ugta) roles.
 * Accepts optional custom date ranges and a refresh interval.
 */
export default function useProgress(options?: UseProgressOptions) {
  const defaultGrader = { start: '2025-08-18', end: '2025-12-13' }
  const defaultTa = { start: '2025-08-21', end: '2025-12-13' }

  const {
    grader = defaultGrader,
    ta = defaultTa,
    refreshIntervalMs = 60_000,
  } = options || {}

  const [graderProgress, setGraderProgress] = useState<number>(0)
  const [taProgress, setTaProgress] = useState<number>(0)

  const recalc = useCallback(() => {
    const gs = toMillis(grader.start ?? defaultGrader.start)!
    const ge = toMillis(grader.end ?? defaultGrader.end)!
    const ts = toMillis(ta.start ?? defaultTa.start)!
    const te = toMillis(ta.end ?? defaultTa.end)!

    const now = Date.now()
    setGraderProgress(computePercent(gs, ge, now))
    setTaProgress(computePercent(ts, te, now))
  }, [grader.start, grader.end, ta.start, ta.end])

  useEffect(() => {
    // run immediately and then on interval
    recalc()
    const id = setInterval(recalc, refreshIntervalMs)
    return () => clearInterval(id)
  }, [recalc, refreshIntervalMs])

  return {
    graderProgress,
    taProgress,
    // helper exposed for testing or one-off calculations
    computePercent: (start?: DateInput, end?: DateInput) =>
      computePercent(toMillis(start), toMillis(end)),
  }
}
