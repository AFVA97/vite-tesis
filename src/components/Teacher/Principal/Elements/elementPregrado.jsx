import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useProfesor } from "../../../../context/profesorContext";

function elementPregrado({ _id,nombre,carrera,semestre,facultad,tipocurso,horas}){
    const [active, setactive] = useState(false);
    const {deletesProfesor}=useProfesor()
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4 text-truncate">{nombre} </div>
                <div scope="col" className="col-2 text-truncate">{carrera}</div>
                
                <div scope="col" className="col-2 text-truncate">{facultad}</div>
                
                <div scope="col" className="col-2 row justify-content-center text-center container-fluid">
                    <div>{semestre?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                    <div>{!semestre?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                </div>
                <div scope="col" className="col-1 text-truncate">{tipocurso}</div>
                <div scope="col" className="col-1 text-truncate">{horas}</div>
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${_id}`}>
                            Información</Link>
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