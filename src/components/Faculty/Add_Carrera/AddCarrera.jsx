
import { useForm } from 'react-hook-form';
import InfoNavBar from '../Info_Carrera/infoNavBar'
import { useNavigate } from 'react-router-dom';
import { useCarrera } from '../../../context/carreraContext';
import { useAuth } from '../../../context/authContext';
import { useEffect, useState } from 'react';



const AddCarrera = () => {
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const{user,getProfile}=useAuth();
    const [error, seterror] = useState([])
    const {
        Carreras,
        errors:errorsCarrera,
        CarreraFac,
        getCarreras,
        deletesCarrera,
        createsCarrera,
        getCarrera,
        getCarreraProf,
        updatesCarrera,}=useCarrera()
    useEffect(() => {
      const load=async()=>{
        await getProfile()
      }
      load()
    }, [])
    useEffect(() => {
      if(user.facuser){
        setValue('facultad',user.facuser)
      }
    }, [user])
    
    
    const navigate=useNavigate();
    const onSubmit=handleSubmit(data=>{        
        try {
            
           
                const res=createsCarrera(data);
                if(res===200)
                  navigate("/faculty/inicio")
                else
                  seterror(['El Nombre de Carrera ya está en uso, corrija su Información'])
          
        } catch (error) {
                
    }})
    useEffect(() => {
      if (error.length > 0) {
        const timer = setTimeout(() => {
          seterror([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [error]);
    
    const handleCancelar=(e)=>{
        e.preventDefault()
        navigate("/faculty/inicio")
    }
  return (
    <div>
      <InfoNavBar title={"Añadir Carrera"} link={"/faculty/inicio"}/>
      <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="input-group mb-3 p-1 col-12">
                    <span className="input-group-text" id="basic-addon1">Nombre de la Carrera</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("nombre", { required: true })}
                    />
                    
                </div> 
                {errors.nombre && (
                        <p className="alert alert-danger text-center"> El Nombre es Requerido</p>
                    )}
                {error.length>0 && (
                        <p className="alert alert-danger text-center"> {error[0]}</p>
                    )}
            </div>
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </div>
  )
}

export default AddCarrera
