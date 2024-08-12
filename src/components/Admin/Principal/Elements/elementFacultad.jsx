import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useFacultad } from "../../../../context/facultadContext";

function elementFacultad({_id,nombre, ca, cg, cef, th,facelement,setfacelement}){
    const [active, setactive] = useState(false);
    const {deletesFacultad}=useFacultad()
    const handleDelete=()=>{
        deletesFacultad(_id)
        setfacelement(facelement.filter((Facul)=>Facul._id!==_id))
    }
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-4 text-truncate ">{nombre}</div>
                <div scope="col" className=" col-2 text-truncate " >{ca}</div>
                <div scope="col" className=" col-2 text-truncate ">{cg}</div>
                <div scope="col" className=" col-2 text-truncate ">{cef}</div>
                <div scope="col" className=" col-2 text-truncate ">{th}</div>
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${_id}`}>
                            Información</Link>
                        </div>
                        
                        <div className="col table-success"><Link to={`/admin/addfacultad/${_id}`}>
                        Modificar</Link>
                        </div>
                        <div className="col table-danger" onClick={handleDelete}>
                            Eliminar
                        </div>
                    </div>
                
                
            }
        </>
    );
}

elementFacultad.propTypes={
    facultad:PropTypes.string, 
    ca:PropTypes.number, 
    cg:PropTypes.number, 
    cef:PropTypes.number, 
    th:PropTypes.number
}

export default elementFacultad