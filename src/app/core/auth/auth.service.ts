/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';;
import { Apollo, gql } from 'apollo-angular';


const loginAuth = gql`
mutation login($login: LoginInput!){
  login(login:$login){
    id,
    username,
    token
  }
}
`;

const signupAuth = gql`
mutation createUserAUTH($user: UserAUTHInput!){
  createUserAUTH(user:$user){
    id,
    username
  }
}
`;

const getAuth = gql`
query userById($id: Int!, $token: String!){
  userById(id:$id, token:$token){
    id,
    username
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private apollo: Apollo,
  ){ }

  public set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  login(usernameLogin: string, passwordLogin: string): Observable<any>{
    return this.apollo.mutate({
      mutation:loginAuth,
      variables:{
        login:{
          username: usernameLogin,
          password: passwordLogin
        }
      }
    });
  }

  signup(usernameLogin: string, passwordLogin: string, passwordLogin2: string): Observable<any>{
    return this.apollo.mutate({
      mutation:signupAuth,
      variables:{
        user:{
          username: usernameLogin,
          password: passwordLogin,
          password_confirmation: passwordLogin2
        }
      }
    });
  }

  isLogin(): boolean{
    if(localStorage.getItem('ID_USER')){
      return true;
    }else{
      return false;
    }
  }

  userById(id_user, token_user): Observable<any>{
    return this.apollo.watchQuery<any>({
      query: getAuth,
      variables: {
        id: id_user,
        token: token_user
      }
    }).valueChanges;
  }

  signout(){
    localStorage.removeItem('ID_USER');
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
