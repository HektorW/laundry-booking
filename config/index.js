const { env } = process

if (env.NODE_ENV === 'development') require('dotenv').config()

module.exports = {
  baseUrl: env.BASE_URL || null,
  password: env.PASSWORD || null,
  port: env.PORT || 3002,
  username: env.USERNAME || null,
}