const fetchSiteHtml = require('./fetchSiteHtml')
const scrapeSessionValues = require('./scrapeSessionValues')


module.exports = async function createSession () {
  const html = await fetchSiteHtml()
  return scrapeSessionValues(html)
}