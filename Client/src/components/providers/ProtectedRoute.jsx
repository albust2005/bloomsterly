import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useUserContext } from './userProvider'


export function ProtectedRoute({ children, redirectPath = '/' }) {
    const location = useLocation()
    const { sesionUser } = useUserContext()
    console.log(sesionUser)

    if (!sesionUser) {
        return <Navigate to={redirectPath} state={{location}} />
    }

    return children ? children : <Outlet />
}