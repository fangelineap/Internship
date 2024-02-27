/* Object declaration (3):
1. Object literal
2. Function declaration
3. Constructor function
4. Object.create untuk menyempurnakan function declaration*/

// cara membuat object pada JS
// 1. Object literal, kelemahan: memakan banyak resource
// let mahasiswa = {
//     'name': 'Fei',
//     'energy': 10,
//     makan: function (portion) {
//         this.energy = this.energy + portion;
//         console.log(`Halo ${this.name}, selamat makan`);
//     }
// }
/* kalau pakai object literal, kalau mau buat object baru harus copas,
contoh mahasiswa1 dan mahasiswa2 */

// 2. function declaration, lebih efektif dari no 1 tapi masih duplicate
// const methodMhs = {
    //     eat: function (portion) {
        //         this.energy += portion;
        //         console.log(`Halo ${this.name}, selamat makan`);
        //     },
        //     play: function (hour) {
            //         this.energy -= hour;
            //         console.log(`Halo ${this.name}, selamat bermain`);
            //     },
            //     sleep: function (hour) {
//         this.energy += (hour * 2);
//         console.log(`Halo ${this.name}, selamat tidur`);
//     }
// }

// function mahasiswa(name, energy) {
    //     let mhs = {};
    //     mhs.name = name;
    //     mhs.energy = energy;
    //     mhs.eat = methodMhs.eat;
    //     mhs.play = methodMhs.play;
    //     mhs.sleep = methodMhs.sleep;
    //     // kelemahan: setiap ada perubahan method harus diedit disini juga
    //     return mhs;
    // }
    
    // // tidak perlu bikin template baru karena sudah ada, tinggal bikin var baru
    // let fei = mahasiswa('Fei', 10);
    
    
/* (2.1). function declaration dgn Object.create - untuk membuat cara 3 
menjadi lebih efektif problemnya kita harus membuat object yang 
mendukung object mahasiswa jadi belum yang paling efektif - harusnya 
menggunakan prototype*/
// const methodMhs = {
//     eat: function (portion) {
//         this.energy += portion;
//         console.log(`Halo ${this.name}, selamat makan`);
//     },
//     play: function (hour) {
//         this.energy -= hour;
//         console.log(`Halo ${this.name}, selamat bermain`);
//     },
//     sleep: function (hour) {
//         this.energy += (hour * 2);
//         console.log(`Halo ${this.name}, selamat tidur`);
//     }
// }

// function mahasiswa(name, energy) {
//     /* memberitahukan parent objectnya jadi tidak perlu mendeklarasikan
//     setiap perubahan yang ada */
//     let mhs = Object.create(methodMhs);
//     mhs.name = name;
//     mhs.energy = energy;

//     return mhs;
// }

// let fei = mahasiswa('Fei', 10);

/* 3. Constructor function (using new, paling sering digunakan)
memudahkan membuat prototype dan membuat object dgn menggunakan
Object.create nantinya */
// function mahasiswa(name, energy) {
//     this.name = name;
//     this.energy = energy;

//     this.eat = function (portion) {
//         this.energy += portion;
//         console.log(`halo ${this.name}, selamat makan`);
//     }

//     this.play = function (hour) {
//         this.energy -= hour;
//         console.log(`halo ${this.name}, selamat main`);
//     }
// }

// let fei = new mahasiswa('Fei', 20);



// 4. Prototype - mirip dengan konsep class yang memiliki inheritance
// function mahasiswa(name, energy) {
//     this.name = name;
//     this.energy = energy;
// }

// mahasiswa.prototype.eat = function (portion) {
//     this.energy += portion;
//     return `Halo ${this.name}, selamat makan`;
// }

// mahasiswa.prototype.play = function (hour) {
//     this.energy -= hour;
//     return `Halo ${this.name}, selamat bermain`;
// }

// let fei = new mahasiswa('Fei', 15);

/* (4.1). class function untuk menghandle function yang dapat dimiliki
oleh suatu object */
// class mahasiswa {
//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;
//     }

//     eat(portion) {
//         this.energy += portion;
//         console.log(`halo ${this.name}, selamat makan`);
//     }

//     play (hour) {
//         this.energy -= hour;
//         console.log(`halo ${this.name}, selamat main`);
//     }
// }

// let fei = new mahasiswa('Fei', 20);