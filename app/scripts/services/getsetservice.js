'use strict';

/**
 * @ngdoc service
 * @name uiRouterSampleApp.getsetservice
 * @description
 * # getsetservice
 * Factory in the uiRouterSampleApp.
 */
angular.module('uiRouterSampleApp')
    .factory('getsetservice', function ($localStorage) {
        // Public API here
        return {
            get data1() {
                console.log('getter!!');
                return this._data1;
            },
            set data1(val) {
                console.log('setter!!');
                this._data1 = val;
            },

            get data2() {
                console.log('web storage getter!!');
                return $localStorage.data2;
            },
            set data2(val) {
                console.log('web storage setter!!');
                $localStorage.data2 = val;
            }
        };
    });

