import { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext"
import InfoInicio from "../Info/infoNavBar"
import ThUsuarios from "../Principal/TableHead/ThUsuarios"
import ElementUser from './ElementUser';
import SearchBar from "../Principal/searchBar";
import { Link } from "react-router-dom";


const Users = () => {
    
  const { users, getUsers}=useAuth();
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredUsers(
      users.filter((usuarios) =>
        usuarios.username.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if(query==='')
      setFilteredUsers(users)
  }, [query,users])
  
  useEffect(() => {
      const load=async()=>{
        await getUsers()
      };load()
      setFilteredUsers(users)
  }, []);
    
  return (
    <>  
    <div className="sticky-top bg-white"> 
        <InfoInicio title={"Usuarios"}/>
        <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
        />      
        <ThUsuarios/>
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredUsers.map((usuario,i)=>(
            <ElementUser
            key={usuario._id} 
            getUsers={getUsers}
            {...usuario}
          />
          ))
          }
        </div>
        <Link
                className="navbar-brand" 
                to="/admin/users/add"
            ><button className="floatingbutton btn btn-success"
            >Agregar</button></Link>
    </>
  )
}

export default Users
