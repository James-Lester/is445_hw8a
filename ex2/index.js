const Account = require('./accounting');

const myAccount = new Account("James");
myAccount.credit(57000);
console.log(myAccount.describe());