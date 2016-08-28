import '../css/base.less';
import config from '../data/config.json';
var angular = require('angular');
var ngModule = angular.module('app', []);


console.log('Hello Angular [JS]');

class Log {

  constructor() {
      console.log(config.msg);
  }

}

new Log();
