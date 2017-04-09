const getStartPage = require('./fetch/getStartPage')
const getTimetablePage = require('./fetch/getTimetablePage')
const scrapeSessionValues = require('./scrape/scrapeSessionValues')
const scrapeTimetableValues = require('./scrape/scrapeTimetableValues')
const { username, password } = require('../config')


module.exports = async function getTimetableAtDate (date) {
  const now = new Date()
  const dayDifference = date.getDate() - now.getDate()
  
  if (dayDifference < 0) {
    throw new Error('Can\'t fetch times from previous dates')
  }

  if (dayDifference > 7) {
    throw new Error('Cant\' fetch times more than a week in advance')
  }

  const startPageHtml = await getStartPage(username, password)
  const authSession = scrapeSessionValues(startPageHtml)
  
  const timetableHtml = await getTimetablePage(authSession)
  const timetableValues = scrapeTimetableValues(timetableHtml)

  return timetableValues[dayDifference]
}
