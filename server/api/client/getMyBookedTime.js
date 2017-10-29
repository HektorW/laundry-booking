const getBookedDatetime = require('../../../controllers/getBookedDatetime')

module.exports = async function getTimeTable (ctx) {
  ctx.body = await getBookedDatetime()
}
