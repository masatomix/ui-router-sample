'use strict';

describe('Controller: Menu5Ctrl', function () {

  // load the controller's module
  beforeEach(module('uiRouterSampleApp'));

  var Menu5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Menu5Ctrl = $controller('Menu5Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
