import { Day } from "../interfaces/Day";
import { Timezone } from "../Services/Timezone";
import { BookingModalForm } from "./BookingModalForm";
import { Country } from 'countries-and-timezones';

export class BookingList {

    /**
     * Available hours container
     */
    hoursContainer: HTMLElement;

    /**
     * BookingModalForm Object
     */
    _form: BookingModalForm;

    /**
     * 
     */
    _timezone: Timezone;

    /** */
    _timezoneContainer: HTMLElement;

    constructor() {
        this.hoursContainer = document.createElement("div");
        this.hoursContainer.setAttribute('id', 'hours-container');
        this._form = new BookingModalForm();
        this._timezone = new Timezone();
        this._timezoneContainer = document.createElement("div");
        this._timezoneContainer.setAttribute('id', 'timezone-container');
        this._form.init();
    }

    /**
     * Get hours  container
     * @returns hours container {HTMLElement} 
     */
    getHoursContainer(): HTMLElement {
        return this.hoursContainer;
    }

    /**
     * Creates available hours
     * @param day of which the available hours will be set
     */
    setHours(day: Day): void {
        this.hoursContainer.innerHTML = '';

        day.hours.forEach(hour => {
            let hourBtn = document.createElement("a");
            hourBtn.classList.add('hour');
            hourBtn.innerHTML = hour;
            this.hoursContainer.appendChild(hourBtn);

            hourBtn.addEventListener("click", () =>
                this._form.showModal()
            );
        });
    }

    /**
     * Sets the select element with all the countries
     */
    setCountrySelect() {
        const allCountries = this._timezone.getAllCountries();
        const select = document.createElement("select");
        Object.values(allCountries).forEach((country: Country) => {
            let option = document.createElement("option");
            option.value = country.id;
            option.innerHTML = country.name + "";
            select.appendChild(option);
        });
        select.addEventListener("change", (e: any) => {
            let id: string = e.target.value + "";
            
        });
        this._timezoneContainer.append(select);
    }

    /**
     * 
     * @returns 
     */
    getTimezoneContainer(): HTMLElement {
        return this._timezoneContainer;
    }

}