import endpoints from "./config/calendar.config"

export class ApiCalendar {

    constructor() {
    }

    async prueba(date:Date) {
        const formatDate: string = date.toISOString().split('T')[0];
        const response = await fetch(endpoints.listEvents + endpoints.timeMax + formatDate + endpoints.hourMax + endpoints.timeMin + formatDate + endpoints.hourMin, {
            method: 'GET'
        })
        const calendar = await response.json()
        console.log(calendar.items)
    }
}




