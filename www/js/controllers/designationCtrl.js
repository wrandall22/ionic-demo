'use strict';

angular.module('demo.designation', [])

.controller('DesignationCtrl', function($scope, $stateParams, designations) {
    $scope.viewedDesignation = designations.get($stateParams.designationNumber);
});
