const Koa = require('koa')
const api = require('./api')
const logRequest = require('./middleware/logRequest')


const app = new Koa()

app.use(logRequest)

app.use(api.routes())
app.use(api.allowedMethods())


module.exports = app
