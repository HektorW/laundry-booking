import { h } from 'preact'
import { connect } from 'preact-redux'
import Day from './Day'
import './timetable.css'


const Timetable = ({ days }) =>
  <section className="timetable">
    <header className="timetable__header" >
      <ul className="timetable__header-list">
        <li className="timetable__header-list-item">7.00</li>
        <li className="timetable__header-list-item">10.30</li>
        <li className="timetable__header-list-item">14.00</li>
        <li className="timetable__header-list-item">17.30</li>
      </ul>
    </header>

    <ul className="timetable__list">
      {days.map(day => 
        <li key={day.date} className="timetable__list-item">
          <Day day={day} />
        </li>
      )}
    </ul>
  </section>


const mapStateToProps = ({ timetable }) => ({
  days: timetable.days,
})


export default connect(mapStateToProps)(Timetable)
