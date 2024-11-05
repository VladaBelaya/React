var Operation;
(function (Operation) {
    Operation[Operation["REPLENISH"] = 0] = "REPLENISH";
    Operation[Operation["WITHDRAW"] = 1] = "WITHDRAW";
})(Operation || (Operation = {}));
var AccountType;
(function (AccountType) {
    AccountType[AccountType["CREDIT"] = 0] = "CREDIT";
    AccountType[AccountType["DEBIT"] = 1] = "DEBIT";
})(AccountType || (AccountType = {}));
var DebitAccount = /** @class */ (function () {
    function DebitAccount(options) {
        this.balance = options.balance;
        this.cardNumber = options.cardNumber;
        this.userName = options.userName;
        this.type = options.type;
    }
    DebitAccount.prototype.getInfoBalance = function () {
        console.log('--------------------------------------------------------------------');
        console.log("DebitAccount -- getInfoBalance | \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 = ".concat(this.balance, " \u0440\u0443\u0431\u043B\u0435\u0439"));
        return this.balance;
    };
    DebitAccount.prototype.setInfoBalance = function (newBalance) {
        this.balance = newBalance;
    };
    DebitAccount.prototype.updateInfoBalance = function (num, operationType) {
        console.log('--------------------------------------------------------------------');
        var balance = this.getInfoBalance();
        switch (operationType) {
            case Operation.REPLENISH:
                this.setInfoBalance(balance + num);
                console.log("DebitAccount -- \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ").concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
                break;
            case Operation.WITHDRAW:
                if (balance >= num) {
                    this.setInfoBalance(balance - num);
                    console.log("DebitAccount -- \u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ").concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
                }
                else {
                    console.log("DebitAccount -- \u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441(").concat(balance, " \u0440\u0443\u0431\u043B\u0435\u0439) \u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0443\u043C\u043C\u044B \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F"));
                }
                break;
            default:
                console.log("DebitAccount -- \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ".concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
        }
    };
    return DebitAccount;
}());
var CreditAccount = /** @class */ (function () {
    function CreditAccount(options) {
        this.balance = options.balance;
        this.cardNumber = options.cardNumber;
        this.userName = options.userName;
        this.type = options.type;
        this.limit = options.limit;
    }
    CreditAccount.prototype.getInfoBalance = function () {
        console.log('--------------------------------------------------------------------');
        console.log("CreditAccount -- getInfoBalance | \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 = ".concat(this.balance, " \u0440\u0443\u0431\u043B\u0435\u0439"));
        return this.balance;
    };
    CreditAccount.prototype.setInfoBalance = function (newBalance) {
        this.balance = newBalance;
    };
    CreditAccount.prototype.updateInfoBalance = function (num, operationType) {
        console.log('--------------------------------------------------------------------');
        var balance = this.getInfoBalance();
        switch (operationType) {
            case Operation.REPLENISH:
                this.setInfoBalance(balance + num);
                console.log("CreditAccount -- \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ").concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
                break;
            case Operation.WITHDRAW:
                if (balance >= num) {
                    this.setInfoBalance(balance - num);
                    console.log("CreditAccount -- \u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ").concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
                }
                else {
                    console.log("CreditAccount -- \u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443: ".concat(num, " \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441(").concat(balance, " \u0440\u0443\u0431\u043B\u0435\u0439) \u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0443\u043C\u043C\u044B \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F"));
                }
                break;
            default:
                console.log("CreditAccount -- \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441: ".concat(this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
        }
        this._checkDebt();
    };
    CreditAccount.prototype._checkDebt = function () {
        console.log('--------------------------------------------------------------------');
        if (this.getInfoBalance() >= this.limit) {
            console.log("CreditAccount -- _checkDebt | \u041B\u0438\u043C\u0438\u0442 = ".concat(this.limit, ", \u0431\u0430\u043B\u0430\u043D\u0441 = ").concat(this.getInfoBalance(), ". \u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043D\u0435\u0442"));
        }
        else {
            console.log("CreditAccount -- _checkDebt | \u041B\u0438\u043C\u0438\u0442 = ".concat(this.limit, ", \u0431\u0430\u043B\u0430\u043D\u0441 = ").concat(this.getInfoBalance(), ". \u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C = ").concat(this.limit - this.getInfoBalance(), " \u0440\u0443\u0431\u043B\u0435\u0439"));
        }
    };
    return CreditAccount;
}());
var OPTIONS_DEBIT = {
    balance: 200,
    cardNumber: '1234 **** **** 5678',
    userName: 'IVAN PETROV',
    type: AccountType.DEBIT,
};
var OPTIONS_CREDIT = {
    balance: 190,
    cardNumber: '1234 **** **** 5678',
    userName: 'IVAN PETROV',
    type: AccountType.CREDIT,
    limit: 210
};
var debitCard = new DebitAccount(OPTIONS_DEBIT);
var creditCard = new CreditAccount(OPTIONS_CREDIT);
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
