// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function morning(time, cb) {
    setTimeout(() =>{
        console.log('Wake Up!');
        if (time < 8) {
            console.log('Проснись!')
        } else {
            console.log('Спи дальше!')
        }
    }, 300)
}
morning(7)

function dayStart(time) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Время завтракать!');
        if (time > 8) {
        console.log('Oh, no!');
        reject ('Сегодня без кофе');
        } else {
            console.log('Успеем выпить кофе')
            resolve ('Coffee!')
        }
    });
    }, 1000)
}
dayStart(8)

function shower () {
    setTimeout(() => {
        console.log('Пора принять душ')
    }, 500)
}
shower()

function busStop (time) {
    setTimeout(() => {
        console.log('По делам')
        if (time < 9) {
            console.log('Жду автобус')
        } else {
            console.log('Вызываю такси')
        }
    }, 3000)
}
busStop(8)

function work () {
    setTimeout(() => {
        console.log('Work')
    }, 1000)
}
work()

function haveLunch () {
    setTimeout(() => {
        console.log('Приятного аппетита')
    }, 1000)
}
haveLunch()

function backToWork () {
    setTimeout(() => {
        console.log('Click, Click, Click')
    }, 2000)
}
backToWork()

function goHome (time) {
    setTimeout(() => {
        console.log('Пора домой!')
        if(time > 18) {
            console.log('Bye!')
        } else {
            console.log('Еще не конец рабочего дня!')
        }
    }, 1500)
}
goHome(18)

function busStop2 (time) {
    setTimeout(() => {
        console.log('В кино!')
        if (time < 20) {
            console.log('Успеваем на фильм')
        } else {
            console.log('Сходим в другой раз')
        }
    }, 800)
}
busStop2(19)

function dinner (money) {
    setTimeout(() => {
        console.log('Пора ужинать')
        if (money > 500) {
            console.log('Куда пойдем?')
        } else {
            console.log('Покушаем дома)')
        }
    }, 1300)
}
dinner(700)

function timeToSleep () {
    setTimeout(() => {
        console.log('Goodnight!')
    }, 500)
}
timeToSleep()