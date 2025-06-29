// Aula 3 - Alterando o Contexto
import { useContext } from "react";

import { CounterContext } from "../../context/counter";

const ChangeCounter = () => {
    const {setCounter} = useContext(CounterContext);

    return (
         <button onClick={() => setCounter(prev => prev + 1)}>Add value to counter</button>
    )
}

export { ChangeCounter }