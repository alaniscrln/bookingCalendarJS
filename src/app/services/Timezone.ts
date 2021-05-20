//const ct = require("countries-and-timezones");
import * as lib from 'countries-and-timezones';
import * as moment from 'moment-timezone'

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
        const minutes = parseInt(hourDate.split(":")[1]);
        const date = new Date();
        date.setHours(hour, minutes);
        const result = moment.utc(date.getTime()).tz(timezone).format("HH:mm");
        return result;
    }
}