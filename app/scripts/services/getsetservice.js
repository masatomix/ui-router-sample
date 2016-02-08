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

            get localData1() {
                console.log('local storage getter!!');
                return $localStorage._localData1;
            },
            set localData1(val) {
                console.log('local storage setter!!');
                $localStorage._localData1 = val;
            },
            get sessionData1() {
                console.log('session storage getter!!');
                return $sessionStorage._sessionData1;
            },
            set sessionData1(val) {
                console.log('session storage setter!!');
                $sessionStorage._sessionData1 = val;
            }
        };
    });

