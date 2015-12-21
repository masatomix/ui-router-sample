'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
  .controller('MainCtrl', function ($scope, WeatherServices) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('before');
    //WeatherServices.getWeather();
    console.log('after');


  });
