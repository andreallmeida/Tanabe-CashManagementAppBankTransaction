sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tanabe/cashmanagement/banktransaction/test/integration/FirstJourney',
		'tanabe/cashmanagement/banktransaction/test/integration/pages/BankTransactionList',
		'tanabe/cashmanagement/banktransaction/test/integration/pages/BankTransactionObjectPage'
    ],
    function(JourneyRunner, opaJourney, BankTransactionList, BankTransactionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tanabe/cashmanagement/banktransaction') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBankTransactionList: BankTransactionList,
					onTheBankTransactionObjectPage: BankTransactionObjectPage
                }
            },
            opaJourney.run
        );
    }
);