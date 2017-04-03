const Router = require('koa-router')


const router = new Router()

// router.get('/sign-in', require('./signInHandler'))
// router.get('/booked-time', require('./getBookedTimeHandler'))
// router.get('/timetable', require('./getTimetableHandler'))
router.post('/api.ai', require('./apiAiHandler'))


module.exports = router
