import { h } from 'preact'
import { Provider } from 'preact-redux'
import Header from './Header'
import Timetable from './Timetable'
import './base.css'


const App = ({ store }) =>
  <div className="app">
    <Provider store={store}>
      <div>
        <Header />
        <Timetable />
      </div>
    </Provider>
  </div>


export default App
