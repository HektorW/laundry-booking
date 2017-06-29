const Router = require('koa-router')

const clientRouter = new Router()

clientRouter.get('/timetable', require('./getTimetable'))

module.exports = clientRouter
