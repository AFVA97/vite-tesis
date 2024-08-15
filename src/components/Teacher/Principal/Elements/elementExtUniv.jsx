import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useExtUniv } from "../../../../context/extunivContext";

function elementExtUniv({_id,titulo,tipo,horas,fecha}){
    const [active, setactive] = useState(false);
    const {deletesExtUniv }=useExtUniv()
    let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-6 text-truncate">{titulo}</div>
                <div scope="col" className=" col-2 text-truncate">{tipo}</div>
                <div scope="col" className=" col-2 text-truncate">{horas}</div>
                <div scope="col" className=" col-2 text-truncate">{`${parseInt(fecch[1])+1}/${fecch[0]}/${fecch[2]}`}</div>
                
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-success"><Link to={`/teacher/addext_univ/${_id}`}>
                            Modificar</Link>
                        </div>
                        <div className="col table-danger" onClick={()=>deletesExtUniv(_id)}>
                            Eliminar
                        </div>
                        
                    </div>
                
                
            }
        </>
    );
}

elementExtUniv.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    are:PropTypes.number,
    tch:PropTypes.number,
    ae:PropTypes.number,
    th:PropTypes.number
}

export default elementExtUniv