module.exports = function hourString (date) {
  switch (date.getHours()) {
    case 7: return '7 a m'
    case 10: return '10:30 a m'
    case 14: return '2 p m'
    case 17: return '17:30 p m'
    default: 'unkown time'
  }
}
