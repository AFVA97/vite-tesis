import ThInicio from "./ThInicio"
import Header from "../Header_Fac"
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react";
import { useCarrera } from "../../../context/carreraContext";
import { useAsignatura } from "../../../context/asignaturaContext";
import ElementInicio from "./ElementInicio";
import { Link } from "react-router-dom";
//import { getCarreraProfRequest } from "../../../api/carrera";


function inicio({User}) {
  
  const [CarreraInicio, setCarreraInicio] = useState([])
  const{Carreras,
    errors:errorCarrera,
    getCarreras,
    createsCarrera,
    updatesCarrera,
    deletesCarrera,
    getCarrera,}=useCarrera()
    const{Asignaturas,
      errors:errorAsignatura,        
      getAsignaturas,
      createsAsignatura,
      updatesAsignatura,
      deletesAsignatura,}=useAsignatura()
    // let asignaturas=[]
    // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if(user){
  //     console.log(user);
      
  //     async function load() {
        
      
  //     getCarreraProf(user.facuser)
  //     asignaturas=getAsignaturaFac(user.facuser)
  //     }load()
  //   }

  //   async function load() {
        
      
  //     getCarreraProf(user.facuser)
  //     asignaturas=getAsignaturaFac(user.facuser)
  //     }load()
  //   console.log(CarreraFac);
    
  //   if(Array.isArray(CarreraFac)){
  //     CarreraFac.map((carre)=>{
  //       let aux={_id:carre._id,nombre:carre.nombre,ca:0,cg:0,cef:0,horas:0};
  //       if(Array.isArray(asignaturas)){
  //         let asigtemp=asignaturas.filter((asign)=>asign.carrera===carre._id)
  //         asigtemp.map((asig)=>{
  //           aux.ca+=1;
  //           aux.cg+=asig.cantgrupos
  //           if(asig.exafinal)
  //             aux.cef+=1
  //           aux.horas+=asig.horas
  //         })
  //       }
        
  //       //carrerass.push(aux)
  //       setCarreraInicio([...CarreraInicio,aux])
  //     })
  //     //setCarreraInicio(carrerass)
  //   console.log(CarreraInicio);
    
  //   }
    
  //   console.log(data);
    
  // }, [])
  useEffect(() => {
    const load=async()=>{
      await getAsignaturas();
      await getCarreras();
    };load();
  },[])
  useEffect(() => {
    let carrerasInicio=[]
    if(User.facuser){
      let carreraFiltrada=[]
      if(Array.isArray(Carreras))
        carreraFiltrada=Carreras.filter((carrera)=>carrera.facultad===User.facuser)
      let asignaturaFiltradaFac=[]
      if(Array.isArray(Asignaturas))
        asignaturaFiltradaFac=Asignaturas.filter((asignatura)=>asignatura.facultad===User.facuser)
      if(carreraFiltrada.length>0){
        carreraFiltrada.map((carrera)=>{
          let aux={_id:carrera._id,nombre:carrera.nombre,ca:0,cg:0,cef:0,horas:0};
          let asignaturaFiltradaCarr=asignaturaFiltradaFac.filter((asignatura)=>asignatura.carrera===carrera._id)
          asignaturaFiltradaCarr.map((asignatura)=>{
            aux.ca+=1;
            aux.cg+=parseInt(asignatura.cantgrupos)
            if(asignatura.exafinal)
              aux.cef+=1
            aux.horas+=parseInt(asignatura.horas)
          })
          carrerasInicio.push(aux)
        })
      }
    }
    setCarreraInicio(carrerasInicio);
    //console.log('✅ User._id    ', User._id)
    
  }, [Asignaturas,User,Carreras])
  
  
    return (
      <>
        <div className="sticky-top">
          <Header _id={User.facuser} username={User.username}/>
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
          <button className="floatingbutton btn btn-success"
              >Agregar Carrera</button></Link>
        
      </>
    )
  }
  
  export default inicio