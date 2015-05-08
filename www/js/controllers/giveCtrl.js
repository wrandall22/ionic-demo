'use strict';

angular.module('demo.give', [])
    .controller('GiveCtrl', function($scope, $stateParams, $ionicModal, designations) {
        $scope.designationToGiveTo = designations.get($stateParams.designationNumber);

        $ionicModal.fromTemplateUrl('amounts-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.amountsModal = modal;
        });

        $ionicModal.fromTemplateUrl('frequency-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.frequencyModal = modal;
        });

        $scope.openModal = function(whichModal) {
            if(whichModal === 'amounts') {
                $scope.amountsModal.show();
            }
            else if(whichModal === 'frequency') {
                $scope.frequencyModal.show();
            }
        };

        $scope.closeModal = function(whichModal, chosenValue) {
            if(whichModal === 'amounts') {
                $scope.chosenAmount = chosenValue;
                $scope.amountsModal.hide();
            }
            else if(whichModal === 'frequency') {
                $scope.chosenFrequency = chosenValue;
                $scope.frequencyModal.hide();
            }
        };

        $scope.$on('$destroy', function() {
            $scope.amountsModal.remove();
            $scope.frequencyModal.remove();
        });

        $scope.chosenAmount = 0;
        $scope.chosenFrequency = 'Single';
    });