import {Injectable} from '@angular/core';
import {Person} from './person';

@Injectable()
export class Service1Service {

  constructor( ) {

  };

  private tmp: any = new Person('tony', 44, 'ilovealdi@gmail.com', '142 ashley st');


  public getme() {

     return this.tmp ;
  };


}
