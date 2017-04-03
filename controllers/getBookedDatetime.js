const getStartPage = require('./fetch/getStartPage')
const scrapeBookedValues = require('./scrape/scrapeBookedValues')
const { username, password } = require('../config')


module.exports = async function getBookedDatetime () {
  const startPageHtml = await getStartPage(username, password)
  return scrapeBookedValues(startPageHtml)
}
