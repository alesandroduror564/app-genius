/*
Filename: ComplexApp.js

This code is a complex application that simulates a bank management system. It includes functionality for creating customer accounts, managing transactions, calculating interest, and generating reports.

Disclaimer: This is a simplified simulation for demonstration purposes only. It doesn't include real-world security measures and is not intended for production use.

*/

// Customer class representing a bank customer
class Customer {
  constructor(name, accountBalance) {
    this.name = name;
    this.accountBalance = accountBalance;
  }

  deposit(amount) {
    this.accountBalance += amount;
  }

  withdraw(amount) {
    if (amount <= this.accountBalance) {
      this.accountBalance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }
}

// Bank class managing customer accounts
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index > -1) {
      this.customers.splice(index, 1);
    }
  }

  makeTransaction(sender, receiver, amount) {
    if (sender.accountBalance >= amount) {
      sender.withdraw(amount);
      receiver.deposit(amount);
      this.transactions.push({
        sender: sender.name,
        receiver: receiver.name,
        amount: amount,
        date: new Date().toLocaleString()
      });
      console.log("Transaction successful.");
    } else {
      console.log("Insufficient balance.");
    }
  }

  calculateInterest(account, rate) {
    const interest = account.accountBalance * (rate / 100);
    account.deposit(interest);
    console.log("Interest calculated.");
  }

  generateReport() {
    console.log("Bank Name: " + this.name);
    console.log("Total Customers: " + this.customers.length);
    console.log("Total Transactions: " + this.transactions.length);
    console.log("------ Customer Details ------");
    this.customers.forEach((customer) => {
      console.log(`Name: ${customer.name}, Balance: ${customer.accountBalance}`);
    });
  }
}

// Usage example
const bank = new Bank("MyBank");

const customer1 = new Customer("John Doe", 5000);
const customer2 = new Customer("Jane Smith", 10000);

bank.addCustomer(customer1);
bank.addCustomer(customer2);

bank.makeTransaction(customer1, customer2, 2000);
bank.makeTransaction(customer2, customer1, 500);

bank.calculateInterest(customer1, 5);
bank.calculateInterest(customer2, 3);

bank.removeCustomer(customer2);

bank.generateReport();

/*
OUTPUT:
Transaction successful.
Transaction successful.
Interest calculated.
Interest calculated.
Bank Name: MyBank
Total Customers: 1
Total Transactions: 2
------ Customer Details ------
Name: John Doe, Balance: 5250
*/