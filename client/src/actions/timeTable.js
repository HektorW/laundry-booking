import { get } from 'api'
import DayStates from 'constants/DayStates'
import SessionStates from 'constants/SessionStates'
import { getUTCMidnightDate, nextDay } from 'utils/date'


export const FETCH_DAYS_REQUEST = 'FETCH_DAYS_REQUEST'
export const FETCH_DAYS_SUCCESS = 'FETCH_DAYS_SUCCESS'
export const FETCH_DAYS_FAILURE = 'FETCH_DAYS_FAILURE'


const fetchDaysRequest = daysToFetch => ({ type: FETCH_DAYS_REQUEST, daysToFetch })
const fetchDaysSuccess = (fetchedDays, authSession) => ({ type: FETCH_DAYS_SUCCESS, fetchedDays, authSession })
const fetchDaysFailure = (failedDays, error) => ({ type: FETCH_DAYS_FAILURE, failedDays, error })


export const fetchNextDays = () => async (dispatch, getState) => {
  const { timetable: timetableState } = getState()
  const { days: currentDays, authSession: currentAuthSession } = timetableState
  
  const lastDay = currentDays[currentDays.length - 1]
  if (lastDay && lastDay.state === DayStates.Fetching) {
    return
  }

  const lastDate = lastDay
    ? lastDay.date
    : nextDay(getUTCMidnightDate(new Date()), -1)
  
  const daysToFetch = [...new Array(7)]
    .map((_, index) => ({
      date: nextDay(lastDate, index + 1),
      sessions: [...new Array(4)].fill({ state: SessionStates.Fetching }),
    }))

  dispatch(fetchDaysRequest(daysToFetch))

  let response
  const queryStr = currentAuthSession
    ? `?viewState=${
      encodeURIComponent(
        currentAuthSession.viewState
      )}&eventValidation=${
      encodeURIComponent(
        currentAuthSession.eventValidation
      )}`
    : ''
  try {
    response = await get(`/api/client/timetable${queryStr}`)
  } catch (error) {
    window.console.error(error)
    return dispatch(fetchDaysFailure(daysToFetch, error))
  }

  const { days, authSession } = response
  dispatch(fetchDaysSuccess(days, authSession))
}


export const bookDaySession = (day, session) => async dispatch => {
  
}
