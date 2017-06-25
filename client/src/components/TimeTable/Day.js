import { h } from 'preact'
import Session from './Session'
import WeekDayName from 'components/WeekDayName'
import './day.css'


const Day = ({ day }) =>
  <div
    className={`
      day
      ${day.sessions.every(session => session.booked) ? 'day--fully-booked' : ''}
    `}
  >
    <WeekDayName date={day.date} />

    <ul className="day__list">
      {day.sessions.map(session =>
        <li key={session.time} className="day__list-item">
          <Session session={session} />
        </li>  
      )}
    </ul>
  </div>


export default Day
