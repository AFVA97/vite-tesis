
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
    const { createsCarrera}=useCarrera()
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

    const handleCancelar=(e)=>{
      e.preventDefault()
      navigate("/faculty/inicio")
    }

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

    useEffect(() => {
      if (error.length > 0) {
        const timer = setTimeout(() => {
          seterror([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [error]);
    
    
  return (
    <div>
      <InfoNavBar title={"Añadir Carrera"} link={"/faculty/inicio"}/>
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="nombre">Nombre de la Carrera</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} id="nombre" placeholder="Nombre de la Carrera" />
                        {errors.nombre && (
                            <p className="alert-danger rounded text-center mt-2"> El Nombre de la Carrera es Requerido</p>
                        )}
                    </div>
                </div>
                {error.length>0 && (
                        <p className="alert-danger rounded text-center mt-2"> {error[0]}</p>
                    )}
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
    </div>
  )
}

export default AddCarrera
