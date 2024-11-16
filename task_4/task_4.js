var Status;
(function (Status) {
    Status["CREATE"] = "\u0421\u043E\u0437\u0434\u0430\u043D";
    Status["IN_PROGRESS"] = "\u0412 \u043F\u0443\u0442\u0438 \u043D\u0430 \u043F\u0443\u043D\u043A\u0442 \u0432\u044B\u0434\u0430\u0447\u0438";
    Status["DONE"] = "\u041F\u043E\u043B\u0443\u0447\u0435\u043D";
})(Status || (Status = {}));
// Класс Product для описания товара
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getInfoProduct = function () {
        console.log("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0442\u043E\u0432\u0430\u0440\u0435.\n        ID \u0442\u043E\u0432\u0430\u0440\u0430: ".concat(this.id, " | \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430: ").concat(this.name, " | \u0426\u0435\u043D\u0430: ").concat(this.price, " \u20BD"));
        return {
            id: this.id,
            name: this.name,
            price: this.price,
        };
    };
    return Product;
}());
// Класс Order для описания заказа
var Order = /** @class */ (function () {
    function Order(id, products, status) {
        if (status === void 0) { status = Status.CREATE; }
        this.id = id;
        this.products = products;
        this.status = status;
        this.totalPrice = this.calculateTotalPrice();
    }
    Order.prototype.calculateTotalPrice = function () {
        return this.products.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    Order.prototype.getInfoOrder = function () {
        console.log("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u043A\u0430\u0437\u0435.\n        ID \u0437\u0430\u043A\u0430\u0437\u0430: ".concat(this.id, " | \u0422\u043E\u0432\u0430\u0440\u044B \u0432 \u0437\u0430\u043A\u0430\u0437\u0435: ").concat(JSON.stringify(this.products), " | \u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430: ").concat(this.status, " | \u0418\u0442\u043E\u0433\u043E: ").concat(this.totalPrice, " \u20BD"));
        return {
            id: this.id,
            products: this.products,
            status: this.status,
            totalPrice: this.totalPrice,
        };
    };
    return Order;
}());
// Класс Cart для управления корзиной
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var productInCart = this.products.find(function (item) { return item.product.id === product.id; });
        if (productInCart) {
            productInCart.quantity += quantity;
            console.log("\u0414\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0442\u043E\u0432\u0430\u0440 \"".concat(product.name, "\" \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443. \u0418\u0445 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E ").concat(productInCart.quantity, "."));
        }
        else {
            this.products.push({ product: product, quantity: quantity });
            console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(product.name, "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"));
        }
    };
    Cart.prototype.removeProduct = function (productId, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var productInCart = this.products.find(function (item) { return item.product.id === productId; });
        if (productInCart) {
            if (productInCart.quantity > quantity) {
                productInCart.quantity -= quantity;
                console.log("\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \"".concat(productInCart.product.name, "\". \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E = ").concat(productInCart.quantity));
            }
            else {
                var removedProduct = this.products.splice(this.products.indexOf(productInCart), 1);
                console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(removedProduct[0].product.name, "\" \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B."));
            }
        }
        else {
            console.log("\u0422\u043E\u0432\u0430\u0440 \u0441 ID ".concat(productId, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435."));
        }
    };
    Cart.prototype.viewCart = function () {
        console.log('Текущая корзина:');
        this.products.forEach(function (item) {
            console.log("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 - ".concat(item.product.name, ", \u0426\u0435\u043D\u0430: ").concat(item.product.price, ", \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(item.quantity));
        });
        console.log("\u0418\u0442\u043E\u0433\u043E: ".concat(this.calculateTotalPrice(), " \u20BD"));
    };
    Cart.prototype.calculateTotalPrice = function () {
        return this.products.reduce(function (total, item) { return total + item.product.price * item.quantity; }, 0);
    };
    Cart.prototype.getProducts = function () {
        return this.products;
    };
    return Cart;
}());
// Класс OrderManager для управления заказами
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
        this.nextOrderId = 1;
    }
    OrderManager.prototype.createOrder = function (cart) {
        var products = cart.getProducts();
        if (products.length === 0) {
            console.log('Корзина пуста. Заказ не может быть создан.');
            return;
        }
        var order = new Order(this.nextOrderId++, products);
        order.getInfoOrder();
        this.orders.push(order);
        console.log("\u0417\u0430\u043A\u0430\u0437 \u2116".concat(order.id, " \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ").concat(order.totalPrice, " \u20BD. \u0421\u0442\u0430\u0442\u0443\u0441: ").concat(order.status, "."));
    };
    OrderManager.prototype.changeOrderStatus = function (orderId, newStatus) {
        var order = this.orders.find(function (order) { return order.id === orderId; });
        if (order) {
            order.status = newStatus;
            console.log("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430 \u2116".concat(orderId, " \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430 \"").concat(newStatus, "\"."));
        }
        else {
            console.log("\u0417\u0430\u043A\u0430\u0437 \u2116".concat(orderId, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."));
        }
    };
    OrderManager.prototype.viewOrders = function () {
        console.log('Список заказов:');
        this.orders.forEach(function (order) {
            var productDetails = order.products.map(function (item) { return "".concat(item.product.name, " (x ").concat(item.quantity, ")"); }).join(', ');
            console.log("\u0417\u0430\u043A\u0430\u0437 \u2116".concat(order.id, ". \u0421\u0442\u0430\u0442\u0443\u0441: ").concat(order.status, ". \u0422\u043E\u0432\u0430\u0440\u044B: ").concat(productDetails, ". \u0418\u0442\u043E\u0433\u043E: ").concat(order.totalPrice, " \u20BD"));
        });
    };
    return OrderManager;
}());
// Класс ProductManager для управления товарами
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
        this.productId = 1;
    }
    ProductManager.prototype.addProduct = function (name, price) {
        var product = new Product(this.productId++, name, price);
        product.getInfoProduct();
        this.products.push(product);
        console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(product.name, "\" \u0442\u0435\u043F\u0435\u0440\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430"));
    };
    ProductManager.prototype.removeProduct = function (productId) {
        var index = this.products.findIndex(function (product) { return product.id === productId; });
        if (index !== -1) {
            var removedProduct = this.products.splice(index, 1)[0];
            console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(removedProduct.name, "\" \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430."));
        }
        else {
            console.log("\u0422\u043E\u0432\u0430\u0440 \u0441 ID ".concat(productId, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."));
        }
    };
    ProductManager.prototype.viewProducts = function () {
        console.log('Доступные товары:');
        this.products.forEach(function (product) {
            console.log("- ".concat(product.id, ": ").concat(product.name, ", \u0426\u0435\u043D\u0430: ").concat(product.price, " \u20BD"));
        });
    };
    return ProductManager;
}());
// Пример работы системы
var productManager = new ProductManager();
productManager.addProduct("Кружка", 1354);
productManager.addProduct("Компьютерная мышь", 4399);
productManager.viewProducts();
var cart = new Cart();
cart.addProduct(new Product(1, "Кружка", 1354), 2);
cart.addProduct(new Product(2, "Компьютерная мышь", 4399), 1);
cart.viewCart();
var orderManager = new OrderManager();
orderManager.createOrder(cart);
orderManager.viewOrders();
orderManager.changeOrderStatus(1, Status.IN_PROGRESS);
orderManager.viewOrders();
cart.removeProduct(1, 1);
cart.viewCart();
cart.removeProduct(1, 1);
cart.viewCart();
