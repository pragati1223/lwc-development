//declarative approach
//"If child fires 'tileclick', call tileSelectHandler"
//"If any student raises hand, I will respond"


//Programmatic Approach-constructor(){
    //super();
    //this.template.addEventListener('tileclick', this.tileSelectHandler.bind(this));

//You are manually telling JavaScript:
//"Hey DOM, listen for 'tileclick' event and call this function"
//"I will stand near the door and listen manually if anyone calls me" that means more efforts

import { LightningElement,track} from 'lwc';

export default class Fetchrecord extends LightningElement {
    //selectedRecord-Variable to store selected student name 
    @track selectedRecord;
    @track selectedrecordinfo;
        @track FetchrecordParent = [
        { name: 'Pragati', age: 27, rollNumber: '101' },
        { name: 'John', age: 23, rollNumber: '102' },
        { name: 'Michael', age: 28, rollNumber: '105' }
    ];
    //Calls parent class (LightningElement) constructor
    //tileclick-Name of the custom event sent from child

    constructor(){
        //Super is used to call the parent class constructor
        super();
        //Declarative → defined in HTML using ontileclick
        //Programmatic → defined in JS using addEventListener
        //Declarative is preferred in LWC
        this.template.addEventListener('tileclick',this.tileSelectHandler.bind(this));
    }
       // tileSelectHandler(event){
        
            //alert('tile selected handler was called'+JSON.stringify(event.detail));
            //this.selectedRecord=event.detail.name;


    // thereare three functions call,apply,bind
            //call -it calls the function and passes the arguments
            //apply -it calls the function and passes the arguments as an array
            //bind-it  returns a new function with the arguments passed to it
            //bind is used to bind the function to the object
            //tileselecthandler-Function triggered when child fires event
            tileSelectHandler(event){
                alert('tile selected handler was called');
                //event.detail → data sent from child

                    //.name → student name
                this.selectedRecord = event.detail.name;
        }

    }
