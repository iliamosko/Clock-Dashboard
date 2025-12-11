import React, { useEffect, useRef } from 'react'

const AnalogClock: React.FC<{ size?: number }> = ({ size = 300 }) => {
  const hourRef = useRef<SVGLineElement | null>(null)
  const minuteRef = useRef<SVGLineElement | null>(null)
  const secondRef = useRef<SVGLineElement | null>(null)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours() % 12
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()
      const milliseconds = now.getMilliseconds()

      const secondAngle = seconds * 6 + milliseconds * 0.006
      const minuteAngle = minutes * 6 + seconds * 0.1
      const hourAngle = hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)

      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hourAngle}deg)`
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minuteAngle}deg)`
      }
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondAngle}deg)`
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="analog-wrapper" style={{ width: size, maxWidth: '100%' }}>
      <svg viewBox="0 0 200 200" className="analog-clock" role="img" aria-label="Analog clock">
        <circle cx="100" cy="100" r="95" className="clock-face" />

        {/* ticks and numeric labels */}
        {[...Array(12)].map((_, i) => {
          const angleDeg = i * 30 - 90
          const angle = (angleDeg * Math.PI) / 180
          const x1 = 100 + 85 * Math.cos(angle)
          const y1 = 100 + 85 * Math.sin(angle)
          const x2 = 100 + 95 * Math.cos(angle)
          const y2 = 100 + 95 * Math.sin(angle)
          const textX = 100 + 72 * Math.cos(angle)
          const textY = 100 + 72 * Math.sin(angle)
          const number = i === 0 ? 12 : i

          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#222"
                strokeWidth={i % 3 === 0 ? 3 : 1.6}
                strokeLinecap="round"
              />
              <text
                x={textX}
                y={textY}
                fill="#222"
                fontSize="18"
                fontWeight={700}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {number}
              </text>
            </g>
          )
        })}

        {/* hour hand */}
        <line
          ref={hourRef}
          x1="100"
          y1="100"
          x2="150"
          y2="100"
          className="hand hour"
          stroke="#222"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ transformOrigin: '100px 100px' }}
        />

        {/* minute hand */}
        <line
          ref={minuteRef}
          x1="100"
          y1="100"
          x2="170"
          y2="100"
          className="hand minute"
          stroke="#222"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ transformOrigin: '100px 100px' }}
        />

        {/* second hand */}
        <line
          ref={secondRef}
          x1="100"
          y1="100"
          x2="180"
          y2="100"
          className="hand second"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transformOrigin: '100px 100px' }}
        />

        <circle cx="100" cy="100" r="5" fill="#222" />
      </svg>
    </div>
  )
}

export default AnalogClock
