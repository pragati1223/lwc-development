import { LightningElement } from 'lwc';

export default class Viewmoredetails extends LightningElement {
    showSection = false;
    
    toggleSection() {
        this.showSection = !this.showSection;
    }

    get buttonLabel() {
        return this.showSection ? 'Hide Details' : 'View More Details';
    }
}