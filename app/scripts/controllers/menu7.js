'use strict';


angular.module('uiRouterSampleApp')
    .controller('Menu7Ctrl', function (sampleRestService1, $scope) {
        var p4 = sampleRestService1.getWeather();
        console.log(p4);
        p4.then(function (sharedService1) {
                console.log(sharedService1);
                $scope.result1 = sharedService1.get(0);
                $scope.result2 = sharedService1.get(1);
            }, function (data) {
                console.log(data);
                console.log('失敗！');
            }
        );
        console.log("非同期なのですぐココに来るよ");
    })

    .factory('sampleRestService1', function ($resource, sharedService1, $q) {
            return {
                getWeather: function () {
                    var d = $q.defer();
                    if (!(sharedService1.isEmpty(0) || sharedService1.isEmpty(1))) {
                        console.log("キャッシュデータを使う");
                        d.resolve(sharedService1);
                    } else {
                        var r1 = $resource('/api/weather1.json');
                        var r2 = $resource('/api/weather2.json',
                            {},
                            {'get': {method: 'GET', timeout: 3500}}
                            // 3.5sでタイムアウトとした
                        );

                        $q.all([r1.get().$promise, r2.get().$promise]).then(
                            function (result) {
                                console.log(result[0]);
                                console.log(result[1]);
                                sharedService1.add(result[0]);
                                sharedService1.add(result[1]);

                                d.resolve(sharedService1);
                                console.log("ホンモノデータを使う。そのあとキャッシュを生成");
                            },
                            function (result) {
                                console.log("$q.allの一つが失敗した");
                                d.reject(result);// $q.all()の失敗を検知してメインのdeferも失敗とする
                            }
                        );
                    }
                    return d.promise;
                },
                get sharedService1() {
                    return sharedService1;
                }
            }
        }
    )

    .factory('sharedService1', function () {
        var _data = [];

        // Public API here
        return {
            isEmpty: function (index) {
                return _data[index] == null;
            },
            get: function (index) {
                return _data[index];
            },
            add: function (val) {
                _data.push(val);
            }
        };
    })
;
