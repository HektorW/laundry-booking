const getTimetable = require('../../scraper/getTimetable')
const signIn = require('../../scraper/signIn')
const { password, username } = require('../../config')
const log = require('../../log')(__filename)


module.exports = async function getTimetableHandler (ctx) {
  try {
    const authSession = await signIn(username, password)
    ctx.body = await getTimetable(authSession)
  } catch (error) {
    log.error(error)
    ctx.body = error.message
  }
}