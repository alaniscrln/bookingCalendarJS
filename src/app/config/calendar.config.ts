export default {
    userServiceUrl: process.env.USER_SERVICE_URL,
    calendarId: process.env.CALENDAR_ID,
    apiKey: process.env.API_KEY,
    listEvents: process.env.USER_SERVICE_URL +
        process.env.CALENDAR_ID +
        process.env.API_KEY,
    paramHourMax: process.env.PARAM_HOUR_MAX,
    paramHourMin: process.env.PARAM_HOUR_MIN,
    valueHourMax: process.env.VALUE_HOUR_MAX,
    valueHourMin: process.env.VALUE_HOUR_MIN
}