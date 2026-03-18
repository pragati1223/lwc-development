import { LightningElement,track} from 'lwc';

export default class DataBinding extends LightningElement {
      @track greetingMsg ='world';
    changeHandler(event){
         this.greetingMsg = event.target.value;
        console.log('Change Handler was called');
        console.log(event.target.value);

    }
  
}