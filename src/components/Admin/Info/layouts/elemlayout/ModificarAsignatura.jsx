import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProfesor } from "../../../../../context/profesorContext"
import { useAsignatura } from "../../../../../context/asignaturaContext"
import InfoNavBar from "../../infoNavBar"
import { useCarrera } from "../../../../../context/carreraContext"
import { useForm } from "react-hook-form"
import SearchBar from "./SearchBar"



const ModificarAsignatura = () => {
    const _id=useParams()._id
    const {Profesores,getProfesores}=useProfesor();
    const {getAsignatura,updatesAsignatura,getAsignaturas}=useAsignatura();
    const [asignatura, setasignatura] = useState({nombre:"",facultad:"",notas:""})
    const [carrera,setCarrera]=useState({nombre:""})
    //const [auxiliar,setauxiliar]=useState(null)
    const {getCarrera}=useCarrera()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()
    // const [selectedSuggestion, setSelectedSuggestion] = useState('');
    
    // const [nombreProfesor, setnombreProfesor] = useState('')
    
    
    const handleSelect = (profesor) => {
         
        if(profesor)
            setValue('profesor',profesor._id);
        else
            setValue('profesor',null);
     
        
  };
  
  
    useEffect(() => {
      const load=async()=>{
        await getProfesores()
        setasignatura(await getAsignatura(_id))
      };load()
    }, [])
    useEffect(() => {
        if(asignatura.carrera){
            const load=async()=>{
            
                setCarrera(await getCarrera(asignatura.carrera))
                
                
            };load()
            setValue('_id',asignatura._id)
            setValue('nombre',asignatura.nombre)
            setValue('carrera',asignatura.carrera)
            setValue('facultad',asignatura.facultad)
            setValue('anno',asignatura.anno)
            setValue('semestre',asignatura.semestre)
            setValue('frecuencia',asignatura.frecuencia)
            setValue('tutoriaaa',asignatura.tutoriaaa)
            setValue('tipocurso',asignatura.tipocurso)
            setValue('cantgrupos',asignatura.cantgrupos)
            setValue('horas',asignatura.horas)
            setValue('exafinal',asignatura.exafinal)
            setValue('profesor',asignatura.profesor)
            
            setValue('notas',asignatura.notas)
        }
        
    }, [asignatura])
    
    
    
    const onSubmit=handleSubmit(data=>{        
        try {
            //console.log(data);
            
           if(asignatura.carrera){
                updatesAsignatura(data);
                
                navigate(`/admin/facultad/info/${asignatura.facultad}`)
                
           }
        } catch (error) {
                console.log(error);
                
    }})
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/admin/facultad/info/${asignatura.facultad}`)
    }
    
    
  return (
    <>
        <InfoNavBar title={`Modificar Asignatura: ${asignatura.nombre} ~~~~~~ Carrera: ${carrera.nombre}`} link={`facultad/info/${asignatura.facultad}`}/>

        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="col-3">
                    <span className="input-group-text w-100" id="basic-addon1">Profesor</span>
                    <SearchBar Profesores={Profesores} onSelect={handleSelect} prof={asignatura.profesor} />
                </div>
                <div className="input-group mb-3 col-9 p-1 ">
                    <div className="w-100"><span className="input-group-text w-100" >Notas</span></div>
                        <div className="w-100"><textarea 
                            rows={3}
                            cols={40} 
                            className="form-control " 
                            {...register("notas")}
                        /></div>
                    
                </div>
                
                
                
            </div>
            
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default ModificarAsignatura
