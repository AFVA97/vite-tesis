import ThlExtUniv from "./thlayout/thlExtUniv"
import ElExtUniv from "./elemlayout/elExtUniv"
import RlExtUniv from "./reviewlayout/rlExtUniv"
import { useState, useEffect } from "react"
import { useExtUniv } from "../../../../context/extunivContext"

function layoutExtUniv({_id}){

    const [elementos, setelementos] = useState([])
    const {ExtUnivs, getExtUnivs,}=useExtUniv()

    const [review, setreview] = useState({are:0,tch:0,ae:0,th:0})
   
    useEffect(() => {
        const load=async () => {
            await getExtUnivs()
          };load()
    }, [])
    
    useEffect(() => {
        if(Array.isArray(ExtUnivs)){
          let elementoTemp=ExtUnivs.filter((extension)=>extension.profesor===_id)
          let extensiones=[]
          let are=0;let tch=0;let ae=0;let th=0; 
          if(Array.isArray(elementoTemp)){
              elementoTemp.map((extension)=>{
                  extensiones.push({nombre:extension.titulo,
                    _id:extension._id,
                    tipo:extension.tipo,
                    horas:extension.horas,
                    fecha:extension.fecha})
                  if(extension.tipo==="Atención a la Residencia"){are+=extension.horas}
                  else if(extension.tipo==="Trabajo Cátedras Honoríficas"){tch+=extension.horas}
                  else{ae+=extension.horas}
              })
          }
          th=parseInt(are)+parseInt(tch)+parseInt(ae)
          setreview({are,tch,ae,th })
          setelementos(extensiones)
        }
      }, [ExtUnivs])

    return(
        <>
        <div className="container-fluid text-center">
            <ThlExtUniv/>
            {elementos.map((element)=>(
                <ElExtUniv 
                key={element._id}
                {...element}/>
            ))}
            {(elementos.length===0) && (
                <><div className="row justify-content-center text-center container-fluid  m-0 p-0">
                    No tiene Extensiones Asignadas
                </div> </>)}
            <RlExtUniv {...review}/>
        </div>
            
        </>
    )
}
export default layoutExtUniv
