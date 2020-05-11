function getCustomersData(accountNumbers) {
    var dbAccounts = [
        {
            accountNumber: '1021787909',
            bvn:'198797989',
            name: 'Mudi',
            dateAccWasOpened: '20 March 2018',
            loans: null,
            age: '20',
            sex: 'male',
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
            age: '30',
            sex: 'male',
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
            age: '34',
            sex: 'male',
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
    
    var fetchedAccounts = [];

    accountNumbers.forEach(function(acctNumber) {
        dbAccounts.forEach(function(dbAccount) {
            if(acctNumber === dbAccount.accountNumber) {
                fetchedAccounts.push(dbAccount);
                // break;
            }
        })
        
    })
    return fetchedAccounts;
}

var accountNumbers = ['1021787909', '1211332101', '1090999991', '004412987', '0021988343'];

// 1021787909,1211332101,1090999991,004412987, 0021988343

// console.log(testFunction(accountNumbers))

function testFunction (accountNumbers) {
    var customerAccounts = getCustomersData(accountNumbers);
    var biggestCustomer = {
        accountBalance: 0
    };

    customerAccounts.forEach(function(customerAccount) {
        const acctBalance = getTransactionsSum(customerAccount.deposits) - getTransactionsSum(customerAccount.withdrawals);
    
        if (customerAccount.loans === null && acctBalance > biggestCustomer.accountBalance) {
            biggestCustomer = {
                accountBalance: acctBalance,
                customerAccount: customerAccount
            }
        }
    });

    function getTransactionsSum(transactions) {
        let totalTransactionAmount = 0;

        transactions.forEach(function(transaction) {
            totalTransactionAmount += transaction.amount;
        });

        return totalTransactionAmount;
    };
    return biggestCustomer;
}




console.log(testFunction(accountNumbers))
