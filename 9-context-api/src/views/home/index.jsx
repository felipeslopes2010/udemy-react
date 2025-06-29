// import { useContext } from "react"

// import { CounterContext } from "../../context/counter-context";
import { useCounter } from "../../hooks/use-counter";

import { ChangeCounter } from "../../components/change-counter";
import { useTitleColor } from "../../hooks/use-title-color";

const Home = () => {
    // Aula 2 - Consumindo o valor de counter vindo do Context
    //const { counter } = useContext(CounterContext);

    // Aula 4 - Utilizando o Hook para chamar o Context
    const { counter } = useCounter();

     // Aula 5 - Context mais complexo
    const { color, dispatch } = useTitleColor();

     // Aula 6 - Alterando Context mais complexo
     const setTitleColor = (color) => {
        dispatch({ type: color });
     }

    return (
        <div>
            <h1 style={{color: color}}>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* Aula 3 - Alterando valor do Context */}
            <ChangeCounter />
            {/* Aula 6 - Alterando Context mais complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}

export { Home }