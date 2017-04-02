const signIn = require('../../scraper/signIn')
const { password, username } = require('../../config')
const log = require('../../log')(__filename)


module.exports = async function signInHandler (ctx) {
  try {
    ctx.body = await signIn(username, password)
  } catch (error) {
    log.error(error)
    ctx.body = error.message
  }
}