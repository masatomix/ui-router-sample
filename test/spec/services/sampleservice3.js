'use strict';

describe('Service: SampleService3', function () {

  // load the service's module
  beforeEach(module('uiRouterSampleApp'));

  // instantiate service
  var SampleService3;
  beforeEach(inject(function (_SampleService3_) {
    SampleService3 = _SampleService3_;
  }));

  it('should do something', function () {

    SampleService3.someMethod1();
    SampleService3.someMethod1();
    //expect(!!SampleService3).toBe(true);
  });

});
