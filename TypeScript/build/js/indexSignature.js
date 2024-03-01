"use strict";
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Fei optional
    Fei: 21
};
// interface transactionObj {
//     // indexnya akan dalam bentuk string dan valuenya akan dlm bentuk num
//     readonly [index: string]: number
// }
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
// todaysTransaction.Pizza = 40;
console.log(todaysTransaction['Fei']);
const student = {
    name: 'Fei',
    GPA: 3.97,
    classes: [100, 200]
};
// console.log(student.test);
// keyof membuat union type dari Student interface
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 200
};
for (const key in monthlyIncomes) {
    console.log(monthlyIncomes[key]);
}
