import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from './userProvider'


export function ProtectedRoute({ children, redirectPath = '/' }) {
    const { sesionUser } = useUserContext()
    console.log(sesionUser)

    if (!sesionUser) {
        return <Navigate to={redirectPath} />
    }

    return children ? children : <Outlet />
}