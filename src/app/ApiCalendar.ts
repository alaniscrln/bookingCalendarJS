import { calendar_v3, google } from 'googleapis';

export class ApiCalendar {

    private key = 'KEY';
    private api: calendar_v3.Calendar;

    constructor() {
        const oauth2Client = new google.auth.OAuth2(
            'YOUR_CLIENT_ID',
            'YOUR_CLIENT_SECRET',
            'YOUR_REDIRECT_URL'
        );

        this.api = google.calendar({
            version: 'v3',
            auth: this.key
        });
    }

}
