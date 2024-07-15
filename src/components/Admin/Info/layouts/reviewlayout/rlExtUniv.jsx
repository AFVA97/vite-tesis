import PropTypes from "prop-types"


function rlExtUniv({are,tch,ae,th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-3 text-truncate">Atención a la Residencia Estudiantil</div>
                <div scope="col" className=" col-3 text-truncate">Trabajo Cátedras Honoríficas</div>
                <div scope="col" className=" col-3 text-truncate">Actividades extensionistas</div>
                <div scope="col" className=" col-3 text-truncate">Total de Horas</div> 
            </div>                
        </>
    )
  }

  rlExtUniv.propTypes={    
    are:PropTypes.number,
    tch:PropTypes.number,
    ae:PropTypes.number,
    th:PropTypes.number
}
  
  export default rlExtUniv

