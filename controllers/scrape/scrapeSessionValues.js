const cheerio = require('cheerio')


module.exports = function scrapeAuthValues (html) {
  const $ = cheerio.load(html)

  const viewState = $('#__VIEWSTATE').attr('value')
  const eventValidation = $('#__EVENTVALIDATION').attr('value')

  return { viewState, eventValidation }
}
