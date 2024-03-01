/* ---------- ARRAY AND OBJECT ----------- */
// ARRAY
let stringArray = ["one", "two", "three"];

let pets = ["jessie", "momo", 5];

let mixedData = ["HAS", 1978, true];
// pets[0] = false;
pets.unshift(10);
pets.push("brownie");

// tuple
let myTuple: [string, number, boolean] = ["Fei", 21, true];

// OBJECT
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = pets;
myObj = [];

const example = {
    prop1: "Fei",
    prop2: false,
};

example.prop2 = true;

/* type dan interface penggunaannya mirip
interface lebih digunakan pada class */
type guitarist = {
    name?: string;
    active: boolean;
    albums: (string | number)[];
};

let contoh: guitarist = {
    name: "Fei",
    active: true,
    albums: [2003, 2002, "FA383"],
};

let contoh2: guitarist = {
    active: false,
    albums: [2003, "FA383"],
};

// FUNCTION
const greetGuitarist = (guitarist1: guitarist) => {
    if (guitarist1.name) {
        return `Hello ${guitarist1.name.toUpperCase()}!`;
    }

    return `Hello!`;
};

console.log(greetGuitarist(contoh2));

// ENUMS
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A);

// INTERFACE WITH ALIASES
// alias
type stringOrNumber = string | number;
type strOrNumArray = (string | number)[];

type Artist = {
    // optional variable
    name?: string;
    active: boolean;
    masterpieces: strOrNumArray;
};

let userId: stringOrNumber;
userId = "Fei";
// userId = true;

// template literals as types
let uname: "Fei" | "Jessie";
uname = "Fei";