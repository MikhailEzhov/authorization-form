import { useLocation, Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const location = useLocation(); // локация

    const authorization = localStorage.getItem("authorization");

    // нет авторизации:
    if (!authorization) {
        return <Navigate to='/authorization-form/login' state={{from: location}}/>
    }

    // есть авторизация:
    return children;
}

export default PrivateRoute;