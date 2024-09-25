sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'tanabe.cashmanagement.banktransaction',
            componentId: 'BankTransactionList',
            contextPath: '/BankTransaction'
        },
        CustomPageDefinitions
    );
});