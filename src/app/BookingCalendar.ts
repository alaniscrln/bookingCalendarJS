import { Calendar } from './Calendar';

import { Language } from './Language';
import {api} from './ApiCalendar';

console.log(api);

export class BookingCalendar {

    /**
     * 
     */
    private _calendar: Calendar;

    /**
     * Main container
     */
    container: HTMLElement;

    /**
     * Month name Container
     */
    monthNameContainer: HTMLElement;

    /**
     * Days container
     */
    daysContainer: HTMLElement;

    /**
     * @param lang {es | en} Calendar language
     * @param key {string} Google Calendar API KEY
     * @param idContainer {string} Container ID where the calendar is going to be displayed
     */
    constructor(lang: Language = 'en', key: string, idContainer: string) {
        this._calendar = new Calendar(lang ,"key");
        this.container = document.getElementById(idContainer);
        this.monthNameContainer = document.createElement("span");
        this.daysContainer = document.createElement("div");
        this.daysContainer.setAttribute("id", "days-container");
    }

    /**
     * Initialize the calendar
     */
     init() {
        this.createHeader();
        this.createDaysNameElement();
        this.container.appendChild(this.daysContainer);
        this.fillCalendarDaysElement();
        console.log(api);
    }

    /**
     * Create the element with the name of the days
     */
    createDaysNameElement() {
        let header: HTMLElement = document.getElementById("calendar-header");
        let daysContainer: HTMLElement = document.createElement("div");
        daysContainer.setAttribute("id", "days");
        this._calendar.getDaysName().forEach(name => {
            const cell: HTMLElement = document.createElement("div");
            cell.classList.add('cell');
            cell.innerHTML = name;
            daysContainer.appendChild(cell);
        });
        header.appendChild(daysContainer);
    }

    /**
     * Setting the header with the previous and next buttons and the month
     */
     createHeader() {
        // Header
        let header: HTMLElement = document.createElement("div");
        header.setAttribute("id", "calendar-header");
        // Previous Button
        let btnPreviousMonth: HTMLElement = document.createElement("button");
        btnPreviousMonth.innerHTML = "<";
        btnPreviousMonth.addEventListener('click', () => this.changeMonthEvent(false));
        header.appendChild(btnPreviousMonth);
        //Month Name
        this.setCalendarMonthElement();
        header.appendChild(this.monthNameContainer);
        // Next Button
        let btnNextMonth: HTMLElement = document.createElement("button");
        btnNextMonth.innerHTML = ">";
        btnNextMonth.addEventListener('click', () => this.changeMonthEvent(true));
        header.appendChild(btnNextMonth);

        this.container.appendChild(header);
    }

    /**
     * Set the month name in the calendar element
     */
     setCalendarMonthElement() {
        const currentMonth: HTMLElement = document.createElement('p');
        currentMonth.setAttribute("id", "current-month");
        currentMonth.innerHTML = this._calendar.getMonthName() + " " + this._calendar.getFullYear();
        this.monthNameContainer.innerHTML = currentMonth.innerHTML;
    }

    /**
     * Event to change the month by clicking the next or previous buttons
     * @param isNext {boolean} Indicates in which direction the month is going to be changed,
     * true = next, false = previous.
     */
     changeMonthEvent(isNext: boolean) {
        this._calendar.changeMonth(isNext);
        this.setCalendarMonthElement();
        this.fillCalendarDaysElement();
    }

    /**
     * Fill calendar with all the days
     */
     fillCalendarDaysElement() { 
        this.daysContainer.innerHTML = "";
        let today = new Date();
        this._calendar.setMonthStructure().forEach(day => {
            const cell: HTMLElement = document.createElement("div");
            cell.innerHTML = this._calendar.getDayDigit(day);
            (cell.innerHTML != "") ? cell.classList.add('cell') : cell.classList.add('cell_empty');

            if(this._calendar.isDayBeforeToday(day, today))
                cell.classList.add("cell_disabled");

            this.daysContainer.appendChild(cell);
        });
    }

}