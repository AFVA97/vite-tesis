import ThlInvCient from "./thlayout/thlInvCient"
import ElInvCient from "./elemlayout/elInvCient"
import RlInvCient from "./reviewlayout/rlInvCient"
import { useInvCient } from "../../../../context/invcientContext"
import { useEffect, useState } from "react"

function layoutInvCient({_id}){
    const [review, setreview] = useState({proyectos:0, publicaciones:0, premios:0, otros:0, total:0 })
    const [elementos, setelementos] = useState([])
    const {InvCients, getInvCients}=useInvCient()

    useEffect(() => {
        const load=async () => {
            await getInvCients()
            
          };load()
    }, [])

    useEffect(() => {
      if(Array.isArray(InvCients)){
        let elementoTemp=InvCients.filter((investigacion)=>investigacion.profesor===_id)
        let investigaciones=[]
        let proyectos=0;let publicaciones=0; let premios=0;let otros=0; 
        if(Array.isArray(elementoTemp)){
            elementoTemp.map((investigacion)=>{
                investigaciones.push({ti:investigacion.tipo,
                    investigacion:investigacion,
                    _id:investigacion._id,
                    titulo:investigacion.titulo,
                    fecha:investigacion.fecha})
                if(investigacion.tipo==="Proyecto"){proyectos+=1}
                else if(investigacion.tipo==="Publicación Artículo"||investigacion.tipo==="Publicación Libro o Capítulo"){publicaciones+=1}
                else if(investigacion.tipo==="Premio ACC"||investigacion.tipo==="Premio BTJ"||investigacion.tipo==="Otro Premio"){premios+=1}
                else{otros+=1}
            })
        }
        let total=parseInt(otros)+parseInt(proyectos)+parseInt(publicaciones)+parseInt(premios)
        setreview({proyectos,publicaciones, premios, otros,total })
        setelementos(investigaciones)
      }
    }, [InvCients])
    

    return(
        <>
            <ThlInvCient  />
            {elementos.map((element)=>(
                <ElInvCient 
                key={element._id}
                {...element}/>
            ))}
            {(elementos.length===0) && (
                <><div className="row justify-content-center text-center container-fluid  m-0 p-0">
                    No tiene Investigaciones Asignadas
                </div> </>)}
            <RlInvCient {...review}/>
        </>
    )
}
export default layoutInvCient