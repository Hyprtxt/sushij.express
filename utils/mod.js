import { format } from "$std/datetime/mod.ts"
import { time } from "time"

export const isSushiOpen = () => {
  console.log("Time now Phoenix: ", time().tz("America/Phoenix").t)
  const date = new Date(time().tz("America/Phoenix").t)
  const time = format(date, "HHmm")
  // is not sunday or monday
  if (date.getDay() > 1) {
    // is 1100 - 1900
    if (time > 1059 && time < 1900) {
      // not 1430-1630
      if (time < 1429 && time > 1630) {
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
  const time = format(date, "HHmm")
  // is not sunday or monday
  if (date.getDay() > 1) {
    // is 1100 - 1900
    if (time > 1059 && time < 1900) {
      // not 1430-1630
      if (time < 1429 && time > 1630) {
        return "Closed until Dinner"
      }
      return "Now Open"
    }
    return "We are Closed"
  }
  return "Not Open Today"
}
