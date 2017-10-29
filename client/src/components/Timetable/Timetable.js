import { h } from 'preact'
import { connect } from 'preact-redux'
import { fetchNextWeek } from '../../modules/timetable/timetable.actions'
import Week from './Week'
import './timetable.css'


const Timetable = ({ weeks, fetchNextWeek }) =>
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
      {weeks.map(week => 
      
        <li key={week.days[0].date} className="timetable__list-item">
          <Week
            days={week.days}
            isFetching={week.isFetching}
            fetchError={week.fetchError}
          />
        </li>
      
      )}
    </ul>

    <button className="timetable__more" onClick={fetchNextWeek}>
      Hämta nästa vecka
    </button>
  </section>


const mapStateToProps = ({ timetable }) => ({
  weeks: timetable.weeks,
})

const mapDispatchToProps = {
  fetchNextWeek,
}


export default connect(mapStateToProps, mapDispatchToProps)(Timetable)
