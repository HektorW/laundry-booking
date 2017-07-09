const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getNextTimetablePage (timetableSession, fetchNext = false) {
  const form = getForm(timetableSession)

  if (fetchNext) {
    form.append('btCalendarNext', '>>')
  } else {
    form.append('btBook', 'Boka')
  }

  const timetablePageHtml = await fetchSiteHtml(form)
  return timetablePageHtml
}
