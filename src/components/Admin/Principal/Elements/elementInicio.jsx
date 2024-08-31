import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useProfesor } from "../../../../context/profesorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

function elementInicio({_id,nombre, apellidos, graduado, hpre, hpos, hic, heu, th,profesorInicio,setprofesorInicio,users}){
    const [active, setactive] = useState(false);
    const {deletesProfesor}=useProfesor()
    const [error,seterror]=useState([])

    const handleDelete=()=>{
        const temp=users.filter((user)=>user.ciuser===_id)
        if(temp.length==0){
            deletesProfesor(_id);
            setprofesorInicio(profesorInicio.filter((Profesor) => Profesor._id !== _id))
        }
    }

    useEffect(() => {
        if (error.length > 0) {
          const timer = setTimeout(() => {
            seterror([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [error]);
      
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4">{nombre} {apellidos}</div>
                <div scope="col" className="col-3">{graduado}</div>
                <div scope="col" className="col-1">{hpre}</div>
                <div scope="col" className="col-1">{hpos}</div>
                <div scope="col" className="col-1">{hic}</div>
                <div scope="col" className="col-1">{heu}</div>
                <div scope="col" className="col-1">{th}</div> 
            </div>
            {active &&
                    <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                        <Link to={`info/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                            <FontAwesomeIcon icon={faInfoCircle} /> Información
                        </Link>
                        <Link to={`/admin/addprofesor/${_id}`} className="btn btn1 col btn1-warning btn-sm m-2">
                            <FontAwesomeIcon icon={faEdit} /> Modificar
                        </Link>
                        <button onClick={handleDelete} className=" btn btn1 col btn1-danger btn-sm m-2">
                            <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                        
                    </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    //     <div className="col table-info"><Link to={`info/${_id}`}>
                    //         Información</Link>
                    //     </div>
                    //     <div className="col table-success"><Link to={`/admin/addprofesor/${_id}`}>
                    //     Modificar</Link>
                    //     </div>
                    //     <div className="col table-danger" onClick={handleDelete}>
                    //         Eliminar
                    //     </div>
                    // </div>
            }
            {error.length>0 ? (
                <>
                {error.map((errores,i)=>(
                        <p key={i} className="alert alert-danger text-center"> {errores} </p>
                    ))}
                </>
            ):<div></div>}
        </>
    );
}



export default elementInicio