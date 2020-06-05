var person = {
    name: 'Mudi',
    age: 100,
    sex: 'Male',
    status: 'SINGLE',
    isHandsome: true,
    cars: ['Benz', 'Bently', 'RangeRover'],
    wife: {
        name: 'Aisha',
        age: 80,
        sex: 'female'
    },
    children: {
        firstChild: {
            name: 'David',
            sex: 'male',
        },
        thirdChild: {
            name: 'Sarah',
            sex: 'female'
        },
        secondChild: {
            name: 'Paul',
            sex: 'male',
            welcome: function() {
                console.log('Welcome,' + this.name)
            },
            playWith: function(person) {
                console.log(this.name + " now playing with " + person.name)
            }
        }
    },
    getCarName: function(num) {
        console.log("The car is a " + this.cars[num])
    }

    // welcome: function() {
    // console.log('Welcome,' + this.name)
    // }

    // children: [
    //     {
    //         name: 'David',
    //         sex: 'male',
    //     },
    //     {
    //         name: 'Sarah',
    //         sex: 'female'
    //     },
    //     {
    //         name: 'Paul',
    //         sex: 'male'
    //     }
    // ]
}



// deposits, loans, withdrawals, person's name, date persons bank acc was opened, bvn.
// the deposit/withdrawal should contain the amount and date of trasaction
// details of past loans should contain amount and date
/*CBN should be able to accept multiple account nos, and they should be able to give us details all of them and if the account
number does not exist they should tell us
*/
// if the account number is not upto 10 digits cbn should tell us its incorrect

function getCustomersData(accountNumbers) {
    var dbAccounts = [
        {
            accountNumber: '1021787909',
            bvn:'198797989',
            name: 'Mudi',
            age:'11',
            sex: 'male',
            dateAccWasOpened: '20 March 2018',
            loans: null,
            deposits: [
                {
                    amount: 100000,
                    dateOfTransaction: '10 June 2018'
                    
                },
                {
                    amount: 200000,
                    dateOfTransaction: '5 August 2018'
                },
            ],
            withdrawals: [
                {
                    amount: 20000,
                    dateOfTransaction: '12 July 2018'
                },
                {
                    amount: 70000,
                    dateOfTransaction: '11 December 2018'
                }
            ]
                
        },
        {
            accountNumber: '1211332101',
            bvn:'219201237',
            name: 'Ebi',
            age:'9',
            sex: 'male',
            dateAccWasOpened: '29 May 2019',
            loans: [
                {
                    amount: 500000,
                    dateOfTransaction:'11 June 2019' 
                }
            ],
            deposits: [
                {
                    amount: 90000,
                    dateOfTransaction: '27 July 2019'
                    
                },
                {
                    amount: 40000,
                    dateOfTransaction: '15 August 2019'
                },
            ],
            withdrawals: [
                {
                    amount: 20000,
                    dateOfTransaction: '12 December 2019'
                },
                {
                    amount: 7000,
                    dateOfTransaction: '20 December 2019'
                }
            ]
                
        },
        {
            accountNumber: '1090999991',
            bvn:'912754891',
            name: 'Sammy',
            age:'13',
            sex: 'male',
            dateAccWasOpened: '19 November 2019',
            loans: 'Nil',
            deposits: [
                {
                    amount: 190000,
                    dateOfTransaction: '17 December 2019'
                    
                },
                {
                    amount: 40000,
                    dateOfTransaction: '21 December 2019'
                },
            ],
            withdrawals: [
                {
                    amount: 9000,
                    dateOfTransaction: '12 January 2020'
                },
                {
                    amount: 70000,
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
// var accountNumbers = ['1021787909', '1090999991', '004412987', '0021988343','1211332101'];



function thisFunction(accountNumbers) {
    var customerNames = getCustomersData(accountNumbers).map(function(acctData) {
        var sum = 0;
        acctData.deposits.forEach(function(deposit) {
            sum = sum + deposit.amount;
        });
    
        return {
            name: acctData.name,
            acctNumber: acctData.accountNumber,
            totalDeposit: sum
        };
    });
    return customerNames
}


console.log(thisFunction(accountNumbers))


