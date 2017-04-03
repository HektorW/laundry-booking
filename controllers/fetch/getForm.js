const FormData = require('form-data')


module.exports = function getForm (session) {
  const form = new FormData()

  form.append('__VIEWSTATE', session.viewState)
  form.append('__EVENTVALIDATION', session.eventValidation)

  return form
}