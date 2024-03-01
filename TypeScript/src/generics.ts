/* GENERICS 
placeholder dalam bentuk variable untuk membuat functions, classes, 
dan interfaces yang dapat menggunakan berbagai data types namun masih 
memastikan adanya type safety*/

const echo = <T>(arg: T): T => arg;
const isObj = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
}

console.log(isObj(true))
console.log(isObj('fei'))
console.log(isObj(null))
console.log(isObj(40))
console.log(isObj({name: 'Fei', umur: 21}))
console.log(isObj(['Fei', 'Feii', 'Feiii']))


//////
const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }

    return { arg, is: !!arg }
}

console.log('=======================')
console.log(isTrue(false))
console.log(isTrue(9))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue({}))
console.log(isTrue({name: 'Fei'}))
console.log([])
console.log([3, 4, 5])

//////////////
interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(value: T): BoolCheck<T> => {
    if(Array.isArray(value) && !value.length) {
        return { value, is: false }
    }
    if(isObj(value) && !Object.keys(value as keyof T).length) {
        return { value, is: false }
    }

    return { value, is: !!value }
}

interface HasID {
    id: number
}

const processUser = <T extends HasID> (user: T): T => {
    return user;
}

console.log(processUser({id: 1, name: 'Fei'}))
// console.log(processUser({name: 'Fei'}))

const getUsersProperty = <T extends HasID, K extends keyof T>
(users: T[], key: K): T[K][] => {
    return users.map(u => u[key]);
}

const usersArr = [
    {
        id: 1,
        name: 'fei',
        semester: 6
    },
    {
        id: 2,
        name: 'jessie',
        semester: 4
    }
]

console.log(getUsersProperty(usersArr, "name"));

//generics in class
class StateObject<T> {

    private data: T
    
    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject('fei');
console.log(store.state)
store.state = 'feiii'
// store.state = 21

const myState = new StateObject<(string | number | boolean)[]> ([15, 16]);
myState.state = (['fei', 21, true])
console.log(myState.state)