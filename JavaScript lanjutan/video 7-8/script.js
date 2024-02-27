/* ARROW FUNCTION
function expression yang dapat dibuat menjadi lebih ringkas

Perbedaannya?

*/

// function expression
// const printNama = function (nama) {
//     return `Halo ${nama}`;
// }

// console.log(printNama('Fei'));


// // arrow function with implicit return
// const tampilNama = nama => `Halo ${nama} - arrow function`;

// console.log(tampilNama('Fei'));


// // function expression with map
// let mahasiswa = ['Fei', 'Feii', 'Feiii'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


// arrow function with map
// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

/* kalau mau return object harus dibungkus oleh () agar tidak dibaca
sebagai function */
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);




/* THIS PADA ARROW FUNCTION
Tidak bisa membuat constructor dengan menggunakan arrow function dan
tidak ada context this pada arrow function karena dia tidak mencari
pada parent function atau atasnya
Pada funciton declaration dia akan terkena hoisting karena berupa function shg dapat 
menggunakan this
Pada function expression (disimpan pada sebuah variable dulu) maka dia tidak
akan terkena hoisting karena varnya masih undefined, maka tidak dapat menggunakan
this karena akan mencari ke object window*/
const Mhs = function() {
    this.nama = 'Fei';
    this.umur = 21;
    this.sayHello = function () {
        console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
    };

    // arrow function yang langsung diinvoke
    (() => console.log(++this.umur))();
}

// kenapa pakai new? karena dia constructor, ga ada return objectnya
const fei = new Mhs();

// kalau pakai object literal
const mhs1 = {
    nama: 'Fei',
    umur: 21,
    sayHello: () => {
        /* kalau dia cari ke mhs1 tidak ada thisnya dan karena dia jg tidak
        ada konsep this maka dia akan menjadi undefined */
        `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun`
    }
}


// real life implementation dari konteks this pada arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
})