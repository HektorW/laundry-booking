const cheerio = require('cheerio')
const MonthsTranslations = require('../../constants/MonthsTranslations')


module.exports = async function getBookedTime (html) {
  const $ = cheerio.load(html)

  const dateEl = $($('#dgBokningar td').get(0))
  const startTimeEl = $($('#dgBokningar td').get(2))
  const endTimeEl = $($('#dgBokningar td').get(4))

  if (dateEl.length === 0) {
    return null
  }

  const [, day, month] = dateEl.text().split(' ')
  const [startHour, startMinute] = startTimeEl.text().split(':')
  const [endHour, endMinute] = endTimeEl.text().split(':')

  const translatedMonth = MonthsTranslations[month]

  const date = new Date()
  date.setDate(day)
  date.setMonth(translatedMonth)

  return {
    startDate: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      parseInt(startHour, 10),
      parseInt(startMinute, 10)
    ),
    endDate: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      parseInt(endHour, 10),
      parseInt(endMinute, 10)
    ),
  }
}
