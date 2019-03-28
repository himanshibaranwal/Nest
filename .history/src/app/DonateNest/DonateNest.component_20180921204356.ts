import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
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
        //get the details from form and save in an object
        //then post to database
        var formdata = {
            name: "Himanshi",
            contri: ["Clothes", "Groceries"],
            email: "some email"
        }
        this.db.list('/contributions').push(formdata).then(() => {console.log()})
    }
}
