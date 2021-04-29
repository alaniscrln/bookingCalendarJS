import { lang as langMonths } from './lang/months';
import { lang as langDays } from './lang/days';
import { Day } from './Interfaces/Day';
import { Language } from './Language';
import { ApiCalendar } from './ApiCalendar';

export class Calendar {

    private api;

    /**
     * Language in which the calendar is going to be displayed
     */
    lang: string;

    /**
     * Google API Calendar Key
     */
    private readonly key: string;

    /**
     * Current date
     */
    private currentDate: Date;

    /**
     * Names of the months
     */
    monthsName: string[] = [];

    /**
     * Names of the days
     */
    daysName: string[] = [];

    /**
     * @param key {string} Google Calendar API KEY
     */
    constructor(lang: Language, key: string) {
        this.lang = lang;
        this.key = key;
        this.monthsName = langMonths[lang] as string[];
        this.daysName = langDays[lang] as string[];
        let today = new Date();
        this.currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
        this.api = new ApiCalendar();
        this.api.prueba().then();
    }

    /**
     * Get names of months
     * @returns an array of months
     */
    getMonthsName(): string[] {
        return this.monthsName;
    }

    /**
     * Get the name of a month indicated by number
     * @param month {number} Number of a month, starting from 0
     * @returns the requested month name
     */
    getMonthName(): string {
        let month: number = this.currentDate.getMonth();
        return this.monthsName[month];
    }

    /**
     * 
     * @returns 
     */
    getFullYear() {
        return this.currentDate.getFullYear();
    }

    /**
     * Get initial letter of the days
     * @returns an array of days
     */
    getDaysName(): string[] {
        return this.daysName;
    }

    /**
     * Get the name of a day indicated by number
     * @param day {number} Number of a day of the week, starting from 0
     * @returns the requested day name
     */
    getDayName(day: number): string {
        if (day >= this.daysName.length) {
            throw new Error('Day cannot be greater than 6.');
        }
        return this.daysName[day];
    }

    /**
     * Get the number of days of a month
     * @param month {number} Number of the month, starting from 1, which we want to know how many days does it have
     * @param year {number} Number of the year
     * @returns the number of days that the requested month has
     */
    getMonthDays(): number {
        let month: number = this.currentDate.getMonth();
        let year: number = this.currentDate.getFullYear();
        return new Date(year, month + 1, 0).getDate();
    };

    /**
     * Get the first day of the month as a number
     * @returns the number of the day, starting from 0 as Sunday
     */
    getFirstDayOfMonth(): number {
        return this.currentDate.getDay();
    }

    /**
     * Set the month structure
     * @param date {Date} date
     * @returns an array with the structure of the month
     */
    setMonthStructure(): Day[] {
        const blankSpaces: number = this.getFirstDayOfMonth();
        const monthDays: number = this.getMonthDays();
        let monthStructure: Day[] = new Array(blankSpaces);
        monthStructure.fill(null, 0, blankSpaces);
        let days: Day[] = Array.from({ length: monthDays }, (_, index) => ({ digit: index + 1 + "" } as Day));
        monthStructure = monthStructure.concat(days);
        return monthStructure;
    }

    /**
     * Set the currentDate to the indicated date
     * @param date {Date} date
     */
    changeDate(date: Date) {
        this.currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    }

    /**
     * Changes month according to the 'isNext' param
     * @returns 
     */
    changeMonth(isNext: boolean) {
        isNext ? this.setNextMonth() : this.setPreviousMonth();
    }

    /**
     * @returns currentDate
     */
    getCurrentDate(): Date {
        return this.currentDate;
    }

    /**
     * Set the currentDate to the previous month
     */
    setPreviousMonth() {
        const today = new Date();
        if (today < this.currentDate) {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        }
    }

    /**
     * Set the currentDate to the next month
     */
    setNextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    }

    /**
     * Check if the day id before today
     * @param day {Day}
     * @param today {Date}
     * @returns If the day is before today 
     */
    isDayBeforeToday(day: Day) {
        const today = new Date();
        return day?.digit && parseInt(day.digit) < today.getDate()
            && today.getMonth() == this.getCurrentDate().getMonth()
            && today.getFullYear() == this.getCurrentDate().getFullYear();
    }

    /**
     * Check if the day is today
     * @param day {Day} with which will be checked if it is equals today
     * @returns true is both are today, false if not
     */
    isToday(day: Day) {
        const today = new Date();
        return day?.digit && parseInt(day.digit) == today.getDate()
            && this.getCurrentDate().getMonth() == today.getMonth()
            && this.getCurrentDate().getFullYear() == today.getFullYear()

    }

    /**
     * Checks if current month is equals today's month 
     * @returns true if the current month is equals today's month, false if not
     */
    isMonthEqualsTodaysMonth() {
        return this.getCurrentDate().getMonth() == new Date().getMonth()
            && this.getCurrentDate().getFullYear() == new Date().getFullYear();
    }

    /**
     * Know the day digit
     * @param day {Day}
     * @returns the digit day
     */
    getDayDigit(day: Day): string {
        return (day?.digit) ? day.digit : "";
    }

}
