import { Component} from 'angular2/core';
import { Gitone} from './bar1subpage/gituser';

@Component({
  directives: [Gitone],
  template: `<p>this is bar-1</p>
  <gituser-test>from http ....</gituser-test>
        `,
  styles: [`p{color:lightgrey;
            background-color:blue}`]
  })
export class Bar1 {

    constructor() {
      console.log('from bar1');
    }
  }
