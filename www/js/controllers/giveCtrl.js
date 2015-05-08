'use strict';

angular.module('demo.give', [])
    .controller('GiveCtrl', function($scope, $stateParams, designations) {
        $scope.designationToGiveTo = designations.get($stateParams.designationNumber);
    });