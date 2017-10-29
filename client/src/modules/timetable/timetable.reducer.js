import WeekStates from '../../constants/WeekStates'
import {
  FETCH_WEEK_REQUEST,
  FETCH_WEEK_SUCCESS,
  FETCH_WEEK_FAILURE,

  FETCH_BOOKED_SESSION_SUCCESS,
} from './timetable.actions'
import {
  updateWeek,
} from './timetable.utils'


const initialState = {
  weeks: [],
  bookedSession: null,
}


export default function timetableReducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_WEEK_REQUEST: return {
      ...state,
      weeks: [...state.weeks, action.newWeek],
    }

    case FETCH_WEEK_SUCCESS: return {
      ...state,
      weeks: updateWeek(state.weeks, action.weekId, {
        authSession: action.authSession,
        days: action.fetchedDays,
        state: WeekStates.None,
      }),
    }

    case FETCH_WEEK_FAILURE: return {
      ...state,
      weeks: updateWeek(state.weeks, action.weekId, {
        error: action.error,
        state: WeekStates.Error,
      }),
    }

    case FETCH_BOOKED_SESSION_SUCCESS: return {
      ...state,
      bookedSession: {
        date: action.date,
        sessionIndex: action.sessionIndex,
      },
    }

    default:
      return state
  }
}
