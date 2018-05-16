import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
//不可以从 import {Observable} from 'rxjs/Observable';

import {Observable} from 'rxjs/Observable';
import {Service1Service} from './service1.service';


@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.scss'],
  providers: [Service1Service]

})
export class MyhttpComponent implements OnInit {

  private commentUrl: string = '/mock-data/comment-mock.json';
  private dataSource: Observable<any>;
  private mydata: any;


  private hiyou: any;


  constructor(public myhttp: Http, private ser: Service1Service) {
    this.dataSource = this.myhttp.get(this.commentUrl).map(response => response.json());

  }


  ngOnInit() {

   this.hiyou = this.ser.getme();
   this.hiyou.email = "kkkksdfl@dkkd.com"


    // console.log('--myhttp-->');
    //
    // this.dataSource.subscribe(
    //   data => {
    //     this.mydata = data;
    //   }
    // )
    //
    //
    // console.log(this.mydata);

  }

}
