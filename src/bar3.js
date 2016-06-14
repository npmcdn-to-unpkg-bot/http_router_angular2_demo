import { Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Welcome} from './bar3subpage/welcome3';
import { Aboutme} from './bar3subpage/aboutme3';
import { Mygitme} from './bar3subpage/mygitme3';


@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'bar3',
  template: `<p>this is bar-3</p>
  <nav>
      <a [routerLink]="['Mywelcome']">Welcome3</a>
      <a [routerLink]="['Myabout']">About3</a>
      <a [routerLink]="['Mygit']">My github3</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`p{background-color:red}`],
  })


@RouteConfig([{
  path: '/welcome',
  component: Welcome,
  name: 'Mywelcome',
  useAsDefault: true
}, {
  path: '/about',
  component: Aboutme,
  name: 'Myabout'
}, {
  path: '/github',
  component: Mygitme,
  name: 'Mygit'
}, {
  path: '/**',
  redirectTo: ['Mywelcome']
}])
export class Bar3 {
    constructor() {
      console.log('from bar 3');
    }
  }
