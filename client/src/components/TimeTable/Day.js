import { h } from 'preact'
import Session from './Session'
import DayStates from 'constants/DayStates'
import SessionStates from 'constants/SessionStates'
import WeekDayName from 'components/WeekDayName'
import './day.css'


const Day = ({ day }) =>
  <div
    className={`
      day
      ${day.state === DayStates.Fetching ? 'day--is-fetching' : ''}
      ${day.state === DayStates.Error ? 'day--error' : ''}
      ${day.sessions.every(session => session.state === SessionStates.Booked) ? 'day--fully-booked' : ''}
    `}
  >
    <div className="day__title">
      <WeekDayName date={day.date} />
      <span className="day__title-date">{day.date.getDate()}/{day.date.getMonth() + 1}</span>
    </div>

    <ul className="day__list">
      {day.sessions.map(session =>
        <li key={session.time} className="day__list-item">
          <Session session={session} />
        </li>  
      )}
    </ul>
  </div>


export default Day
