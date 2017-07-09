import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'


export default (initialState = {}) => {
  const middleware = [
    thunk,
  ]

  const composeEnhancers =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  return store
}
