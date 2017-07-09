import { h } from 'preact'
import SessionStates from '../../constants/SessionStates'
import './session.css'


const getSessionState = session => {
  switch (session.state) {
    case SessionStates.Available: return 'session--is-available'
    case SessionStates.Booked: return 'session--is-booked'
    case SessionStates.Booking: return 'session--is-booking'
    case SessionStates.Mine: return 'session--is-mine'
    case SessionStates.Fetching: return 'session--is-fetching'
    default: return ''
  }
}


const Session = ({ session }) =>
  <button
    className={`
      session
      ${getSessionState(session)}
    `}
    disabled={session.state === SessionStates.Booked}
  >
  </button>


export default Session
