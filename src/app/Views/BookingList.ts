import { Day } from "./../Interfaces/Day";

export class BookingList {

    /**
     * Available hours container
     */
    listContainer: HTMLElement;

    constructor() {
        this.listContainer = document.createElement("div");
        this.listContainer.setAttribute('id', 'hours-container');
    }

    /**
     * Get list container
     * @returns list container {HTMLElement} 
     */
    getListContainer(): HTMLElement {
        return this.listContainer;
    }

    /**
     * Creates available hours
     * @param day of which the available hours will be set
     */
    setHours(day: Day): void {
        this.listContainer.innerHTML = '';
        day.hours.forEach(hour => {
            let hourBtn = document.createElement("a");
            hourBtn.classList.add('hour');
            hourBtn.innerHTML = hour;
            this.listContainer.appendChild(hourBtn);
        });
    }

}