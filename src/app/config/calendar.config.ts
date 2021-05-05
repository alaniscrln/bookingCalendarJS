export default {
    userServiceUrl: process.env.USER_SERVICE_URL,
    calendarId: process.env.CALENDAR_ID,
    apiKey: process.env.API_KEY,
    listEvents: process.env.USER_SERVICE_URL +
        process.env.CALENDAR_ID +
        process.env.API_KEY
}