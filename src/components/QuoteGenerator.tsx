import React, { useEffect, useState } from 'react'
import { getRandomQuote, getQuoteOfDay } from '../utils/quoteService'

const QuoteGenerator: React.FC<{
  category?: 'actor' | 'scientist' | 'racecar' | 'athlete'
}> = ({ category }) => {
  const [quote, setQuote] = useState<string>(() => getQuoteOfDay().text)

  useEffect(() => {
    // set an initial quote (optionally by category)
    setQuote(getRandomQuote(category)?.text ?? getQuoteOfDay().text)

    const id = setInterval(() => {
      const q = getRandomQuote(category)
      setQuote(q.text)
    }, 5000)

    return () => clearInterval(id)
  }, [category])

  return (
    <div className='placeholder'>
      <p>{quote}</p>
    </div>
  )
}

export default QuoteGenerator
