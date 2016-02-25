'use strict';

describe('Controller: Menu6Ctrl', function () {

  // load the controller's module
  beforeEach(module('uiRouterSampleApp'));

  var Menu6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Menu6Ctrl = $controller('Menu6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Menu6Ctrl.awesomeThings.length).toBe(3);
  });
});
