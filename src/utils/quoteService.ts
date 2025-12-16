import { QUOTES_365 } from '../data/quotes365'
import type { Quote } from '../data/quotes365'

export function getQuoteByIndex(i: number): Quote {
  const idx = ((i % QUOTES_365.length) + QUOTES_365.length) % QUOTES_365.length
  return QUOTES_365[idx]
}

export function getQuoteOfDay(date = new Date()): Quote {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  const dayOfYear = Math.floor(diff / oneDay)
  return getQuoteByIndex(dayOfYear)
}

export function getRandomQuote(category?: Quote['category']): Quote {
  const pool = category ? QUOTES_365.filter((q) => q.category === category) : QUOTES_365
  const idx = Math.floor(Math.random() * pool.length)
  return pool[idx]
}
