import { LightningElement, track, api } from 'lwc';

export default class ProjectOneModalComponent extends LightningElement {
    @track inputText = '';
    @api isModalOpen = false;

    handleInputChange(event) {
        this.inputText = event.target.value;
    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('closemodal'));
    }

    save() {
        this.dispatchEvent(new CustomEvent('save', {
            detail: this.inputText
        }));
    }
}
