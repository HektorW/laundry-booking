const cheerio = require('cheerio')
const MonthsTranslations = require('../../constants/MonthsTranslations')
const { getUTCMidnightDate } = require('../../shared/utils/date')


module.exports = async function getBookedTime (html) {
  const $ = cheerio.load(html)

  const date = getDate($)

  if (!date) {
    return null
  }

  const startTime = getStartTime($)
  const sessionIndex = getSessionIndex(startTime)  

  const [hours, minutes] = startTime.split(':')
  date.setHours(hours, minutes)

  return {
    date,
    startTime,
    sessionIndex,
  }
}


const getDate = $ => {
  const dateEl = $($('#dgBokningar td').get(0))
  
  if (dateEl.length === 0) {
    return null
  }

  const [, day, month] = dateEl.text().split(' ')
  const translatedMonth = MonthsTranslations[month]

  const date = new Date()

  if (translatedMonth < date.getMonth()) {
    date.setFullYear(date.getFullYear() + 1)
  }

  date.setDate(day)
  date.setMonth(translatedMonth)

  return getUTCMidnightDate(date)
}


const getStartTime = $ =>
  $($('#dgBokningar td').get(2)).text()


const getSessionIndex = startTime => 
  ['07:00', '10:30', '14:00', '17:30']
    .indexOf(startTime)
