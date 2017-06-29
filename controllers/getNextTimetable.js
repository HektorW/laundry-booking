const getStartPage = require('./fetch/getStartPage')
const getTimetablePage = require('./fetch/getTimetablePage')
const getNextTimetablePage = require('./fetch/getNextTimetablePage')
const scrapeSessionValues = require('./scrape/scrapeSessionValues')
const scrapeTimetableValues = require('./scrape/scrapeTimetableValues')
const { username, password } = require('../config')


module.exports = async function getNextTimetable (index = 0) {
  const startPageHtml = await getStartPage(username, password)
  const authSession = scrapeSessionValues(startPageHtml)
  
  let timetableHtml = await getTimetablePage(authSession)
  const fetchPrevious = index < 0

  while (index !== 0) {
    const timetableSession = scrapeSessionValues(timetableHtml)
    timetableHtml = await getNextTimetablePage(timetableSession, fetchPrevious)
    index = fetchPrevious
      ? index + 1
      : index - 1
  }

  const timetableValues = scrapeTimetableValues(timetableHtml)

  return timetableValues
}
