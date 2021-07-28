// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content" ---------------------------------------------
const firstPe = document.getElementById('content');
console.log(firstPe);

// -- отримує текст з блоку з id "rules"----------------------------------------------------
const firstDiv = document.getElementById('rules');
console.log(firstDiv);

// -- замініть текст параграфа з id 'content' на будь-який інший ---------------------------
firstPe.innerHTML = '<h1>Правила Бойцовского Клуба</h1>';

// -- замініть текст параграфа з id 'rules' на будь-який інший
firstDiv.innerText = 'Какой-то рандомный текст';

// -- змініть кожному елементу колір фону на червоний---------------------------------------
// -- змініть кожному елементу колір тексту на синій----------------------------------------

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(firstDiv.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний ьексь
let liElems = document.getElementsByClassName('fc_rules')
for (const liElem of liElems) {
    liElem.addEventListener('click',() =>{
        console.log(liElem.innerText);
    });
    liElem.addEventListener('click', () => {
    console.log('some random text');
    });
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний---------------------------

let fc_rulesElements = document.getElementsByClassName('fc_rules');
for (let fc_RulesElement of fc_rulesElements){
    fc_RulesElement.style.color = 'red';
}






