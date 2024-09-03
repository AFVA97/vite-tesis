import { useEffect, useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { useExtUniv } from '../../../context/extunivContext';
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";


const AddExtUniv = () => {
    const{user,getProfile}=useAuth()
    const params=useParams();
    const {createsExtUniv, getExtUniv, updatesExtUniv,} =useExtUniv();
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()
    const [tipoSelect, settipoSelect] = useState("")
    const [extension, setextension] = useState(null)

    const onSubmit=handleSubmit(data=>{        
        try {
            if(!params._id){  
                createsExtUniv(data);
                navigate("/teacher/ext_univ")
            }
            else{
                updatesExtUniv(data);
                navigate("/teacher/ext_univ")
            }
        } catch (error) {
                
    }})

    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/teacher/ext_univ")
    }
    
    useEffect(() => {
      async function loadExt() {
        await getProfile();
        if(params._id){
            setextension(await getExtUniv(params._id));
        }
      }loadExt()
            setValue('tipo',"")
    }, [])

    useEffect(() => {
        if(user!=null){
            setValue('profesor',user.ciuser)
        }
      }, [user])

      useEffect(() => {
        if(extension){
            setValue('_id',extension._id)
            setValue('fecha',new Date(extension.fecha).toISOString().slice(0, 10))
            setValue('horas',extension.horas)
            setValue('titulo',extension.titulo)
            setValue('tipo',extension.tipo)
            settipoSelect(extension.tipo)
        }
      }, [extension])
      
    
    

useEffect(() => {
  setValue('tipo',tipoSelect)
  console.log(tipoSelect);
}, [tipoSelect])


  return (
    <>
      <InfoNavBar title={"Añadir Extensión Universitaria"} link={"/teacher/ext_univ"}/>
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" {...register("titulo", { required: true })} id="titulo" placeholder="Título de la Extensión Universitaria" />
                        {errors.titulo && (
                            <p className="alert-danger rounded text-center mt-2"> El Título de la Extensión Universitaria es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                            <label htmlFor="tipo">Tipo de Extensión Universitaria</label>
                            <select 
                                className="form-control" 
                                onChange={ e => {settipoSelect(e.target.value);
                                                setValue(e.target.value);   }}
                                id="tipo"
                                {...register("tipo", { required: true })}
                                >
                                <option value="" >Seleccione una Opción</option>
                                <option value="Atención a la Residencia">Atención a la Residencia</option>
                                <option value="Trabajo Cátedras Honoríficas">Trabajo Cátedras Honoríficas</option>
                                <option value="Actividad Extensionista">Actividad Extensionista</option>
                            </select>
                            {errors.tipo && (
                            <p className="alert-danger rounded text-center mt-2"> Tipo de Extensión Universitaria es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" className="form-control" onSelect={e=>{setValue('fecha',e.target.value);}} {...register("fecha", { required: true })} id="fecha" />
                        {errors.fecha && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha es Requerida</p>
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

export default AddExtUniv
