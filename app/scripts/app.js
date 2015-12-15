'use strict';

/**
 * @ngdoc overview
 * @name uiRouterSampleApp
 * @description
 * # uiRouterSampleApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          containerView: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          containerView: {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      })
  }]);
//.config(function ($routeProvider) {
//  $routeProvider
//    .when('/', {
//      templateUrl: 'views/main.html',
//      controller: 'MainCtrl'
//    })
//    .when('/about', {
//      templateUrl: 'views/about.html',
//      controller: 'AboutCtrl'
//    })
//    .otherwise({
//      redirectTo: '/'
//    });
//});
