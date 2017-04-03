const fetch = require('node-fetch')
const { baseUrl } = require('../../config')


module.exports = async function fetchSiteHtml (form = null) {
  const requestOptions = {
    method: form === null
      ? 'GET'
      : 'POST',
    body: form,
  }

  const response = await fetch(
    baseUrl,
    requestOptions
  )

  const { status } = response
  if (status < 200 || status >= 300) {
    const error = new Error(response.statusText)
    error.status = status
    error.data = await response.text()
    throw error
  }

  const content = await response.text()
  return content
}
