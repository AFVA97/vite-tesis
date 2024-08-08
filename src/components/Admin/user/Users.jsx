import { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext"
import InfoInicio from "../Info/infoNavBar"
import ThUsuarios from "../Principal/TableHead/ThUsuarios"
import ElementUser from "../Principal/Elements/ElementUser";
import SearchBar from "../Principal/searchBar";
import { Link } from "react-router-dom";


const Users = () => {
    const [search, setsearch] = useState("");
    const {user,
        users,
        getUsers,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,}=useAuth();


    useEffect(() => {
        getUsers()
        
    }, []);
    
  return (
    <>  
    <div className="sticky-top"> 
          
        <InfoInicio title={"Usuarios"}/>
        <SearchBar 
            search={search}
            setsearch={setsearch}
        />      
        <ThUsuarios/>
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {users.map((usuario,i)=>(
            <ElementUser
            key={usuario._id} 
            {...usuario}
          />
            
          ))
            
          }
        
      
        </div>
        <Link
                className="navbar-brand" 
                to="/admin/users/add"
            ><button className="floatingbutton btn btn-primary"
            >Agregar</button></Link>
    </>
  )
}

export default Users
