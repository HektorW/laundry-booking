import {
  FETCH_DAYS_REQUEST,
  FETCH_DAYS_SUCCESS,
  FETCH_DAYS_FAILURE,
} from 'actions/timetable'
import {
  mergeDays,
  setDaysFetching,
  setDaysError,
  parseServerDaysResponse,
} from './timetable.utils'


const initialState = {
  days: [],
  authSession: null,
  fetchDaysError: null,
}


const ACTION_HANDLERS = {
  [FETCH_DAYS_REQUEST]: (state, { daysToFetch }) => ({
    ...state,
    fetchDaysError: null,
    days: mergeDays(state.days, setDaysFetching(daysToFetch)),
  }),
  [FETCH_DAYS_SUCCESS]: (state, { fetchedDays, authSession }) => ({
    ...state,
    authSession,
    days: mergeDays(state.days, parseServerDaysResponse(fetchedDays)),
  }),
  [FETCH_DAYS_FAILURE]: (state, { failedDays, error }) => ({
    ...state,
    fetchDaysError: error,
    days: mergeDays(state.days, setDaysError(failedDays)),
  }),
}


export default (state = initialState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
