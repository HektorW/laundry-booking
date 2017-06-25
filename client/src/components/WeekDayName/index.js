import { h } from 'preact'


const weekdayNames = [
  'Söndag',
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
]


const WeekDayName = ({ date, length = Infinity }) =>
  <span className="week-day-name">
    {weekdayNames[date.getDay()].substr(0, length)}
  </span>


export default WeekDayName
