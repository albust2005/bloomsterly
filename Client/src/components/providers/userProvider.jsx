
import axios from 'axios'
import { useContext, useState, createContext } from "react";

//const PORT = 'http://localhost:8000/'
//const ROUT = 'registeruser'

const userContext = createContext()
const newUserContext = createContext()

export const useUserContext = () => {
    return useContext(userContext)
}

export const useNewUserContext = () => {
    return useContext(newUserContext)
}

export function UserProvider({ children }) {
    const URI = "http://localhost:8000/registeruser"
    const [user, setUser] = useState(null)

    const onSubmit = async (data) => {
        try {
            const {Cedula, Email, Name, Firstlastname, ConfirmPassword, Username } = data
            await axios.post(URI, {
                COD: Cedula,
                email: Email,
                nombre_c: Name,
                primer_apelli: Firstlastname,
                segundo_apelli: 'Cano',
                COD_municipios: 2,
                contrasena: ConfirmPassword,
                username: Username
            })

            console.log(data);
            setUser(data)
        } catch (error) {
            console.log(error.message)
        }

    };


    return (
        <userContext.Provider value={user}>
            <newUserContext.Provider value={onSubmit}>
                {children}
            </newUserContext.Provider>
        </userContext.Provider>
    )
}