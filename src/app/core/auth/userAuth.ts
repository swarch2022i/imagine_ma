export class UserAuth {

  id: number;
  username: string;
  token: string;

  constructor(
    id: number,
    username: string,
    token: string,
  ){
    this.id = id;
    this.username = username;
    this.token = token;
  }

}
