import { format } from "$std/datetime/mod.ts"
import { time } from "time"

export const isSushiOpen = () => {
  const now = time().tz("America/Phoenix").t
  const date = new Date(now)
  const current_time = format(date, "HHmm")
  // is not sunday or monday
  if (date.getDay() > 1) {
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
  const now = time().tz("America/Phoenix").t
  const date = new Date(now)
  const current_time = format(date, "HHmm")
  // is not sunday or monday
  if (date.getDay() > 1) {
    // is 1100 - 1900
    if (current_time > 1059 && current_time < 1900) {
      // not 1430-1630
      if (current_time < 1429 && current_time > 1630) {
        return "Closed until Dinner"
      }
      return "Now Open"
    }
    return "We are Closed"
  }
  return "Not Open Today"
}
