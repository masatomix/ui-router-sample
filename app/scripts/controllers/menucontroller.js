'use strict';

/**
 * @ngdoc function
 * @name uiRouterSampleApp.controller:MenucontrollerCtrl
 * @description
 * # MenucontrollerCtrl
 * Controller of the uiRouterSampleApp
 */
angular.module('uiRouterSampleApp')
    .controller('MenucontrollerCtrl', function ($scope, WeatherServices) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        console.log('before');
        WeatherServices.getWeather().$promise.then(function (data) {
            console.log(data);
            alert(data);
        });
        WeatherServices.geoCoder({query: '東京'}).$promise.then(function (data) {
            console.log(data);
            alert(data);
        });
        //alert('aaa');
        console.log('after');
    });
