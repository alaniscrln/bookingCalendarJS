import { LANGMONTH } from './lang/months';
import { MonthI } from './Interfaces/MonthI';
import { LANGDAY } from './lang/days';

export class BookingCalendar {

    /**
     * Language in which the calendar is going to be displayed
     */
    lang: string;
    /**
     * Google API Calendar Key
     */
    private readonly key: string;
    /**
     * ?
     */
    months = [];
    /**
     * ?
     */
    days = []

    /**
     * lang {es/}
     */
    constructor(lang: 'es' | 'en' = 'en', key: string) {
        this.lang = lang.toLowerCase();
        this.key = key;
        this.months = LANGMONTH[this.lang];
        this.days = LANGDAY[this.lang];
    }

    getMonths(): string[] {
        return this.months;
    }

    /**
     * month {number} Number of a month, starting from 0
     */
    getMonth(month: number): string {
        if (month >= this.months.length) {
            throw new Error("Month cannot be greater than 11.");
        }
        return this.months[month];
    }
   
    getDays(): string[] {
        return this.days;
    }

    /**
     * day {number} Number of a day of the week, starting from 0
     */
    getDay(day: number): string {
        if (day >= this.days.length) {
            throw new Error('Day cannot be greater than 6.');
        }
        return this.days[day];
    }

    /**
     * month {number} Number of the month, starting from 1, which we want to know how many days does it have
     * year {number} Number of the year
     */
    getMonthDays(month: number, year: number): number {
        if(month <= 0 || month > 12){
            throw new Error('Month cannot be greater than 12 and less than 1.');
        }
        return new Date(year, month, 0).getDate();
    };

}