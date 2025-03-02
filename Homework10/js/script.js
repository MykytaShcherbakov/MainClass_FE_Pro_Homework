class Car {
    constructor(mark, model, year) {
        this.mark = mark;
        this.model = model;
        this.year = year;
    }

    age() {
        return new Date().getFullYear() - this.year;
    }
}

const myCar = new Car("BMW", "i540", 2023);
console.log(myCar.age());

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    changeEmail(newEmail) {
        if (newEmail.includes('@') && newEmail.includes('.')) {
            this.email = newEmail;
        } else {
            throw new Error('Invalid email address');
        }
    }
}

const person = new Person("John", "blablabla@example.com");
console.log(person.email);
person.changeEmail("new.email@example.com");
console.log(person.email);

class Library {
    static books = [];

    static addBook(book) {
        this.books.push(book);
    }

    static listBooks() {
        this.books.forEach(book => console.log(`${book.title} by ${book.author}`));
    }
}

Library.addBook({ title: "1984", author: "George Orwell" });
Library.addBook({ title: "Brave New World", author: "Aldous Huxley" });
Library.listBooks();

class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this.#width;
    }

    set width(value) {
        if (value > 0) {
            this.#width = value;
        } else {
            throw new Error('Width must be a positive number');
        }
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        if (value > 0) {
            this.#height = value;
        } else {
            throw new Error('Height must be a positive number');
        }
    }

    area() {
        return this.#width * this.#height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area());

class BankAccount {
    static accounts = [];
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
        BankAccount.accounts.push(this);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            throw new Error('Deposit amount must be positive');
        }
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        } else if (amount > 0) {
            this.#balance -= amount;
        } else {
            throw new Error('Withdrawal amount must be positive');
        }
    }

    get balance() {
        return this.#balance;
    }

    static totalBalance() {
        return this.accounts.reduce((sum, account) => sum + account.balance, 0);
    }
}

const acc1 = new BankAccount(100);
const acc2 = new BankAccount(200);
acc1.deposit(50);
acc1.withdraw(30);
console.log(acc1.balance);
console.log(BankAccount.totalBalance());