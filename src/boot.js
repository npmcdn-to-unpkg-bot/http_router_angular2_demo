import 'zone.js';
import 'reflect-metadata';

import { bootstrap} from 'angular2/platform/browser';

import { ROUTER_PROVIDERS} from 'angular2/router';
import { HTTP_PROVIDERS} from 'angular2/http';


import { Myapp} from './myapp';

bootstrap(Myapp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
