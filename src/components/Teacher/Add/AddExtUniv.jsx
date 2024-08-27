import { useEffect, useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { useExtUniv } from '../../../context/extunivContext';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";




const AddExtUniv = () => {
    const{user,getProfile}=useAuth()
    const params=useParams();
    const {
        ExtUnivs,
        errors:extErrors,
        getExtUnivs,
        deletesExtUniv,
        createsExtUniv,
        getExtUniv,
        getExtUnivProf,
        updatesExtUniv,
      } =useExtUniv();
    
      const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  
    const navigate=useNavigate()
    const [tipoSelect, settipoSelect] = useState("Default")
    const [extension, setextension] = useState(null)
    
    useEffect(() => {
      async function loadExt() {
        await getProfile();
        if(params._id){
            setextension(await getExtUniv(params._id));
            
        }


      }loadExt()
      //setValue('profesor',user.ciuser)
            
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
      
    
    const onSubmit=handleSubmit(data=>{        
        try {
            if(data.tipo && data.tipo!="Default"  ){
            
                //setValue('profesor',user.ciuser)
                    
                if(!params._id){  
                    
                    createsExtUniv(data);
                    navigate("/teacher/ext_univ")
                }
                else{
                    
                    updatesExtUniv(data);
                    navigate("/teacher/ext_univ")
                }
            }
            else
                errors.tipo.push("Seleccione un tipo de Extension")
        } catch (error) {
                
    }})
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/teacher/ext_univ")
    }

  return (
    <>
      <InfoNavBar title={"Añadir Extensión Universitaria"} link={"/teacher/ext_univ"}/>
      <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="input-group mb-3 p-1">
                    <span className="input-group-text" id="basic-addon1">Título</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("titulo", { required: true })}
                        />
                    {errors.titulo && (
                        <p className="form-label"> Titulo is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-12 justify-content-around">
                    <span className="input-group-text" id="basic-addon1">Tipo de Extensión Universitaria</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {settipoSelect(e.target.value); setValue('tipo',e.target.value)}}
                        value={tipoSelect}
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Atención a la Residencia">Atención a la Residencia</option>
                        <option value="Trabajo Cátedras Honoríficas">Trabajo Cátedras Honoríficas</option>
                        <option value="Actividad Extensionista">Actividad Extensionista</option>
                    </select>
                        {errors.tipo && (
                            <p className="form-label"> Tipo is required</p>
                        )}
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="horas"
                        
                        {...register("horas", { required: true })}
                    />
                    {errors.horas && (
                        <p className="form-label"> Horas is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Fecha</span>
                    <input 
                        type="date" 
                        onSelect={e=>{setValue('fecha',e.target.value)}}

                        {...register("fecha", { required: true })}
                    />
                    {errors.fecha && (
                        <p className="form-label"> Fecha is required</p>
                    )}
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

export default AddExtUniv
