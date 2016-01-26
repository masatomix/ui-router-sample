'use strict';

/**
 * @ngdoc service
 * @name uiRouterSampleApp.WeatherServices
 * @description
 * # WeatherServices
 * Factory in the uiRouterSampleApp.
 */
angular.module('uiRouterSampleApp')
  .factory('WeatherServices', ['$resource', function ($resource) {
    // Service logfic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource('http://weather.olp.yahooapis.jp/v1/place', {}, {
      getWeather: {
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=:lat&lon=:lon',
        // http://api.openweathermap.org/data/2.5/forecast/daily?lat=43.067885&lon=141.355539&mode=json&cnt=14
        method: 'JSONP',
        params: {
          callback: 'JSON_CALLBACK',
          mode: 'json',
          cnt: 14
        }
      }
    })
  }]);

//angular.module('uiRouterSampleApp')
//  .factory('WeatherServices1', ['$http', '$routeParam', '$q', function ($http, $routeParam, $q) {
//
//    function callAjax()
//  }
//
//}])
//;
