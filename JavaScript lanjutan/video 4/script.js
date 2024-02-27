/* ada 3 object yang akan dibuat pada creation phase:
1. Window
2. This
3. Argument */

var nama = 'Fei';
var uname = '@fangeline_';

function cetakURL(uname) {
    var igURL = 'http://instagram.com/';
    return igURL + uname;
}

console.log(cetakURL(uname));

// what if
function cetakURL() {
    /* karena tidak ada argumen yang menangkap maka dia akan masuk ke
    object argument yg dapat diakses dengan menggunakan bracket notation */
    var igURL = 'http://instagram.com/';
    return igURL + uname;
}

console.log(cetakURL('@fei_'));

/* setiap sebuah function dipanggil maka akan dibuat sebuah local
execution context dan akan membentuk tumpukan execution yang kalau sudah
selesai akan dihilangkan dari stack tsb*/

/* urutannya adalah dia akan masuk ke creation phase dulu lalu akan menjalankan
hoisting yang akan mendeklarasikan var nama dan uname serta function cetakURL(uname)
namun var masih blm ada isinya dan function belum dipanggil,
selanjutnya masuk ke execution phase yang dimana dia akan assign value
pada var nama dan uname lalu akan memanggil function cetakURL dan
akan membuat local execution context untuk menjalankan si function cetakURL */

// selain itu, scope variable juga berpengaruh pada execution phase

/* urutan cek value variable adalah dari local function, kalau tidak ada naik ke
argument, dan terakhir ke global */