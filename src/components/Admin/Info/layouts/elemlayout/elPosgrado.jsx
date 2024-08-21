import PropTypes from "prop-types"

function elPosgrado({nombre,impartido,modalidad,ubicacion,cc,horas}){
    return(
        <>
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-3 text-truncate">{nombre}</div>
                <div scope="col" className=" col-1 text-truncate">{impartido?("Sí"):("No")}</div>
                <div scope="col" className=" col-2 text-truncate">{modalidad}</div>
                <div scope="col" className=" col-4 text-truncate">{ubicacion}</div> 
                <div scope="col" className=" col-1 text-truncate">{cc}</div>
                <div scope="col" className=" col-1 text-truncate">{horas}</div>
            </div> 
        </>
    )
}


elPosgrado.propTypes={
    nombre:PropTypes.string, 
    impartido:PropTypes.bool, 
    modalidad:PropTypes.string, 
    ubicacion:PropTypes.string, 
    cc:PropTypes.number,
    horas:PropTypes.number
}


export default elPosgrado