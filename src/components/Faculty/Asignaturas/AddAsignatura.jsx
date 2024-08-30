import { useEffect, useState } from "react"
import InfoNavBar from "../Add_Carrera/infoNavBar"
import { useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom";
import {useAsignatura} from '../../../context/asignaturaContext'
import { useNombreAsignatura } from "../../../context/nombreAsigContext";
import { useTipoCurso } from "../../../context/tipoCursoContext";


const AddAsignatura = ({User}) => {
    const params=useParams();
    const{ createsAsignatura}=useAsignatura()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()
    
    const{NombreAsignaturas, getNombreAsignaturas, }=useNombreAsignatura()
    const{TipoCursos, getTipoCursos}=useTipoCurso()
    useEffect(() => {
        const load=async()=>{
            await getNombreAsignaturas();     
            await getTipoCursos();       
          };load();
          setValue('semestre',true) 
          setValue('exafinal',true) 
          setValue('nombre',"")
          setValue('tutoriaaa',0)
          setValue('tipocurso',"")
          setValue('anno',"")            
          setValue('carrera',params._id)
          setValue('profesor', null)
          setValue('notas',"")
          if(User.facuser)
            setValue('facultad',User.facuser)
    }, [])

    useEffect(() => {
        if(User.facuser)
            setValue('facultad',User.facuser)
    }, [User])
    
    
      const onSubmit=handleSubmit(async data=>{        
        try {  
           
            
            
                createsAsignatura(data);
                navigate(`/faculty/modificar/${params._id}`)
            
        } catch (errores) {
            console.log(errores);
            
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/faculty/modificar/${params._id}`)
    }
    

    
    
    
    
   
    

    
    
  return (
    <>
      <InfoNavBar title={"Añadir Asignatura"} link={`/faculty/modificar/${params._id}`}/>    
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nombre">Asignatura</label>
                        <select 
                        className="form-select" 
                        id="nombre"
                        onChange={ e => setValue('nombre',e.target.value)}
                        {...register("nombre", { required: true })}
                    >
                        <option value="" >Seleccione una Opción</option>
                        {NombreAsignaturas.map((asignatura)=>(
                            <option value={asignatura.nombre} key={asignatura._id}>{asignatura.nombre}</option>
                        ))}
                    </select>                        
                    {errors.nombre && (
                            <p className="alert-danger rounded text-center mt-2"> La Asignatura es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="anno">Año</label>
                        <select 
                        className="form-select" 
                        id="anno"
                        onChange={ e => setValue('anno',e.target.value)}
                        {...register("anno", { required: true })}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="1" >1ro</option>
                        <option value="2" >2do</option>
                        <option value="3" >3ro</option>
                        <option value="4" >4to</option>
                        <option value="5" >5to</option>
                    </select>                        
                    {errors.anno && (
                            <p className="alert-danger rounded text-center mt-2"> El Año es Requerido</p>
                        )}
                    </div>
                    
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="grupos">Cantidad de Grupos</label>
                        <input type="number" className="form-control"  {...register("cantgrupos", { required: true })} id="cantgrupos" placeholder="Cantidad de Grupos" />
                        {errors.cantgrupos && (
                            <p className="alert-danger rounded text-center mt-2"> Cantidad de Grupos es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="horas">Horas</label>
                        <input type="number" {...register("horas", { required: true })} className="form-control" id="horas" placeholder="Horas" />
                        {errors.horas && (
                            <p className="alert-danger rounded text-center mt-2"> Horas es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="frecuencia">Frecuencia Semanal</label>
                        <input type="number" className="form-control"  {...register("frecuencia", { required: true })} id="frecuencia" placeholder="Frecuencia Semanal" />
                        {errors.frecuencia && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="tipocurso">Tipo de Curso</label>
                        <select 
                        className="form-select" 
                        id="tipocurso"
                        onChange={ e => setValue('tipocurso',e.target.value)}
                        {...register("tipocurso", { required: true })}
                    >
                        <option value="" >Seleccione una Opción</option>
                        {TipoCursos.map((tipocurso)=>(
                            <option value={tipocurso.nombre} key={tipocurso._id}>{tipocurso.nombre}</option>
                        ))}
                    </select>                        
                    {errors.tipocurso && (
                            <p className="alert-danger rounded text-center mt-2"> El Tipo de Curso es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="semestre">Semestre</label>
                        <select 
                        className="form-select" 
                        id="semestre"
                        onChange={ e => setValue('semestre',e.target.value)}
                        {...register("semestre", { required: true })}
                        >
                        <option value="" >Seleccione una Opción</option>
                        <option value="true" >1ro</option>
                        <option value="false" >2do</option>
                        </select>                        
                        {errors.semestre && (
                                <p className="alert-danger rounded text-center mt-2"> Semestre es Requerido</p>
                            )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exafinal">Examen Final</label>
                        <select 
                        className="form-select" 
                        id="exafinal"
                        onChange={ e => setValue('exafinal',e.target.value)}
                        {...register("exafinal", { required: true })}
                        >
                        <option value="" >Seleccione una Opción</option>
                        <option value="true" >Sí</option>
                        <option value="false" >No</option>
                        </select>                        
                        {errors.exafinal && (
                                <p className="alert-danger rounded text-center mt-2"> Examen Final es Requerido</p>
                            )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="comienzo">Inicio del Curso</label>
                        <input type="date" className="form-control" onSelect={e=>{setValue('comienzo',e.target.value)}} {...register("comienzo", { required: true })} id="comienzo" />
                        {errors.comienzo && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha de Comienzo del Curso es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="finaliza">Cierre del Curso</label>
                        <input type="date" className="form-control" onSelect={e=>{setValue('finaliza',e.target.value)}} {...register("finaliza", { required: true })} id="finaliza" />
                        {errors.finaliza && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha de Finalización del Curso es Requerida</p>
                        )}
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
        
           
    </>
  )
}

export default AddAsignatura
