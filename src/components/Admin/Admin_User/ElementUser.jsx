
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useProfesor } from "../../../context/profesorContext";
import { useFacultad } from "../../../context/facultadContext";

function ElementUser ({_id,username,ciuser,facuser,active:activo}) {
    
    
    const {getFacultad}=useFacultad();
    const {getProfesor}=useProfesor();
    const [asignado, setasignado] = useState("")
    const [active, setactive] = useState(false);
    const {deleteUser}=useAuth()

    const handleDelete=async()=>{
       await deleteUser(_id);
    }

    const tipo=()=>{
        if(ciuser)
            return "Profesor";
        else if(facuser)
            return "Facultad";
        return "Administrador"
    }
    
    useEffect(() => {
        async function asignar(){
            if(ciuser){
                const usuario=await getProfesor(ciuser);
                setasignado(usuario.nombre);
                return ;
            }            
            else if(facuser){
                const facultad=await getFacultad(facuser);
                 setasignado(facultad.nombre)
                 return;
            }
            setasignado("---")
        }
        asignar()
    }, [])

  return (
    <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4">{username}</div>
                <div scope="col" className="col-3">{tipo()}</div>
                <div scope="col" className="col-3">{asignado}</div>
                <div scope="col" className="col-2">
                    {activo?"Activo":"Inactivo"}
                </div>
            </div>            
            {active &&
                
                <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    <div className="col table-success"><Link to={`/admin/users/add/${_id}`} >
                    Modificar</Link>
                    </div>
                    <div className="col table-danger" onClick={()=>handleDelete()}>
                        Eliminar
                    </div>
                </div>
            }
        </>
  )
}

export default ElementUser
