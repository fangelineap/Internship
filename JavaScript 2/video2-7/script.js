/*===================DOM SELECTION & MANIPULATION (ELEMENT)===================*/

// document.getElementById() -> node root.getElementById()
// const judul = document.getElementById('judul');
// melakukan modify pada elemen judul, inline css
// judul.style.color = 'darkblue';
// judul.innerHTML = 'Fei';

// document.getElementByTagName(), return HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightpink';
// }
// meskipun elemennya cm ada 1, returnnya tetap HTMLCollection
/* kalau kita mau cm ambil elemen yg kita tau cm ada 1,
bisa pakai spt di bawah ini*/
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '60px';

// document.getElementsByClassName(), return HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Diubah dari JS File';

// query selector, return a single element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'blue';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'lightblue';
// li2.style.fontSize = '20px'
// li2.style.fontWeight = 'bold';

// const p = document.querySelector('p');
// p.innerHTML = 'Changed thru JavaScript';


// document.querySelectorAll(), return HTMLCollection
// const sectionB = document.getElementById('b');
// const ptag = sectionB.querySelectorAll('li');
// for(let i = 0; i < ptag.length; i++) {
//     ptag[i].style.backgroundColor = 'lightpink';
// }

//mengubah root node
// const sectionB = document.getElementById('b');
// const p3 = sectionB.querySelector('p');
// p3.style.backgroundColor = 'lightgreen';


// element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'hello'); //menambahkan attribute 'name'
// judul.getAttribute('id'); //mendapatkan value dari attribute 'id'

// const aLink = document.querySelector('section#a a');
// aLink.removeAttribute('href'); //remove attribute 'href' dari a

// const p2 = document.querySelector('.p2');
// p2.classList.add('label'); //menambahkan class 'label''
// p2.classList.remove('label'); //remove class 'label'
// p2.classList.toggle('label'); //jika sudah ada, remove. jika belum, add
// p2.classList.item(1); //mengetahui class pertama
// p2.classList.contains('three'); //cek class
// p2.classList.replace('three', 'four'); //mengganti nama class

// p2.classList.add('one');
// p2.classList.add('two');
// p2.classList.add('three');
// document.body.classList.toggle('biru-muda');




/*=============================DOM MANIPULATION (NODE)=============================*/
// const newPhar = document.createElement('p');
// const newPharValue = document.createTextNode('New Paragraph');
// newPhar.appendChild(newPharValue);
// 
// const sectionA = document.getElementById('a');
// sectionA.appendChild(newPhar);
// 
// const newLi = document.createElement('li');
// const valueNewLi = document.createTextNode('New Item');
// newLi.appendChild(valueNewLi);
// const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// ul.insertBefore(newLi, li2);
// 
// const link = sectionA.getElementsByTagName('a')[0];
// sectionA.removeChild(link);
// 
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const newH2 = document.createElement('h2');
// const valueNewH2 = document.createTextNode('New Heading');
// newH2.appendChild(valueNewH2);
// sectionB.replaceChild(newH2, p4);
// 
// newPhar.style.backgroundColor = 'lightblue';
// newLi.style.backgroundColor = 'lightblue';
// newH2.style.backgroundColor = 'lightblue';




/* ============================DOM EVENT============================*/
// const p3 = document.querySelector('.p3');

// element method
// function changeColor() {
//     p2.style.backgroundColor = 'lightcoral';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = changeColor;

// addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const textLi = document.createTextNode('New Li');
//     li.appendChild(textLi);
//     ul.appendChild(li);
// });

// perbedaan event handler dan event listener
// const p3 = document.querySelector('.p3');
// Event handler
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function () {
//     p3.style.color = 'darkred';
// }

// addEventListener()
// p3.addEventListener('mouseenter', function () {
//     p3.style.backgroundColor = 'lightblue';
// });

// p3.addEventListener('mouseleave', function () {
//    p3.style.color = 'darkred';
// });