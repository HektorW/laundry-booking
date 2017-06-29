const cheerio = require('cheerio')
const BookedState = require('../../constants/BookedState')
const LaundryTimes = require('../../constants/LaundryTimes')
const MonthsTranslations = require('../../constants/MonthsTranslations')


module.exports = function scrapeTimetableValues (html) {
  const $ = cheerio.load(html)

  const month = $('#lbCalendarDatum').text()
  const startDay = parseInt($('#lbCalendarDag0').text().replace(/\D+/, ''), 10)

  const $table = $($('#pnCalendar table').get(1))

  const dayStates = [
    getDayState($table, 0),
    getDayState($table, 1),
    getDayState($table, 2),
    getDayState($table, 3),
    getDayState($table, 4),
    getDayState($table, 5),
    getDayState($table, 6),
  ]

  const startDate = new Date()
  startDate.setUTCHours(0)
  startDate.setMinutes(0)
  startDate.setSeconds(0)
  startDate.setMilliseconds(0)
  startDate.setMonth(MonthsTranslations[month])
  startDate.setDate(startDay)

  return dayStates.map((dayState, index) => {
    const date = new Date(startDate.getTime())
    date.setDate(startDay + index)

    return {
      date,
      [LaundryTimes.Seven]: dayState[0] ? BookedState.Available : BookedState.Booked,
      [LaundryTimes.Ten]: dayState[1] ? BookedState.Available : BookedState.Booked,
      [LaundryTimes.Fourteen]: dayState[2] ? BookedState.Available : BookedState.Booked,
      [LaundryTimes.Seventeen]: dayState[3] ? BookedState.Available : BookedState.Booked,
    }
  })
}


const getDayState = ($table, dayIndex) => {
  const $td = getElIndex(
    getElIndex($table, 'tr', 1), '> td', dayIndex + 1
  )

  return [
    getElIndex($td, 'input', 1).attr('disabled') !== 'disabled',
    getElIndex($td, 'input', 2).attr('disabled') !== 'disabled',
    getElIndex($td, 'input', 3).attr('disabled') !== 'disabled',
    getElIndex($td, 'input', 4).attr('disabled') !== 'disabled',
  ]
}


const getElIndex = ($el, selector, index) =>
  $el.find(selector).slice(index, index + 1)
