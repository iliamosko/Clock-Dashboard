
export function pickColor(): string {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
  const idx = Math.floor(Math.random() * colors.length)
  return colors[idx]
}


export function determineTimeOfDay(): number {
  const now = new Date()
  const hours = now.getHours()
  return hours
}