//const ct = require("countries-and-timezones");
import * as lib from 'countries-and-timezones';
export class Timezone {

    constructor() { }

    getAllCountries() {
        return lib.getAllCountries();
    }

    getTimezoneForCountry(id: string): lib.Timezone[] {
        return lib.getTimezonesForCountry(id);
    }

    calculeTimezone(timezone: string, hourDate: string) {
        const hour = parseInt(hourDate.split(":")[0]);
        let minutes = parseInt(hourDate.split(":")[1]);

        const date = new Date();
        date.setHours(hour, minutes);
        const dateFormat = new Date(new Date(date).toLocaleString("en-US", { timeZone: timezone }));

        const formatMinutes = (dateFormat.getMinutes().toString().length > 1) ? dateFormat.getMinutes() : '0' + dateFormat.getMinutes();

        return dateFormat.getHours() + ":" + formatMinutes;
    }
}