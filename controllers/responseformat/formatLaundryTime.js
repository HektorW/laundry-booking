const LaundryTimes = require('../../constants/LaundryTimes')


module.exports = function formatLaundryTime (laundryTime) {
  switch (laundryTime) {
    case LaundryTimes.Seven: return '7'
    case LaundryTimes.Ten: return '10:30'
    case LaundryTimes.Fourteen: return '14'
    case LaundryTimes.Seventeen: return '17:30'
    default: return laundryTime
  }
}
