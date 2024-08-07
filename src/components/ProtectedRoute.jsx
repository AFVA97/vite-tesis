import { useAuth } from "../context/authContext"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    const {loading,isAuthenticated}=useAuth();
    
    
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRoute
