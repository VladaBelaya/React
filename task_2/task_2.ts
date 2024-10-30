// Разработать типизированную систему управления автомобилем:
// главный интерфейс Car и вспомогательные интерфейсы для различных подсистем.
// Реализовать функции для вывода
// основной информации об авто,
// о состоянии различных деталей и устройств,
// обновления информации и текущего состояния автомобиля.
interface ICar {
    brand: string;
    price: number;
    color: string;
}

interface UpgradeCar extends ICar {
    speed: number;
    horsepower?: number;
    drive?: DriveCar;
}

interface PartialOptionsUpdateCar {
    brand: string;
    price: number;
    color: string;
    speed: number;
    horsepower: number;
    drive: DriveCar;
}

enum DriveCar {
    AWD = 'полный привод',
    FWD = 'передний привод',
    RWD = 'задний привод'
}

class Car implements UpgradeCar {
    brand: string;
    price: number;
    color: string;
    speed: number;
    horsepower?: number;
    drive?: DriveCar;

    constructor(
        brand: string,
        price: number,
        color: string,
        speed: number,
        horsepower?: number,
        drive?: DriveCar
    ) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.speed = speed;
        this.horsepower = horsepower;
        this.drive = drive;
    }

    getBaseInfo() {
        console.log(`
        БАЗОВЫЕ ХАРАКТЕРИСТИКИ:
        Марка автомобиля: ${this.brand}.
        Цена за новое авто: ${this.price}.
        Цвет автомобиля: ${this.color}.`);
    }

    getOtherInfo() {
        console.log(`
        -----------------------
        ДОПОЛНИТЕЛЬНЫЕ ХАРАКТЕРИСТИКИ:
        Другие характеристики: ${this.speed} км/ч.${this.horsepower ? ', ' + this.horsepower + 'л.с.' : ', 144 л.с.'}${this.drive ? ', ' + this.drive : ', ' + DriveCar.FWD}`);
    }

    getAllInfo() {
        console.log(`
        -----------------------
        ВСЕ ХАРАКТЕРИСТИКИ:
        Марка автомобиля: ${this.brand}.
        Цена за новое авто: ${this.price}.
        Цвет автомобиля: ${this.color}.
        Другие характеристики: ${this.speed} км/ч.${this.horsepower ? ', ' + this.horsepower + 'л.с.' : ', 144 л.с.'}${this.drive ? ', ' + this.drive : ', ' + DriveCar.FWD}`);
    }

    updateInfo(options?: Partial<PartialOptionsUpdateCar>) {
        if (!options || Object.keys(options).length === 0) {
            return;
        }

        const { brand, price, color, speed, horsepower, drive } = options;

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
    }

}

const NissanTopConfiguration = new Car('Nissan', 3000000, 'Синий', 300, 144, DriveCar.AWD);
NissanTopConfiguration.getAllInfo();
NissanTopConfiguration.updateInfo({ horsepower: 200 });
NissanTopConfiguration.getBaseInfo();
NissanTopConfiguration.getOtherInfo();
NissanTopConfiguration.getAllInfo();

const NissanBaseConfiguration = new Car('Nissan', 2500000, 'Белый', 280);
NissanBaseConfiguration.getAllInfo();
NissanBaseConfiguration.updateInfo({ color: 'Черный' });
NissanBaseConfiguration.getBaseInfo();
NissanBaseConfiguration.getOtherInfo();
NissanBaseConfiguration.getAllInfo();

