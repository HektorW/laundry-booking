const formatLaundryTime = require('./formatLaundryTime')


module.exports = function formatLaundryTimeList (laundryTimes) {
  if (laundryTimes.length === 0) {
    throw new Error('No laundry times in list')
  }

  const formattedLaundryTimes = laundryTimes.map(formatLaundryTime)

  if (laundryTimes.length === 1) {
    return formattedLaundryTimes[0]
  }

  return `${formattedLaundryTimes.slice(0, -1).join(', ')} and ${formattedLaundryTimes[formattedLaundryTimes.length - 1]}`
}
