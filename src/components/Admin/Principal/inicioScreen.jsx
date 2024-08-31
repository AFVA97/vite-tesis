import ThInicio from "./TableHead/thInicio"
import Header from "../HeaderAdmin"
import ElementInicio from "./Elements/elementInicio"
import SearchBar from "./searchBar"
import { useContext, useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { Link} from "react-router-dom"
import { useAsignatura } from "../../../context/asignaturaContext"
import { usePosgrado } from "../../../context/posgradoContext"
import { useExtUniv } from "../../../context/extunivContext"
import { useInvCient } from "../../../context/invcientContext"
import { useAuth } from "../../../context/authContext"
import { FechaContext } from "../../../context/fechaContext"

function inicio({username}) {
  
  const { Profesores, getProfesores } = useProfesor();
  const {users, getUsers} =useAuth()
  const { Asignaturas, getAsignaturas }=useAsignatura()
  const{ ExtUnivs, getExtUnivs }=useExtUniv()
  const { Posgrados, getPosgrados }=usePosgrado()
  const {InvCients, getInvCients }=useInvCient()
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
    const {globalData}=useContext(FechaContext)
  useEffect(() => {    
    const load=async () => {
      await getProfesores();
      await getAsignaturas();
      await getPosgrados();
      await getExtUnivs();
      await getInvCients()
      await getUsers();
    };load()
  }, [,globalData]);
  useEffect(() => {    
    const load=async () => {
      //await getProfesores();
      await getAsignaturas();
      await getPosgrados();
      await getExtUnivs();
      await getInvCients()
      await getUsers();
    };load()
  }, [globalData]);

  useEffect(() => {
    let profesoresArray=[]    
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={
              _id:profesor._id,
              nombre:profesor.nombre, 
              apellidos:profesor.apellidos, 
              graduado:profesor.graduado, 
              hpre:0, 
              hpos:0, 
              hic:0, 
              heu:0, 
              th:0
            }            
        if(Array.isArray(Asignaturas)){
          let asignaturasProf=Asignaturas.filter((asignatura)=>asignatura.profesor===profesor._id)
          asignaturasProf.map((asignatura)=>{
            aux.hpre+=parseInt(asignatura.horas);
          })
        }
        if(Array.isArray(Posgrados)){
          let posgradosProf=Posgrados.filter((posgrado)=>posgrado.profesor===profesor._id)
          posgradosProf.map((posgrado)=>{
            aux.hpos+=parseInt(posgrado.horas);
          })
        }
        if(Array.isArray(InvCients)){
          let invcientProf=InvCients.filter((invcient)=>invcient.profesor===profesor._id)
          invcientProf.map((invcient)=>{
            aux.hic+=1;
          })
        }
        if(Array.isArray(ExtUnivs)){
          let extensionProf=ExtUnivs.filter((extension)=>extension.profesor===profesor._id)
          extensionProf.map((extension)=>{
            aux.heu+=parseInt(extension.horas);
          })
        }
        aux.th=parseInt(aux.hpre)+ parseInt(aux.hpos)+ parseInt(aux.hic)+ parseInt(aux.heu)
        
        profesoresArray.push(aux)
      })
    }
    setprofesorInicio(profesoresArray)
    setFilteredProfesor(profesorInicio)    
  }, [Profesores,Asignaturas,Posgrados,ExtUnivs,InvCients])

  
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
            <ElementInicio 
              key={profesor._id}
              profesorInicio={profesorInicio}
              setprofesorInicio={setprofesorInicio}
              {...profesor}
              users={users}
            />
          ))}
        </div>
        <div className="sticky-bottom bg-white row mw-100">
          <Link 
            to="/admin/addprofesor"
          >
            <button 
              className="floatingbutton btn btn-success"
              >Agregar
            </button>
          </Link>
        </div>
      </>
    )
  }
  
  export default inicio