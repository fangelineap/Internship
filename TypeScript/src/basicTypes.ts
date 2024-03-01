/* ---------- BASIC TYPES IN TS ----------- */
// let b: number = 6;

let a: number = 12;
let b: string = "6";

// console.log(a / b);
// let c: number = 2;
// console.log(c * b);

let myName: string = "Fei";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number;

myName = "Feii";
meaningOfLife = 21;
isLoading = false;
album = "Feiii";
album = 23;

const sum = (a: number, b: number): number => {
    return a + b;
};

// union types
let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;