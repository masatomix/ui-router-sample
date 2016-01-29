'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Main3Ctrl
 * @description
 * # Main3Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
  .controller('Main3Ctrl', ['$scope', 'SampleService3', function ($scope, SampleService3) {

    $scope.onclick1 = function () {
      $scope.data = SampleService3.someMethod1();
    }
    $scope.onclick2 = function () {
      $scope.data = SampleService3.someMethod2();
    }

  }]);

