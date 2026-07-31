export const isSushiOpen = (): boolean => {
  const date = new Date()
  const timeStr = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Phoenix",
  }).replace(":", "")
  const current_time = parseInt(timeStr, 10)
  const dayOfWeek = date.getDay()

  if (dayOfWeek > 1) {
    if (dayOfWeek === 6) {
      return false
    }
    if (current_time > 1059 && current_time < 1900) {
      if (current_time > 1429 && current_time < 1630) {
        return false
      }
      return true
    }
    return false
  }
  return false
}

export const isSushiOpenPhrase = (): string => {
  const date = new Date()
  const timeStr = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Phoenix",
  }).replace(":", "")
  const current_time = parseInt(timeStr, 10)
  const dayOfWeek = date.getDay()

  if (dayOfWeek > 1) {
    if (dayOfWeek === 6) {
      return "Not open today"
    }
    if (current_time > 1059 && current_time < 1900) {
      if (current_time > 1429 && current_time < 1630) {
        return "We are closed until dinner"
      }
      return "Now open"
    }
    if (current_time > 1900) {
      return "We are closed for the day"
    } else {
      return "We aren't open yet"
    }
  }
  return "Not open today"
}
