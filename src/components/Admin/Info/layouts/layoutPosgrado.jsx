import ThlPosgrado from "./thlayout/thlPosgrado"
import ElPosgrado from "./elemlayout/elPosgrado"
import RlPosgrado from "./reviewlayout/rlPosgrado"
import { usePosgrado } from "../../../../context/posgradoContext"
import { useEffect, useState } from "react"

function layoutPosgrado({_id}){
    const [review, setreview] = useState({hi:0,hr:0,th:0})
    const [elementos, setelementos] = useState([])
    const {Posgrados,getPosgrados}=usePosgrado()
    
    useEffect(() => {
        const load=async () => {
            await getPosgrados()
          };load()
    }, [])

    useEffect(() => {
      if(Array.isArray(Posgrados)){
        let elememntoTemp=Posgrados.filter((posgrado)=>posgrado.profesor===_id)
        let element=[]
        if(Array.isArray(elememntoTemp)){
            let hi=0;
            let hr=0;
            let th=0;
            elememntoTemp.map((posgrado)=>{
                let posgr={nombre:posgrado.nombre,
                    _id:posgrado._id,
                    impartido:posgrado.impartido,
                    modalidad:posgrado.modalidad,
                    ubicacion:posgrado.ubicacion,
                    cc:posgrado.cantcuadros,
                    horas:posgrado.horas}
                if(posgrado.impartido)
                    hi+=parseInt(posgrado.horas)
                else 
                    hr+=parseInt(posgrado.horas)
                element.push(posgr)
            })
            setelementos(element)
            th+=parseInt(hi)+parseInt(hr)
            setreview({hi,hr,th})
        }
      }
    }, [Posgrados])
    
    
    return(
        <>
        <div className="container-fluid text-center">
            <ThlPosgrado />
            {elementos.map((element)=>(
                <ElPosgrado 
                key={element._id}
                {...element}/>
            ))}
            {(elementos.length===0) && (
                <><div className="row justify-content-center text-center container-fluid  m-0 p-0">
                    No tiene Posgrados Asignados
                </div> </>)}
            <RlPosgrado {...review}/>
        </div>
            
        </>
    )
}
export default layoutPosgrado