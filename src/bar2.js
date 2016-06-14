import { Component} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import { Welcome} from './bar2subpage/welcome';
import { Aboutme} from './bar2subpage/aboutme';
import { Mygitme} from './bar2subpage/mygitme';


@Component({
  selector: 'bar2',
  template: `<p>this is bar-2</p>
  <p>this have subpage need child-router</p>
  <nav>
      <a [routerLink]="['Myabout']">About2</a>
      <a [routerLink]="['Mygit']">My github2</a>
      <a [routerLink]="['Mywelcome']">Welcome2</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`p{background-color:green}`],
  directives: [ROUTER_DIRECTIVES]
  })

@RouteConfig([{
  path: '/welcome',
  component: Welcome,
  name: 'Mywelcome'
}, {
  path: '/about',
  component: Aboutme,
  name: 'Myabout'
}, {
  path: '/github',
  component: Mygitme,
  name: 'Mygit',
  useAsDefault: true
}, {
  path: '/**',
  redirectTo: ['Mywelcome']
}])
export class Bar2 {
    constructor() {
      console.log('from bar 2');
    }
  }
