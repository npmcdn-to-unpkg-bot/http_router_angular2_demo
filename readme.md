1.  jspm init

2.  jspm install angular2 reflect-metadata zone.js es6-shim

3.  jspm install crypto

4.  touch index.html
        add
                  <html>
                    <head>
                      <title>angular2 App</title>
                      <!-- systemJS loader and config -->
                      <script src="jspm_packages/system.js"></script>
                      <script src="config.js"></script>
                    </head>
                    <body>
                      <!-- our angular2 component -->
                      <test-app>
                          Loading...
                      </test-app>

                      <!-- import and run our app -->
                      <script>
                        System.import('src/boot');
                      </script>
                    </body>
                  </html>

5.  touch src/boot.js
        add
                import 'zone.js';
                import 'reflect-metadata';

                import { bootstrap} from 'angular2/platform/browser';

                import { ROUTER_PROVIDERS} from 'angular2/router';
                import { HTTP_PROVIDERS} from 'angular2/http';


                import { Myapp} from './myapp';

                bootstrap(Myapp, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
6. edit config.js

            transpiler: "typescript",
            typescriptOptions: {
              "module": "commonjs",
              "emitDecoratorMetadata": true
            },
            paths: {
              "github:*": "jspm_packages/github/*",
              "npm:*": "jspm_packages/npm/*",
              "app": "src"
            },

            packages: {
              "app": {
                "main": "boot",
                "format": "register",
                "defaultExtension": "ts"
              }
            },
            
            
7.    touch src/myapp.js

       add router, http,
       

8.     run http-server -p 3000

9.    open browser
        localhost:3000
        
        