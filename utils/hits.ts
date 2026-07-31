let hitsCount = 100

export function getHitsAndIncrement(): number {
  hitsCount += 1
  return hitsCount
}

export function getHits(): number {
  return hitsCount
}
