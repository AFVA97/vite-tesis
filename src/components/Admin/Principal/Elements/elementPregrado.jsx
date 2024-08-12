import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useProfesor } from "../../../../context/profesorContext";

function elementPregrado({ _id,nombre, apellidos, first, second, te, tm, th,profesorInicio,setprofesorInicio}){
    const [active, setactive] = useState(false);
    const {deletesProfesor}=useProfesor()
    const handleDelete=()=>{
        deletesProfesor(_id);
        setprofesorInicio(profesorInicio.filter((Profesor) => Profesor._id !== _id))
    }
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4 text-truncate">{nombre} {apellidos}</div>
                <div scope="col" className="col-3 row justify-content-center text-center container-fluid">
                    <div>{first?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                    <div>{second?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                </div>
                <div scope="col" className="col-1 text-truncate">{te}</div>
                <div scope="col" className="col-1 text-truncate">{tm}</div>
                <div scope="col" className="col-1 text-truncate">{th}</div> 
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${_id}`}>
                            Información</Link>
                        </div>
                        
                        <div className="col table-success">
                            Modificar
                        </div>
                        <div className="col table-danger" onClick={handleDelete}>
                            Eliminar
                        </div>
                    </div>
                
                
            }
        </>
    );
}

elementPregrado.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    first:PropTypes.bool, 
    second:PropTypes.bool, 
    te:PropTypes.number, 
    tm:PropTypes.number, 
    th:PropTypes.number
}

export default elementPregrado