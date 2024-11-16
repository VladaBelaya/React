interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface IOrder {
    id: number;
    products: CartType[];
    status: Status;
    totalPrice: number;
}

enum Status {
    CREATE = 'Создан',
    IN_PROGRESS = 'В пути на пункт выдачи',
    DONE = 'Получен',
}

type CartType = {
    product: IProduct;
    quantity: number;
}

// Класс Product для описания товара
class Product implements IProduct {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getInfoProduct() {
        console.log(`Информация о товаре.
        ID товара: ${this.id} | Название товара: ${this.name} | Цена: ${this.price} ₽`);
        return {
            id: this.id,
            name: this.name,
            price: this.price,
        }
    }
}

// Класс Order для описания заказа
class Order implements IOrder {
    id: number;
    products: CartType[];
    status: Status;
    totalPrice: number;

    constructor(id: number, products: CartType[], status: Status = Status.CREATE) {
        this.id = id;
        this.products = products;
        this.status = status;
        this.totalPrice = this.calculateTotalPrice();
    }

    private calculateTotalPrice(): number {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    getInfoOrder()  {
        console.log(`Информация о заказе.
        ID заказа: ${this.id} | Товары в заказе: ${JSON.stringify(this.products)} | Статус заказа: ${this.status} | Итого: ${this.totalPrice} ₽`);
        return {
            id: this.id,
            products: this.products,
            status: this.status,
            totalPrice: this.totalPrice,
        }
    }
}

// Класс Cart для управления корзиной
class Cart {
    private products: CartType[] = [];

    addProduct(product: IProduct, quantity: number = 1) {
        const productInCart = this.products.find(item => item.product.id === product.id);
        if (productInCart) {
            productInCart.quantity += quantity;
            console.log(`Добавили товар "${product.name}" в корзину. Их текущее количество ${productInCart.quantity}.`);
        } else {
            this.products.push({ product, quantity });
            console.log(`Товар "${product.name}" добавлен в корзину`);
        }
    }

    removeProduct(productId: number, quantity: number = 1) {
        const productInCart = this.products.find(item => item.product.id === productId);
        if (productInCart) {
            if (productInCart.quantity > quantity) {
                productInCart.quantity -= quantity;
                console.log(`Уменьшено количество товара "${productInCart.product.name}". Текущее количество = ${productInCart.quantity}`);
            } else {
                const removedProduct = this.products.splice(this.products.indexOf(productInCart), 1);
                console.log(`Товар "${removedProduct[0].product.name}" удален из корзины.`);
            }
        } else {
            console.log(`Товар с ID ${productId} не найден в корзине.`);
        }
    }

    viewCart() {
        console.log('Текущая корзина:');
        this.products.forEach(item => {
            console.log(`Название товара - ${item.product.name}, Цена: ${item.product.price}, Количество: ${item.quantity}`);
        });
        console.log(`Итого: ${this.calculateTotalPrice()} ₽`);
    }

    private calculateTotalPrice(): number {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    getProducts(): CartType[] {
        return this.products;
    }
}

// Класс OrderManager для управления заказами
class OrderManager {
    private orders: Order[] = [];
    private nextOrderId: number = 1;

    createOrder(cart: Cart) {
        const products: CartType[] = cart.getProducts();
        if (products.length === 0) {
            console.log('Корзина пуста. Заказ не может быть создан.');
            return;
        }

        const order = new Order(this.nextOrderId++, products);
        order.getInfoOrder();

        this.orders.push(order);
        console.log(`Заказ №${order.id} на сумму ${order.totalPrice} ₽. Статус: ${order.status}.`);
    }

    changeOrderStatus(orderId: number, newStatus: Status) {
        const order = this.orders.find(order => order.id === orderId);
        if (order) {
            order.status = newStatus;
            console.log(`Статус заказа №${orderId} изменен на "${newStatus}".`);
        } else {
            console.log(`Заказ №${orderId} не найден.`);
        }
    }

    viewOrders(): void {
        console.log('Список заказов:');
        this.orders.forEach(order => {
            const productDetails = order.products.map(item => `${item.product.name} (x ${item.quantity})`).join(', ');
            console.log(`Заказ №${order.id}. Статус: ${order.status}. Товары: ${productDetails}. Итого: ${order.totalPrice} ₽`);
        });
    }
}

// Класс ProductManager для управления товарами
class ProductManager {
    private products: Product[] = [];
    private productId: number = 1;

    addProduct(name: string, price: number) {
        const product = new Product(this.productId++, name, price);
        product.getInfoProduct();

        this.products.push(product);
        console.log(`Товар "${product.name}" теперь доступен для выбора`);
    }

    removeProduct(productId: number) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            const removedProduct = this.products.splice(index, 1)[0];
            console.log(`Товар "${removedProduct.name}" удален из доступных для выбора.`);
        } else {
            console.log(`Товар с ID ${productId} не найден.`);
        }
    }

    viewProducts(): void {
        console.log('Доступные товары:');
        this.products.forEach(product => {
            console.log(`- ${product.id}: ${product.name}, Цена: ${product.price} ₽`);
        });
    }
}

// Пример работы системы
const productManager = new ProductManager();
productManager.addProduct("Кружка", 1354);
productManager.addProduct("Компьютерная мышь", 4399);
productManager.viewProducts();

const cart = new Cart();
cart.addProduct(new Product(1, "Кружка", 1354), 2);
cart.addProduct(new Product(2, "Компьютерная мышь", 4399), 1);
cart.viewCart();

const orderManager = new OrderManager();
orderManager.createOrder(cart);
orderManager.viewOrders();
orderManager.changeOrderStatus(1, Status.IN_PROGRESS);
orderManager.viewOrders();

cart.removeProduct(1, 1);
cart.viewCart();
cart.removeProduct(1, 1);
cart.viewCart();
