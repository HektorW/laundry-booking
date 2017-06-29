import { h } from 'preact'
import { Provider } from 'preact-redux'
import Timetable from './Timetable'
import './base.css'


const App = ({ store }) =>
  <div className="app">
    <Provider store={store}>
      <Timetable />
    </Provider>
  </div>


export default App
