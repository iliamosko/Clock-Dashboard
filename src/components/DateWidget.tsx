import React from 'react'

const DateWidget: React.FC = () => {
  const now = new Date()

  const dayName = now.toLocaleDateString(undefined, { weekday: 'long' })
  const monthName = now.toLocaleDateString(undefined, { month: 'long' })
  const dayNumber = now.getDate()
  const year = now.getFullYear()

  return (
    <div className="date-widget" role="region" aria-label="Current date">
      <div className="day-name">{dayName}</div>
      <div className="date-large">
        <span className="day-num">{dayNumber}</span>
        <span className="month-year">{monthName} {year}</span>
      </div>
    </div>
  )
}

export default DateWidget
