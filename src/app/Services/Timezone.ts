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

}