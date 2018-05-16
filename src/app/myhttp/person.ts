export class Person {

  private name: string;
  private age: number;
  private email: string;
  private address: string;

  constructor(name:string, age:number, email:string, address:string) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.address = address;
  }

  public getname() {
    return this.name;
  }

  public editname(newname:string){
     this.name = newname;
  }


  public getage() {
    return this.age;
  }

  public getallinfo() {
    return `all info 
    --${this.name}
    -- ${this.age} 
    --${this.email}
    -- ${this.address}
    -- END
    `
  }


}
