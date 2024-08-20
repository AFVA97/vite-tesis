import { useEffect,useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { usePosgrado } from "../../../context/posgradoContext";



const AddPosgrado = () => {
    //const [userModif, setuserModif] = useState(null)
const {user,getProfile}=useAuth()

     const params=useParams();
    const {
    Posgrados,
    errors:errorsPosgrado,
    getPosgrados,
    deletesPosgrado,
    createsPosgrado,
    getPosgrado,
    getPosgradoProf,
    updatesPosgrado,
  }=usePosgrado()
  const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  const navigate=useNavigate()
  const [tipoSelect, settipoSelect] = useState("Default")
  
  useEffect(() => {
    async function loadPosgrado() {
        getProfile();
      if(params._id){
          const posgrado=await getPosgrado(params._id);
          setValue('_id',posgrado._id)
          
          setValue('fecha',new Date(posgrado.fecha).toISOString().slice(0, 10))
          setValue('nombre',posgrado.nombre)
          setValue('impartido',posgrado.impartido)
          settipoSelect(posgrado.modalidad)
          setValue('cantcuadros',posgrado.cantcuadros)
          setValue('ubicacion',posgrado.ubicacion)
          setValue('horas',posgrado.horas)
          
      }


    }loadPosgrado()
          
  }, [])
  useEffect(() => {
    //console.log(user);
    
    if(user!=null){
        setValue('profesor',user.ciuser)
    }
    
  }, [user])
  
  const onSubmit=handleSubmit(data=>{        
    try {
        
        
            //setValue('profesor',userModif.ciuser)
             
                //console.log(data);
                
            if(!params._id){  
                createsPosgrado(data);
                navigate("/teacher/posgrado")
            }
            else{
                
                updatesInvCient(data);
                navigate("/teacher/posgrado")
            }
        
    } catch (error) {
        console.log(error);
        
            
}})
const handleCancelar=(e)=>{
    e.preventDefault();
    navigate("/teacher/inv_cient")
}
  //nombre //fecha //impartido cantcuadros ubicacion //modalidad horas
   
    return (
    <>
      <InfoNavBar
        title={"Añadir Posgrado"}
        link={"/teacher/posgrado"}/>
      <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="input-group mb-3 p-1">
                    <span className="input-group-text" id="basic-addon1">Nombre del Posgrado</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("nombre", { required: true })}
                        />
                    {errors.nombre && (
                        <p className="form-label"> Nombre del Posgrado is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" id="basic-addon1">Modalidad de Posgrado</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {settipoSelect(e.target.value); setValue('modalidad',e.target.value)}}
                        value={tipoSelect}
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Curso">Curso</option>
                        <option value="Diplomado">Diplomado</option>
                        <option value="Especialidad">Especialidad</option>
                        <option value="Entrenamiento">Entrenamiento</option>
                        <option value="Maestría">Maestría</option>
                        <option value="Doctorado">Doctorado</option>
                        
                    </select>
                        {errors.modalidad && (
                            <p className="form-label"> Modalidad is required</p>
                        )}
                </div>
                
                
                <div className="input-group mb-3 col-6 ">
                    <span className="input-group-text" id="basic-addon1">Impartido</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('impartido',e.target.value)}
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                        
                    </select>
                        {errors.impartido && (
                            <p className="form-label"> Impartido is required</p>
                        )}
                </div>
                <div className="input-group mb-3 col-4">
                    <span className="input-group-text" id="basic-addon1">Fecha</span>
                    <input 
                        type="date" 
                        onSelect={e=>{setValue('fecha',e.target.value);
                            
                            
                        }}

                        {...register("fecha", { required: true })}
                    />
                    {errors.fecha && (
                        <p className="form-label"> Fecha is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-5">
                    <span className="input-group-text" id="basic-addon1">Cantidad de Cuadros</span>
                        <input 
                            type="number" 
                            className="form-control" 
                            {...register("cantcuadros", { required: true })}
                        />
                    {errors.cantcuadros && (
                        <p className="form-label"> Cantidad de Cuadros is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-3">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                        <input 
                            type="number"
                            className="form-control" 
                            {...register("horas", { required: true })}
                        />
                    {errors.horas && (
                        <p className="form-label"> Horas is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-12">
                    <span className="input-group-text" id="basic-addon1">Ubicación</span>
                        <textarea
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("ubicacion", { required: true })}
                        />
                    {errors.ubicacion && (
                        <p className="form-label"> Ubicación is required</p>
                    )}
                </div>
                
                
            </div>
            <div className="fixed-bottom p-2 row bottom-0 end-0 bg-white">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddPosgrado
