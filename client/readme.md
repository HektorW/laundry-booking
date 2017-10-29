# Laundry booking - Client

## Features
* Sign in
* Sign out
* Connect google account
  * Store laundry pwd/usr in google account

* See complete booking table
  * Week view
  * Double week view
  * Month view
* See only available times
* Filter by times
* Filter by week days
* See my booked time

* Book time
  * Create gcal event
* Cancel booking
  * Remove gcal event
* Change time
  * Update gcal event

* Store all information in DB
* See history of bookings



## MVP
* Sign in
* See next 7 days
* Book time
* Cancel time


## App state
```js
state = {
  user: {
    token: String,
  },
  timetable: {
    bookedSession: {
      date: Date,
      sessionIndex: Number,
    },
    weeks: [{
      id: Number,
      authSession: { viewState: '', eventValidation: '' },
      state: 'fetching|fetching-error|none',
      error: null,
      days: [{
        date: Date,
        sessions: [{
          state: 'booked|available|booking|booking-error'
        }]
      }]
    }]
  }
}
```






## On load

Check 
