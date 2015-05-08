'use strict';

angular.module('demo.give', [])
    .controller('GiveCtrl', function($scope, $stateParams, $ionicModal, designations) {
        $scope.designationToGiveTo = designations.get($stateParams.designationNumber);

        $ionicModal.fromTemplateUrl('amounts-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
    });