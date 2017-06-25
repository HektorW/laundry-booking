import { h } from 'preact'
import './session.css'

const Session = ({ session }) =>
  <button
    className={`
      session
      ${session.booked ? 'session--booked' : ''}
      ${session.mine ? 'session--mine' : ''}
    `}
  >
  </button>


export default Session
