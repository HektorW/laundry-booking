import { h } from 'preact'
import { Provider } from 'preact-redux'
import TimeTable from './TimeTable'
import './base.css'


const App = ({ store }) =>
  <div className="app">
    <Provider store={store}>
      <TimeTable />
    </Provider>
  </div>


export default App
