import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useProfesor } from "../../../context/profesorContext"
import { useAsignatura } from "../../../context/asignaturaContext"
import InfoNavBar from "../Info/infoNavBar"
import { useCarrera } from "../../../context/carreraContext"
import { useForm } from "react-hook-form"
import SearchBar from "../Info/layouts/elemlayout/SearchBar"



const ModificarAsignatura = () => {
    const _id=useParams()._id
    const {Profesores,getProfesores}=useProfesor();
    const {getAsignatura,updatesAsignatura,getAsignaturas}=useAsignatura();
    const [asignatura, setasignatura] = useState({nombre:"",facultad:{_id:""},carrera:{nombre:""},notas:""})
    //const [carrera,setCarrera]=useState({nombre:""})
    const {getCarrera}=useCarrera()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()    
    
    const handleSelect = (profesor) => {
        if(profesor)
            setValue('profesor',profesor._id);
        else
            setValue('profesor',null);
    };
  
    const onSubmit=handleSubmit(data=>{        
        try {
        if(asignatura.carrera){
                updatesAsignatura(data);
                navigate(`/admin/facultad/info/${asignatura.facultad._id}`)
        }
        } catch (error) {
                console.log(error);
    }})

    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/admin/facultad/info/${asignatura.facultad._id}`)
    }

    useEffect(() => {
      const load=async()=>{
        await getProfesores()
        setasignatura(await getAsignatura(_id))
      };load()
      
    }, [])

    useEffect(() => {
        if(asignatura.carrera){
            
            setValue('_id',asignatura._id)
            setValue('nombre',asignatura.nombre)
            setValue('carrera',asignatura.carrera._id)
            setValue('facultad',asignatura.facultad._id)
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
    
  return (
    <>
        <InfoNavBar title={`Modificar Asignatura: ${asignatura.nombre} ~~~~~~ Carrera: ${asignatura.carrera.nombre}`} link={`facultad/info/${asignatura.facultad._id}`}/>
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="grupos">Seleccione un Profesor</label>
                        <SearchBar Profesores={Profesores} onSelect={handleSelect} prof={asignatura.profesor} />
                    </div>
                    <div className="form-group col-md-7">
                        <label htmlFor="horas">Notas</label>
                        <textarea 
                            rows={3}
                            cols={40} 
                            className="form-control " 
                            {...register("notas")}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                    <div className="form-group col-md-6 text-right">
                        <button type="button" onClick={e=>handleCancelar(e)} className="btn btn-secondary">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
        
        {/* <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="col-3">
                    <span className="input-group-text w-100" id="basic-addon1">Profesor</span>
                    <SearchBar Profesores={Profesores} onSelect={handleSelect} prof={asignatura.profesor} />
                </div>
                <div className="input-group mb-3 col p-1 ">
                    <div className="w-100"><span className="input-group-text w-100" >Notas</span></div>
                        <div className="w-100"><textarea 
                            rows={3}
                            cols={40} 
                            className="form-control " 
                            {...register("notas")}
                        /></div>
                </div>
            </div>
            <div className="fixed-bottom bg-white p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form> */}
    </>
  )
}

export default ModificarAsignatura
