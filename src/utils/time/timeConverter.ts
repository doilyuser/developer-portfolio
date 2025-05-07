interface TimeUnit {
  unit: string
  value: number
}

export function timeConverter(isoTime: string): string {
  const currentTime = Date.now()
  const pastTime = new Date(isoTime).getTime()
  const timeDifference = currentTime - pastTime

  // Define time units in milliseconds
  const TIME_UNITS: TimeUnit[] = [
    { unit: 'year', value: 1000 * 60 * 60 * 24 * 365 },
    { unit: 'month', value: 1000 * 60 * 60 * 24 * 30 },
    { unit: 'day', value: 1000 * 60 * 60 * 24 },
    { unit: 'hour', value: 1000 * 60 * 60 },
    { unit: 'minute', value: 1000 * 60 },
    { unit: 'second', value: 1000 },
  ]

  for (const { unit, value } of TIME_UNITS) {
    const elapsed = Math.floor(timeDifference / value)
    if (elapsed > 0) {
      return `${elapsed} ${unit}${elapsed > 1 ? 's' : ''} ago`
    }
  }

  return 'just now'
}
