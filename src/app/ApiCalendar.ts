import endpoints from "./config/calendar.config"

export class ApiCalendar {

    constructor() {
        console.log(endpoints.userServiceUrl + endpoints.calendarId + endpoints.apiKey)
    }

    async prueba() {
        const response = await fetch(endpoints.listEvents, {
            method: 'GET'
        })
        const calendar = await response.json()
        console.log(calendar.items)
    }
}




