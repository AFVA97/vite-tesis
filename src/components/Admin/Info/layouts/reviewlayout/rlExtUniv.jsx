import PropTypes from "prop-types"


function rlExtUniv({are,tch,ae,th }) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-6 text-truncate">Atención a la Residencia Estudiantil: {are}</div>
                <div scope="col" className=" col-6 text-truncate">Trabajo Cátedras Honoríficas: {tch}</div>
                
            </div>  
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-6 text-truncate">Actividades extensionistas: {ae}</div>
                <div scope="col" className=" col-6 text-truncate">Total de Horas: {th}</div>     
            </div>          
        </>
    )
  }

  rlExtUniv.propTypes={    
    
}
  
  export default rlExtUniv

