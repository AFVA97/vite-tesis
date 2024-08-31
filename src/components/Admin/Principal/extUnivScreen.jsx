import ThExtUniv from "./TableHead/thExtUniv"
import Header from "../HeaderAdmin"
import ElementExtUniv from "./Elements/elementExtUniv"
import SearchBar from "./searchBar"
import { useContext, useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useExtUniv } from "../../../context/extunivContext"
import { FechaContext } from "../../../context/fechaContext"

function ExtUniv({username}) {

  const { Profesores, getProfesores } = useProfesor();
  const{ ExtUnivs, getExtUnivs }=useExtUniv()
  const [profesores,setprofesores]=useState([])
  const [query, setQuery] = useState('');
  const [filteredProfesor, setFilteredProfesor] = useState([]);
  const {globalData}=useContext(FechaContext)

  const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setFilteredProfesor(
        profesores.filter((profesor) =>
          profesor.nombre.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    useEffect(() => {
      if(query==='')
        setFilteredProfesor(profesores)
    }, [query])
    useEffect(() => {
      const load=async () => {
        await getProfesores();
        await getExtUnivs();      
      };load()  
    }, [])

  useEffect(() => {
    const load=async () => {
      //await getProfesores();
      await getExtUnivs();      
    };load()  
  }, [globalData])
  
  useEffect(()=>{
    let profesoresArray=[];
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos,  are:0, tch:0, ae:0, th:0}
        if(Array.isArray(ExtUnivs)){
          let extunivProf=ExtUnivs.filter((extension)=>extension.profesor===profesor._id)
          extunivProf.map((extension)=>{
            if(extension.tipo==="Atención a la Residencia"){
              aux.are+=parseInt(extension.horas)}
            else if(extension.tipo==="Trabajo Cátedras Honoríficas"){
              aux.tch+=parseInt(extension.horas)}
            else{aux.ae+=parseInt(extension.horas)}
              })
            }
            aux.th=parseInt(aux.are)+parseInt(aux.ae)+parseInt(aux.tch)
            profesoresArray.push(aux)
      })
    }
    setprofesores(profesoresArray)
    setFilteredProfesor(profesores) 
  },[Profesores,ExtUnivs])

    return (
      <>
        <div className="sticky-top bg-white"> 
          <Header username={username}/>      
          <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
          /> 
          <ThExtUniv />
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredProfesor.map((profesor,i)=>(
            <ElementExtUniv 
            key={profesor._id} 
            {...profesor}
          />
          ))}
        </div>
      </>
    )
  }
  
  export default ExtUniv