const BookedState = require('../../../../constants/BookedState')
const LaundryTimes = require('../../../../constants/LaundryTimes')
const formatDay = require('../../../../controllers/responseformat/formatDay')
const formatLaundryTimeList = require('../../../../controllers/responseformat/formatLaundryTimeList')
const getTimetableAtDate = require('../../../../controllers/getTimetableAtDate')
const randItem = require('../../../../utils/randItem')


module.exports = async function availableAtDate (requestBody) {
  const date = new Date(
    requestBody.result.parameters.date
  )

  const dateTimetable = await getTimetableAtDate(date)

  const availableAsArray = Object.entries(dateTimetable)
    .filter(([key]) => Object.values(LaundryTimes).includes(key))
    .filter(([,state]) => state === BookedState.Available)
    .map(([key]) => key)
  
  const formattedDay = formatDay(date)

  if (availableAsArray.length === 0) {
    return { speech: `There are no available times available ${formattedDay}.` }
  }

  const formattedLaundryTimes = formatLaundryTimeList(availableAsArray)

  if (availableAsArray.length === 1) {
    return { speech: `There is one available time at ${formattedLaundryTimes} ${formattedDay}.` }
  }

  const responses = [
    { speech: `There are available times at ${formattedLaundryTimes} ${formattedDay}.` },
    { speech: `These are the available times ${formattedDay}. ${formattedLaundryTimes} ${formattedDay}.` },
  ]

  return randItem(responses)
}
