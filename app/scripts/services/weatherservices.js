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


angular.module('uiRouterSampleApp')
  .factory('WeatherServices2', ['$http', '$routeParams', '$q',
    function ($http, $routeParams, $q) {
      function callAjax(method, url) {
        //var result = {};
        //$http({
        //    method: method,
        //    url: url
        //}).success(function (data) {
        //    angular.extend(result, data);
        //});
        //return result;

        //var def =$q.defer();
        //$http({
        //    method: method,
        //    url: url
        //}).success(function(data) {
        //def.resolve(data);
        //});
        //return def.promise;


        var promise = $http({
          method: method,
          url: url
        });
        return promise;
      }

      return {
        getWeather1: function () {
          var method = 'GET';
          var url = '/api/weather1.json';
          return callAjax(method, url);
        },
        getWeather2: function () {
          var method = 'GET';
          var url = '/api/weather2.json';
          return callAjax(method, url);
        },
        getWeather3: function () {
          var method = 'GET';
          var url = '/api/weather3.json';
          return callAjax(method, url);
        }
        //getStock: function (code) {
        //  var method = 'JSONP';
        //  var url = 'http://172.127.53.214/api/s/2400/stocks/' + code + '/attribute.json?callback=JSON_CALLBACK';
        //  return callAjax(method, url);
        //},
        //
        //getStockSettlementInfoList: function (code) {
        //  var method = 'JSONP';
        //  var url = 'http://172.127.53.214/api/s/2400/stocks/' + code + '/settlementinfolist.json?callback=JSON_CALLBACK';
        //  return callAjax(method, url);
        //}
      };
    }]);
