'use strict';
var req = require('request-promise');
var RequestConfig = require('../config/request.config');

var endpoint = require('../config/env.config').endpoint;
var paymentPath = 'payments';
function PaymentService() {
}


PaymentService.prototype.createPayment = function (paymentInfo) {
    paymentInfo.sourceType = 'cielo';
    var paymentEndpoint = endpoint + paymentPath;
    return req(RequestConfig.generateOptions(RequestConfig.POST, paymentEndpoint, paymentInfo))
        .then(function (response) {
            return (JSON.parse(response));
        });
};

module.exports = PaymentService;