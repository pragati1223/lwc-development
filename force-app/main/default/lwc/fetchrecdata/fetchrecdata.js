import { LightningElement,api } from 'lwc';

export default class Fetchrecdata extends LightningElement {
    
    //___________________fetchdata is a variable or property in which fetchrecdata value will be stored
    //___________________this variable is used inside this files but to use outside this file ie to  make public we need to use @api
    //___________________api is kown as decorator
    //___________________decorator is used to make variable publicwehave two more decorators @track,@wire
    @api record;

    tileClickHandler(){
    //___________________alert() is used to display a popup message in the browser
        //alert('tile clicked');
        //___________________Constructor -customevent is a constructor having two parameters
        //___________________detail is used to pass data to the event-payload
        //___________________payload is used to pass data to the event for example, when a user clicks on a button, the event is dispatched and the payload is passed to the event
        //___________________dispatchEvent is used to dispatch the event
        const selectEvent = new CustomEvent('tileclick', {detail:this.record,bubbles:true});
        this.dispatchEvent(selectEvent);
        //__________________to handle the event we need handler which are of two types declarative approach,programatic approach this we will create in parent component.
    }
    
        
}