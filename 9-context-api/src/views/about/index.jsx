// import { useContext } from "react"

// import { CounterContext } from "../../context/counter-context";
import { useCounter } from "../../hooks/use-counter";
import { useTitleColor } from "../../hooks/use-title-color";

const About = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounter();

    const { color } = useTitleColor();

    return (
        <div>
            <h1 style={{color: color}}>About</h1>
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export { About }