interface Account {
    balance: number;
    cardNumber: string;
    userName: string;
    type: AccountType;
}

interface ICreditAccount extends Account {
    limit: number;
}

enum Operation {
    REPLENISH,
    WITHDRAW
}

enum AccountType {
    CREDIT,
    DEBIT
}


class DebitAccount implements Account {
    balance: number;
    cardNumber: string;
    userName: string;
    type: AccountType;

    constructor(options: Account) {
        this.balance = options.balance;
        this.cardNumber = options.cardNumber;
        this.userName = options.userName;
        this.type = options.type;
    }

    getInfoBalance() {
        console.log('--------------------------------------------------------------------');
        console.log(`DebitAccount -- getInfoBalance | Текущий баланс = ${this.balance} рублей`);
        return this.balance;
    }

    setInfoBalance(newBalance: number) {
        this.balance = newBalance;
    }

    updateInfoBalance(num: number, operationType: Operation) {
        console.log('--------------------------------------------------------------------');
        const balance = this.getInfoBalance();
        switch (operationType) {
            case Operation.REPLENISH:
                this.setInfoBalance(balance + num);
                console.log(`DebitAccount -- Пополнение на сумму: ${num} рублей. Текущий баланс: ${this.getInfoBalance()} рублей`);
                break;
            case Operation.WITHDRAW:
                if (balance >= num) {
                    this.setInfoBalance(balance - num);
                    console.log(`DebitAccount -- Списание средств на сумму: ${num} рублей. Текущий баланс: ${this.getInfoBalance()} рублей`);
                } else {
                    console.log(`DebitAccount -- Списание средств на сумму: ${num} рублей невозможно, так как текущий баланс(${balance} рублей) меньше суммы списания`);
                }
                break;
            default:
                console.log(`DebitAccount -- Некорректные данные. Попробуйте еще раз. Текущий баланс: ${this.getInfoBalance()} рублей`);
        }
    }
}


class CreditAccount implements ICreditAccount {
    balance: number;
    cardNumber: string;
    userName: string;
    type: AccountType;
    limit: number;

    constructor(options: ICreditAccount) {
        this.balance = options.balance;
        this.cardNumber = options.cardNumber;
        this.userName = options.userName;
        this.type = options.type;
        this.limit = options.limit;
    }

    getInfoBalance() {
        console.log('--------------------------------------------------------------------');
        console.log(`CreditAccount -- getInfoBalance | Текущий баланс = ${this.balance} рублей`);
        return this.balance;
    }

    setInfoBalance(newBalance: number) {
        this.balance = newBalance;
    }

    updateInfoBalance(num: number, operationType: Operation) {
        console.log('--------------------------------------------------------------------');
        const balance = this.getInfoBalance();
        switch (operationType) {
            case Operation.REPLENISH:
                this.setInfoBalance(balance + num);
                console.log(`CreditAccount -- Пополнение на сумму: ${num} рублей. Текущий баланс: ${this.getInfoBalance()} рублей`);
                break;
            case Operation.WITHDRAW:
                if (balance >= num) {
                    this.setInfoBalance(balance - num);
                    console.log(`CreditAccount -- Списание средств на сумму: ${num} рублей. Текущий баланс: ${this.getInfoBalance()} рублей`);
                } else {
                    console.log(`CreditAccount -- Списание средств на сумму: ${num} рублей невозможно, так как текущий баланс(${balance} рублей) меньше суммы списания`);
                }
                break;
            default:
                console.log(`CreditAccount -- Некорректные данные. Попробуйте еще раз. Текущий баланс: ${this.getInfoBalance()} рублей`);
        }

        this._checkDebt();
    }

    private _checkDebt() {
        console.log('--------------------------------------------------------------------');
        if (this.getInfoBalance() >= this.limit) {
            console.log(`CreditAccount -- _checkDebt | Лимит = ${this.limit}, баланс = ${this.getInfoBalance()}. Задолженности нет`);
        } else {
            console.log(`CreditAccount -- _checkDebt | Лимит = ${this.limit}, баланс = ${this.getInfoBalance()}. Задолженность = ${this.limit - this.getInfoBalance()} рублей`);
        }
    }
}

const OPTIONS_DEBIT: Account = {
    balance: 200,
    cardNumber: '1234 **** **** 5678',
    userName: 'IVAN PETROV',
    type: AccountType.DEBIT,
}

const OPTIONS_CREDIT: ICreditAccount = {
    balance: 190,
    cardNumber: '1234 **** **** 5678',
    userName: 'IVAN PETROV',
    type: AccountType.CREDIT,
    limit: 210
}

const debitCard = new DebitAccount(OPTIONS_DEBIT);
const creditCard = new CreditAccount(OPTIONS_CREDIT);


debitCard.getInfoBalance();
debitCard.setInfoBalance(200);
debitCard.updateInfoBalance(10, Operation.REPLENISH);
debitCard.updateInfoBalance(10, Operation.WITHDRAW);
debitCard.updateInfoBalance(310, Operation.WITHDRAW);

creditCard.getInfoBalance();
creditCard.setInfoBalance(200);
creditCard.updateInfoBalance(10, Operation.REPLENISH);
creditCard.updateInfoBalance(10, Operation.WITHDRAW);
creditCard.updateInfoBalance(310, Operation.WITHDRAW);
