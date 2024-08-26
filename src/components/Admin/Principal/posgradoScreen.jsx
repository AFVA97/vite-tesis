import ThInicio from "./TableHead/thPosgrado"
import Header from "../HeaderAdmin"
import ElementPosgrado from "./Elements/elementPosgrado"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { usePosgrado } from "../../../context/posgradoContext"
import { useProfesor } from "../../../context/profesorContext"

function inicio({username}) {

  const { Profesores, getProfesores } = useProfesor();
  const { Posgrados, getPosgrados }=usePosgrado()
  const [profesorInicio,setprofesorInicio]=useState([])
  const [query, setQuery] = useState('');
  const [filteredProfesor, setFilteredProfesor] = useState([]);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setFilteredProfesor(
        profesorInicio.filter((profesor) =>
          profesor.nombre.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    useEffect(() => {
      if(query==='')
        setFilteredProfesor(profesorInicio)
    }, [query])

  useEffect(() => {
    const load=async () => {
      await getProfesores();
      await getPosgrados();
    };load()
  }, []);

  useEffect(() => {
    let profesoresArray=[]
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={
          _id:profesor._id,
          nombre:profesor.nombre, 
          apellidos:profesor.apellidos, 
          hi:0,
          hr:0, 
          th:0
        }
        if(Array.isArray(Posgrados)){
          let posgradosProf=Posgrados.filter((posgrado)=>posgrado.profesor===profesor._id)
          posgradosProf.map((posgrado)=>{
            if(posgrado.impartido){
              aux.hi+=parseInt(posgrado.horas);
            }
            else{
              aux.hr+=parseInt(posgrado.horas);
            }
            
          })
        }
        aux.th+=parseInt(aux.hi)+parseInt(aux.hr)
        profesoresArray.push(aux)
      })
    }
    setprofesorInicio(profesoresArray)
    setFilteredProfesor(profesorInicio)
  }, [Profesores,Posgrados])

    return (
      <>
        <div className="sticky-top bg-white"> 
          <Header username={username}/>    
          <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
          />   
          <ThInicio />
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredProfesor.map((profesor,i)=>(
            <ElementPosgrado 
            key={profesor._id} 
            {...profesor}
          />
          ))}
        </div>
      </>
    )
  }
  
  export default inicio