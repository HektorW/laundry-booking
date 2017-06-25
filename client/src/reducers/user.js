const initialState = {
  auth: null,
}


const ACTION_HANDLERS = {

}


export default (state = initialState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
