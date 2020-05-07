var accountNumbers = ['1021787909', '1090999991', '1211332101', '0021988343'];

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
}



console.log(biggestCustomer)



// the older solution

var accountNumbers = ['1021787909', '1090999991', '1211332101', '0021988343'];

var customerAccounts = getCustomersData(accountNumbers);
var biggestCustomer = {
    accountBalance: 0
};

customerAccounts.forEach(function(customerAccount) {
    let totalDepositAmount = 0;
    let totalWithdrawalAmount = 0;

    customerAccount.deposits.forEach(function(deposit) {
        totalDepositAmount += deposit.amount;
    });
    customerAccount.withdrawals.forEach(function(withdrawal) {
        totalWithdrawalAmount += withdrawal.amount;
    });

    const acctBalance = totalDepositAmount - totalWithdrawalAmount;
    
    if (customerAccount.loans === null && acctBalance > biggestCustomer.accountBalance) {
        biggestCustomer = {
            accountBalance: acctBalance,
            customerAccount: customerAccount
        }
    }
});



console.log(biggestCustomer)