const Router = require('koa-router')

const clientRouter = new Router()

clientRouter.get('/timetable', require('./getTimetable'))
clientRouter.get('/booked-session', require('./getMyBookedTime'))

module.exports = clientRouter
