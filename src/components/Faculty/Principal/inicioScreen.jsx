import ThInicio from "./ThInicio"
import Header from "../Header_Fac"
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react";
import { useCarrera } from "../../../context/carreraContext";
import { useAsignatura } from "../../../context/asignaturaContext";
import ElementInicio from "./ElementInicio";
import { Link } from "react-router-dom";
//import { getCarreraProfRequest } from "../../../api/carrera";


function inicio() {
  const{user,getProfile}=useAuth();
  getProfile();
  const [CarreraInicio, setCarreraInicio] = useState([])
  const{Carreras,
    errors,
    CarreraFac,
    getCarreras,
    deletesCarrera,
    createsCarrera,
    getCarrera,
    getCarreraProf,
    updatesCarrera,}=useCarrera()
    const{getAsignaturaFac}=useAsignatura()
    let asignaturas=[]
    const [data, setData] = useState([]);

  useEffect(() => {
    if(user){
      console.log(user);
      
      async function load() {
        
      
      getCarreraProf(user.facuser)
      asignaturas=getAsignaturaFac(user.facuser)
      }load()
    }

    async function load() {
        
      
      getCarreraProf(user.facuser)
      asignaturas=getAsignaturaFac(user.facuser)
      }load()
    console.log(CarreraFac);
    
    if(Array.isArray(CarreraFac)){
      CarreraFac.map((carre)=>{
        let aux={_id:carre._id,nombre:carre.nombre,ca:0,cg:0,cef:0,horas:0};
        if(Array.isArray(asignaturas)){
          let asigtemp=asignaturas.filter((asign)=>asign.carrera===carre._id)
          asigtemp.map((asig)=>{
            aux.ca+=1;
            aux.cg+=asig.cantgrupos
            if(asig.exafinal)
              aux.cef+=1
            aux.horas+=asig.horas
          })
        }
        
        //carrerass.push(aux)
        setCarreraInicio([...CarreraInicio,aux])
      })
      //setCarreraInicio(carrerass)
    console.log(CarreraInicio);
    
    }
    
    console.log(data);
    
  }, [])
  
  
    return (
      <>
        <div className="sticky-top">
          <Header username={user.username}/>
          <ThInicio/>
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
            {CarreraInicio.map((carre,i)=>(
              <ElementInicio 
              key={carre._id} 
              {...carre}
            />
            ))}
              
          
        
          </div>
          <Link  to="/faculty/addcarrera">          
          <button className="floatingbutton btn btn-primary"
              >Agregar</button></Link>
        
      </>
    )
  }
  
  export default inicio