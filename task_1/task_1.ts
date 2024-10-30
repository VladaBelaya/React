type OperationsType = (value1: number, value2: number, system: number) => string | null;

// Сложение
const getSumNumbers: OperationsType = (value1: number, value2: number, system: number) => {
    const result = value1 + value2;

    console.log(`Сложение: ${value1} + ${value2} = ${result.toString(system)} (в ${system}-ой системе счисления)`);
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
}

const getDifferenceNumbers: OperationsType = (value1: number, value2: number, system: number) => {
    const result = value1 - value2;

    console.log(`Разность: ${value1} - ${value2} = ${result.toString(system)} (в ${system}-ой системе счисления)`);
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
}

const getMultiplyNumbers: OperationsType = (value1: number, value2: number, system: number) => {
    const result = value1 * value2;

    console.log(`Разность: ${value1} * ${value2} = ${result.toString(system)} (в ${system}-ой системе счисления)`);
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
}

const getDivisionNumbers: OperationsType = (value1: number, value2: number, system: number) => {
    if (value2 === 0) {
        console.log(`Ошибка: На 0 делить нельзя`);
        return null;
    }
    const result = value1 / value2;

    console.log(`Разность: ${value1} / ${value2} = ${result.toString(system)} (в ${system}-ой системе счисления)`);
    // Переводим в строку для вывода в нужной системе счисления
    return result.toString(system);
}

// СЛОЖЕНИЕ
// В 10-ной системе счисления
const firstValueSum = 18;
const secondValueSum = 32;

getSumNumbers(firstValueSum, secondValueSum, 10);
// В 2-ной системе счисления
getSumNumbers(firstValueSum, secondValueSum, 2);
// В 16-ной системе счисления
getSumNumbers(firstValueSum, secondValueSum, 16);

// РАЗНОСТЬ
// В 10-ной системе счисления
const firstValueDiff = 50;
const secondValueDiff = 32;

getDifferenceNumbers(firstValueDiff, secondValueDiff, 10);

// В 2-ной системе счисления
getDifferenceNumbers(firstValueDiff, secondValueDiff, 2);

// В 16-ной системе счисления
getDifferenceNumbers(firstValueDiff, secondValueDiff, 16);

// УМНОЖЕНИЕ
// В 10-ной системе счисления
const firstValueMultiply = 50;
const secondValueMultiply = 32;

getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 10);

// В 2-ной системе счисления
getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 2);

// В 16-ной системе счисления
getMultiplyNumbers(firstValueMultiply, secondValueMultiply, 16);


// ДЕЛЕНИЕ
// В 10-ной системе счисления
const firstValueDiv = 20;
const secondValueDiv = 4;

getDivisionNumbers(firstValueDiv, secondValueDiv, 10);

// В 2-ной системе счисления
getDivisionNumbers(firstValueDiv, secondValueDiv, 2);

// В 16-ной системе счисления
getDivisionNumbers(firstValueDiv, secondValueDiv, 16);

