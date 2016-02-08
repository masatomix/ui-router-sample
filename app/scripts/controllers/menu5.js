'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Menu5Ctrl
 * @description
 * # Menu5Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
    .controller('Menu5Ctrl', function ($scope, getsetservice, $localStorage, $sessionStorage) {
        //$scope.data = getsetservice.data2;
        //
        //$scope.onClick = function (data) {
        //    getsetservice.data2 = data;
        //    console.log(getsetservice.data2);
        //}
        $scope.$storage1 = $localStorage.$default({
            data3: 'a'
        });
        $scope.$storage2 = $sessionStorage.$default({
            sessionData2: 'a'
        });

        $scope.data = getsetservice.data2;
        $scope.sessionData1 = getsetservice.sessionData1;

        $scope.onClick = function () {
            getsetservice.data2 = $scope.data;
            getsetservice.sessionData1 = $scope.sessionData1;
            console.log(getsetservice.data2);
            console.log(getsetservice.sessionData1);

            $scope.$storage1.data3 = $scope.data;
            $scope.$storage2.sessionData2 = $scope.sessionData1;

        }
    });

