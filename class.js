class Account{
    constructor(balance) {  // Constructor
        this.balance = balance;
    }
    
    debit(amount) {
        if (amount > this.balance) {
            return false
        }
        
        if (amount <= this.balance) {
            this.balance -= amount
            return true
        }
    }
    
    getBalance() {
        return this.balance
    }
    
    credit(amount) {
        this.balance += amount
    }
}

const account = new Account(1000)
account.credit(1000)
account.debit(500)
console.log(account.getBalance())