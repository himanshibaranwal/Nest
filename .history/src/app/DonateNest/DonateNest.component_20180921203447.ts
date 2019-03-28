import{Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
    selector:'app-donate',
    templateUrl:'./DonateNest.component.html',
    styles:['DonateNest.component.css']
})
export class DonateNestComponent implements OnInit{
    arr: any[]=[];  
    constructor(){

    }
    ngOnInit(){
        
    }
    
    onSubmit(form : NgForm) {
        //get the details from form and save in an object
        //then post to database
        formData
       }
}
