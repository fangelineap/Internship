/* TAMPLATE LITERALS IN JAVASCRIPT
Dapat digunakan untuk membuat:
1. multiline string
2. embedded expression ${}
3. HTML fragments
4. Expression interpolation
3. tagged template (tulis tag di depan string dgn backtick) */


// embedded expression and multiline string
const nama = 'Fei';
const umur = 21;
console.log(`Halo, nama saya ${nama} !
Saya berumur ${umur}`);

// Expression interpolation
console.log(`Tahun depan saya akan berumur ${umur + 1}`);

// HTML fragments
const mhs = {
    nama: 'Fei',
    umur: 21,
    email: 'fangeline@gmail.com'
}

const element = `<div class="mhs">
                    <h2>${mhs.nama}</h2>
                    <span class="umur">Umur: ${mhs.umur}</span>
                </div>`;
document.body.innerHTML = element;


// looping
const mahasiswa = [
    {
        nama: 'Fei',
        umur: 21,
    },
    {
        nama: 'Fei lagi',
        umur: 22
    }
];

const el = `<div class="mhs">
    ${mahasiswa.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.umur}</li>
    </ul>`)}
</div>`;

document.body.innerHTML = el;


// conditional, ternary operation
const lagu = {
    judul: 'Milk and Toast and Honey',
    penyanyi: 'Roxette',
    feat: 'Abcd'
}

const elemen = `<div class="mhs">
<ul>
    <li>${lagu.judul}</li>
    <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = elemen;


// nested HTML fragments
const student = {
    nama: 'Fei',
    semester: 6,
    matakuliah: ['Algorithm and Programming', 'Pattern Software Design', 'Software Engineering']
}

function cetakMataKuliah(matkul) {
    return `
    <ol>
        ${matkul.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const elem = `<div class="mhs">
<h2>${student.nama}</h2>
<span class="semester">Semester: ${student.semester}</span>
<h3>Mata Kuliah:</h3>
${cetakMataKuliah(student.matakuliah)}
</div>`;

document.body.innerHTML = elem;



/* Tagged templates
Bentuk yang lebih kompleks dari template literals karena kita dapat membaca
template literals dari sebuah function */

const name = 'Fei';
const age = 21;

// rest parameter untuk menampung name dan age
function highglight(string, ...args) {
    // cara 1
    let str = '';
    string.forEach((st, i) => {
        str += `${st}${args[i] || ''}`;
    });
    return str;

    // cara 2
    return string.reduce((str, st, i) => `${str}${st}<span class="hl">${args[i] || ''}</span>`, '');
}

// tag template akan memecah string yg ada dengan expression
const str = highglight`Halo, nama saya ${name}, saya berumur ${age} tahun`;

document.body.innerHTML = str;