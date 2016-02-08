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
            ctrl_localData2: 'localDef'
        });
        $scope.$storage2 = $sessionStorage.$default({
            ctrl_sessionData2: 'sessionDef'
        });

        $scope.localData1 = getsetservice.localData1;
        $scope.sessionData1 = getsetservice.sessionData1;

        $scope.onClick = function () {
            getsetservice.localData1 = $scope.localData1;
            getsetservice.sessionData1 = $scope.sessionData1;
            console.log(getsetservice.localData1);
            console.log(getsetservice.sessionData1);

            $scope.$storage1.ctrl_localData2 = $scope.localData1;
            $scope.$storage2.ctrl_sessionData2 = $scope.sessionData1;

        }
    });

