import { LightningElement } from 'lwc';

export default class Emptystatehandling extends LightningElement {

   contacts = []; 
 
    get hasContacts() { 
        return this.contacts.length > 0; 
    } 


}