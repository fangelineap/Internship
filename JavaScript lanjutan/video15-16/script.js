/* DESTRUCTURING ASSIGNMENT PADA ARRAY DAN OBJECT
Melakukan restruktur ulang dari value yang terdapat
dalam array atau object ke dalam variable
tertentu yang kita inginkan */

// DESTRUCTURING ARRAY
const perkenalan = ['Halo', 'nama', 'saya', 'Fei'];
let [salam, , , nama] = perkenalan;
console.log(salam);
console.log(nama);

// swapping values
[salam, nama] = [nama, salam];
console.log(`Variable salam: ${salam}`);
console.log(`Variable nama: ${nama}`);


// return value pada function
function coba() {
    return [1, 2, 3, 4, 5];
}

const [a, ...alphabet] = coba();
console.log(alphabet);





// DESTRUCTURING OBJECT

// assign ke var baru dan tambahkan default value
const mahasiswa = {
    id: 1111,
    name: 'fei',
    age: 21,
    gpa: 10,
    address: 'Jalan A'
}

function getId({id}) {
    return `ID mahasiswa: ${id}`;
}

const {name: namee, age: agee, email = 'fei@gmail.com', ...values} = mahasiswa;
console.log(namee);
console.log(agee);
console.log(email);
console.log(values);
console.log(getId(mahasiswa));



// DESTRUCTURING FUNCTION (RETURN VALUE AND ARGUMENT)

// RETURN VALUE
function calculation(a, b) {
    return [a + b, a - b, a / b, a * b];
}

// urutan sangat berpengaruh
const [tambah, bagi, kurang, kali] = calculation(9, 5);
console.log(kurang);

// agar tidak berpengaruh bisa gunakan object
function calculate(a, b) {
    return {
        add: a + b,
        sub: a - b,
        mul: a * b,
        div: a / b
    }
}

const {mul, div, add, sub} = calculate(9,5);
console.log(div);


// ARGUMENT
const mhs1 = {
    nama: 'fei',
    umur: 21,
    email: 'fei@gmail.com',
    nilai: {
        uts: 90,
        uas: 91
    }
}

function cetakMhs({nama, umur, nilai:{uts}}) {
    return `nama saya ${nama} dan saya berumur ${umur} !
    nilai uts saya adalah ${uts}`;
}

console.log(cetakMhs(mhs1));