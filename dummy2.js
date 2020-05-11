function getCustomersData(accountNumbers) {
    var dbAccounts = [
        {
            accountNumber: '1021787909',
            bvn:'198797989',
            name: 'Mudi',
            dateAccWasOpened: '20 March 2018',
            loans: null,
            deposits: [
                {
                    amount: 100,
                    dateOfTransaction: '10 June 2018'
                    
                },
                {
                    amount: 20,
                    dateOfTransaction: '5 August 2018'
                },
            ],
            withdrawals: [
                {
                    amount: 20,
                    dateOfTransaction: '12 July 2018'
                },
                {
                    amount: 70,
                    dateOfTransaction: '11 December 2018'
                }
            ]
                
        },
        {
            accountNumber: '1211332101',
            bvn:'219201237',
            name: 'Ebi',
            dateAccWasOpened: '29 May 2019',
            loans: 233,
            deposits: [
                {
                    amount: 90,
                    dateOfTransaction: '27 July 2019'
                    
                },
                {
                    amount: 40,
                    dateOfTransaction: '15 August 2019'
                },
            ],
            withdrawals: [
                {
                    amount: 20,
                    dateOfTransaction: '12 December 2019'
                },
                {
                    amount: 70,
                    dateOfTransaction: '20 December 2019'
                }
            ]
                
        },
        {
            accountNumber: '1090999991',
            bvn:'912754891',
            name: 'Sammy',
            dateAccWasOpened: '19 November 2019',
            loans: null,
            deposits: [
                {
                    amount: 100,
                    dateOfTransaction: '17 December 2019'
                    
                },
                {
                    amount: 40,
                    dateOfTransaction: '21 December 2019'
                },
            ],
            withdrawals: [
                {
                    amount: 9,
                    dateOfTransaction: '12 January 2020'
                },
                {
                    amount: 11,
                    dateOfTransaction: '10 March 2020'
                }
            ]
                
        }
    ]

    var fetchedData = [];

    accountNumbers.forEach(function(accountNumber) {
        dbAccounts.forEach(function(dbAccount) {
            if(accountNumber === dbAccount.accountNumber) {
                fetchedData.push(dbAccount);
            };
        });
    })
    return fetchedData;


}
    var accountNumbers = ['1021787909', '1090999991', '1211332101', '0021988343'];

    var customerData = getCustomersData(accountNumbers);
console.log(customerData);