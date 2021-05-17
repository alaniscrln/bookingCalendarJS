import { Country as CountryClass} from "../Interfaces/Country";
import { Day } from "../interfaces/Day";
import { Timezone } from "../Services/Timezone";
import { BookingModalForm } from "./BookingModalForm";
import { Country } from 'countries-and-timezones';

export class BookingList {

    /**
     * Available hours container
     */
    listContainer: HTMLElement;

    /**
     * BookingModalForm Object
     */
    _form: BookingModalForm;

    /**
     * 
     */
    _timezone: Timezone;

    constructor() {
        this.listContainer = document.createElement("div");
        this.listContainer.setAttribute('id', 'hours-container');
        this._form = new BookingModalForm();
        this._timezone = new Timezone();
        this._form.init();
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

            hourBtn.addEventListener("click", () =>
                this._form.showModal()
            );
        });
    }

    /**
     * 
     */
    boo(){
        const allCountries = this._timezone.getAllCountries();
        const select = document.createElement("select");
        Object.values(allCountries ).forEach((element: Country) => {
          let option = document.createElement("option");
          option.innerHTML = element.name + "";
          select.appendChild(option);
        });
        return select;
    }
}