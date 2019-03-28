import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Connect } from '../Connect';
@Component({
    selector: 'app-donate',
    templateUrl: './DonateNest.component.html',
    styles: ['DonateNest.component.css']
})
export class DonateNestComponent implements OnInit {
    arr: any[] = [];
    constructor(public db: AngularFireDatabase) {

    }
    ngOnInit() {
        
    }

    onSubmit(form: NgForm) {
        //get the details from form and save in an object like below
        //Issue in extracting data from form
        //then post to database
            let d = new Date();
            console.log(form);
            var formdata = {
                name: "akjsdhakjsdhak",
                contri: ["Clothes", "Groceries"],
                email: "some email",
                time: d.getFullYear().toString().getTime()
            }
            this.db.list('/contributions').push(formdata).then(() => {console.log("data added")})
        
        
    }
}
