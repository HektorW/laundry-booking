const cheerio = require('cheerio')
const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getBookedTime (authSession) {
  const form = getForm(authSession)

  const html = await fetchSiteHtml(form)

  const $ = cheerio.load(html)

  const dateEl = $($('#dgBokningar td').get(0))
  const startTimeEl = $($('#dgBokningar td').get(2))
  const endTimeEl = $($('#dgBokningar td').get(4))

  return {
    date: dateEl.text(),
    start: startTimeEl.text(),
    end: endTimeEl.text(),
  }
}