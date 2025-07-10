import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const useAuthProvider = () => useContext(AuthContext);

export { useAuthProvider }