import { useEffect, useState } from "react"
import InfoInicio from "../Info/infoNavBar"
import { useForm } from "react-hook-form";
import { useProfesor } from "../../../context/profesorContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const AddProfesor = () => {
    const params=useParams();  
      
    const [fijo, setfijo] = useState(false);
    const [cargo, setcargo] = useState(false);
    const {createsProfesor,errors:createError,updatesProfesor,getProfesor} =useProfesor();
    


    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  
    const navigate=useNavigate()
    
    
    
    useEffect(() => {
        async function loadProfesor() {
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
    
    
    
    

    const onSubmit=handleSubmit(data=>{        
        try {
            if(!params._id){  
                     
                createsProfesor(data);
                handleCancelar();
            }
            else{
                updatesProfesor(data);
                handleCancelar();
            }
        } catch (error) {
                
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
  return (
    <>
      <InfoInicio title={"Añadir Profesor"}/>      
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">#</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Número ID" 
                        aria-label="NumeroID" 
                        name="idUniversidad"
                        {...register("idUniversidad", { required: true })}
                        disabled={(params._id)?"disabled":""}
                    />
                    {errors.idUniversidad && (
                        <p className="form-label"> ID is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">CI</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="CI" 
                        {...register("ci", { required: true })}
                    />
                    {errors.ci && (
                        <p className="form-label"> ID is required</p>
                    )}
                </div>
            
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Nombre(s)</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && (
                        <p className="form-label"> El Nombre is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6">
                <span className="input-group-text" id="basic-addon1">Apellidos</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("apellidos", { required: true })}
                    />
                    {errors.apellidos && (
                        <p className="form-label"> Apellidos is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1">
                <span className="input-group-text" id="basic-addon1">Graduado de</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("graduado", { required: true })}
                    />
                    {errors.graduado && (
                        <p className="form-label"> Graduado de is required</p>
                    )}
                </div>
                <div className="row justify-content-around container ">
                    
                        <span className="input-group-text" id="basic-addon1">Plaza Fija</span>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="Sí" id="fijosi" checked={fijo} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijosi">
                                Sí
                            </label>
                        
                        </div>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="No" id="fijono" checked={!fijo} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijono">
                                No
                            </label>
                        
                        </div>
                        
                        
                    
                        <span className="input-group-text" id="basic-addon1">Ocupa Cargo de Dirección</span>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="Sí" id="cargosi" checked={cargo} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargosi">
                                Sí
                            </label>
                        
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input " type="checkbox" value="No" id="cargono" checked={!cargo} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargono">
                                No
                            </label>
                        
                        </div>
                    
                </div>
                <div className="row container-fluid">
                    {fijo ? (
                        <div className="input-group m-3 align-items-start col">
                            <label className="form-check-label col-12" >
                            Monto del Pago Por Horas
                            </label>
                            <div className="row">
                                
                                <span className="input-group-text col-2">$</span>
                                <input 
                                    type="number" 
                                    className="form-control col-10" 
                                    {...register("pagoHoras", { required: true })}
                                    />
                            </div>
                    </div>
                    ):<div className="col"> </div>}
                    {cargo ? (
                        <div className="input-group m-3 col">
                            <label className="form-check-label col-12" >
                            Cargo de Dirección
                            </label>
                            <div className="">
                                
                                <input 
                                    type="text" 
                                    className="form-control col-12 mw-100" 
                                    {...register("funcionDireccion", { required: true })}
                                    
                                    />
                            </div>
                    </div>
                    ):<div className="col"> </div>}
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

export default AddProfesor
