import PropTypes from "prop-types"

function rlInvCient({proyectos, publicaciones, premios,otros, total}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
            <div scope="col" className=" col-4 text-truncate">Proyectos de Investigación: {proyectos}</div>
                <div scope="col" className=" col-2 text-truncate">Publicaciones: {publicaciones}</div>
                <div scope="col" className=" col-2 text-truncate">Premios: {premios}</div>
                
                <div scope="col" className=" col-2 text-truncate">Otros: {otros}</div>
                <div scope="col" className=" col-2 text-truncate">Total: {total}</div> 
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