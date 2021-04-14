import { LANGMONTH } from './lang/months';
import { MonthI } from './Interfaces/MonthI';
import { LANGDAY } from './lang/days';
import { DayI } from './Interfaces/DayI';

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
     * ?
     */
     currentDate: Date;

    /**
     * lang {es/}
     */
    constructor(lang: 'es' | 'en' = 'en', key: string) {
        this.lang = lang.toLowerCase();
        this.key = key;
        this.months = LANGMONTH[this.lang];
        this.days = LANGDAY[this.lang];
        this.currentDate = new Date();
    }

    /**
     * Get name of months
     * return an array of months
     */
    getMonths(): string[] {
        return this.months;
    }

    /**
     * Get the name of a month indicated by number
     * month {number} Number of a month, starting from 0
     * return the requested month name
     */
    getMonth(month: number): string {
        if (month >= this.months.length) {
            throw new Error("Month cannot be greater than 11.");
        }
        return this.months[month];
    }

    /**
     * Get initial letter of the days
     * return an array of days
     */
    getDays(): string[] {
        return this.days;
    }

    /**
     * Get the name of a day indicated by number
     * day {number} Number of a day of the week, starting from 0
     * return the requested day name
     */
    getDay(day: number): string {
        if (day >= this.days.length) {
            throw new Error('Day cannot be greater than 6.');
        }
        return this.days[day];
    }

    /**
     * Get the number of days of a month
     * month {number} Number of the month, starting from 1, which we want to know how many days does it have
     * year {number} Number of the year
     * return the number of days that the requested month has
     */
    getMonthDays(month: number, year: number): number {
        if (month <= 0 || month > 12) {
            throw new Error('Month cannot be greater than 12 and less than 1.');
        }
        return new Date(year, month, 0).getDate();
    };

    /**
     * Get the first day of the month as a number
     * year {number} Number of the year
     * month {year} Number of the month, starting from 0
     * return the number of the day, starting from 0 as Sunday
     */
    getFirstDayOfMonth(month: number, year: number): number {
        if (month < 0 || month > 11) {
            throw new Error('Month cannot be greater than 11 and less than 0.');
        }
        var date = new Date(year, month, 1);
        var index = date.getDay();
        return index;
    }

    /**
     * Set the month structure
     * date {Date} date 
     * return an array with the structure of the month
     */
    setMonthStructure(date: Date): DayI[] {
        const month: number = date.getMonth();
        const year: number = date.getFullYear();

        const blankSpaces: number = this.getFirstDayOfMonth(month, year);
        const monthDays: number = this.getMonthDays(month + 1, year);

        let monthStructure: DayI[] = new Array(blankSpaces);
        monthStructure.fill(null, 0, blankSpaces);
        let days: DayI[] = Array.from({ length: monthDays }, (_, index) => ({day: index + 1+""} as DayI));
        monthStructure = monthStructure.concat(days);

        return monthStructure;
    }

    setPreviousMonth(){
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }
    
    setNextMonth(){
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }
 
    changeMonth(date:Date){
        this.currentDate = date;
    }
}