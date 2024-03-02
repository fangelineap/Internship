// useReducer
// import Counter from "./Counter"

// useContext
import { CounterProvider, initState } from "./context/CounterContext";
import Counter from "./Counter2";

function App() {
    return (
        <>
            <CounterProvider count={initState.count} text={initState.text}>
                <Counter>{(num: number) => <>Current counter: {num}</>}</Counter>
            </CounterProvider>
        </>
    );
}

export default App;
