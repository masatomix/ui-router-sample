'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Main4Ctrl
 * @description
 * # Main4Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
  .controller('Main4Ctrl', ['WeatherService2', '$scope', function (WeatherServices2, $scope) {

    $scope.onclick1 = function () {
      console.log('button1');
      $scope.data = WeatherService2.getWeather1();
    }
    $scope.onclick2 = function () {
      console.log('button1');
      $scope.data = WeatherService2.getWeather2();
    }
    $scope.onclick3 = function () {
      console.log('button3');
      $scope.data = WeatherService2.getWeather3();
    }

  }]);
