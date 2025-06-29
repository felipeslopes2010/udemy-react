import { createContext, useReducer } from "react";

const TitleColorContext = createContext();

const titleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return {...state, color: "red"}
        case "BLUE":
            return {...state, color: "blue"}
        default:
            return state;
    }
}

const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

    console.log("Title color context: ", state);

    return(
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}

export { TitleColorContext, TitleColorContextProvider }