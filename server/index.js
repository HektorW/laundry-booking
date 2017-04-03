const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const api = require('./api')


const app = new Koa()

app.use(bodyParser())

app.use(api.routes())
app.use(api.allowedMethods())


module.exports = app
