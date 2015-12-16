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
        url: '/main',
        views: {
          containerView: {
            templateUrl: 'views/container.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('main.main', {
        url: '/mainMain',
        views: {
          headerView: {
            templateUrl: 'views/header.html',
            controller: 'MainCtrl'
          },
          mainView: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('main.about', {
        url: '/about',
        views: {
          headerView: {
            templateUrl: 'views/header.html',
            controller: 'MainCtrl'
          },
          mainView: {
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
