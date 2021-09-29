// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content" ---------------------------------------------
const firstPe = document.getElementById('content');
console.log(firstPe.innerText);

// -- отримує текст з блоку з id "rules"----------------------------------------------------
const firstDiv = document.getElementById('rules');
console.log(firstDiv.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший ---------------------------
firstPe.innerText = 'Random text';

// -- замініть текст параграфа з id 'rules' на будь-який інший
firstDiv.innerText = 'Some random text';

// -- змініть кожному елементу колір фону на червоний---------------------------------------

const pEls = document.getElementsByTagName('p')
for (const p of pEls){
    p.style.backgroundColor = 'red'
}
const divEls = document.getElementsByTagName('div')
for (const div of divEls){
    div.style.backgroundColor = 'red'
}
const ulEls = document.getElementsByTagName('ul')
for (const ul of ulEls){
    ul.style.backgroundColor = 'red'
}
const liEls = document.getElementsByTagName('li')
for (const li of liEls){
    li.style.backgroundColor = 'red'
    li.style.border = 'solid white 2px'
}
// -- змініть кожному елементу колір тексту на синій----------------------------------------
const pElems = document.getElementsByTagName('p')
for (const p of pElems){
    p.style.color = 'blue'
}
const divElems = document.getElementsByTagName('div')
for (const div of divElems){
    div.style.color = 'blue'
}
const ulElems = document.getElementsByTagName('ul')
for (const ul of ulElems){
    ul.style.color = 'blue'
}
const liElems = document.getElementsByTagName('li')
for (const li of liElems){
    li.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(firstDiv.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний текст
const liElsText = document.getElementsByClassName('fc_rules')
for (const liElem of liElsText) {
                                                        // liElem.onclick = function () {
                                                        //     console.log(liElem.innerText)
                                                        // }
                                                        // liElem.onclick = function() {
                                                        //     console.log('Some random text')
                                                        // }

    liElem.addEventListener('click',() =>{
        console.log(liElem.innerText);
    });
    liElem.addEventListener('click', () => {
    console.log('some random text');
    });
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний---------------------------

const fcRulesElements = document.getElementsByClassName('fc_rules');
for (let fcRulesElement of fcRulesElements){
    fcRulesElement.style.color = 'red';
}






