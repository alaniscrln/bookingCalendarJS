import { LANGMONTH } from './lang/months';
import { MonthI } from './Interfaces/MonthI';
import { LANGDAY } from './lang/days';

export class BookingCalendar {

    lang: string;
    private readonly key: string;
    months = [];
    days = []

    constructor(lang: 'es' | 'en' = 'en', key: string) {
        this.lang = lang.toLowerCase();
        this.key = key;
        this.months = LANGMONTH[this.lang];
        this.days = LANGDAY[this.lang];
    }

    getMonths(): string[] {
        return this.months;
    }


    getMonth(month: number): string {
        if(month >= this.months.length){
            throw new Error("Month cannot be greater than 11.");
        }
        return this.months[month];
    }

    getDays(): string[] {
        return this.days;
    }

    getDay(day: number): string{
        if(day >= this.days.length){
            throw new Error('Day cannot be greater than 6.');
        }
        return this.days[day];
    } 

}