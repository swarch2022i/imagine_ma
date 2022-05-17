/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuth } from '../../userAuth';
import { Apollo, gql } from 'apollo-angular';
import { Storage } from '@ionic/storage-angular';

const loginAuth = gql`
mutation login($login: LoginInput!){
  login(login:$login){
    id,
    username,
    token
  }
}
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userAuth: UserAuth;

  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    this.apollo.mutate({
      mutation:loginAuth,
      variables:{
        login:{
          username:this.loginForm.controls["username"].value,
          password:this.loginForm.controls["password"].value
        }
      }
    }).subscribe(({data})=>{
      this.storage.set('token', data['login']['token']);
      this.storage.get('token').then((val) => {
        console.log('token:', val);
      });
    },(error)=>{
      console.log('error sending query', error);
    });
  }

  test() {
  }
}
