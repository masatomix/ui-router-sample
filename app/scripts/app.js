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
      .state('default.main.contents3', {
        url: '/contents3',
        views: {
          menuView: {
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
          },
          contentsView: {
            templateUrl: 'views/contents3.html',
            controller: 'Main3Ctrl'
          }
        }
      })
      .state('default.main.contents4', {
        url: '/contents4',
        views: {
          menuView: {
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
          },
          contentsView: {
            templateUrl: 'views/contents4.html',
            controller: 'Main4Ctrl'
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
  //.config(['$httpProvider', function ($httpProvider) {
  //  $httpProvider.interceptors.push(
  //    ['$q', '$window', function ($q, $window) {
  //      return {
  //        'request': function (config) {
  //          console.log('request!!');
  //          return config;
  //        },
  //        'responseError': function (rejection) {
  //          console.log('responseError!!');
  //          $window.alert(rejection.status);
  //          location.href = '#/contents2';
  //          return $q.reject(rejection);
  //        }
  //      }
  //    }]
  //  );
  //}])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(
      ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {
        return {
          //request: function (config) {
          //  config.requestTimestamp = new Date().getTime();
          //  return config;
          //},
          //response: function (response) {
          //  response.config.responseTimestamp = new Date().getTime();
          //  return response;
          //},
          responseError: function (rejection) {
            if (401 == rejection.status) {
              alert('Auth Error!');
            }
            return $q.reject(rejection);
          }
        };
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
