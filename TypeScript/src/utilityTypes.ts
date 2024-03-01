/* UTILITY TYPES */

// partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAsg = (assign: Assignment, propsToUpdate: Partial<Assignment>):
Assignment => {
    // override object assign w props yg ada di propsToUpdate
    return { ...assign, ...propsToUpdate }
}

const assign: Assignment =  {
    studentId: '2540128530',
    title: 'Final project',
    grade: 90,
}

console.log(updateAsg(assign, { grade: 95 }))

// Required and readonly
const assignGraded: Assignment = updateAsg(assign, { grade: 95 })

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
}
recordAssignment({...assignGraded, verified: true})

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }
console.log(assignVerified)

/////
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "E"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "B"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 90, assign2: 95},
    Kelly: {assign1: 80, assign2: 85}
}


// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
    studentId: '1111111',
    grade: 100,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: '324234234',
    title: 'Final Project',
}


// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "E">
type highGrades = Extract<LetterGrades, "A" | "B">


// Nonnullable
type AllPossibleGrades = 'Fei' | 'Dave' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>


// ReturnType
// type newAssign = { title: string, points: number }

type newAssign = ReturnType<typeof createNewAssign>
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

const tsAssign: newAssign = createNewAssign("Utility Types", 800)
console.log(tsAssign)


// Parameters
type assignParams = Parameters<typeof createNewAssign>
const assignArgs: assignParams = ["Generics", 100]
const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


// Awaited - helps us w ReturnType of a Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(error => {
        if(error instanceof Error) console.log(error.message)
    })

    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log(users))