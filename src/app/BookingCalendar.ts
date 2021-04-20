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
    monthsName = [];

    /**
     * ?
     */
    daysName = []

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
        this.monthsName = LANGMONTH[this.lang];
        this.daysName = LANGDAY[this.lang];
        let today = new Date();
        this.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
    }

    /**
     * Get names of months
     * return an array of months
     */
    getMonthsName(): string[] {
        return this.monthsName;
    }

    /**
     * Get the name of a month indicated by number
     * month {number} Number of a month, starting from 0
     * return the requested month name
     */
    getMonthName(month: number): string {
        if (month >= this.monthsName.length) {
            throw new Error("Month cannot be greater than 11.");
        }
        return this.monthsName[month];
    }

    /**
     * Get initial letter of the days
     * return an array of days
     */
    getDaysName(): string[] {
        return this.daysName;
    }

    /**
     * Get the name of a day indicated by number
     * day {number} Number of a day of the week, starting from 0
     * return the requested day name
     */
    getDayName(day: number): string {
        if (day >= this.daysName.length) {
            throw new Error('Day cannot be greater than 6.');
        }
        return this.daysName[day];
    }

    /**
     * Get the number of days of a month
     * month {number} Number of the month, starting from 1, which we want to know how many days does it have
     * year {number} Number of the year
     * return the number of days that the requested month has
     */
    getMonthDays(): number {
        let month: number = this.currentDate.getMonth();
        let year: number = this.currentDate.getFullYear();
        return  new Date(year, month+1, 0).getDate(); 
    };

    /**
     * Get the first day of the month as a number
     * return the number of the day, starting from 0 as Sunday
     */
    getFirstDayOfMonth(): number {
        return this.currentDate.getDay();
    }

    /**
     * Set the month structure
     * date {Date} date 
     * return an array with the structure of the month
     */
    setMonthStructure(): DayI[] {
        const blankSpaces: number = this.getFirstDayOfMonth();
        const monthDays: number = this.getMonthDays();
        let monthStructure: DayI[] = new Array(blankSpaces);
        monthStructure.fill(null, 0, blankSpaces);
        let days: DayI[] = Array.from({ length: monthDays }, (_, index) => ({ day: index + 1 + "" } as DayI));
        monthStructure = monthStructure.concat(days);
        return monthStructure;
    }

    setPreviousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    }

    setNextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }

    changeMonth(date: Date) {
        this.currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    }
}