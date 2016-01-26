'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Main4Ctrl
 * @description
 * # Main4Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
  .controller('Main4Ctrl', function ($scope) {

    $scope.onclick1 = function () {
      $scope.data = SampleService3.someMethod1();
    }
    $scope.onclick2 = function () {
      $scope.data = SampleService3.someMethod2();
    }

  });
