import { useContext } from "react";

import { CounterContext } from "../../context/counter";

export const useCounter = () => { 
    const context = useContext(CounterContext);

    if(!context) {
        console.log("Contexto não encontrado!");
    }

    return context;
};