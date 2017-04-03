const fetchSiteHtml = require('./fetchSiteHtml')
const scrapeSessionValues = require('../scrape/scrapeSessionValues')


module.exports = async function createSession () {
  const html = await fetchSiteHtml()
  return scrapeSessionValues(html)
}
