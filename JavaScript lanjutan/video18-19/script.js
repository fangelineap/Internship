/* SPREAD OPERATOR DAN REST PARAMETER
Spread ooperator -> memecah iterables menjadi single element
Iterables:
1.  String
2. Array
3. Argument/nodeList
4. TypedArray
5. Map
6. Set
7. User-defined iterables

Rest Parameter -> merepresentasikan argumen pada funciton dgn jumlah
tdk terbatas menjadi sebuah array */

/* SPREAD OPERATOR 
Lebih fleksibel saat menggabungkan array daripada function concat*/
const mahasiswa = ['Fei', 'Jessie', 'Momo'];
console.log(...mahasiswa[0]);
const dosen = ['Dosen Fei', 'Dosen Jessie', 'Dosen Momo'];
let orang = [...mahasiswa, 'Bapak A', ...dosen];
console.log(orang);
// atau
orang = mahasiswa.concat(dosen);
console.log(orang);

// mengcopy array
const mhs1 = [...mahasiswa];
mhs1[0] = 'Ibu B';
console.log(mhs1);
console.log(mahasiswa);


// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);

/* menggunakan spread operator untuk melakukan zoom in dan out pada saat
hover sebuah huruf pada h1 */
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


/* REST PARAMETER 
penggunaannya mirip dengan arguments (default yg ada untuk menyimpan
    argumen yang tidak ditangkap) namun arguments tidak berbentuk arr
    dan rest param bentuknya array jadi tidak perlu ubah*/
function myFunction(a, ...arr) {
    return arr;
    // return Array.from(arguments);
    // return [...arguments];
}

console.log(myFunction(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
    let total = 0;
    // cara 1 - for of
    // for(const a of angka) {
    //     total += a;
    // }

    //  cara 2 - higher order function
    total = angka.reduce((a, b) => a + b);

    return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));


// array destructuring, object juga sama (pakai property)
const kelompok1 = ['A', 'B', 'C', 'D', 'E', 'Fei'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);


// filtering
function filterBy(tipe, ...unfiltered) {
    return unfiltered.filter(x => typeof x === tipe);
}

console.log(filterBy('number', 1, 2, 'Fei', true, 5, false, 'Fei lagi'));