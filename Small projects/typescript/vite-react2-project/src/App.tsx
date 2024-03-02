import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { MouseEvent, KeyboardEvent } from "react"

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  // use effect depends pada users jadi harus diterima pada dependency arr
  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  // kalau mau pakai event harus specify
  // const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])
  const addTwo = useCallback((): void => setCount(prev => prev + 2), [])

  // if myNum changes, resultnya akan di-recalculate dan disimpan
  // berguna jika ini adalah calculation yang rumit
  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <>
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
    </>
    
  )
}

export default App
