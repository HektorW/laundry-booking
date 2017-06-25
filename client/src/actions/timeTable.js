export const FETCH_DAYS_SUCCESS = 'FETCH_DAYS_SUCCESS'


// actions
export const setDebugDays = () => ({
  type: FETCH_DAYS_SUCCESS,
  days: [{
    dateStr: '2017-06-25T00:00:00Z',
    sessions: [{
      booked: false,
    }, {
      booked: true,
    }, {
      booked: true,
      mine: true,
    }, {
      booked: false,
    }],
  }, {
    dateStr: '2017-06-26T00:00:00Z',
    sessions: [{
      booked: true,
    }, {
      booked: true,
    }, {
      booked: true,
    }, {
      booked: true,
    }],
  }, {
    dateStr: '2017-06-27T00:00:00Z',
    sessions: [{
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }],
  }, {
    dateStr: '2017-06-28T00:00:00Z',
    sessions: [{
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }],
  }, {
    dateStr: '2017-06-29T00:00:00Z',
    sessions: [{
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }, {
      booked: false,
    }],
  }],
})

