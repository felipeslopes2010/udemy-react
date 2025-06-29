import { useContext } from "react";

import { TitleColorContext } from "../../context/title-color";

export const useTitleColor = () => {
    const context =  useContext(TitleColorContext);

    if(!context) {
        console.log("Contexto não encontrado!")
    }

    return context;
};