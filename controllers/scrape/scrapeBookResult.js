const cheerio = require('cheerio')

module.exports = function scrapeBookResult (html) {
  const $ = cheerio.load(html)

  const errorEl = $('#lbMaskingruppRubrik')
  if (errorEl.length !== 0) {
    const errorText = 'Inga fler bokningar möjliga.!'

    if (errorEl.text() === errorText) {
      return {
        error: true,
        errorText,
      }
    }
  }

  return {
    success: true,
  }
}
