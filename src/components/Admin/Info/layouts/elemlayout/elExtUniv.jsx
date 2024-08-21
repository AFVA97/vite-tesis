
import PropTypes from "prop-types"

function elExtUniv({nombre, tipo, horas, fecha}){
    let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    
    return(
        <>
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-5 text-truncate">{nombre}</div>
                <div scope="col" className=" col-3 text-truncate">{tipo}</div>
                <div scope="col" className=" col-2 text-truncate">{horas}</div>
                <div scope="col" className=" col-2 text-truncate">{`${parseInt(fecch[1])+1}/${fecch[0]}/${fecch[2]}`}</div>
            </div> 
        </>
    )
}

elExtUniv.propTypes={
    // nombre:PropTypes.string,    
    // horas:PropTypes.number
}

export default elExtUniv