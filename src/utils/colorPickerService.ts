
export function pickColor(): string {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
  const idx = Math.floor(Math.random() * colors.length)
  return colors[idx]
}


function determineHourOfDay(): number {
  const now = new Date()
  const hours = now.getHours()
  return hours
}


export function determineDimColor(): string {
  const hour = determineHourOfDay()
  if (hour >= 7 && hour < 19) {
    return "lightyellow"
  } else {
    return "darkblue"
  }
}