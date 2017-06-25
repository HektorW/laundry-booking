import { h } from 'preact'
import { connect } from 'preact-redux'
import Day from './Day'
import './time-table.css'


const TimeTable = ({ days }) =>
  <section className="time-table">
    <header className="time-table__header" >
      <ul className="time-table__header-list">
        <li className="time-table__header-list-item">7.00</li>
        <li className="time-table__header-list-item">10.30</li>
        <li className="time-table__header-list-item">14.00</li>
        <li className="time-table__header-list-item">17.30</li>
      </ul>
    </header>

    <ul className="time-table__list">
      {days.map(day => 
        <li key={day.date} className="time-table__list-item">
          <Day day={day} />
        </li>
      )}
    </ul>
  </section>


const mapStateToProps = ({ timeTable }) => ({
  days: timeTable.days,
})


export default connect(mapStateToProps)(TimeTable)
