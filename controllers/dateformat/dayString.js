const hourString = require('./hourString')
const WeekDays = require('../../constants/WeekDays')


module.exports = function dayString (date) {
  const today = new Date()

  const dayDifference = date.getDate() - today.getDate()

  if (dayDifference < 0) {
    return 'You date has already been'
  }

  const time = hourString(date)
  if (dayDifference === 0) {
    return `You have laundry today at ${time}`
  }

  if (dayDifference === 1) {
    return `You have laundry tomorrow at ${time}`
  }

  return `You have laundry on ${WeekDays[date.getDay()]} at ${time}`
}


