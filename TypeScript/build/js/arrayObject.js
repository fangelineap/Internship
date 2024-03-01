"use strict";
/* ---------- ARRAY AND OBJECT ----------- */
// ARRAY
let stringArray = ["one", "two", "three"];
let pets = ["jessie", "momo", 5];
let mixedData = ["HAS", 1978, true];
// pets[0] = false;
pets.unshift(10);
pets.push("brownie");
// tuple
let myTuple = ["Fei", 21, true];
// OBJECT
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = pets;
myObj = [];
const example = {
    prop1: "Fei",
    prop2: false,
};
example.prop2 = true;
let contoh = {
    name: "Fei",
    active: true,
    albums: [2003, 2002, "FA383"],
};
let contoh2 = {
    active: false,
    albums: [2003, "FA383"],
};
// FUNCTION
const greetGuitarist = (guitarist1) => {
    if (guitarist1.name) {
        return `Hello ${guitarist1.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(contoh2));
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
let userId;
userId = "Fei";
// userId = true;
// template literals as types
let uname;
uname = "Fei";
