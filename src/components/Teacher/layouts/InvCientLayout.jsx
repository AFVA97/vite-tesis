import ThInvCient from '../Principal/TableHead/thInvCient'
import ElementInvCient from '../Principal/Elements/elementInvCient'
import {useInvCient} from '../../../context/invcientContext'
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"


const InvCientLayout = ({user}) => {

  //   const {getInvCientProf, InvProf}=useInvCient()
  // const{user}=useAuth()
   const {InvCients,
  errors,        
  getInvCients,
  createsInvCient,
  updatesInvCient,
  deletesInvCient,  
  getInvCient,}=useInvCient();
  const [investigaciones, setinvestigaciones] = useState([])
 

  useEffect(() => {
   
      // if(user){
      //   getInvCientProf(user.ciuser)
    
      //   let invest=[]
      //   if(Array.isArray(InvProf)){
      //     InvProf.map((inv)=>{
      //       invest.push({_id:inv._id,titulo:inv.titulo,tipo:inv.tipo,fecha:inv.fecha})
      //     })
      //   }
      //   setinvestigaciones(invest)
      // }
      const load=async()=>{
        await getInvCients();
      };load();


  }, [])
  useEffect(() => {
    let invest=[]
    if(Array.isArray(InvCients)){
      let invProf=InvCients.filter((invest)=>invest.profesor===user.ciuser)
      invProf.map((inv)=>{
        invest.push({_id:inv._id,titulo:inv.titulo,tipo:inv.tipo,fecha:inv.fecha})
           
      })
    }
    
    setinvestigaciones(invest)
  }, [InvCients,user])
  


  return (
    <>
      <div className="sticky-top">        
        <ThInvCient/>
        </div>

      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {investigaciones.map((invest,i)=>(
            <ElementInvCient 
            key={invest._id} 
            {...invest}
          />
          ))}
            
        
      
        </div>
    </>
  )
}

export default InvCientLayout
