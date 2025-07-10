import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children, value}) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}