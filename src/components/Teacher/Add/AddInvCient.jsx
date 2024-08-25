import { useEffect, useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useInvCient } from "../../../context/invcientContext";

const AddInvCient = () => {
    const {user,getProfile}=useAuth()

  const params=useParams();
  const {
    InvCients,
    errors:errorsInvVCient,
    InvProf,
    getInvCients,
    deletesInvCient,
    createsInvCient,
    getInvCient,
    getInvCientProf,
    updatesInvCient,
  }=useInvCient()
  const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  const [selectores, setselectores] = useState("")
  

  const navigate=useNavigate()
  const [tipoSelect, settipoSelect] = useState("Default")
  useEffect(() => {
    async function loadInv() {
        getProfile()
      if(params._id){
          const investigacion=await getInvCient(params._id);
          setValue('_id',investigacion._id)
          
          setValue('fecha',new Date(investigacion.fecha).toISOString().slice(0, 10))
          setValue('titulo',investigacion.titulo)
          setValue('tipo',investigacion.tipo)
          settipoSelect(investigacion.tipo)
          setValue('descripcion',investigacion.descripcion)
          setValue('alcance',investigacion.alcance)
          setValue('issbnn',investigacion.issbnn)
          setValue('autores',investigacion.autores)
          setValue('link',investigacion.link)
          
      }


    }loadInv()
    //setValue('profesor',user.ciuser)
          
  }, [])

  useEffect(() => {
    if(user!=null){
        setValue('profesor',user.ciuser)
    }
  }, [user])
  
  const onSubmit=handleSubmit(data=>{        
    try {
        
        if(data.tipo && data.tipo!="Default"  ){
        
             
                
            if(!params._id){  
                createsInvCient(data);
                navigate("/teacher/inv_cient")
            }
            else{
                
                updatesInvCient(data);
                navigate("/teacher/inv_cient")
            }
        }
        else
            errors.tipo.push("Seleccione un tipo de Extension")
    } catch (error) {
            
}})
const handleCancelar=(e)=>{
    e.preventDefault();
    navigate("/teacher/inv_cient")
}

const [presencial, setpresencial] = useState(false);
    



useEffect(() => {
       
  switch (tipoSelect) {
    case "Proyecto":
        
        setselectores(
            <>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" >Programa</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Programa is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >Alcance</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);}}
                             
                           
                        >
                        <option value="" >Seleccione una Opción</option>
                        <option value="Provincial">Provincial</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                        
                    </select>
                        {errors.alcance && (
                            <p className="form-label"> Alcance is required</p>
                        )}
                </div>
                <div className="input-group mb-3 p-1 col-12">
                    <span className="input-group-text" >Prog. Asociado</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("issbnn", { required: true })}
                        />
                    {errors.issbnn && (
                        <p className="form-label"> Prog. Asociado is required</p>
                    )}
                </div>
            
            </>
        )
        break;
    case "Publicación Artículo":
        
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >Grupo</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);
                                        
                                        
                                        
                        }}
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        
                    </select>
                        {errors.alcance && (
                            <p className="form-label"> Grupo is required</p>
                        )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >ISSN</span>
                        <input 
                            type="text"
                            className="form-control" 
                            {...register("issbnn", { required: true })}
                        />
                    {errors.issbnn && (
                        <p className="form-label"> ISSN is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Autor(es)</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("autores", { required: true })}
                        />
                    {errors.autores && (
                        <p className="form-label"> Autor(es) is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Link</span>
                        <input 
                            type="url" 
                            className="form-control" 
                            {...register("link", { required: true })}
                        />
                    {errors.link && (
                        <p className="form-label"> Link is required</p>
                    )}
                </div>
            </>
        )

           
        break;
    case "Publicación Libro o Capítulo":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >ISBN</span>
                        <input 
                            type="text"
                            className="form-control" 
                            {...register("issbnn", { required: true })}
                        />
                    {errors.issbnn && (
                        <p className="form-label"> ISBN is required</p>
                    )}
                </div>
                
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Link</span>
                        <input 
                            type="url" 
                            className="form-control" 
                            {...register("link", { required: true })}
                        />
                    {errors.link && (
                        <p className="form-label"> Link is required</p>
                    )}
                </div>
            </>
            
            
        )
        break;
    case "Premio ACC":
        setselectores(
            <>

                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Autor(es)</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("autores", { required: true })}
                        />
                    {errors.autores && (
                        <p className="form-label"> Autor(es) is required</p>
                    )}
                </div>
            
            </>
        )
        break;
    case "Premio BTJ":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Autor(es)</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("autores", { required: true })}
                        />
                    {errors.autores && (
                        <p className="form-label"> Autor(es) is required</p>
                    )}
                </div>
            
            </>
        )
        break;
    case "Otro Premio":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >Alcance</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);}}
                             
                           
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Provincial">Provincial</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                        
                    </select>
                        {errors.alcance && (
                            <p className="form-label"> Alcance is required</p>
                        )}
                </div>
            
            </>
        )
        break;
    case "Red Académica":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
            </>
        )
        break;
    case "Fórum":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >Alcance</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);}}
                             
                           
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Provincial">Provincial</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                        
                    </select>
                        {errors.alcance && (
                            <p className="form-label"> Alcance is required</p>
                        )}
                </div>
            </>
        )
        break;
    case "Participación en Evento":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6 ">
                    <span className="input-group-text" >Alcance</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);}}
                             
                           
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Provincial">Provincial</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                        
                    </select>
                        {errors.alcance && (
                            <p className="form-label"> Alcance is required</p>
                        )}
                </div>
                <div className="input-group mb-3 p-1 col-6 justify-content-around">
                        <span className="input-group-text" id="basic-addon1">Presencial</span>
                        <select 
                        className="form-select" 
                        onChange={ e => {setValue('issbnn',e.target.value);}}
                             
                           
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                        
                    </select>
                        {errors.issbnn && (
                            <p className="form-label"> Presencialidad is required</p>
                        )}
                        
                </div>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" id="basic-addon1">Ponente</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("autores", { required: true })}
                        />
                    {errors.autores && (
                        <p className="form-label"> Ponente is required</p>
                    )}
                </div>
            
            </>
        )
    break;
    case "Otro":
        setselectores(
            <>
                <div className="input-group mb-3 p-1 ">
                    <span className="input-group-text" >Descripción</span>
                        <textarea 
                            rows={3}
                            cols={50} 
                            className="form-control" 
                            {...register("descripcion", { required: true })}
                        />
                    {errors.descripcion && (
                        <p className="form-label"> Descripción is required</p>
                    )}
                </div>
            </>
        )
        break;
    default:
        setselectores(
            <>
            </>
        )
        break;
  }

}, [tipoSelect])




  return (
    <>
      <InfoNavBar 
        title={"Añadir Investigación Científica"} 
        link={"/teacher/inv_cient"}/>
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
                <div className="input-group mb-3 p-1 col-8 ">
                    <span className="input-group-text" id="basic-addon1">Tipo de Investigación Científica</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {settipoSelect(e.target.value); setValue('tipo',e.target.value)}}
                        value={tipoSelect}
                        >
                        <option value="Default" >Seleccione una Opción</option>
                        <option value="Proyecto">Proyecto</option>
                        <option value="Publicación Artículo">Publicación Artículo</option>
                        <option value="Publicación Libro o Capítulo">Publicación Libro o Capítulo</option>
                        <option value="Premio ACC">Premio ACC</option>
                        <option value="Premio BTJ">Premio BTJ</option>
                        <option value="Otro Premio">Otro Premio</option>
                        <option value="Red Académica">Red Académica</option>
                        <option value="Fórum">Fórum</option>
                        <option value="Participación en Evento">Participación en Evento</option>
                        <option value="Otro">Otro</option>
                        
                    </select>
                        {errors.tipo && (
                            <p className="form-label"> Tipo is required</p>
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
                    {selectores}
                
                
                
                
                
            </div>
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddInvCient
