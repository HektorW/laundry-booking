const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getNextTimetablePage (authSession) {
  const form = getForm(authSession)

  form.append('dgBokningar:_ctl2:_ctl0', 'Avboka')

  const resultHtml = await fetchSiteHtml(form)
  return resultHtml
}
