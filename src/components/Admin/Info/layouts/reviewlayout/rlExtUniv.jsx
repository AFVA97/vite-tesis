
function rlExtUniv({are,tch,ae,th }) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col ">Atención a la Residencia Estudiantil: {are}</div>
                <div scope="col" className=" col ">Trabajo Cátedras Honoríficas: {tch}</div>
            </div>  
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col ">Actividades extensionistas: {ae}</div>
                <div scope="col" className=" col ">Total de Horas: {th}</div>     
            </div>          
        </>
    )
  }
  
  export default rlExtUniv

