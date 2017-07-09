export function getUTCMidnightDate (date = new Date()) {
  const utcMidnightDate = new Date(date.getTime())

  utcMidnightDate.setUTCHours(0)
  utcMidnightDate.setMinutes(0)
  utcMidnightDate.setSeconds(0)
  utcMidnightDate.setMilliseconds(0)

  return utcMidnightDate
}


export const isSameDay = (dateA, dateB) =>
  getUTCMidnightDate(dateA).getTime() === getUTCMidnightDate(dateB).getTime()


export const DAYS_MS = 1000 * 60 * 60 * 24
export const nextDay = (date, step = 1) =>
  new Date(date.getTime() + (DAYS_MS * step))
