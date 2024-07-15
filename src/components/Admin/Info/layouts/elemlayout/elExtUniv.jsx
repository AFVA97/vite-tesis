
import PropTypes from "prop-types"

function elExtUniv({nombre,horas}){
    return(
        <>
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-3 text-truncate">{nombre}</div>
                <div scope="col" className=" col-1 text-truncate">{horas}</div>
            </div> 
        </>
    )
}

elExtUniv.propTypes={
    nombre:PropTypes.string,    
    horas:PropTypes.number
}

export default elExtUniv