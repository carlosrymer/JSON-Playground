/**
 * Angular Controller to manage JSON Playground
 * @lastupdated 10.05.2013 crymer
 */

// Define the angular module
var jsonPlayground = angular.module('jsonPlayground', []);

// Define the angular controller
jsonPlayground.controller('jsonPlay', function($scope, $http) {

	// Define some required variable
	$scope.levels              = Modernizr.localstorage && localStorage['jsonplayLevels'] ? angular.fromJson(localStorage['jsonplayLevels']) : [{"key":"","value":"","sublevels":[]}];
	$scope.fresh               = [{"key":"","value":"","sublevels":[]}];
	$scope.callbackActionState = 0;
	$scope.callback            = null;
	$scope.callbackActionText  = ['Add', 'Remove'];

	/**
	 * Toggles the callback action state
	 */
	$scope.toggleCallbackState = function()
	{
		$scope.callbackActionState = $scope.callbackActionState ? 0 : 1;
	}

	/**
	 * Updates the local storage based on new values
	 */
	$scope.updateLocalStorage = function()
	{
		localStorage['jsonplayLevels'] = JSON.stringify($scope.levels);
	}

	/**
	 * Creates a new object and pushes it into an array for new levels
	 * @param array a The array to push the new object into
	 * @param boolean s Whether to exclude sublevels or not
	 */
	$scope.addLevel = function(a, s)
	{
		var object = !s ? {"key":"", "value": "", "sublevels": []} : {"key":"", "value": ""};
		a.push(object);
	}

	/**
	 * Generates the JSON file to be downloaded
	 */
	$scope.getJson = function()
	{
		var d = {"callback": ($scope.callback ? "true" : "false"), "json": JSON.stringify($scope.levels)};
		$http({method: 'POST', url: 'process.php', params: d, headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
	}

});