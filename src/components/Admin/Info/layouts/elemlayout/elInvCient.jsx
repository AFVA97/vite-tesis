import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function elInvCient({investigacion,ti,titulo,alcance,fecha}){
    
    const [fecch, setFecch] = useState('');

    useEffect(() => {
        const obtenerFecha = () => {
            const fechaActual = new Date(fecha);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const año = fechaActual.getFullYear();
            setFecch(`${dia}/${mes}/${año}`);
        };

        obtenerFecha();
    }, []); const [active, setactive] = useState(false);
    const [selectores, setselectores] = useState()

    useEffect(() => {
        switch (ti) {
            case "Proyecto":
                
                setselectores(
                    <>
                        <div >
                           
                                <p ><strong>Programa:</strong> {investigacion.descripcion}</p>
                                <p ><strong>Alcance:</strong> {investigacion.alcance}</p>
                                <p ><strong>Programa Asociado:</strong> {investigacion.issbnn}</p>
                                
                        </div>
                        
                        
                        
                        
                    
                    </>
                )
                break;
            case "Publicación Artículo":
                
                setselectores(
                    <>
                        <div >
                            
                                <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                                <p ><strong>Grupo:</strong> {investigacion.alcance}</p>
                                <p ><strong>ISSN:</strong> {investigacion.issbnn}</p>
                                <p ><strong>Link:</strong> <a href={investigacion.link}>{investigacion.link}</a></p>
                                <p ><strong>Autor(es):</strong> {investigacion.autores}</p>
                           
                        </div>
                       
                        
                        
                    </>
                )
        
                   
                break;
            case "Publicación Libro o Capítulo":
                setselectores(
                    <>
                         <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                            <p ><strong>ISBN:</strong> {investigacion.issbnn}</p>
                            <p ><strong>Link:</strong> <a href={investigacion.link}>{investigacion.link}</a></p>
                            
                    </div>
                       
                        
                        
                        
                        
                    </>
                    
                    
                )
                break;
            case "Premio ACC":
                setselectores(
                    <>
                        <div >
                                
                                <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                                <p ><strong>Autor(es):</strong> {investigacion.autores}</p>
                        
                        </div>
                       
                    
                    </>
                )
                break;
            case "Premio BTJ":
                setselectores(
                    <>
                         <div >
                                
                                <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                                <p ><strong>Autor(es):</strong> {investigacion.autores}</p>
                        
                        </div>
                    
                    </>
                )
                break;
            case "Otro Premio":
                setselectores(
                    <>
                         <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                            <p ><strong>Alcance:</strong> {investigacion.alcance}</p>
                           
                         </div>
                    
                    </>
                )
                break;
            case "Red Académica":
                setselectores(
                    <>
                         <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                           
                       
                    </div>
                        
                    </>
                )
                break;
            case "Fórum":
                setselectores(
                    <>
                        <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                            <p ><strong>Alcance:</strong> {investigacion.alcance}</p>
                           
                        </div>
                    </>
                )
                break;
            case "Participación en Evento":
                setselectores(
                    <>
                        <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                            <p ><strong>Alcance:</strong> {investigacion.alcance}</p>
                            <p ><strong>Presencial:</strong> {investigacion.issbnn?"Sí":"No"}</p>
                            <p ><strong>Autor(es):</strong> {investigacion.autores}</p>
                       
                        </div>
                        
                       
                    </>
                )
            break;
            case "Otro":
                setselectores(
                    <>
                        <div >
                            
                            <p ><strong>Descripción:</strong> {investigacion.descripcion}</p>
                            
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
    
   
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center  bg-tertiary container-fluid  m-0 p-0">
                <div scope="col" className=" col-6 text-truncate">{titulo}</div>
                <div scope="col" className=" col-4 text-truncate">{ti}</div>
                <div scope="col" className=" col-2 text-truncate">{fecch}</div> 
            </div>
            {active &&
                <div className="border  ">
                    {selectores}
                </div>
        }
        </>
    )
}


export default elInvCient