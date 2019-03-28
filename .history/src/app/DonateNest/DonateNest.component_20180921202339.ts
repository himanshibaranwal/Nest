import{Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
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
        
        this.arr = form.value
        console.log('array', this.arr);
        console.log('value', form.value);
       }
}
