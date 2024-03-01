/* ----------FUNCTION----------*/
const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg("hi");
logMsg(add(3, 4));

let subtract = function (c: number, d: number): number {
    return c - d;
};

// jika menggunakan interface untuk menspesifikasikan data type
interface mathFunc {
    (a: number, b: number): number;
}

// jika menggunakan type
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
    return c * d;
};

console.log(multiply(3, 4));

// optional parameters (harus ada di paling belakang dr list)
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

const sumAll = (a: number = 3, b: number, c: number = 5): number => a + b + c;

console.log(sumAll(10, 4, 10));
console.log(sumAll(undefined, 5));

// rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((acc, curr) => (acc += curr));
};

console.log("rest parameter: " + total(3, 4, 5, 6, 7));

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: any): any => {
    if (typeof value === "string") {
        return "string";
    } else if (isNumber(value)) {
        return "number";
    }

    createError("This should never happen");
};

console.log(numberOrString(4));
console.log(numberOrString(true));