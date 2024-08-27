
function rlInvCient({proyectos, publicaciones, premios,otros, total}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col text-truncate">Proyectos de Investigación: {proyectos}</div>
                <div scope="col" className=" col text-truncate">Publicaciones: {publicaciones}</div>
                <div scope="col" className=" col text-truncate">Premios: {premios}</div>                
                <div scope="col" className=" col text-truncate">Otros: {otros}</div>
                <div scope="col" className=" col text-truncate">Total: {total}</div> 
            </div>                
        </>
    )
  }
 
  
  export default rlInvCient