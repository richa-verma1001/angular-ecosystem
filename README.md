## About
Get started with running your web applications with Angular

### Template includes
+ Transpiling JS using babel and babel preset for es2015
+ LESS conversion into CSS
+ JSON support to include JSOn files in JS

### Run application
````
npm install
npm run production   [Run production via webpack -p]

or
npm install
npm run start  [Run devmode via webpack-dev-server]
````

### Description
See ![Webpack Template](https://github.com/richa-verma1001/webpack-template) for understanding building with webpack and plugins.


### Expected Output
This is a simple application. Upon run, by default webpack-dev-server will host your dist/index.html file on localhost:8080. If you hit this page in the browser, you will see the result of app/index.html in browser window and console.

### Notes
+ Note server.js exists but is not used in this template.
+ To use babel6 with webpack, babel preset is needed for imports to work in JS files. Check .babelrc file.


### References
https://www.youtube.com/watch?v=nzKfD7Ttm7A&list=PLY4rE9dstrJzHO3zS-wi8roObKHl_EEY_
