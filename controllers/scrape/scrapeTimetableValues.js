const cheerio = require('cheerio')
const MonthsTranslations = require('../../constants/MonthsTranslations')


module.exports = function scrapeTimetableValues (html) {
  const $ = cheerio.load(html)

  const month = $('#lbCalendarDatum').text()
  const startDay = parseInt($('#lbCalendarDag0').text().replace(/\D+/, ''), 10)

  const $table = $($('#pnCalendar table').get(1))

  const dayStates = [
    getDayState($table, 1),
    getDayState($table, 2),
    getDayState($table, 3),
    getDayState($table, 4),
    getDayState($table, 5),
    getDayState($table, 6),
    getDayState($table, 7),
  ]

  const startDate = new Date()
  startDate.setUTCHours(0)
  startDate.setMinutes(0)
  startDate.setSeconds(0)
  startDate.setMilliseconds(0)
  startDate.setMonth(MonthsTranslations[month])
  startDate.setDate(startDay)

  return dayStates.map((sessions, index) => {
    const date = new Date(startDate.getTime())
    date.setDate(startDay + index)

    return {
      date,
      sessions,
    }
  })
}


const getDayState = ($table, dayIndex) => {
  const $td = getElAtIndex(
    getElAtIndex($table, 'tr', 1),
    '> td',
    dayIndex
  )

  return [
    { isBooked: getElAtIndex($td, 'input', 1).attr('disabled') === 'disabled' },
    { isBooked: getElAtIndex($td, 'input', 2).attr('disabled') === 'disabled' },
    { isBooked: getElAtIndex($td, 'input', 3).attr('disabled') === 'disabled' },
    { isBooked: getElAtIndex($td, 'input', 4).attr('disabled') === 'disabled' },
  ]
}


const getElAtIndex = ($el, selector, index) =>
  $el.find(selector).slice(index, index + 1)
