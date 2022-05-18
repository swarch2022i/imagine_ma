import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  public readonly form = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(5),
      Validators.min(50),
      Validators.max(150),
    ]),
  });


  constructor() { }

  ngOnInit() { }

  test() {
    console.log(this.form.value);
  }

}
