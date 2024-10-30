var DriveCar;
(function (DriveCar) {
    DriveCar["AWD"] = "\u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434";
    DriveCar["FWD"] = "\u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434";
    DriveCar["RWD"] = "\u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u0440\u0438\u0432\u043E\u0434";
})(DriveCar || (DriveCar = {}));
var Car = /** @class */ (function () {
    function Car(brand, price, color, speed, horsepower, drive) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.speed = speed;
        this.horsepower = horsepower;
        this.drive = drive;
    }
    Car.prototype.getBaseInfo = function () {
        console.log("\n        \u0411\u0410\u0417\u041E\u0412\u042B\u0415 \u0425\u0410\u0420\u0410\u041A\u0422\u0415\u0420\u0418\u0421\u0422\u0418\u041A\u0418:\n        \u041C\u0430\u0440\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this.brand, ".\n        \u0426\u0435\u043D\u0430 \u0437\u0430 \u043D\u043E\u0432\u043E\u0435 \u0430\u0432\u0442\u043E: ").concat(this.price, ".\n        \u0426\u0432\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.color, "."));
    };
    Car.prototype.getOtherInfo = function () {
        console.log("\n        -----------------------\n        \u0414\u041E\u041F\u041E\u041B\u041D\u0418\u0422\u0415\u041B\u042C\u041D\u042B\u0415 \u0425\u0410\u0420\u0410\u041A\u0422\u0415\u0420\u0418\u0421\u0422\u0418\u041A\u0418:\n        \u0414\u0440\u0443\u0433\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438: ".concat(this.speed, " \u043A\u043C/\u0447.").concat(this.horsepower ? ', ' + this.horsepower + 'л.с.' : ', 144 л.с.').concat(this.drive ? ', ' + this.drive : ', ' + DriveCar.FWD));
    };
    Car.prototype.getAllInfo = function () {
        console.log("\n        -----------------------\n        \u0412\u0421\u0415 \u0425\u0410\u0420\u0410\u041A\u0422\u0415\u0420\u0418\u0421\u0422\u0418\u041A\u0418:\n        \u041C\u0430\u0440\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this.brand, ".\n        \u0426\u0435\u043D\u0430 \u0437\u0430 \u043D\u043E\u0432\u043E\u0435 \u0430\u0432\u0442\u043E: ").concat(this.price, ".\n        \u0426\u0432\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this.color, ".\n        \u0414\u0440\u0443\u0433\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438: ").concat(this.speed, " \u043A\u043C/\u0447.").concat(this.horsepower ? ', ' + this.horsepower + 'л.с.' : ', 144 л.с.').concat(this.drive ? ', ' + this.drive : ', ' + DriveCar.FWD));
    };
    Car.prototype.updateInfo = function (options) {
        if (!options || Object.keys(options).length === 0) {
            return;
        }
        var brand = options.brand, price = options.price, color = options.color, speed = options.speed, horsepower = options.horsepower, drive = options.drive;
        if (brand) {
            this.brand = brand;
        }
        if (price) {
            this.price = price;
        }
        if (color) {
            this.color = color;
        }
        if (speed) {
            this.speed = speed;
        }
        if (horsepower) {
            this.horsepower = horsepower;
        }
        if (drive) {
            this.drive = drive;
        }
    };
    return Car;
}());
var NissanTopConfiguration = new Car('Nissan', 3000000, 'Синий', 300, 144, DriveCar.AWD);
NissanTopConfiguration.getAllInfo();
NissanTopConfiguration.updateInfo({ horsepower: 200 });
NissanTopConfiguration.getBaseInfo();
NissanTopConfiguration.getOtherInfo();
NissanTopConfiguration.getAllInfo();
var NissanBaseConfiguration = new Car('Nissan', 2500000, 'Белый', 280);
NissanBaseConfiguration.getAllInfo();
NissanBaseConfiguration.updateInfo({ color: 'Черный' });
NissanBaseConfiguration.getBaseInfo();
NissanBaseConfiguration.getOtherInfo();
NissanBaseConfiguration.getAllInfo();
