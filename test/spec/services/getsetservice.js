'use strict';

describe('Service: getsetservice', function () {

    // load the service's module
    beforeEach(module('uiRouterSampleApp'));

    // instantiate service
    var getsetservice;
    beforeEach(inject(function (_getsetservice_) {
        getsetservice = _getsetservice_;
    }));

    it('should do something', function () {
        expect(!!getsetservice).toBe(true);
        console.log('getter/setterテスト');

        getsetservice.data1 = 'kino';
        console.log('data1: ' + getsetservice.data1);
        console.log('_data1: ' + getsetservice._data1);


        console.log('data2: ' + getsetservice.data2);
        getsetservice.data2 = 'kino';
        console.log('data2: ' + getsetservice.data2);
    });

});
