import { useAppSelector } from "./app/hooks";


function CounterSummary(){
    const count = useAppSelector(
        (state) => state.counter.value
    )

    return(
        <section>
            <h2>Counter Summary</h2>
            <p>Shared Redux Count: {count}</p>
        </section>
    )
}

export default CounterSummary;
