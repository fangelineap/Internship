/* HIGHER ORDER FUNCTION
    Function yang beroperasi pada function lain, baik sbg argumen 
    atau return value karena diperlakukan sbg object

    Function yang menerima argumen function lain (callback) -> higher order function
    Function yang disimpan sbg argumen -> callback
    Contoh higher order function : setTimeout

    Tujuan: abstraksi code karena kerumitannya disembunyikan menjadi line
    of code yang lebih sedikit tp lebih kompleks sebenarnya

    Contoh higher order function:
    1. Array.prototype.map()
    2. Array.prototype.filter()
    3. Array.prototype.reduce()
*/

// higher order function
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

// console.log & alert merupakan callback
repeat(5, console.log);
repeat(3, alert);



// 1.  filter
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const filtered = angka.filter(a => a >= 3); //callback

console.log(filtered);

// 2. map
const mapped = angka.map(a => a * 2);
console.log(mapped);

// 3. reduce
// 5 disini adalah nilai awal, defaultnya adalah 0
const reduced = angka.reduce( (accumulator, value) => accumulator += value, 5);
console.log(reduced);

// // contoh yang lebih ribet
// const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((accumulator, value) => accumulator += value);
// console.log(hasil);





/* LATIHAN FILTER, MAP, AND REDUCE */
// mengambil semua video dengan strawberry shortcake di judul
const videos = Array.from(document.querySelectorAll('[data-duration]'));
const filtered2 = videos.filter((video) => video.textContent.includes('Strawberry Shortcake'))
                .map(item => item.dataset.duration)
                .map(dur => {
                    const parts = dur.split(':').map(part => parseFloat(part));
                    return parts[0] * 60 + parts[1];
                })
                .reduce((acc, val) => acc += val, 0);

const hour = Math.floor(filtered2 / 3600);
const minutes = Math.floor((filtered2 - (hour * 3600)) / 60);
const seconds = Math.floor(filtered2 - (hour * 3600) - (minutes * 60));

console.log(filtered2);
console.log(hour);
console.log(minutes);
console.log(seconds);

// simpan di dom
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${hour} jam ${minutes} menit ${seconds} detik`;

const jmlVidHTML = document.querySelector('.jumlah-video');
const jmlVid = Array.from(document.querySelectorAll('[data-duration]'))
                .filter(vid => vid.textContent.includes('Strawberry Shortcake')).length;
jmlVidHTML.textContent = `${jmlVid} video`;