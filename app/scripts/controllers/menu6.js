'use strict';


angular.module('uiRouterSampleApp')
    .controller('Menu6Ctrl', function (sampleRestService, $scope) {
        // 同期っぽく、値をセットする
        var result = sampleRestService.getWeather();
        console.log(result);


        // 非同期っぽく、callbackで値をセットする
        sampleRestService.getWeather().$promise.then(function (data) {
            $scope.result = data;
            console.log(data);
        });
    })
    .factory('sharedService', function () {
        // Public API here
        return {
            isEmpty: function () {
                return this._data1 == null;
            },

            get cacheData() {
                console.log('getter!!');
                return this._data1;
            },
            set cacheData(val) {
                console.log('setter!!');
                this._data1 = val;
            }
        };
    })
    .factory('sampleRestService', function ($resource, sharedService) {
        // Public API here
        return {
            getWeather: function () {
                if (!sharedService.isEmpty()) {
                    console.log('キャッシュから返す');
                    return sharedService.cacheData;
                } else {
                    console.log('サーバからとって返す.そのときキャッシュにも詰める');
                    return $resource("/api/weather1.json").get(function (result) {
                        sharedService.cacheData = result;
                    });
                }
            }
        };
    });