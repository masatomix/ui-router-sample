'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Menu5Ctrl
 * @description
 * # Menu5Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
    .controller('Menu5Ctrl', function ($scope, getsetservice) {
        //$scope.data = getsetservice.data2;
        //
        //$scope.onClick = function (data) {
        //    getsetservice.data2 = data;
        //    console.log(getsetservice.data2);
        //}


        $scope.data = getsetservice.data2;

        $scope.onClick = function (data) {
            getsetservice.data2 = data;
            console.log(getsetservice.data2);
        }
    });

