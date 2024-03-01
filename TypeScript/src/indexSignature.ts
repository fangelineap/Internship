/* -----------INDEX SIGNATURES----------- 
digunakan saat membuat obj namun belum tau object keynya apa namun sudah
tau bentuk dari propnya bagaimana*/
interface transactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransaction: transactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Fei optional
    Fei: 21
}

// interface transactionObj {
//     // indexnya akan dalam bentuk string dan valuenya akan dlm bentuk num
//     readonly [index: string]: number
// }
let prop: string = 'Pizza'
console.log(todaysTransaction[prop])
// todaysTransaction.Pizza = 40;
console.log(todaysTransaction['Fei']);


///////
interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Fei',
    GPA: 3.97,
    classes: [100, 200]
}

// console.log(student.test);

// keyof membuat union type dari Student interface
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')



///////////////
// interface Incomes {
//     [key: string]: number,
// }
/* Kelebihan menggunakan types dibandingkan iface adalah types dapat 
menspesifikasikan string literal dan iface hanya bisa menspesifikasikan
bahwa propnya akan dalam bentuk string */

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 200
}

for(const key in monthlyIncomes) {
    console.log(monthlyIncomes[key as keyof Incomes]);
}