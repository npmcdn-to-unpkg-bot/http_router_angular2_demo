import { Component} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { Bar1} from './bar1';
import { Bar2} from './bar2';
import { Bar3} from './bar3';

@Component({
  selector: 'app-test',
  template: `<h1>root nav </h1>
  <a [routerLink]="['Nav-bar1']">Bar-1</a>
  <a [routerLink]="['Nav-bar2','Mygit']">Bar-2</a>
  <a [routerLink]="['Nav-bar3','Mywelcome']">Bar-3</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
  })

@RouteConfig([{
  path: '/childnav1',
  name: 'Nav-bar1',
  component: Bar1,
  useAsDefault: true
}, {
  path: '/childnav2/...',
  name: 'Nav-bar2',
  component: Bar2
}, {
  path: '/childnav3/...',
  name: 'Nav-bar3',
  component: Bar3
}])
export class Myapp {

  }
