import { Day } from "./Interfaces/Day";

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
     * @returns list container
     */
    get(): HTMLElement {
        return this.listContainer;
    }

    /**
     * 
     * @param day of which the available hours will be set
     */
    setHours(day: Day): void {
        day.hours.forEach(hour => {
            let hourBtn = document.createElement("a");
            hourBtn.classList.add('hour');
            hourBtn.innerHTML = hour;
            this.listContainer.appendChild(hourBtn);
        });
    }

}