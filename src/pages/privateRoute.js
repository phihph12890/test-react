import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    const user = localStorage.getItem('user')
    if (user && user.permission === 0) {
        return props.children
    } else {
        return <Navigate to="/products" />
    }
}

export default PrivateRoute
