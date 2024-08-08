import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest,getUsersRequest,getUserRequest, deleteUserRequest } from "../api/auth";
import Cookies from "js-cookie";
import Users from "../components/Admin/user/Users";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  }; 

  const getUsers=async()=>{
    
    const res=await getUsersRequest();
    
    setUsers(res.data);
  }

  const getUser=async()=>{
    
    try {
      const res = await getUserRequest(id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  }
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    Cookies.remove("tokenusername");
    setUser(null);
    setIsAuthenticated(false);
  };
  const deleteUser= async (id)=>{
    try {
      const res = await deleteUserRequest(id);
      if (res.status === 204) 
        getUsers();
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  


  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      
      
      if (!cookies.tokenusername) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.tokenusername);
       
        if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
        }

        setIsAuthenticated(true);        
        setUser(res.data);
        setLoading(false);
        
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        getUser,
        getUsers,
        signup,
        signin,
        logout,
        deleteUser,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
