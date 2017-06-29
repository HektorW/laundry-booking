const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getNextTimetablePage (timetableSession, previous = false) {
  const form = getForm(timetableSession)

  if (previous === true) {
    form.append('btCalendarPrevious', '<<')
  } else {
    form.append('btCalendarNext', '>>')
  }

  const timetablePageHtml = await fetchSiteHtml(form)
  return timetablePageHtml
}
