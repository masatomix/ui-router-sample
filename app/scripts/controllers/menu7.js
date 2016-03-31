'use strict';


angular.module('uiRouterSampleApp')
    .controller('Menu7Ctrl', function (sampleRestService1, $scope,sharedService1) {
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
            $scope.result1 = sharedService1.cacheData1;
            $scope.result2 = sharedService1.cacheData2;
            console.log(data);
        }
,function(data){
   console.log('失敗！');
}


);
    })
    .factory('sharedService1', function () {

        var data1;
        var data2;

        // Public API here
        return {
            isEmpty: function () {
                return this.data1 == null;
            },

            get cacheData1() {
                return this.data1;
            },
            set cacheData1(val) {
                this.data1 = val;
            },
            get cacheData2() {
                return this.data2;
            },
            set cacheData2(val) {
                this.data2 = val;
            }
        };
    })
    .factory('sampleRestService1', function ($resource, sharedService1, $q) {
            // Public API here
            var r = $resource('/api/:weather.json',
                {},
                {'get':{method: 'GET',timeout: 3500}}, // 3.5sでタイムアウトとした
                {stripTrailingSlashes: false}
            );

        var state=false;
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

var d = $q.defer();
if(state){
console.log("キャッシュデータを使う");
  d.resolve(sharedService1);
}else{
                    var promiseAll = $q.all([
                        r.get({weather: 'weather1'}).$promise,
                        r.get({weather: 'weather2'}).$promise
                    ]).then(function(result){
console.log(result[0]);
                        sharedService1.cacheData1=result[0];
                        sharedService1.cacheData2=result[1];
  d.resolve(sharedService1);
  state=true;
console.log("ホンモノデータを使う。そのあとキャッシュを生成");

}
,function(result){
 d.reject(result);// $q.all()の失敗を検知してメインのdeferも失敗とする
}


);

}
                    return d.promise;
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
