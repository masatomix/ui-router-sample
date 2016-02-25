'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:Main4Ctrl
 * @description
 * # Main4Ctrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
    .controller('Main4Ctrl', ['WeatherServices2', '$scope', '$location' ,function (WeatherServices2, $scope, $location) {

        $scope.onclick1 = function () {
            WeatherServices2.getWeather1().then(function (result) {
                console.log(result.data);
                $scope.data = result.data;
            });

        };
        $scope.onclick2 = function () {
            WeatherServices2.getWeather2().success(function (data) {
                console.log(data);
                $scope.data = data;
            });
        };

        $scope.onclick3 = function () {
            console.log('button3');
            WeatherServices2.getWeather3()
                .success(function (data) {
                    console.log(data);
                    $scope.data = data;
                })
                .error(function (data) {
                    console.log(data);
                    $scope.data = data;
                });
        }
    }
    ]);