'use strict';

describe('Controller: Main3Ctrl', function () {

  // load the controller's module
  beforeEach(module('uiRouterSampleApp'));

  var Main3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Main3Ctrl = $controller('Main3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
