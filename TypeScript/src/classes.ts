/* ------------CLASSES------------ */
class Coder {

    /* digunakan jika kita ingin menginisialisasi var di lain waktu dan 
    memberitahu ts bahwa kita tahu apa yg kita lakukan */
    secondLang!: string

    // protected dapat diakses oleh derived class
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'TypeScript'
        ) {
            this.name = name,
            this.music = music,
            this.age = age,
            this.lang = lang
    }

    public getAge() {
        return `Hello, I am ${this.age} years old`;
    }
}

const Fei = new Coder('Fei', 'Pop', 21);
console.log(Fei.name);
// console.log(Fei.age);
console.log(Fei.music);
console.log(Fei.getAge);

class WebDev extends Coder {
    constructor (
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Jazz', 24)
console.log(Sara.getLang());
// console.log(Sara.age);

// implementing interface to a class
interface Musician {
    name: string,
    instrument: string,
    // method yg paramnya string dan return string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;
    
    constructor(name: string, instrument: string) {
        this.name = name,
        this.instrument = instrument;
    }  

    public play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Eddie = new Guitarist('Eddie', 'guitar');
console.log(Eddie.play('strums'));


// new class
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count)
console.log(Steve.id)

// getters and setters
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        }

        throw new Error('Param is not an array of strings')
    }
}

const myBands = new Bands();
myBands.data = ['Band1', 'Band2', 'Band3']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Band4']
console.log(myBands.data)
// myBands.data = ['Band', 150]