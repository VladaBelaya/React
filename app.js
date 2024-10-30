// Сложение
var getSumNumbers = function (value1, value2, system) {
    var result = value1 + value2;
    console.log("\u0421\u043B\u043E\u0436\u0435\u043D\u0438\u0435: ".concat(value1, " + ").concat(value2, " = ").concat(result.toString(system), " (\u0432 ").concat(system, "-\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F)"));
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
};
var getDifferenceNumbers = function (value1, value2, system) {
    var result = value1 - value2;
    console.log("\u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C: ".concat(value1, " - ").concat(value2, " = ").concat(result.toString(system), " (\u0432 ").concat(system, "-\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F)"));
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
};
var getMultiplyNumbers = function (value1, value2, system) {
    var result = value1 * value2;
    console.log("\u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C: ".concat(value1, " * ").concat(value2, " = ").concat(result.toString(system), " (\u0432 ").concat(system, "-\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F)"));
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
};
var getDivisionNumbers = function (value1, value2, system) {
    if (value2 === 0) {
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430: \u041D\u0430 0 \u0434\u0435\u043B\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F");
        return null;
    }
    var result = value1 / value2;
    console.log("\u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C: ".concat(value1, " - ").concat(value2, " = ").concat(result.toString(system), " (\u0432 ").concat(system, "-\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0441\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F)"));
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
};
// СЛОЖЕНИЕ
// В 10-ной системе счисления
var firstValueSum = 18;
var secondValueSum = 32;
getSumNumbers(firstValueSum, secondValueSum, 10);
// В 2-ной системе счисления
getSumNumbers(firstValueSum, secondValueSum, 2);
// В 16-ной системе счисления
getSumNumbers(firstValueSum, secondValueSum, 16);
// РАЗНОСТЬ
// В 10-ной системе счисления
var firstValueDiff = 50;
var secondValueDiff = 32;
getDifferenceNumbers(firstValueDiff, secondValueDiff, 10);
// В 2-ной системе счисления
getDifferenceNumbers(firstValueDiff, secondValueDiff, 2);
// В 16-ной системе счисления
getDifferenceNumbers(firstValueDiff, secondValueDiff, 16);
// УМНОЖЕНИЕ
// В 10-ной системе счисления
var firstValueMultiply = 50;
var secondValueMultiply = 32;
getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 10);
// В 2-ной системе счисления
getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 2);
// В 16-ной системе счисления
getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 16);
// ДЕЛЕНИЕ
// В 10-ной системе счисления
var firstValueDiv = 20;
var secondValueDiv = 4;
getDivisionNumbers(firstValueDiv, secondValueDiv, 10);
// В 2-ной системе счисления
getDivisionNumbers(firstValueDiv, secondValueDiv, 2);
// В 16-ной системе счисления
getDivisionNumbers(firstValueDiv, secondValueDiv, 16);
