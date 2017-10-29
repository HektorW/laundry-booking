import { get } from 'api'
import WeekStates from '../../constants/WeekStates'
import { getUTCMidnightDate, nextDay } from '../../utils/date'
import { createEmptyWeekData, parseServerDays } from './timetable.utils'


export const FETCH_WEEK_REQUEST = 'TIMETABLE_FETCH_WEEK_REQUEST'
export const FETCH_WEEK_SUCCESS = 'TIMETABLE_FETCH_WEEK_SUCCESS'
export const FETCH_WEEK_FAILURE = 'TIMETABLE_FETCH_WEEK_FAILURE'

export const FETCH_BOOKED_SESSION_SUCCESS = 'TIMETABLE_FETCH_BOOKED_SESSION_SUCCESS'

const fetchWeekRequest = newWeek => ({ type: FETCH_WEEK_REQUEST, newWeek })
const fetchWeekSuccess = (weekId, fetchedDays, authSession) => ({ type: FETCH_WEEK_SUCCESS, weekId, fetchedDays, authSession })
const fetchWeekFailure = (weekId, error) => ({ type: FETCH_WEEK_FAILURE, weekId, error })

const fetchBookedSessionSuccess = (date, sessionIndex) => ({ type: FETCH_BOOKED_SESSION_SUCCESS, date, sessionIndex })


export const fetchNextWeek = () => async (dispatch, getState) => {
  const { timetable: timetableState } = getState()
  const { weeks: currentWeeks } = timetableState
  
  const lastWeek = currentWeeks[currentWeeks.length - 1]
  if (lastWeek && lastWeek.state === WeekStates.Fetching) {
    return
  }

  const lastAuthSession = lastWeek
    ? lastWeek.authSession
    : null
  const lastWeeksLastDay = lastWeek
    ? lastWeek.days[6]
    : null

  const lastDate = lastWeeksLastDay
    ? lastWeeksLastDay.date
    : nextDay(getUTCMidnightDate(new Date()), -1)
  
  const newEmptyWeekData = createEmptyWeekData(nextDay(lastDate))

  dispatch(fetchWeekRequest(newEmptyWeekData))

  let response
  const queryStr = !lastAuthSession
    ? ''
    : `?viewState=${
      encodeURIComponent(
        lastAuthSession.viewState
      )}&eventValidation=${
      encodeURIComponent(
        lastAuthSession.eventValidation
      )}`

  try {
    response = await get(`/api/client/timetable${queryStr}`)
  } catch (error) {
    window.console.error(error)
    return dispatch(fetchWeekFailure(newEmptyWeekData, error))
  }

  const { days, authSession } = response
  dispatch(fetchWeekSuccess(newEmptyWeekData.id, parseServerDays(days), authSession))
}


export const fetchBookedSession = () => async dispatch => {
  const { date, sessionIndex  } = await get('/api/client/booked-session')
  dispatch(fetchBookedSessionSuccess(date, sessionIndex))
}


export const bookDaySession = (day, session) => async dispatch => {
  
}
