module.exports = function f () {
  const $ = cheerio.load(html)

  // const $table = $($('#pnCalendar table').get(1))

  // return [
  //   getDayState($table, 0),
  //   getDayState($table, 1),
  //   getDayState($table, 2),
  //   getDayState($table, 3),
  //   getDayState($table, 4),
  //   getDayState($table, 5),
  //   getDayState($table, 6),
  // ]
}

const getDayState = ($table, dayIndex) => {
  const $td = getElIndex(
    getElIndex($table, 'tr', 1), '> td', dayIndex + 1
  )

  return [
    getElIndex($td, 'input', 1).attr('disabled') === 'disabled',
    getElIndex($td, 'input', 2).attr('disabled') === 'disabled',
    getElIndex($td, 'input', 3).attr('disabled') === 'disabled',
    getElIndex($td, 'input', 4).attr('disabled') === 'disabled',
  ]
}


const getElIndex = ($el, selector, index) =>
  $el.find(selector).slice(index, index + 1)
