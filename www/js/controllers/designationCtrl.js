'use strict';

angular.module('demo.designation', [])

.controller('DesignationCtrl', function($scope, $stateParams, designations) {
    $scope.viewedDesignation = {};

    designations = designations.all();
    angular.forEach(designations, function(desig) {
        if(desig.designationNumber === $stateParams.designationNumber) {
            $scope.viewedDesignation = desig;
        }
    });
});
