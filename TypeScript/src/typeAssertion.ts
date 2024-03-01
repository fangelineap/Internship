/* ----------TYPE ASSERTION---------- */
type One = string;
type Two = string | number;
type Three = 'hello';

// convert pada type yang lebih atau kurang spesifik
let e: One = 'hello';
let f = e as Two; //convert to less specific types
let g = e as Three; //convert to more specific type

const addOrConcat = (a: number, b:number, c:'add' | 'concat'): number | string => {
    if(c === 'add') {
        return a + b;
    }
    return '' + a + b;
}

// as string reassures ts bahwa kita tahu returnnya adalah string
let typeAssertion: string = addOrConcat(2, 2, 'concat') as string;

// DOM
const img = document.querySelector('img')!
// ! as non null assertion
const myImg = document.getElementById('#img') as HTMLImageElement

img.src
myImg.src
