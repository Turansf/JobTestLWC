import { LightningElement, track } from 'lwc';

export default class ProjectOneBaseComponent extends LightningElement {
    @track isModalOpen = false;
    @track buttonLabel = 'Please Click';

    handleButtonClick() {
        this.isModalOpen = true;
    }

    handleCloseModal() {
        this.isModalOpen = false;
    }

    handleSave(event) {
        this.buttonLabel = event.detail;
        this.isModalOpen = false;
    }
}
