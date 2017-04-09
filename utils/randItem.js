const { floor, random } = Math

module.exports = function randItem (list) {
  return list[floor(random() * list.length)]
}
