import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
    <Heading title={"Hello"} />
    <Section>This is my section</Section>
    <Counter setCount = {setCount}>Count is {count}</Counter>
    <List items={["Coffee", "Tea", "Cake"]} render={(item: string) =>
      <span className="bold">{item}</span>}></List>
    </>
  )
}

export default App
