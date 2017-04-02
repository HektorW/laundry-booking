const getBookedTime = require('../../scraper/getBookedTime')
const signIn = require('../../scraper/signIn')
const { password, username } = require('../../config')
const log = require('../../log')(__filename)


module.exports = async function getBookedTimeHandler (ctx) {
  try {
    const authSession = await signIn(username, password)
    ctx.body = await getBookedTime(authSession)
  } catch (error) {
    log.error(error)
    ctx.body = error.message
  }
}