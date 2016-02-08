'use strict';

/**
 * @ngdoc service
 * @name uiRouterSampleApp.SampleService3
 * @description
 * # SampleService3
 * Factory in the uiRouterSampleApp.
 */
angular.module('uiRouterSampleApp')
  .factory('SampleService3', function () {
    return {
      someMethod1: function () {
        var ret = {
          value1: "1",
          value2: "2",
          value3: "3"
        };
        console.log('aaa');
        console.log(ret);
        return ret;
      },
      someMethod2: function () {
        var ret = {
          value1: "10",
          value3: "30"
        };
        return ret;
      }
    };
  });
