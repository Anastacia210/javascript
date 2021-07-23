<!-- - створити функцію яка обчислює та повертає площу прямокутника висотою-->

function rectangle(a, b) {
    return a * b;
}

let res = rectangle(10, 20);
console.log(res);

<!-- - створити функцію яка обчислює та повертає площу кола-->

function circle(r) {
    return Math.PI * (r * r);
}

let res1 = circle(4);
console.log(res1);

<!-- - створити функцію яка обчислює та повертає площу циліндру-->

function cyl(r, h) {
    return 2 * Math.PI * r * (r + h);
}

let res2 = cyl(5, 20);
console.log(res2);

<!-- - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);-->

function myFunc() {
    let min = arguments[0];
    let max = arguments[0];

    for (const number of arguments) {
        if (min > number) {
            min = number
        }
        if (max < number) {
            max = number
        }
    }

    console.log(`виводить найбільше: ${max}`);
    return min;
}

let ggg = myFunc(30, 1, 8, 9, -71, 200, 27, 321, 4567, 177)
console.log(`повертає найменьше: ${ggg}`);

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент

// function writer(msg) {
//     document.write(`<p>${msg}</p>`);
// }
// writer ('Hello OKTEN');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(list) {
    document.write(
        `<ul>
            <li>${list}</li>
            <li>${list}</li>
            <li>${list}</li>
        </ul>`
    );
}

createUl('Dreams come true');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function writer(msg, sym) {
    document.write('<ul>');

    for (let i = 0; i < 3; i++) {
        document.write(
            `<li>${msg} ${sym}</li>`
        );
    }
    document.write('</ul>');
}

    writer('Dreams come true ', '!');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let massives = ['JS', 123, true, 'html', 345];

document.write('<ul>');
for (let massive of massives) {
    document.write(`<li>${massives}</li>`);
}
document.write('</ul>');