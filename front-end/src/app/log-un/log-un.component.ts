import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-un',
  templateUrl: './log-un.component.html',
  styleUrls: ['./log-un.component.css']
})
export class LogUnComponent implements OnInit {

  chekform: FormGroup=new FormGroup({});
  constructor() {

    this.chekform = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        userName: new FormControl("", [Validators.required, Validators.minLength(5)]),
        email: new FormControl(1, [Validators.required, Validators.min(1)]),
        password: new FormControl("", [Validators.required, Validators.pattern("^gmail?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
   }

  ngOnInit(): void {
  }

}
