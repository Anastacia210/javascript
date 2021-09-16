// - створити функцію яка приймає масив та виводить його

let mass = ['asdqwe', 15, 147, 'qwerty', 321]
console.log(mass);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function myFunc() {
    let min = arguments[0];
    for (const number of arguments) {
        if (min > number) {
            min = number
        }
    }
    console.log(`${min}`)
}

let abc = myFunc(17, 20, -27);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function myFun() {
    let max = arguments[0];
    for (const number of arguments) {
        if (max < number) {
            max = number
        }
    }
    console.log(`${max}`)
}

let cba = myFun(35, 16, -3);

// - створити функцію яка повертає найбільше число з масиву

function myMax() {
    let max = arguments[0];
    for (const number of arguments) {
        if (max < number) {
            max = number
        }
    }
    console.log(`${max}`);
}

let op = myMax(21, 25, 55, 99, -25, -1);

// - створити функцію яка повертає найменьше число з масиву

function myMin() {
    let min = arguments[0];
    for (const number of arguments) {
        if (min > number) {
            min = number
        }
    }
    console.log(`${min}`);
}

let po = myMin(41, 56, -25, 0, 1, 104);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const funAdd = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i;
};

const add = funAdd([10, 25, 30, 45])
console.log(add);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const funPlus = (array) => {
    let i = 0;
    for (const arrayElement of array) {
        i += arrayElement;
    }
    return i / array.length;
};

const sume = funPlus([10, 25, 30, 45])
console.log(sume);

// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// // Для виведення використати попередню функцію.

const funRandom = () => {
    const arrey = [];

    for (let i = 0; i < 20; i++) {
        arrey.push(Math.round(Math.random() * 100));
    }
    return arrey;
};

let myArray = funRandom();
console.log(myArray);


const funRandomNum = () => {
    const arrey = [];

    for (let j = 0; j < 15; j++) {
        arrey.push(Math.round(Math.random() * 100));
    }
    return arrey;
};
let secondArrey = funRandomNum();
console.log(secondArrey);

//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


const driverMax = [{name: 'Max', age: 38}, {model: 'Kuga', manufacturer: 'Ford'}];

const keys = []
for (const object of driverMax) {
    keys.push(...Object.keys(object))
}
console.log(keys);


const driverAlex = [{name: 'Alex', age: 18}, {model: 'C4', manufacturer: 'Citroen'}];

const anotherKeys = []
for (const object of driverAlex) {
    keys.push(...Object.keys(object))
}
console.log(anotherKeys);


// // // - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // // EXAMPLE:
// // //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let driverDen = [{name: 'Den', age: 25}, {model: 'Auris', manufacturer: 'Toyota'}];

function getValues() {
    const arrey = [];

    for (const object of driverDen) {
        arrey.push(...Object.values(object));
    }
    return arrey;
}

const arrey = getValues(driverDen);
console.log(arrey);

const driverVal = [{name: 'Val', age: 20}, {model: 'X6', manufacturer: 'BMW'}];
const values = [];
for (const object of driverVal) {
    values.push(...Object.values(object))
}
console.log(values);





