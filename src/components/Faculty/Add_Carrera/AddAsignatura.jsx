import { useEffect, useState } from "react"
import InfoNavBar from "./infoNavBar"
import { useForm } from "react-hook-form";
import { useExtUniv } from '../../../context/extunivContext';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import {useAsignatura} from '../../../context/asignaturaContext'
import { useNombreAsignatura } from "../../../context/nombreAsigContext";






const AddAsignatura = ({User}) => {
    const params=useParams();
    
    //console.log(useParams()._id);
    const{Asignaturas,
    errors:errorAsignatura,        
    getAsignaturas,
    createsAsignatura,
    updatesAsignatura,
    deletesAsignatura,
    
    getAsignatura,}=useAsignatura()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  

    const [semestre, setsemestre] = useState(true);
    const [exafinal, setexafinal] = useState(true);
    
    const navigate=useNavigate()
    const{NombreAsignaturas,
        errors:errorNombreAsig,
        getNombreAsignaturas,
        createNombreAsignaturaRequest,
        updatesNombreAsignatura,
        deletesNombreAsignatura,
        getNombreAsignatura,}=useNombreAsignatura()

    useEffect(() => {
        const load=async()=>{
            await getNombreAsignaturas();            
          };load();
          setValue('semestre',true) 
          setValue('exafinal',true)             
          setValue('carrera',params._id)
          setValue('profesor', null)
          setValue('notas',"")
          if(User.facuser)
            setValue('facultad',User.facuser)

          
        
        
        
        
            
    }, [])

    
    // useEffect(() => {
    //     async function loadAsig() {
    //       if(params._id){
    //           const asignatura=await getAsignatura(params._id);
    //           setValue('_id',asignatura._id)              
    //           setValue('nombre',asignatura.nombre)
    //           setValue('carrera',params._id)
    //           setValue('facultad',User.facuser)
    //           setValue('anno',asignatura.anno)
    //           setValue('semestre',asignatura.semestre)              
    //           setValue('tipocurso',asignatura.tipocurso)
    //           setValue('cantgrupos',asignatura.cantgrupos)
    //           setValue('horas',asignatura.facuser)
    //           setValue('exafinal',asignatura.exafinal)
    //           setsemestre(asignatura.semestre)
    //           setexafinal(asignatura.exafinal)
            
            
            
    //       }
  
  
    //     }loadAsig()
              
    //   }, [])

    useEffect(() => {
        if(User.facuser)
            setValue('facultad',User.facuser)
    }, [User])
    

    
      const onSubmit=handleSubmit(data=>{        
        try {
             //console.log(data);
                
            createsAsignatura(data);
            navigate(`/faculty/modificar/${params._id}`)
            
        } catch (error) {
                
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/faculty/modificar/${params._id}`)
    }
    

    const handleOnChange=()=>{
        setsemestre(!semestre)
        setValue('semestre',semestre)
    }
    const handleOnChanges=()=>{
        setexafinal(!exafinal)
        setValue('funcionDireccion',"")
    }
    
  return (
    <>
      <InfoNavBar title={"Añadir Profesor"} link={`/faculty/modificar/${params._id}`}/>      
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                {/*  //nombre asignatura
                anno
                tipocurso
                 */}
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Asignatura</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('nombre',e.target.value)}
                        //value={tipoSelect}
                    >
                        <option value="Default" >Seleccione una Opción</option>
                        {NombreAsignaturas.map((asignatura)=>(
                            <option value={asignatura.nombre} >{asignatura.nombre}</option>
                        ))}
                    </select>
                        {errors.nombre && (
                            <p className="form-label"> Nombre de la Asignatura is required</p>
                        )}
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Año</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('anno',e.target.value)}
                        //value={tipoSelect}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="1" >1ro</option>
                        <option value="2" >2do</option>
                        <option value="3" >3ro</option>
                        <option value="4" >4to</option>
                        <option value="5" >5to</option>
                        
                    </select>
                        {errors.anno && (
                            <p className="form-label"> Nombre de la Asignatura is required</p>
                        )}
                </div>
                

                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Cantidad de Grupos</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        aria-label="NumeroID" 
                        name="idUniversidad"
                        {...register("cantgrupos", { required: true })}
                        
                    />
                    {errors.cantgrupos && (
                        <p className="form-label"> Cantidad de Grupos is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        aria-label="NumeroID" 
                        name="idUniversidad"
                        {...register("horas", { required: true })}
                        
                    />
                    {errors.horas && (
                        <p className="form-label"> Horas is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Tipo de Curso</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('tipocurso',e.target.value)}
                        //value={tipoSelect}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="CRD" >CRD</option>
                        <option value="CPT" >CPT</option>
                        <option value="CPE" >CPE</option>
                        
                    </select>
                        {errors.anno && (
                            <p className="form-label"> Nombre de la Asignatura is required</p>
                        )}
                </div>
                
                <div className="row justify-content-around container-fluid ">

                    
                        <span className="input-group-text" id="basic-addon1">Semestre</span>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="Sí" id="fijosi" checked={semestre} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijosi">
                                1er
                            </label>
                        
                        </div>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="No" id="fijono" checked={!semestre} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijono">
                                2do
                            </label>
                        
                        </div>
                        
                        
                    
                        <span className="input-group-text" id="basic-addon1">Examen Final</span>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="Sí" id="cargosi" checked={exafinal} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargosi">
                                Sí
                            </label>
                        
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input " type="checkbox" value="No" id="cargono" checked={!exafinal} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargono">
                                No
                            </label>
                        
                        </div>
                    
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

export default AddAsignatura
