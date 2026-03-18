import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    displayDiv = false;

    handleCheckChange(evt) {
        console.log(evt.target.checked);
        this.displayDiv = evt.target.checked;
    }

    @track status = 'morning';

    changeHandler(evt) {
        this.status = evt.target.value;
    }

   get isMorning() {
    return this.status === 'morning';
}

get isAfternoon() {
    return this.status === 'afternoon';
}
}