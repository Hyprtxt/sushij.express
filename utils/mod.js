export const isSushiOpen = () => {
  const date = new Date()
  const current_time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Phoenix",
  }).replace(":", "")
  const dayOfWeek = date.getDay()
  console.log(current_time, dayOfWeek, "current_time")
  // is not sunday or monday
  if (dayOfWeek > 1) {
    // is 1100 - 1900
    if (current_time > 1059 && current_time < 1900) {
      // not 1430-1630
      if (current_time < 1429 && current_time > 1630) {
        return false
      }
      return true
    }
    return false
  }
  return false
}

export const isSushiOpenPhrase = () => {
  const date = new Date()
  const current_time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Phoenix",
  }).replace(":", "")
  const dayOfWeek = date.getDay()
  console.log(current_time, dayOfWeek, "current_time")
  // is not sunday or monday
  if (dayOfWeek > 1) {
    // is at least 1100
    if (current_time > 1059) {
      // not 1430-1630
      if (current_time < 1429 && current_time > 1630) {
        return "Closed until Dinner"
      }
      return "Now Open"
    }
    if (current_time > 1900) {
      return "We are Closed for the Day"
    }
    return "We are not open yet 🤤"
  }
  return "Not Open Today"
}
