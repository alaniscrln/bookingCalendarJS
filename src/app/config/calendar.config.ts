export default {
    userServiceUrl: process.env.USER_SERVICE_URL,
    calendarId: process.env.CALENDAR_ID,
    apiKey: process.env.API_KEY,
    listEvents: process.env.USER_SERVICE_URL +
        process.env.CALENDAR_ID +
        process.env.API_KEY,
    timeMax: process.env.TIME_MAX,
    timeMin: process.env.TIME_MIN,
    hourMax: process.env.HOUR_MAX,
    hourMin: process.env.HOUR_MIN
}