/* globals require:false, module:false */
import { h, render } from 'preact'
import createStore from 'store'

let root
const store = createStore()
store.dispatch(require('./modules/timetable/timetable.actions').fetchNextWeek())
store.dispatch(require('./modules/timetable/timetable.actions').fetchBookedSession())

const init = () => {
  const App = require('./components/App').default

  root = render(
    <App store={store} />,
    document.body,
    root
  )
}

init()

if (module.hot) module.hot.accept('./components/App', init)
