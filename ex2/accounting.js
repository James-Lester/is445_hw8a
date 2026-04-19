module.exports= class Account{
    constructor(firstName) {
        this.firstName = firstName;
        this.balance = 0;
    }

    credit (amt) {
        this.balance += amt;
    }

    describe () {
        let str = `owner: ${this.firstName}, balance: ${this.balance}`;
        return str;
    }
}