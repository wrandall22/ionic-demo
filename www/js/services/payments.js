'use strict';

angular.module('demo.give')
    .service('payments', function() {
        var payments = [
            {
                paymentId: '1',
                description: 'Amazon Card',
                type: 'Credit Card',
                subType: 'Visa',
                lastFour: '1336',
                billingAddress: {
                    line1: '1234 Test St',
                    city: 'Orlando',
                    state: 'FL',
                    zip: '32832',
                    country: 'USA'
                }
            },
            {
                paymentId: '2',
                description: 'Bank Card',
                type: 'EFT',
                subType: 'Checking',
                lastFour: '4388',
                routingNumber: '123123123',
            }
        ];

        return {
            all: function() {
                return payments;
            },
            get: function(paymentId) {
                var found = {};
                angular.forEach(payments, function(payment) {
                    if(payment.paymentId === paymentId) {
                        found = payment;
                    }
                });
                return found;
            }
        }
    });