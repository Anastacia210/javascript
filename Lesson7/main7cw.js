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
// Час на навчання - 0.7с
// Пообідати - 1с
//...
// І так далі

function dailyPlan(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Wake up!');
            if (time < 8) {
                console.log(`Новый день`);
                reject('Ложиться надо раньше');
            } else {
                resolve('Ура! Кофе!');
            }
        }, 300);
    });
}

function dayStart() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Время завтракать!');
            resolve('Coffee!');
        }, 500);
    });
}

function shower () {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Пора принять душ');
        resolve('Само не отпадет');
    }, 400);
    });
}

function studyTime (status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('It is time to learn something new');
            if (status === 'false') {
                console.log('Не выходит');
                reject('плакать');
            } else {
                resolve('Наконец-то получилось');
            }
        }, 3000);
    });
}

function homeWork () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Еще раз пересмотреть лекцию');
            resolve('Надеяться, что поняла');
        }, 1000);
    });
}

function haveLunch () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Приятного аппетита');
            resolve ('Отдых');
        }, 1000);
    });
}

function backToWork () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Click, Click, Click');
            resolve('Work!');
        }, 2000);
    });
}

function goHome (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Пора домой!');
            if (time > 18) {
                console.log('Bye!');
                reject('Go home!');
            } else {
                resolve('Еще не конец рабочего дня!');
            }
        }, 1500);
    });
}

function cinema (money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('В кино!');
            if (money > 200) {
                console.log('Успеваем на фильм');
                reject('Выбираем');
            } else {
                resolve('Сходим в другой раз');
            }
        }, 800);
    });
}

function dinner () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Пора ужинать');
            resolve('Главное не переесть на ночь');
        }, 1300);
    });
}

function timeToSleep () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Goodnight!');
            resolve('Завтра будет новый день');
        }, 500);
    });
}

dailyPlan('true')
    .then(value => {
        console.log(value);
        return dayStart();
    })

    .then(value => {
        console.log(value);
        return shower();
    })
    .then(value => {
        console.log(value);
        return studyTime();
    })
    .then(value => {
        console.log(value);
        return homeWork();
    })
    .then(value => {
        console.log(value);
        return haveLunch();
    })
    .then(value => {
        console.log(value);
        return backToWork();
    })
    .then(value => {
        console.log(value);
        return goHome();
    })
    .then(value => {
        console.log(value);
        return cinema();
    })
    .then(value => {
        console.log(value);
        return dinner();
    })
    .then(value => {
        console.log(value);
        return timeToSleep();
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.warn(reason);
        console.error('Ложиться надо раньше');
    })
