export const sortPrices = (prices: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
  return prices.sort((a, b) => (order === 'asc' ? a - b : b - a))
}

export const sortNames = (names: string[], order: 'asc' | 'desc' = 'asc'): string[] => {
  return [...names].sort((a, b) => (order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)))
}
