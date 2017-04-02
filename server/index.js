const Koa = require('koa')
const api = require('./api')


const app = new Koa()

app.use(api.routes())
app.use(api.allowedMethods())


module.exports = app
