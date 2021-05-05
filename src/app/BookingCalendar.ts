import { Calendar } from './Calendar';
import { BookingList } from './BookingList';
import { Language } from './Language';
import { Day } from './Interfaces/Day';

export class BookingCalendar {

    /**
     * Calendar object (logic)
     */
    private _calendar: Calendar;

    /**
     * BookingList object (view)
     */
    private _bookingList: BookingList;

    /**
     * Main container
     */
    container: HTMLElement;

    /**
     * Month name Container
     */
    monthNameContainer: HTMLElement;

    /**
     * Days name container
     */
    daysNameContainer: HTMLElement;

    /**
     * Days container
     */
    daysContainer: HTMLElement;

    /**
     * Calendar container
     */
    calendarContainer: HTMLElement;

    /**
     * @param lang {es | en} Calendar language
     * @param idContainer {string} Container ID where the calendar is going to be displayed
     */
    constructor(lang: Language = 'en', idContainer: string) {
        this._calendar = new Calendar(lang);
        this._bookingList = new BookingList();
        this.container = document.getElementById(idContainer);
        this.monthNameContainer = document.createElement("span");
        this.daysContainer = document.createElement("div");
        this.daysContainer.setAttribute("id", "days-container");
        this.daysNameContainer = document.createElement("div");
        this.daysNameContainer.setAttribute("id", "days-name-container");
        this.calendarContainer = document.createElement("div");
        this.calendarContainer.setAttribute("id", "calendar-container");
    }

    /**
     * Initialize the calendar
     */
    init() {
        this.createHeader();
        this.createDaysNameElement();
        this.calendarContainer.appendChild(this.daysContainer);
        this.fillCalendarDaysElement();
        this.container.appendChild(this.calendarContainer)
        this.togglePreviousButton();
        this.container.appendChild(this._bookingList.get());
        this.setBookingList();
    }

    /**
     * Create the element with the name of the days
     */
    createDaysNameElement() {
        this._calendar.getDaysName().forEach(name => {
            const cell: HTMLElement = document.createElement("div");
            cell.classList.add('cell');
            cell.innerHTML = name;
            this.daysNameContainer.appendChild(cell);
        });
        this.calendarContainer.appendChild(this.daysNameContainer);
    }

    /**
     * Setting the header with the previous and next buttons and the month
     */
    createHeader() {
        // Header
        let header: HTMLElement = document.createElement("div");
        header.setAttribute("id", "calendar-header");

        // Previous Button
        let btnPreviousMonth: HTMLButtonElement = document.createElement("button");
        btnPreviousMonth.setAttribute("id", "btn-previous-calendar");
        btnPreviousMonth.innerHTML = '<i class="fas fa-angle-left fa-2x"></i>';
        btnPreviousMonth.addEventListener('click', () => this.changeMonthEvent(false));
        header.appendChild(btnPreviousMonth);
        //Month Name
        this.setCalendarMonthElement();
        header.appendChild(this.monthNameContainer);
        // Next Button
        let btnNextMonth: HTMLElement = document.createElement("button");
        btnNextMonth.innerHTML = '<i class="fas fa-angle-right fa-2x"></i>';
        btnNextMonth.addEventListener('click', () => this.changeMonthEvent(true));
        header.appendChild(btnNextMonth);

        this.calendarContainer.appendChild(header);
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
        this.togglePreviousButton();
    }

    /**
     * Fill calendar with all the days
     */
    fillCalendarDaysElement() {
        this.daysContainer.innerHTML = "";

        this._calendar.setMonthStructure().forEach(day => {
            const cell: HTMLElement = document.createElement("div");
            cell.innerHTML = this._calendar.getDayDigit(day);

            if (this._calendar.isDayBeforeToday(day)) {
                cell.classList.add("cell_disabled");
            }

            if (cell.innerHTML != "") {
                cell.classList.add('cell');
                if(!cell.classList.contains("cell_disabled")){
                    cell.addEventListener('click', this.selectedDay);
                }
            } else {
                cell.classList.add('cell_empty');
            }

            if (this._calendar.isToday(day)) {
                cell.classList.add('active');
            }

            this.daysContainer.appendChild(cell);
        });

        const cells = document.querySelectorAll('#days-container .cell:not(.cell_disabled)');

        if (!this._calendar.isMonthEqualsTodaysMonth()) {
            cells[0].classList.add('active');
        }


    }

    /**
     * Changes the availability of the previous button depending on the selected month
     */
    togglePreviousButton() {
        let btnPreviousMonth = document.getElementById('btn-previous-calendar') as HTMLButtonElement;
        if (this._calendar.isMonthEqualsTodaysMonth()) {
            btnPreviousMonth.disabled = true;
        } else {
            btnPreviousMonth.disabled = false;
        }
    }

    /**
     * Adds or removes 'active' class to the selected day
     * @param e Event
     */
    selectedDay(e: InputEvent) {
        const cells = document.querySelectorAll('#days-container .cell:not(.cell_disabled)');
        cells.forEach(cell => {
            cell.classList.remove('active');
        });
        const selectedBtn = (e.target as HTMLButtonElement);
        selectedBtn.classList.add('active');
    }

    /**
     * 
     */
    setBookingList() {
        let day: Day = { digit: '1', hours: ['12:30', '13:00', '13:30', '14:00', '14:30', '15:00'] };
        this._bookingList.setHours(day);
    }

}