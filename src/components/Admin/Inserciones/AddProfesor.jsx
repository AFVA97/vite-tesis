import { useEffect, useState } from "react"
import InfoInicio from "../Info/infoNavBar"
import { useForm } from "react-hook-form";
import { useProfesor } from "../../../context/profesorContext";
import {  useNavigate, useParams } from "react-router-dom";


const AddProfesor = () => {
    const params=useParams();     
    const [fijo, setfijo] = useState(false);
    const [cargo, setcargo] = useState(false);
    const {Profesores,createsProfesor,getProfesores,updatesProfesor,getProfesor} =useProfesor();
    const [error, seterror] = useState([])
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()
 
    const onSubmit=handleSubmit(data=>{        
        try {
            if(data.ci.length==11){
                if(!params._id){  
                    const proftemp=Profesores.filter((profesor)=>profesor.idUniversidad==data.idUniversidad)
                    const proftempCI=Profesores.filter((profesor)=>profesor.ci==data.ci)
                    if(proftemp.length==0){
                        if(proftempCI.length==0){
                            createsProfesor(data)
                            navigate("/admin/inicio")
                        }
                        else{
                            seterror(['Carnet de Identidad en uso, rectifique su Información'])
                        }
                    }
                    else{
                        seterror(['Identificador de Uiversidad en uso, rectifique su Información'])
                    }
                }
                else{
                    const proftemp=Profesores.filter((profesor)=>profesor.idUniversidad==data.idUniversidad)
                    const proftempCI=Profesores.filter((profesor)=>profesor.ci==data.ci)
                    if(proftemp.length==0){
                        if(proftempCI.length==0){
                            updatesProfesor(data);
                            navigate("/admin/inicio")
                        }
                        else{
                            seterror(['Carnet de Identidad en uso, rectifique su Información'])
                        }
                    }
                    else{
                        seterror(['Identificador de Uiversidad en uso, rectifique su Información'])
                    }
                }
                return
            }
            else{
                seterror(['CI incorrecto, rectifique su Información'])
            }
            
        } catch (errores) {
            error.push(errores.message)
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/admin/inicio")
    }

    const handleOnChange=()=>{
        setfijo(!fijo)
        setValue('pagoHoras',"")
    }

    const handleOnChanges=()=>{
        setcargo(!cargo)
        setValue('funcionDireccion',"")
    }

    
    useEffect(() => {
        if (error.length > 0) {
          const timer = setTimeout(() => {
            seterror([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [error]);
    
    useEffect(() => {
        async function loadProfesor() {
            await getProfesores();
            if(params._id){
                const profesor=await getProfesor(params._id);
                setValue('_id',profesor._id)
                setValue('idUniversidad',profesor.idUniversidad)
                setValue('ci',profesor.ci)
                setValue('nombre',profesor.nombre)
                setValue('apellidos',profesor.apellidos)
                setValue('graduado',profesor.graduado)
                if(profesor.pagoHoras){
                    setfijo(true)
                    setValue('pagoHoras',profesor.pagoHoras)
                }
                if(profesor.funcionDireccion){
                    setcargo(true)
                    setValue('funcionDireccion',profesor.funcionDireccion)
                }
                setValue('trabajoec',0)
                setValue('trabajoc',0)
                setValue('trabajod',0)
                setValue('tutoria',0)
                setValue('examene',0)
                setValue('trabajometo',0)
            }
            else{
                setValue('trabajoec',0)
                setValue('trabajoc',0)
                setValue('trabajod',0)
                setValue('tutoria',0)
                setValue('examene',0)
                setValue('trabajometo',0)
            }
        }
        loadProfesor()
    }, []);
    
    
  return (
    <>
    
      <InfoInicio title={"Añadir Profesor"}/>  
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="idUniversidad">Identificador de la Universidad</label>
                        <input type="number" placeholder="#" className="form-control" {...register("idUniversidad", { required: true })} id="idUiversidad" disabled={(params._id)?"disabled":""}/>
                        {errors.idUniversidad && (
                            <p className="alert-danger rounded text-center mt-2"> ID Universidad es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ci">Carnet de Identidad</label>
                        <input 
                            type="number" 
                            {...register("ci", { required: true } )}
                            className="form-control" 
                            id="ci" 
                            placeholder="CI" />
                        {errors.ci && (
                            <p className="alert-danger rounded text-center mt-2"> CI es Requerido</p>
                        )}
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nombre">Nombre(s)</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} id="nombre" placeholder="Nombre"/>
                        {errors.nombre && (
                            <p className="alert-danger rounded text-center mt-2"> Nombre es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ci">Apellidos</label>
                        <input type="text" {...register("apellidos", { required: true })} className="form-control" id="apellidos" placeholder="Apellidos" />
                        {errors.apellidos && (
                            <p className="alert-danger rounded text-center mt-2"> Apellidos es Requerido</p>
                        )}
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="graduado">Graduado de:</label>
                        <input type="text" className="form-control" {...register("graduado", { required: true })} id="graduado" placeholder="Graduado de" />
                        {errors.graduado && (
                            <p className="alert-danger rounded text-center mt-2"> Gradudo es Requerido</p>
                        )}
                    </div>
                </div >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Plaza Fija</label>
                        <div className="form-row ml-3">
                            <div className="form-check col-md-3" onClick={handleOnChange}>
                                <input className="form-check-input" type="checkbox" checked={fijo} onChange={()=>{}} id="impartidoSi" />
                                <label className="form-check-label" htmlFor="impartidoSi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check col-md-3" onClick={handleOnChange}>
                                <input className="form-check-input" type="checkbox" checked={!fijo } onChange={()=>{}} id="impartidoNo" />
                                <label className="form-check-label" htmlFor="impartidoNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Ocupa Cargo de Dirección</label>
                        <div className="form-row ml-3">
                            <div className="form-check col-md-3" onClick={handleOnChanges}>
                                <input className="form-check-input" type="checkbox" checked={cargo} onChange={()=>{}} id="impartidoSi" />
                                <label className="form-check-label" htmlFor="impartidoSi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check col-md-3" onClick={handleOnChanges}>
                                <input className="form-check-input" type="checkbox" checked={!cargo } onChange={()=>{}} id="impartidoNo" />
                                <label className="form-check-label" htmlFor="impartidoNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    {fijo ? <div className="form-group col-md-6">
                        <label htmlFor="nombre">Salario por Horas</label>
                        <input type="number" className="form-control" {...register("pagoHoras", { required: true })} id="nombre" placeholder="Salario por Horas"/>
                        {errors.pagoHoras && (
                            <p className="alert-danger rounded text-center mt-2"> Salario por Horas es Requerido</p>
                        )}
                    </div>:<div className="form-group col-md-6"></div>}
                    {cargo && <div className="form-group col-md-6">
                        <label htmlFor="ci">Función de Dirección</label>
                        <input type="text" {...register("funcionDireccion", { required: true })} className="form-control" id="apellidos" placeholder="Función de Dirección" />
                        {errors.funcioDireccion && (
                            <p className="alert-danger rounded text-center mt-2"> Función de Dirección es Requerido</p>
                        )}
                    </div>}
                    
                </div>
                <div className="form-row">
                {error.length>0 && (
                            <p className="alert-danger rounded text-center col-12 mt-2">{ error[0]}</p>
                        )}
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
    </>
  )
}

export default AddProfesor
