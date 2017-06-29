import {
  FETCH_DAYS_SUCCESS,
} from 'actions/timetable'


const initialState = {
  days: [],
}


const parseServerDay = day => ({
  ...day,
  date: day.date instanceof Date
    ? day.date
    : new Date(day.dateStr),
})


const mergeDay = (dayState, updatedDay) =>
  ({ ...dayState, ...updatedDay })


const mergeDays = (daysState, newDays) =>
  newDays
    .map(parseServerDay)
    .reduce(
      (newStateDays, day) => {
        const dayIndex = newStateDays.findIndex(stateDay => stateDay.dateStr === day.dateStr)
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


const ACTION_HANDLERS = {
  [FETCH_DAYS_SUCCESS]: (state, { days }) => ({
    ...state,
    days: mergeDays(state.days, days),
  }),
}


export default (state = initialState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
