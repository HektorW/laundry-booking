import { h } from 'preact'
import Day from './Day'


const Week = ({ days, isFetching, fetchError }) =>
  <div className="week">
    {fetchError ? <div>{fetchError.message}</div> : null}

    <ul className="week__list">
      {days.map(day =>
        
        <li key={day.date} className="week__list-item">
          <Day
            date={day.date}
            sessions={day.sessions}
            isFetching={isFetching}
            failedFetching={!!fetchError}
          />
        </li>
      
      )}
    </ul>
  </div>


export default Week
