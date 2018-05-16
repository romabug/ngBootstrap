export class User {
  id: number;
  userName: string;
  nickName: string;
  password: string;
  remeberMe: boolean;
  email: string;
  confirmPassword: string;
  vcode: string;
}


export class Wwp {
  constructor( id:number, name:string, address:string) {
    this.unitadd = address;
    this.unitid = id;
    this.unitname = name;
  }
  unitid: number;
  unitname: string;
  unitadd: string;

}
