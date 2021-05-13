export class BookingModalForm {
    /**
     * Modal form
     */
    form: HTMLElement;

    /**
     * Modal form header
     */
    formHeaderContainer: HTMLElement;

    /**
     * Modal form content
     */
    formContentContainer: HTMLElement;

    /**
     * Close button modal
     */
    closeForm: HTMLElement;

    constructor() {
        this.form = document.getElementById("myModal") as HTMLElement;
        this.closeForm = document.getElementsByClassName("close")[0] as HTMLElement;
        this.formHeaderContainer = document.getElementsByClassName("modal-header")[0] as HTMLElement;
        this.formContentContainer = document.getElementsByClassName("modal-content")[0] as HTMLElement;
    }

    init() {
        this.closeForm.addEventListener("click", () =>
            this.hideModal()
        );
        this.createFormHeader();
    }

    showModal() {
        this.form.style.display = "block";
    }

    hideModal() {
        this.form.style.display = "none";
    }

    createFormHeader(){
        const h3 = document.createElement("h3");
        h3.innerHTML = "Has seleccionado una hora"
        this.formHeaderContainer.appendChild(h3);
    }
}
