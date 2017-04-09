const getBookedDatetime = require('../../../../controllers/getBookedDatetime')
const dayString = require('../../../../controllers/dateformat/dayString')


module.exports = async function getBookedIntent () {
  const bookedDatetime = await getBookedDatetime()

  if (bookedDatetime === null) {
    return {
      speech: 'You dont have any booked time',
    }
  }

  return {
    speech: dayString(bookedDatetime.startDate),
  }
}
