import SessionStates from '../../constants/SessionStates'
import WeekStates from '../../constants/WeekStates'
import arrayOfLength from '../../utils/arrayOfLength'
import { nextDay, getUTCMidnightDate } from '../../utils/date'


export const createEmptyWeekData = date => ({
  id: getUTCMidnightDate(date).getTime(),
  authSession: null,
  error: null,
  state: WeekStates.Fetching,
  days: arrayOfLength(7).map((_, index) => ({
    date: nextDay(date, index),
    sessions: arrayOfLength(4).fill({ state: SessionStates.Fetching }),
  })),
})


export const parseServerDays = serverDays =>
  serverDays.map(serverDay => ({
    date: getUTCMidnightDate(new Date(serverDay.date)),
    sessions: serverDay.sessions.map(({ isBooked }) => ({
      state: isBooked
        ? SessionStates.Booked
        : SessionStates.Available,
    })),
  }))


export const updateWeek = (stateWeeks, weekId, updatedData) =>
  stateWeeks.map(week =>
    week.id !== weekId
      ? week
      : {
        ...week,
        ...updatedData,
      }
  )
