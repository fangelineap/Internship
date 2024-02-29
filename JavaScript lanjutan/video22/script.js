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
Aksi yang dapat dilakukan di promise adalah then dan catch*/

let ditepati = false;

// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati');
//     }
//     else {
//         reject('Ingkar janji');
//     }
// });

// janji1
// .then(res => console.log('OK!: ' + res))
// .catch(res => console.log('NOT OK!: ' + res));

const janji2 = new Promise((resolve, reject) => {
    if(ditepati) {
        setTimeout(() => {
            resolve('Ditepati namun membutuhkan waktu');
        }, 2000);
    }
    else {
        setTimeout(() => {
            reject('Tidak ditepati setelah menunggu lama')
        }, 2000);
    }
});

console.log('start');
janji2
.finally(() => console.log('selesai menunggu'))
.then(res => console.log('OK: ' + res))
.catch(res => console.log('NOT OK: ' + res));
console.log('end')


// .Promise.all() untuk banyak promise
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                judul: 'Judul 1',
                sutradara: 'Sutradara 1'
            }
        ]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                kota: 'jakarta',
                temp: 28,
                kondisi: 'berawan'
            }
        ]);
    }, 500);
});

Promise.all([film, cuaca])
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});