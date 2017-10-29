import { h } from 'preact'
import Session from './Session'
import SessionStates from 'constants/SessionStates'
import WeekDayName from 'components/WeekDayName'
import './day.css'


const Day = ({ date, sessions, isFetching = false, failedFetching = false }) =>
  <div
    className={`
      day
      ${isFetching ? 'day--is-fetching' : ''}
      ${failedFetching ? 'day--error' : ''}
      ${sessions.every(session => session.state === SessionStates.Booked) ? 'day--fully-booked' : ''}
    `}
  >
    <div className="day__title">
      <WeekDayName date={date} />
      <span className="day__title-date">{date.getDate()}/{date.getMonth() + 1}</span>
    </div>

    <ul className="day__list">
      {sessions.map((session, index) =>
        <li key={index} className="day__list-item">
          <Session state={session.state} />
        </li>  
      )}
    </ul>
  </div>


export default Day
