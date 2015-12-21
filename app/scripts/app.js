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
    $urlRouterProvider.otherwise('/contents1');
    $stateProvider
      .state('default', {
        url: '',
        views: {
          containerView: {
            templateUrl: 'views/container.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('default.main', {
        url: '',
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
      .state('default.main.contents1', {
        url: '/contents1',
        views: {
          menuView: {
            templateUrl: 'views/menu.html',
            controller: 'MainCtrl'
          },
          contentsView: {
            templateUrl: 'views/contents1.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('default.main.contents2', {
        url: '/contents2',
        views: {
          menuView: {
            templateUrl: 'views/menu.html',
            controller: 'MainCtrl'
          },
          contentsView: {
            templateUrl: 'views/contents2.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('default.about', {
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
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(
      ['$q','$window', function ($q,$window) {
        return {
          'request': function (config) {
            console.log('request!!');
            return config;
          },
          'responseError': function (rejection) {
            console.log('responseError!!');
            $window.alert(rejection.status);
            location.href='#/contents2';
            return $q.reject(rejection);
          }
        }
      }]
    );
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
