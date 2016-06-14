import { Component, Injectable} from 'angular2/core';

import { Http, HTTP_DIRECTIVES} from 'angular2/http';


@Component({
  selector: 'gituser-test',
  template: `<h1>hello</h1>
  <button (click)="showAll()">show users</button>
  <ul *ngIf="showOrif">
    <li *ngFor="#item of names">{{item.name}}<a href="{{item.html_url}}">{{item.url}}</a></li>
  </ul>`
  })
  //  directives: [HTTP_DIRECTIVES]

//@Injectable()
export class Gitone {
    constructor(_http: Http) {
      this._http = _http;
    }
    showOrif: boolean = false;
    names = [];
    showAll() {
      this.showOrif = !this.showOrif;
      this._http.get('https://api.github.com/users').subscribe(res => this.names = res.json());


    }
  }
