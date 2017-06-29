const Router = require('koa-router')
// const apiAiRouter = require('./api.ai')
const clientRouter = require('./client')


const router = new Router({
  prefix: '/api',
})

// router.use('/api.ai', apiAiRouter.routes(), apiAiRouter.allowedMethods())
router.use('/client', clientRouter.routes(), clientRouter.allowedMethods())


module.exports = router
