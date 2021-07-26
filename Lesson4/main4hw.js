// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const funRandom = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
};

let myArray = funRandom();
console.log(myArray);

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const funRandom2 = () => {
    const array = [];
    for (let i = 17; i < 59; i++) {
        array.push(Math.round(Math.random() * 35));
    }
    return array;
};

let myArray2 = funRandom2();
console.log(myArray2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let numbers = [2, 6, 25, 65, 87, 27, 145, 125, 137, 144, 97, 22, 16, 215];
let strings = numbers.sort((a,b)=>{
    return a-b
});
console.log(strings);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

let evenNumbers = [2, 6, 25, 65, 87, 27, 145, 125, 137, 144, 97, 22, 16, 215];
let resultEven = evenNumbers.filter(function (number) {
    return number%2 == 0
});
console.log(resultEven);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let oddNumbers = [2, 6, 25, 65, 87, 27, 145, 125, 137, 144, 97, 22, 16, 215];
let resultOdd = oddNumbers.filter(function (number) {
    return number%2 !== 0
});
console.log(resultOdd);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.-

let numbers2 = [2, 6, 25, 65, 87, 27, 145, 125, 137, 144, 97, 22, 16, 215];
let map = numbers2.map(function (value) {
    return value + '';
});
console.log(map);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

class User {
    constructor (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
console.log(User);

// -створити пустий масив, наповнити його 10 об'єктами new User(....)-

class User2 {
    constructor (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users = [
    new User2(1, 'vasya', 'vasin', 'abc@mail.com', '123-31-56'),
    new User2(2, 'kolya', 'kolin', 'def@mail.com', '124-31-56'),
    new User2(3, 'petya', 'petin', 'ghi@mail.com', '125-31-56'),
    new User2(4, 'olya', 'olina', 'jkl@mail.com', '126-31-56'),
    new User2(5, 'anna', 'anina', 'mno@mail.com', '127-31-56'),
    new User2(6, 'pasha', 'pashin', 'pqr@mail.com', '128-31-56'),
    new User2(7, 'vera', 'verina', 'stu@mail.com', '129-31-56'),
    new User2(8, 'katya', 'katina', 'vwx@mail.com', '122-31-56'),
    new User2(9, 'oleg', 'olegin', 'yzd@mail.com', '121-31-56'),
    new User2(10, 'marina', 'marinina', 'joy@mail.com', '120-31-56')
];
console.log(users);

// -Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та
// Відсортувати його по id. по зростанню (sort)

let filterUserId = users.filter(user => user.id%2 === 0);

  console.log(filterUserId);

let sort = users.sort(function (user1,user2){
    return user1.id - user2.id;
});
console.log(sort);

