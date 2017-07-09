import DayStates from 'constants/DayStates'
import SessionStates from 'constants/SessionStates'
import { isSameDay, getUTCMidnightDate } from 'utils/date'


export const mergeDay = (dayState, updatedDay) =>
  ({ ...dayState, ...updatedDay })


export const mergeDays = (daysState, newDays) =>
  newDays
    .reduce(
      (newStateDays, day) => {
        const dayIndex = newStateDays.findIndex(stateDay =>
          isSameDay(stateDay.date, day.date)
        )
        if (dayIndex !== -1) {
          newStateDays[dayIndex] = mergeDay(
            newStateDays[dayIndex],
            day
          )
        } else {
          newStateDays.push(day)
        }

        return newStateDays
      },
      [...daysState]
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime())


export const setDaysFetching = days =>
  days.map(day => ({
    ...day,
    state: DayStates.Fetching,
    sessions: day.sessions.map(session => ({ ...session, state: SessionStates.Fetching })),
  }))


export const setDaysError = days =>
  days.map(day => ({ ...day, state: DayStates.Error }))


export const parseServerDaysResponse = serverDays =>
  serverDays.map(serverDay => ({
    state: null,
    date: getUTCMidnightDate(new Date(serverDay.date)),
    sessions: serverDay.sessions.map(({ isBooked }) => ({
      state: isBooked
        ? SessionStates.Booked
        : SessionStates.Available,
    })),
  }))

