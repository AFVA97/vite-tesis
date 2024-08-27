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
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="justify-content-center container  align-items-center text-center">
                <div className=" p-2 pt-5 ml-5 mr-5">
                    <div className=" row">
                        <div className="input-group mb-3 mr-2 col row ">
                            <span className="input-group-text col-2" id="basic-addon1">#</span>
                            <input 
                                type="number" 
                                className="form-control col" 
                                placeholder="Número ID" 
                                aria-label="NumeroID" 
                                name="idUniversidad"
                                {...register("idUniversidad", { required: true })}
                                disabled={(params._id)?"disabled":""}
                            />
                            
                        </div>
                        <div className="input-group mb-3 row col">
                            <span className="input-group-text col-2" id="basic-addon1">CI</span>
                            <input 
                                type="number" 
                                className="form-control col" 
                                placeholder="CI" 
                                {...register("ci", { required: true })}
                            />
                            
                        </div>
                    </div>
                    <div className=" row">
                        
                        {errors.idUniversidad ? (
                                <p className="col alert alert-danger mr-2 text-center"> Identificador de Universidad es Requerido</p>
                            ):<div className="col mr-2"></div>}
                        {errors.ci ? (
                                <p className="col alert alert-danger text-center"> CI is required</p>
                            ):<div className="col "></div>}
                    </div>
                </div>
                <div className="  ml-5 mr-5">
                    <div className="row ">
                        <div className="input-group mb-3 mr-2 p-1 col row">
                            <span className="input-group-text col-3" id="basic-addon1">Nombre(s)</span>
                            <input 
                                type="text" 
                                className="form-control col" 
                                {...register("nombre", { required: true })}
                            />
                            
                        </div>
                        <div className="input-group mb-3 p-1 col row">
                            <span className="input-group-text col-3" id="basic-addon1">Apellidos</span>
                                <input 
                                    type="text" 
                                    className="form-control col" 
                                    {...register("apellidos", { required: true })}
                                /> 
                        </div>                    
                    </div>
                    <div className="row">
                        {errors.nombre ? (
                            <p className="col alert alert-danger mr-2 text-center"> El Nombre es Requerido</p>
                        ):<div className="col mr-2"></div>}
                        {errors.apellidos ? (
                            <p className="col alert alert-danger text-center"> Los Apellidos son Requeridos</p>
                        ):<div className="col"></div>}
                    </div>
                </div>
                <div className="  ml-5 mr-5">
                    <div className="input-group justify-content-around row ">
                        <span className="input-group-text col-2  mb-3 p-1 " id="basic-addon1">Graduado de</span>
                            <input 
                                type="text" 
                                className="form-control col mb-3 p-1  mr-5 pr-5" 
                                {...register("graduado", { required: true })}
                            />                            
                    </div>
                    {errors.graduado && (
                        <p className="alert alert-danger text-center"> Graduado de is required</p>
                    )}
                </div>
                <div className="row justify-content-around container p-2 ml-5 mr-5 ">
                        <div className="col-5 row">
                            <span className="input-group-text col-3" id="basic-addon1">Plaza Fija</span>
                            <div className="form-check col-1 m-2">
                                <input className="form-check-input " type="checkbox" value="Sí" id="fijosi" checked={fijo} onChange={handleOnChange}/>
                                <label className="form-check-label" htmlFor="fijosi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check col-1 m-2">
                                <input className="form-check-input " type="checkbox" value="No" id="fijono" checked={!fijo} onChange={handleOnChange}/>
                                <label className="form-check-label" htmlFor="fijono">
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="col-7 row">
                            <span className="input-group-text col-5" id="basic-addon1">Ocupa Cargo de Dirección</span>
                            <div className="form-check col-1 m-2">
                                <input className="form-check-input " type="checkbox" value="Sí" id="cargosi" checked={cargo} onChange={handleOnChanges}/>
                                <label className="form-check-label" htmlFor="cargosi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check col-1 m-2">
                                <input className="form-check-input " type="checkbox" value="No" id="cargono" checked={!cargo} onChange={handleOnChanges}/>
                                <label className="form-check-label" htmlFor="cargono">
                                    No
                                </label>
                            </div>
                        </div>
                </div>
                <div className="row container-fluid">
                    {fijo ? (
                        <div className="input-group m-3 align-items-start row col">
                            <label className="form-check-label row" >
                            Monto del Pago Por Horas
                            </label>
                            <div className="row">
                                
                                <span className="input-group-text col-2">$</span>
                                <input 
                                    type="number" 
                                    className="form-control col" 
                                    {...register("pagoHoras", { required: true })}
                                    />
                            </div>
                    </div>
                    ):<div className="col"> </div>}
                    {cargo ? (
                        <div className="input-group m-3 row col">
                            <label className="form-check-label col-6 mw-100" >
                            Cargo de Dirección
                            </label>
                            <div className="">
                                
                                <input 
                                    type="text" 
                                    className="form-control col-6 mw-100" 
                                    {...register("funcionDireccion", { required: true })}
                                    />
                            </div>
                        </div>
                    ):<div className="col"> </div>}
                </div>
            </div>
            {error.length>0 ? (
                <>
                {error.map((errores,i)=>(
                        <p key={i} className="alert alert-danger text-center"> {errores} </p>
                    ))}
                </>
            ):<div></div>}  
            <div className="sticky-bottom p-2 row bg-white">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddProfesor
