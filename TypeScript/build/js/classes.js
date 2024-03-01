"use strict";
/* ------------CLASSES------------ */
class Coder {
    // protected dapat diakses oleh derived class
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name,
            this.music = music,
            this.age = age,
            this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age} years old`;
    }
}
const Fei = new Coder('Fei', 'Pop', 21);
console.log(Fei.name);
// console.log(Fei.age);
console.log(Fei.music);
console.log(Fei.getAge);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Jazz', 24);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name,
            this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Eddie = new Guitarist('Eddie', 'guitar');
console.log(Eddie.play('strums'));
// new class
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(Steve.id);
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Band1', 'Band2', 'Band3'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Band4'];
console.log(myBands.data);
// myBands.data = ['Band', 150]
