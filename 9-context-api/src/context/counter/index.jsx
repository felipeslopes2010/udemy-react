import { createContext, useState } from "react"

// Aula 1 - Criando Contexto
const CounterContext = createContext();

// Aula 2 - Criar Provider
const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterContextProvider }