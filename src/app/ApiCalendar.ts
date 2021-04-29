import { calendar_v3, google } from 'googleapis';
//import gapi from 'gapi';
 
export class ApiCalendar {

    private key = 'KEY';
    private api: calendar_v3.Calendar;

    constructor() {
        //this.api = google.calendar('v3');
    }

    async prueba() {
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/bookingcalendar.lm@gmail.com/events?key=AIzaSyB76XK4q5mVGnIXz14WpftXJj-rVopXZxo', {
            method: 'GET'
        })
        const calendar = await response.json()
        console.log(calendar)
    }
}




