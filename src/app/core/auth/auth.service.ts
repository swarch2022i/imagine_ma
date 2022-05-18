/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';;
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

  private _storage: Storage | null = null;


  constructor(
    private apollo: Apollo,
    private storage: Storage
  ){
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any): Promise<any> {
    return this._storage?.set(key, value);
  }

  public get(key: string): Promise<any> {
    return this._storage?.get(key);
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

  async isLogin(): Promise<boolean>{
    const id_storage = await this.get('ID_USER');
    const token_storage = await this.get('ACCESS_TOKEN');
    if(!id_storage){
      console.log('id_storage2', id_storage);
      return false;
    }else {
      let flag: boolean;
      const data1 = await this.apollo.watchQuery<any>({
        query: getAuth,
        variables: {
          id: id_storage,
          token: token_storage
        }
      }).valueChanges
      .subscribe(({data})=>{
        console.log('data', data);
        flag = true;
      }, (error) =>{
        flag = false;
      });
      return flag;
    }

  }

  signout(){
    this._storage.remove('ID_USER');
    this._storage.remove('ACCESS_TOKEN');
  }

}
