import angular from 'angular';

export default function UserAddressConrtoller($scope){

  console.log($scope.$parent.userRouteCtrl.title);
  this.title = $scope.$parent.userRouteCtrl.title;
  this.address = {
    'street': '17 Simon Street',
    'city' : 'Berkely',
    'zip' : '000000'
  }
}
