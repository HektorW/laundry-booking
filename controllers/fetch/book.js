const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')


module.exports = async function getNextTimetablePage (timetableAuthSession, dayIndex, sessionIndex) {
  const form = getForm(timetableAuthSession)

  const inputName = `${dayIndex},${sessionIndex-1},1`
  form.append(inputName, '')

  const resultHtml = await fetchSiteHtml(form)
  return resultHtml
}
