import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function elInvCient({investigacion,ti,titulo,alcance,fecha}){
    //console.log(investigacion);
    let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    const [active, setactive] = useState(false);
    const [selectores, setselectores] = useState()



    useEffect(() => {
        switch (ti) {
            case "Proyecto":
                
                setselectores(
                    <>
                        
                        <div  className="row justify-content-center text-center border-bottom container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Programa: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        <hr/>
                        <div className="input-group mb-3 justify-content-center border-bottom p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Alcance</span>
                            <div>{investigacion.alcance}</div>
                        </div>
                        <div className="input-group justify-content-center mb-3 p-1 border-bottom col-6">
                            <span className="input-group-text" id="basic-addon1">Programa Asociado</span>
                            <div>{investigacion.issbnn}</div>
                        </div>
                        
                    
                    </>
                )
                break;
            case "Publicación Artículo":
                
                setselectores(
                    <>
                        <div  className="row justify-content-center text-center border-bottom container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        
                        <div className="input-group mb-3 justify-content-center border-bottom p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Grupo</span>
                            <div className="mb-3 p-1">{investigacion.alcance}</div>
                        </div>
                        <div className="input-group mb-3 p-1 justify-content-center border-bottom col-6">
                            <span className="input-group-text" id="basic-addon1">ISSN</span>
                            <div className="mb-3 p-1">{investigacion.issbnn}</div>
                        </div>
                        
                        <div className="input-group mb-3 p-1 justify-content-center border-bottom col-6">
                            <span className="input-group-text" id="basic-addon1">Link</span>
                            <div className="mb-3 p-1"><Link>{investigacion.link}</Link></div>
                        </div>
                        
                        <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Autor(es): </div>
                            <div scope="col" className="col-12"><p>{investigacion.autores}</p> </div>
                        </div>
                        
                        
                    </>
                )
        
                   
                break;
            case "Publicación Libro o Capítulo":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        <div className="input-group justify-content-center mb-3 p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">ISBN</span>
                            <div>{investigacion.issbnn}</div>
                        </div>
                        <div className="input-group justify-content-center  mb-3 p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Link</span>
                            <div><Link>{investigacion.link}</Link></div>
                        </div>
                        
                        
                        
                    </>
                    
                    
                )
                break;
            case "Premio ACC":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Autor(es): </div>
                            <div scope="col" className="col-12"><p>{investigacion.autores}</p> </div>
                        </div>
                        
                    
                    </>
                )
                break;
            case "Premio BTJ":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Autor(es): </div>
                            <div scope="col" className="col-12"><p>{investigacion.autores}</p> </div>
                        </div>
                    
                    </>
                )
                break;
            case "Otro Premio":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        
                        <div className="input-group mb-3 p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Alcance</span>
                            <div>{investigacion.alcance}</div>
                        </div>
                    
                    </>
                )
                break;
            case "Red Académica":
                setselectores(
                    <>
                        <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        
                    </>
                )
                break;
            case "Fórum":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        
                        <div className="input-group mb-3 p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Alcance</span>
                            <div>{investigacion.alcance}</div>
                        </div>
                    </>
                )
                break;
            case "Participación en Evento":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        <div className="input-group mb-3 border-bottom p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Alcance</span>
                            <div>{investigacion.alcance}</div>
                        </div>
                        <div className="input-group mb-3 border-bottom p-1 col-6">
                            <span className="input-group-text" id="basic-addon1">Presencial</span>
                            <div>{investigacion.issbnn}</div>
                        </div>
                        
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Ponente: </div>
                            <div scope="col" className="col-12"><p>{investigacion.autores}</p> </div>
                        </div>
                        
                        
                        
                    
                    </>
                )
            break;
            case "Otro":
                setselectores(
                    <>
                        <div  className="row justify-content-center border-bottom text-center container-fluid m-0 p-0">
                            <div scope="col" className="col-12 text-truncate">Descripción: </div>
                            <div scope="col" className="col-12"><p>{investigacion.descripcion}</p> </div>
                        </div>
                        
                    </>
                )
                break;
          
            default:
                setselectores(
                    <>
                    </>
                )
                break;
          }
    }, [,investigacion])
    
    
    // descripcion
    // issbnn
    // autores
    // link
    
    
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center  bg-tertiary container-fluid  m-0 p-0">
                
                <div scope="col" className=" col-6 text-truncate">{titulo}</div>
                <div scope="col" className=" col-4 text-truncate">{ti}</div>
                <div scope="col" className=" col-2 text-truncate">{`${parseInt(fecch[1])+1}/${fecch[0]}/${fecch[2]}`}</div> 
            </div>
            {active &&
                
                <div className="row justify-content-center text-center border  container-fluid m-0 p-0">
                    <hr/>
                    {selectores}
                    <hr/>
                        
                   
                    
                </div>
            
            
        }
        </>
    )
}

elInvCient.propTypes={
    ti:PropTypes.string,
    titulo:PropTypes.string,
    alcance:PropTypes.string,
    //horas:PropTypes.string
}

export default elInvCient