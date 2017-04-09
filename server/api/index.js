const Router = require('koa-router')


const router = new Router()

router.post('/api.ai', require('./api.ai'))


module.exports = router
