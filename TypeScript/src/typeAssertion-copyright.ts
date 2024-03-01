// const copyright = document.getElementById('year')!
// const thisYear = new Date().getFullYear()
// copyright.setAttribute("datetime", thisYear)
// copyright.textContent = thisYear

// 1st variation:
// let copyright: HTMLElement | null = document.getElementById('year')
// let thisYear:string = new Date().getFullYear().toString()
// if(copyright) {
//     copyright.setAttribute("datetime", thisYear)
//     copyright.textContent = thisYear
// }

// 2nd variation
const copyright = document.getElementById('year') as HTMLSpanElement
console.log(copyright)
const thisYear: string = new Date().getFullYear().toString()
copyright.setAttribute("datetime", thisYear)
copyright.textContent = thisYear