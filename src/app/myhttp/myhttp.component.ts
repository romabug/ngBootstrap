import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
//不可以从 import {Observable} from 'rxjs/Observable';

import { Observable }   from 'rxjs/Observable';


@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.scss']
})
export class MyhttpComponent implements OnInit {

  private commentUrl: string  = "/mock-data/comment-mock.json";
  private dataSource: Observable<any>;
  private mydata:any;


  constructor(public myhttp: Http) {
    this.dataSource =  this.myhttp.get(this.commentUrl).map(response => response.json());

  }




  ngOnInit() {


    console.log("--myhttp-->" );

    this.dataSource.subscribe(
      data => {this.mydata = data ;}
    )



   console.log( this.mydata);

  }

}
