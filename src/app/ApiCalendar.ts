import { calendar_v3, google } from 'googleapis';

export class ApiCalendar {

    private api :calendar_v3.Calendar = google.calendar('v3');

    constructor() {

    }
    
}