# Laundry booking
This project scrapes our laundry booking system and adds an api for voice controlling it.


## Getting started

### Install
Clone repository and install application dependencies
```
yarn install
```

### Environment
Copy the `.env.template` file to `.env` and enter your values in the `.env` file.
```
cp .env.template .env
```


## Development
Start development server with the following command
```
yarn run start:dev
```


## Voice phrases

### Booked time
Example phrases for asking about our booked time

* Do we have anything booked?
* When is our next laundry time?
* When do we have laundry?
* When does our laundry start?

### Time table
Example phrases for asking about available times

* Is there any laundry time available tomorrow (today/on tuesday/etc...)?
* Is it free today at 14.00?
* When is the next availble 7.00 time?
* When is the earliest available time?

### Book time
Example phrases for booking a time

* Book wednesday at 11.30
* Book today at 14.00
* Book the last available time tomorrow

### Cancel time
Example phrases to cancel a booked time

* Cancel our booked time
* Remove our booking
