import { useContext, createContext } from "react";

import { useCreateUser } from '../hooks/useCreateUser';
import { useLoginUser } from "../hooks/useLoginUser";

const userContext = createContext()
const newUserContext = createContext()
const loginUserContext = createContext()

export const useUserContext = () => {
    return useContext(userContext)
}

export const useNewUserContext = () => {
    return useContext(newUserContext)
}

export const useLoginUserContext = () => {
    return useContext(loginUserContext)
}

const registro = "http://localhost:8000/registeruser"
const inicio = "http://localhost:8000/login/usuario"

export function UserProvider({ children }) {
    const { user, createUser } = useCreateUser(registro)
    const { sesionUser, loginUser } = useLoginUser(inicio)

    return (
        <userContext.Provider value={{ sesionUser, user }}>
            <newUserContext.Provider value={createUser}>
                <loginUserContext.Provider value={loginUser}>
                    {children}
                </loginUserContext.Provider>
            </newUserContext.Provider>
        </userContext.Provider>
    )
}
