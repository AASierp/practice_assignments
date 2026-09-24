
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { increment, decrement, reset } from "./features/counter/counterSlice"


function Counter(){
    const count = useAppSelector(
        (state) => state.counter.value
    )

    const dispatch = useAppDispatch();

    return(
        <>
            <h1>Redux Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Add 1</button>
            <button onClick={() => dispatch(decrement())}>Subtract 1</button>
            <button onClick={() => dispatch(reset())}>Reset Counter</button>
        </>
    )
}

export default Counter