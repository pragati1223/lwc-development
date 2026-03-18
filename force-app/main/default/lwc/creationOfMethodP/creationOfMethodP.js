import { LightningElement } from 'lwc';

export default class CreationOfMethodP extends LightningElement {
    //Variable to store user input
    inputvalue;

    inputchangehandler(e){
        //User types "Red" → inputvalue = "Red"
        //“Take whatever user typed in the input box and store it in inputvalue variable”
        this.inputvalue = e.target.value;
    }
    clickHandler(){
        //Manager finds employee to give task
        //this.template-“Look inside my component’s HTML”
        //.querySelector()-A method used to find elements inside HTML
    const childcreation = this.template.querySelector('c-creation-of-method-c');

    if(childcreation){
        //Parent calls child method
        //selectval=child function
        //this.inputvalue=data passed
        //Manager says → "Select Red checkbox"
        const returnMsg = childcreation.selectval(this.inputvalue);
        alert('return Msg ' + returnMsg);
    }
}
        
    
      
    }


