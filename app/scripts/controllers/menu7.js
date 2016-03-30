'use strict';


angular.module('uiRouterSampleApp')
    .controller('Menu7Ctrl', function (sampleRestService1, $scope) {
        var p1 = sampleRestService1.getWeather1();
        console.log(p1);
        var p2 = sampleRestService1.getWeather2();
        console.log(p2);
        //var p3 = sampleRestService1.getWeather3();
        //console.log(p3);
        var p4 = sampleRestService1.getWeather4();
        console.log(p4);


        // 非同期っぽく、callbackで値をセットする
        p1.then(function (data) {
            $scope.result = data;
            console.log(data);
        });
        p4.then(function (data) {
            $scope.result1 = data[0];
            $scope.result2 = data[1];
            console.log(data);
        });
    })
    .factory('sharedService1', function () {
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
    .factory('sampleRestService1', function ($resource, $sessionStorage, $q) {
            // Public API here
            var r = $resource('/api/:weather.json',
                {},
                {},
                {stripTrailingSlashes: false}
            );

            // Resourceの戻り値。
            return {
                getWeather1: function () {
                    return r.get({weather: 'weather1'}).$promise;
                },
                getWeather2: function () {
                    return r.get({weather: 'weather2'}).$promise;
                },
                getWeather3: function () {
                    return r.get({weather: 'weather3'}).$promise;
                },
                getWeather4: function () {
                    var promiseAll = $q.all([
                        r.get({weather: 'weather1'}).$promise,
                        r.get({weather: 'weather2'}).$promise
                    ]);
                    return promiseAll;
                }
                //login: function (postData) {
                //    postData.status = '1';
                //    var result = r.update(postData,
                //        function () {
                //            result.password = null;
                //            $sessionStorage._userInfo = result;
                //        }
                //    );
                //    return result;
                //},
                //

                //logout: function () {
                //    var userInfo = $sessionStorage._userInfo;
                //    console.log(userInfo);
                //    userInfo.status = '0';
                //    var postData = {};
                //    postData.status = userInfo.address;
                //    postData.status = userInfo.status;
                //    postData.sessionId = userInfo.sessionId;
                //    postData.address = userInfo.address;
                //
                //    var result = r.update(postData, function () {
                //            console.log("logout succsss");
                //            $sessionStorage._userInfo = null;
                //        }
                //    );
                //    return result;
                //},
                //
                //isLogged: function () {
                //    return !!$sessionStorage._userInfo;
                //},
                //
                //get user() {
                //    //return userInfo;
                //    return $sessionStorage._userInfo;
                //},
                //set user(val) {
                //    //userInfo = val;
                //    $sessionStorage._userInfo = val;
                //}

            }
        }
    )
;
