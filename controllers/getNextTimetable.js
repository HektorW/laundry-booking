const getStartPage = require('./fetch/getStartPage')
const getNextTimetablePage = require('./fetch/getNextTimetablePage')
const scrapeSessionValues = require('./scrape/scrapeSessionValues')
const scrapeTimetableValues = require('./scrape/scrapeTimetableValues')
const { username, password } = require('../config')


module.exports = async function getNextTimetable (currentAuthSession) {
  let fetchNext = true
  if (!currentAuthSession) {
    const startPageHtml = await getStartPage(username, password)
    currentAuthSession = scrapeSessionValues(startPageHtml)
    fetchNext = false
  }
  
  const timetableHtml = await getNextTimetablePage(currentAuthSession, fetchNext)

  const authSession = scrapeSessionValues(timetableHtml)
  const days = scrapeTimetableValues(timetableHtml)

  return { authSession, days }
}
