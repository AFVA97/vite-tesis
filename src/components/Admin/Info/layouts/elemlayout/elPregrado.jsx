import PropTypes from "prop-types"


function elPregrado({carrera,anno,semestre,asignatura,horas,frecuencia,taa,tef}){
    return(
        <>
        <div className="row justify-content-center text-center container-fluid  m-0 p-0">
            <div scope="col" className=" col-3 text-truncate">{carrera}</div>
            <div scope="col" className=" col-1 text-truncate">{anno}</div>
            <div scope="col" className=" col-1 text-truncate">{semestre}</div>
            <div scope="col" className=" col-3 text-truncate">{asignatura}</div> 
            <div scope="col" className=" col-1 text-truncate">{horas}</div>
            <div scope="col" className=" col-1 text-truncate">{frecuencia}</div>
            <div scope="col" className=" col-1 text-truncate">{taa}</div>
            <div scope="col" className=" col-1 text-truncate">{tef}</div> 
        </div> 
     </>
    )
}

elPregrado.propTypes={
    carrera:PropTypes.string, 
    anno:PropTypes.number, 
    semestre:PropTypes.bool, 
    asignatura:PropTypes.string, 
    horas:PropTypes.number,
    frecuencia:PropTypes.number,
    taa:PropTypes.number,
    tef:PropTypes.string
}

export default elPregrado