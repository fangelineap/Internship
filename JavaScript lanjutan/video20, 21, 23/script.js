/* ASYNCHRONOUS 
JavaScript merupakan programming language yang single-threaded, non blocking, 
asynchronous, and concurrent language

Single-threaded: js hanya bisa melakukan 1 thread pada 1 waktu
Non-blocking: kalau suatu task belum selesai masih bisa lanjut ke task lain
Asynchronous: threadnya bisa pindah ke task lain jika suatu thread blm selesai
Concurrency: single threaded bekerja dengan async secara bersamaan

Terdapat beberapa async callbacks yang dapat dijalankan secara concurrent:
1. DOM
2. ajax (XMLHTTPRequest)
3. setTimeout
4. setInterval, etc.
Semua ini akan masuk ke web API kalau masih dalam proses menunggu, kalau sudah
maka masuk ke callback queue dan akan ada event loop yang akan mengecek
apakah queue ada yg mengantri atau tidak, kalau ada maka dia akan mengecek
apakah stack sedang kosong atau tidak, kalau kosong maka yg ada di queue
dapat dimasukkan ke stack untuk dieksekusi

Callback -> function yang dikirim sebagai parameter pada function lain untuk 
dieksekusi

kelemahan menggunakan callback adalah saat menggunakan terlalu banyak callback
maka dapat mengakibatkan callback hell
Cara yang lebih efektif dr jquery: fetch (dari js)*/

// async
console.log('satu');
setTimeout(() => {
    console.log('dua')
}, 5000);
console.log('tiga');

// callback - synchronous
function halo(nama) {
    alert(`Halo ${nama}`);
}

function printPesan(callback) {
    const nama = prompt('Masukkan nama: ');
    callback(nama);
}

printPesan(halo);


const mhs = [
    {
        nama: 'fei',
        email: 'fei@gmail.com'
    },
    {
        nama: 'jessie',
        email: 'jessie@gmail.com'
    }
];

// higher order function -> synchronous callback
mhs.forEach(m => {
    console.log(m.nama);
});

// asynchronous callback - ajax
function getData(url, success, error) {
    // object ajax
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            }
            else if(xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

console.log('start');
// url, success callback func, error callback func
getData('mahasiswa.json', (result) => {
    console.log(JSON.parse(result).forEach(m => console.log(m.nama)));
}, () => {

});
console.log('end');


// async - JQuery ($)
console.log('start');
$.ajax({
    url: 'mahasiswa.json',
    success: (students) => {
        students.forEach(s => {
            console.log(s.nama);
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('end');