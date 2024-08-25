

function rlPosgrado({hi, hr,th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-4 text-truncate">Horas Impartidas {hi}</div>
                <div scope="col" className=" col-4text-truncate">Horas Recibidas {hr}</div>
                <div scope="col" className=" col-4 text-truncate">Total de Horas {th}</div> 
            </div>                
        </>
    )
  }

  
  export default rlPosgrado