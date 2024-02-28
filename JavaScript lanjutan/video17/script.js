/* FOR..OF AND FOR..IN 
For..of: membuat loop untuk mengiterasi iterable object
For..in: mengiterasi hanya enumerable

kalau mau destructuring array atau iterable objects yg lain
pakai for..of dan kalau mau looping property pakai for..in*/


/* FOR..OF */
// array
const mhs = ['Fei', 'Feii', 'Feiii'];

for(const m of mhs) {
    console.log(m);
}
// entries memberikan index, harus pakai destructuring pd argument
for(const [i, m] of mhs.entries()) {
    console.log(`${m} adalah index ke-${i}`);
}

// string
const nama = 'Fei';
for(const n of nama) {
    console.log(n);
}


// nodelist
const linama = document.querySelectorAll('.nama');
for(const li of linama) {
    console.log(li.textContent);
}

// arguments
function jumlahkanAngka() {
    // variable arguments secara default menangkap arg tp hanya bs pakai for..of
    console.log(arguments);
    let jml = 0;
    for(a of arguments) {
        jml += a;
    }

    return jml;
}

console.log(jumlahkanAngka(2, 5, 1, 3, 4));





/* FOR..IN 
Membuat sebuah loop yang hanya dapat mengiterasi enumerable*/
const mahasiswa = {
    nama: 'Fei',
    umur: 21,
    email: 'fei@gmail.com'
}

for(m in mahasiswa) {
    console.log(mahasiswa[m]);
}