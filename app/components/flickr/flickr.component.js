import angular from 'angular';

const moduleName = 'flickr';
var greetModule = angular.module(moduleName, []);


greetModule.component('flickr', {
    //template: 'Hello, {{$ctrl.user}}!',
    templateUrl: './app/components/flickr/flickr.template.html',
    controller: function FlickrController() {
      console.log('Hitting controller for flickr');
      this.user = 'Richa';
    }
  });

export default moduleName;
