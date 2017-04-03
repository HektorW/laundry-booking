const server = require('./server')
const config = require('./config')
const log = require('./log')(__filename)


log.info({ config }, 'starting laundry-booking app')


server.listen(config.port, () => {
  log.info({ port: config.port }, 'laundry-booking server started')
})
