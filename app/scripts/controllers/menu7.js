'use strict';


angular.module('uiRouterSampleApp')
    .controller('Menu7Ctrl', function (sampleRestService1, $scope) {
        var p1 = sampleRestService1.getWeather1();
        console.log(p1);
        var p2 = sampleRestService1.getWeather2();
        console.log(p2);
        var p3 = sampleRestService1.getWeather3();
        console.log(p3);


        // 非同期っぽく、callbackで値をセットする
        sampleRestService1.getWeather1().then(function (data) {
            $scope.result = data;
            console.log(data);
        });
    })
    .factory('sampleRestService1', function ($resource, $sessionStorage) {
            // Public API here
            var USER_URL = '/api/:weather.json';
            var r = $resource(USER_URL,
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
