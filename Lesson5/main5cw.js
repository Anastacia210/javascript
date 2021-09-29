// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const firstH = document.getElementById('main_header')
firstH.style.color = 'violet';
firstH.innerText = 'mon-2021';

// b) робить шириниу елементу ul 400px
const ulka = document.getElementsByTagName('ul')
for (const ul of ulka) {
    ul.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const liLi = document.getElementsByClassName('linkList')
for (const li of liLi) {
    li.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const liText = document.getElementsByClassName("listElement2")
for (const a of liText){
console.log(a.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
const lishka = document.getElementsByTagName('li')
for (const li of lishka) {
    li.style.backgroundColor = 'silver';
}
console.log(lishka)

// f) отримує всі елементи 'a' та додає їм клас anchor
const anchorClass = document.getElementsByTagName('a')
for (const a of anchorClass) {
    a.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
const linkA = document.getElementsByTagName('a')
for (const a of linkA) {
    if (a.innerText === 'link3'){
        a.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const classA = document.getElementsByTagName('a')
for (const a of classA) {
    if (a.innerText === 'link1'){
        a.classList.add('element_link1')
    }
    if (a.innerText === 'link2'){
        a.classList.add('element_link2')
    }
    if (a.innerText === 'link3'){
        a.classList.add('element_link3')
    }
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHead = document.getElementsByClassName('sub-header')
    for (const h3 of subHead) {
        function color(){
            color = prompt('Enter color')
            h3.style.backgroundColor = color;
        }
    }
    color()
console.log(subHead);

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
const subHeader = document.getElementsByClassName('sub-header')
for (const h3 of subHeader){
    if(h3.innerText === 'content 2 segment'){
        h3.style.color = 'blue'
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const rand = document.getElementsByClassName('content_1')
for (const div of rand){
    div.innerText = 'Some random text'
}

// l) отримати елементи p та змінити їм padding на 20px
const pEls = document.getElementsByTagName('p')
for (const p of pEls){
    p.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const textEls = document.getElementsByClassName('text2')
for (const p of textEls){
    p.innerText = 'mon-2021'
}





