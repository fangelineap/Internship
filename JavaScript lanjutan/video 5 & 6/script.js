/* CLOSURE
Merupakan kombinasi antara function dan lexical scope dalam function
yang dapat memiliki data yang didapat dari hasil function yang sudah 
pernah dieksekusi sebelumnya (parent function) */

// example
function init() {
    let name = 'Fei';
    function printName() {
        /* karena di local printName function tidak ada, maka naik 
        ke parent (init) -> closure scope karena memiliki akses
        pada variable pada parent function */
        console.log(name);
    }

    printName();
}

init();

/* alasan menggunakan closure:
- membuat function factory
- membuat private method/variable (seolah-olah)
closure dibuat dengan ada function yang direturn oleh function agar
seolah-olah memiliki private method dan memiliki private var jika ada
*/

function salam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`);
    }
}

// function factory
let selamatPagi = salam('pagi');
let selamatSiang = salam('siang');
let selamatMalam = salam('malam');

selamatPagi('Fei');
selamatSiang('Fangeline');

console.dir(selamatMalam('Feiii'));

// juga dapat menggunakan immediate invoke function
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());



/* VAR, LET, AND CONST
var -> function scope, ditambahkan oleh javascript sendiri jika kita menginisialisasi sebuah
variable (hoisting) secara global kecuali jika mendeklarasikannya dalam 
sebuah function maka dia hanya akan dapat digunakan oleh function itu saja

IIFE (Immediately Invoked Function Expression) & 
SIAF (Self Invoking Anonymous Function) untuk menjaga variable di dalam
function tidak dapat diakses dari luar -> solusinya dapat menggunakan let
agar tidak ribet

let -> block scope

const -> block scope juga, tapi kalau let dia masih bisa mengubah value
yang dimiliki sedangkan const tidak dapat diubah valuenya setelah diinisialiasai
untuk pertama kali (immutable) tapi hanya berlaku pada data type selain array atau object

Tujuan digunakan const adalah meminimalisir perubahan state
*/