const log = require('../../log')(__filename)

module.exports = async function logRequest (ctx, next) {
  const { path, method, query } = ctx
  const start = Date.now()
  await next()
  const responseTime = Date.now() - start
  const { status } = ctx
  log.trace({ path, method, query, status, responseTime }, 'request')
}
