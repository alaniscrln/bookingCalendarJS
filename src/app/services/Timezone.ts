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

    calculeTimezone(timezone: string, hourDate: string){
        const hour = parseInt(hourDate.split(":")[0]);
        let minutes = parseInt(hourDate.split(":")[1]);
      
        const date = new Date();
        date.setHours(hour, minutes);
        date.toLocaleString("es-ES", {timeZone: timezone});

        const formatMinutes = (date.getMinutes().toString().length > 1)?date.getMinutes():'0'+date.getMinutes();
        
        return date.getHours()+":"+ formatMinutes;
    }
}