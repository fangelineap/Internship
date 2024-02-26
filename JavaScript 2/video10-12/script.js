const closeBtn = document.querySelector('.close');
const card = document.querySelector('.card');

closeBtn.addEventListener('click', function () {
    card.style.display = 'none';
});

// cara 1 - without DOM Traversal
const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        card[i].style.display = 'none';
    });
}


// cara 2 - with DOM Traversal
// const close = document.querySelectorAll('.close');

for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
    });
}

close.forEach(element => {
    element.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});



// DOM TRAVERSAL METHOD
const nama = document.querySelector('.nama');
console.log(nama);
/* node: whitespace dihitung sebagai node
element: whitespace tidak dihitung sebagai element, hanya yg ada tag */
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextElementSibling);
console.log(nama.nextSibling);
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);



/* PREVENT DEFAULT -> method untuk mencegah terjadinya aksi default yang 
dilakukan oleh elemen dalam web */
close.forEach(element => {
    element.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    });
});


/* EVENT BUBBLING -> event yang dimiliki oleh parent akan dijalankan
duluan daripada event pada child, untuk stop ini kita dapat menggunakan
method .stopPropagation() */
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        alert('ok');
    });
})


const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});