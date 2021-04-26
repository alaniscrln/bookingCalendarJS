import { Calendar } from './Calendar';
import { lang as langMonths } from './lang/months';
import { lang as langDays } from './lang/days';
import { Language } from './Language';


export class BookingCalendar {

    /**
     * 
     */
    private _calendar: Calendar;

    /**
     * Language in which the calendar is going to be displayed
     */
    lang: Language;

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
     * lang {es | en} Calendar language
     * key {string} Google Calendar API KEY
     * idContainer {string} Container ID where the calendar is going to be displayed
     */
    constructor(lang: Language = 'en', key: string, idContainer: string) {
        this._calendar = new Calendar(lang ,"key");
        this.lang = lang;
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
        btnPreviousMonth.addEventListener('click', () => this.chageMonthEvent(false));
        header.appendChild(btnPreviousMonth);
        //Month Name
        this.setCalendarMonthElement();
        header.appendChild(this.monthNameContainer);
        // Next Button
        let btnNextMonth: HTMLElement = document.createElement("button");
        btnNextMonth.innerHTML = ">";
        btnNextMonth.addEventListener('click', () => this.chageMonthEvent(true));
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
     * isNext {boolean} Indicates in which direction the month is going to be changed,
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
     fillCalendarDaysElement() { // logica
        this.daysContainer.innerHTML = "";
        let today = new Date();
        this.setMonthStructure().forEach(day => {
            const cell: HTMLElement = document.createElement("div");
            cell.innerHTML = (day?.day) ? day.day : "";
            (cell.innerHTML != "") ? cell.classList.add('cell') : cell.classList.add('cell_empty');
            if(day?.day && parseInt(day.day) < today.getDate()
            && today.getMonth() == this.currentDate.getMonth()
            && today.getFullYear() == this.currentDate.getFullYear()){
                cell.classList.add("cell_disabled");
            }
            this.daysContainer.appendChild(cell);
        });
    }

}