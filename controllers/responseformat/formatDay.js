const WeekDays = require('../../constants/WeekDays')


module.exports = function formatDay (date) {
  const now = new Date()
  const dayDifference = date.getDate() - now.getDate()

  if (dayDifference < 0) {
    return ''
  }

  if (dayDifference === 0) {
    return 'today'
  }

  if (dayDifference === 1) {
    return 'tomorrow'
  }

  return `on ${WeekDays[date.getDay()]}`
}
