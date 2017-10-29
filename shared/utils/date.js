function getUTCMidnightDate (date = new Date()) {
  const utcMidnightDate = new Date(date.getTime())

  utcMidnightDate.setUTCHours(0)
  utcMidnightDate.setMinutes(0)
  utcMidnightDate.setSeconds(0)
  utcMidnightDate.setMilliseconds(0)

  return utcMidnightDate
}


const isSameDay = (dateA, dateB) =>
  getUTCMidnightDate(dateA).getTime() === getUTCMidnightDate(dateB).getTime()


const DAYS_MS = 1000 * 60 * 60 * 24

const nextDay = (date, step = 1) =>
  new Date(date.getTime() + (DAYS_MS * step))


module.exports = {
  getUTCMidnightDate,
  isSameDay,
  DAYS_MS,
  nextDay,
}
