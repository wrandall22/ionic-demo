'use strict';

angular.module('demo.give', [])
    .controller('GiveCtrl', function($scope, $stateParams, $ionicModal, designations, payments) {
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

        $ionicModal.fromTemplateUrl('draw-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.drawModal = modal;
        });

        $ionicModal.fromTemplateUrl('payment-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.paymentModal = modal;
        });

        $scope.openModal = function(whichModal) {
            if(whichModal === 'amounts') {
                $scope.amountsModal.show();
            }
            else if(whichModal === 'frequency') {
                $scope.frequencyModal.show();
            }
            else if(whichModal === 'draw') {
                $scope.drawModal.show();
            }
            else if(whichModal === 'payment') {
                $scope.paymentModal.show();
            }
        };

        $scope.closeModal = function(whichModal, chosenValue) {
            if(whichModal === 'amounts') {
                $scope.chosenAmount = chosenValue;
                $scope.amountsModal.hide();
            }
            else if(whichModal === 'frequency') {
                $scope.chosenFrequency = chosenValue;
                $scope.recurring = $scope.chosenFrequency !== 'Single';
                $scope.frequencyModal.hide();
            }
            else if(whichModal === 'draw') {
                $scope.chosenDrawDay = chosenValue;
                $scope.drawModal.hide();
            }
            else if(whichModal === 'payment') {
                $scope.chosenPaymentId = chosenValue;
                $scope.chosenPayment = payments.get($scope.chosenPaymentId);
                $scope.paymentModal.hide();
            }
        };

        $scope.$on('$destroy', function() {
            $scope.amountsModal.remove();
            $scope.frequencyModal.remove();
            $scope.drawModal.remove();
            $scope.paymentModal.remove();
        });

        $scope.chosenAmount = 0;
        $scope.chosenFrequency = 'Single';
        $scope.chosenDrawDay = '05';
        $scope.recurring = $scope.chosenFrequency !== 'Single';

        $scope.chosenPaymentId = '0';
        $scope.chosenPayment = {};
        $scope.paymentList = payments.all();
    });