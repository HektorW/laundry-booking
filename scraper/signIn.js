const createSession = require('./createSession')
const fetchSiteHtml = require('./fetchSiteHtml')
const getForm = require('./getForm')
const scrapeSessionValues = require('./scrapeSessionValues')


module.exports = async function signIn (username, password) {
  const session = await createSession()

  const form = getForm(session, session)
  
  form.append('tbUsername', username)
  form.append('tbPassword', password)
  form.append('btOK', '') // Value not important but needs to exist

  const authHtml = await fetchSiteHtml(form)
  const authSession = scrapeSessionValues(authHtml)
  
  return authSession
}
