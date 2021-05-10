import endpoints from "../config/calendar.config"

export class ApiCalendar {

    constructor() {
    }

    async get(date: Date) {
        console.log(date);
        const formatDate: string = date.toISOString().split('T')[0];
        const timeMin: string = endpoints.paramHourMin + formatDate + endpoints.valueHourMin;
        const timeMax: string = endpoints.paramHourMax + formatDate + endpoints.valueHourMax;

        const response = await fetch(
            endpoints.listEvents + timeMax + timeMin, {
            method: 'GET'
        })
        const calendar = await response.json()
        console.log(calendar.items)
        return calendar.items;
    }
}




