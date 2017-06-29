const getNextTimetable = require('../../../controllers/getNextTimetable')

module.exports = async function getTimeTable (ctx) {
  const { index } = ctx.query

  const numberIndex = parseInt(index, 10) || 0

  ctx.body = await getNextTimetable(numberIndex)
}
