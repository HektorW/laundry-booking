const getNextTimetable = require('../../../controllers/getNextTimetable')

module.exports = async function getTimeTable (ctx) {
  const { viewState = null, eventValidation = null } = ctx.query

  const authSession = viewState && eventValidation
    ? { viewState, eventValidation }
    : null

  ctx.body = await getNextTimetable(authSession)
}
