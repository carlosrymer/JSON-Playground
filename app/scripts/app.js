/**
 * Angular Controller to manage JSON Playground
 * @lastupdated 10.12.2013 crymer
 */

// Define the angular module
var jsonPlayground = angular.module('jsonPlayground', []);

// Define the angular controller
jsonPlayground.controller('jsonPlay', function($scope, $http) {

	// Define levels
	$scope.levels              = Modernizr.localstorage && localStorage['jsonplayLevels'] ? angular.fromJson(localStorage['jsonplayLevels']) : [{"key":"","value":"","sublevels":[]}];

	/**
	 * Starts all over
	 */
	$scope.startOver = function()
	{
		$scope.levels = [{"key":"","value":"","sublevels":[]}];
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

});