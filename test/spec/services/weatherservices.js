'use strict';

describe('Service: WeatherServices', function () {

  // load the service's module
  beforeEach(module('uiRouterSampleApp'));

  // instantiate service
  var WeatherServices;
  beforeEach(inject(function (_WeatherServices_) {
    WeatherServices = _WeatherServices_;
  }));

  it('should do something', function () {
    expect(!!WeatherServices).toBe(true);
  });

});
