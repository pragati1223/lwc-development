import { LightningElement, track, api } from 'lwc';

export default class CreationOfMethodC extends LightningElement {
//default selected checkbox-value=red
    @track value = ['Red'];
    //selectedval-store selected value
    @track selectedval;

    options = [
        {label:'Red', value:'Red'},
        {label:'Green', value:'Green'},
        {label:'Blue', value:'Blue'}
    ];
//running when checkbox is clicked
    handleChange(event){
        //get selected value
        this.value = event.detail.value;
        //updates UI
        this.selectedval = this.value;
    }
    //public method parent can call this method
    @api
    selectval(checkboxvalue){
        alert('checkboxvalue ' + checkboxvalue);
        //check if value exist in options
        const selected = this.options.find(item => checkboxvalue === item.value);

        if(selected){
            this.value = [checkboxvalue]; // checkbox expects array
            //updates UI
            this.selectedval = checkboxvalue;
            return 'successfully checked';
        }

        return 'not checked';
    }
}