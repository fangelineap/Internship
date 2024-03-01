/* FETCH 
method pada API JS untuk mengambil data secara async spt ajax tapi ini milik js
Mereturn sebuah promise yang berupa response yang mereprsentasikan keberhasilan/
kegagalan dari sebuah event async di masa yang akan datang
Ada 3 states:
1. Fulfilled - callbacknya resolve
2. Rejected - callback reject
3. Pending - callback finally
Resource fetch 2: url, object request
Parameter 2: resources dan init (konfigurasi tambahan, defaultnya get)
Fetch dapat digunakan dengan menggunakan url
Aksi yang dapat dilakukan di promise adalah then dan catch


ASYNC DAN AWAIT
Fetch merupakan asynchronous function yang menghasilkan promise namun async
function ini dibuat dengan menggunakan penulisan yang synchronous
Async function dapat memiliki keyword await untuk menunggu function async ini
selesai dan mereturn promise baru lanjut ke code selanjutnya 

ERROR HANDLING
Untuk menghandle error (resolve dan reject) kita dapat menggunakan then dan catch,
try dan catch jika pada async function, dan pada fetch dapat menggunakan
*/

let ditepati = false;

const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji telah ditepati');
    }
    else {
        reject('Ingkar janji');
    }
});

janji1
.then(res => console.log('OK!: ' + res))
.catch(res => console.log('NOT OK!: ' + res));

const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve("Ditepati namun membutuhkan waktu");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("Tidak ditepati setelah menunggu lama");
        }, 2000);
    }
});

console.log("start");
janji2
    .finally(() => console.log("selesai menunggu"))
    .then((res) => console.log("OK: " + res))
    .catch((res) => console.log("NOT OK: " + res));
console.log("end");

// .Promise.all() untuk banyak promise
const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                judul: "Judul 1",
                sutradara: "Sutradara 1",
            },
        ]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                kota: "jakarta",
                temp: 28,
                kondisi: "berawan",
            },
        ]);
    }, 500);
});

Promise.all([film, cuaca]).then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});

// video 26
const coba = new Promise(resolve => {
    setTimeout(() => {
        resolve('selesai');
    }, 2000);
});
coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, waktu);
        } else {
            reject("kelamaan");
        }
    });
}

async function cobaAsync() {
    // kalau await sudah pasti kalau resolve, gunakan try catch untuk catch reject
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.error(error);
    }
}

cobaAsync();
// const coba2 = cobaPromise();
// coba2
// .then(() => console.log(coba2))
// .catch(() => console.log(coba2));
