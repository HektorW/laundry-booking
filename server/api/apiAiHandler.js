const intents = require('./intents')
const log = require('../../log')(__filename)


module.exports = async function apiAiHandler (ctx) {
  const { body } = ctx.request
  const { intentName } = body.result.metadata

  log.trace({ body }, 'apiAiHandler:Request')
  log.debug({ intentName }, 'apiAiHandler:Request')

  const intentHandler = intents[intentName]
  if (!intentHandler) {
    log.debug({ intentName }, 'apiAiHandler:Rejecting due to invalid intentName')
    ctx.body = {
      speech: `There is no intent with the name ${intentName}`,
    }
    return
  }

  ctx.body = await intentHandler(body)
}
