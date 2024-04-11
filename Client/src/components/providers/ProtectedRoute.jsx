import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useUserContext } from './userProvider'


export function ProtectedRoute({ isAuth, children, redirectPath = '/login' }) {
    const location = useLocation()
    const { sesionUser } = useUserContext()
    console.log(sesionUser)

    if (!isAuth) {
        return <Navigate to={redirectPath} state={{ location }} />
    }

    return children ? children : <Outlet />
}