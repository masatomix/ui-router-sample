'use strict';

/**
 * @ngdoc service
 * @name uiRouterSampleApp.getsetservice
 * @description
 * # getsetservice
 * Factory in the uiRouterSampleApp.
 */
angular.module('uiRouterSampleApp')
    .factory('getsetservice', function ($localStorage, $sessionStorage) {
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
                console.log('local storage getter!!');
                return $localStorage.data2;
            },
            set data2(val) {
                console.log('local storage setter!!');
                $localStorage.data2 = val;
            },
            get sessionData1() {
                console.log('session storage getter!!');
                return $sessionStorage.sessionData1;
            },
            set sessionData1(val) {
                console.log('session storage setter!!');
                $sessionStorage.sessionData1 = val;
            }
        };
    });

