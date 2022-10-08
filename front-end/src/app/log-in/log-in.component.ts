import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  addform: FormGroup=new FormGroup({});
  constructor() {

    this.addform = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        mail: new FormControl("", [Validators.required, Validators.pattern("^gmail?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
   }
  ngOnInit(): void {
  }

}
