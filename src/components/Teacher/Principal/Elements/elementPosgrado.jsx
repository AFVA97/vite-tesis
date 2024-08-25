import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { usePosgrado } from "../../../../context/posgradoContext";

function elementPosgrado({_id,nombre,impartido,modalidad,fecha,horas}){
    const [active, setactive] = useState(false);
    const {deletesPosgrado}=usePosgrado()
    let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    let impart="Sí"
    if(!impartido)
        impart="No"
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-4  text-truncate">{nombre} </div>
                <div scope="col" className=" col-2 text-truncate ">{impart}</div>
                <div scope="col" className=" col-2  text-truncate">{modalidad}</div>
                <div scope="col" className=" col-2 text-truncate ">{horas}</div> 
                <div scope="col" className=" col-2 text-truncate ">{`${parseInt(fecch[1])+1}/${fecch[0]}/${fecch[2]}`}</div>                
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        
                        
                        
                        <div className="col table-danger" onClick={()=>deletesPosgrado(_id)}>
                            Eliminar
                        </div>
                    </div>
                
                
            }
        </>
    );
}

elementPosgrado.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    hr:PropTypes.number,
    hi:PropTypes.number,
    th:PropTypes.number
}

export default elementPosgrado