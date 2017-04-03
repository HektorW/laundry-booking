const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getTimetable (authSession) {
  const form = getForm(authSession)

  form.append('btBook', 'Boka')

  const timetablePageHtml = await fetchSiteHtml(form)
  return timetablePageHtml
}
