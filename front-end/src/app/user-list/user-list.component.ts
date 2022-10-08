import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../modele/Iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user:Iuser[]=[]
addform: FormGroup=new FormGroup({});
  constructor() {

    this.addform = new FormGroup(
      {
        categoryId: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        qty: new FormControl(1, [Validators.required, Validators.min(1)]),
        price: new FormControl(1, [Validators.required, Validators.min(1)]),
        img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
   }
  ngOnInit(): void {
  }
// add(){
//   // let nUser:Iuser={
//   //   name:this.addform.value["name"]
//   // }
// }
}
