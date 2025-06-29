// import { useContext } from "react"
// import { CounterContext } from "../../context/counter-context"

import { useCounter } from "../../hooks/use-counter"

const Products = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounter();

    return (
        <div>
            <h1>Products</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export { Products }