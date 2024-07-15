import PropTypes from "prop-types"

function rlInvCient({pt, tf, pi, tt, th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-3 text-truncate">Presentaciones de Trabajos</div>
                <div scope="col" className=" col-2 text-truncate">Tiempo para su Formación</div>
                <div scope="col" className=" col-3 text-truncate">Proyectos de Investigación</div>
                <div scope="col" className=" col-2 text-truncate">Tutoria de tesis</div>
                <div scope="col" className=" col-2 text-truncate">Total de Horas</div> 
            </div>                
        </>
    )
  }
  rlInvCient.propTypes={
    pt:PropTypes.number,
    tf:PropTypes.number,
    pi:PropTypes.number,
    tt:PropTypes.number,
    th:PropTypes.number
}
  
  export default rlInvCient