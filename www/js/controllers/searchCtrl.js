'use strict';

angular.module('demo.designation')
		.controller('SearchCtrl', function($scope, designations) {
			$scope.designations = designations.all();
		});