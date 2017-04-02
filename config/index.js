const { env } = process

module.exports = {
  baseUrl: env.BASE_URL,
  password: env.PASSWORD,
  port: env.PORT || 3000,
  username: env.USERNAME,
}