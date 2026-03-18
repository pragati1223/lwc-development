import { LightningElement } from 'lwc';

export default class Conditionalrend extends LightningElement {
    isAdmin = false;
    makeAdmin(){
        this.isAdmin = true;
    }
    makeNonAdmin(){
        this.isAdmin = false;
    }
}