import { useEffect, useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useInvCient } from "../../../context/invcientContext";

const AddInvCient = () => {
    const {user,getProfile}=useAuth()

  const params=useParams();
  const {
    createsInvCient,
    getInvCient,
    updatesInvCient,
  }=useInvCient()
  
  const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  const [selectores, setselectores] = useState("")
  

  const navigate=useNavigate()
  const [tipoSelect, settipoSelect] = useState("")
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
          
  }, [])

  useEffect(() => {
    if(user!=null){
        setValue('profesor',user.ciuser)
    }
  }, [user])
  
  const onSubmit=handleSubmit(data=>{        
    try {
        
        
             
                
            if(!params._id){  
                createsInvCient(data);
                navigate("/teacher/inv_cient")
            }
            else{
                
                updatesInvCient(data);
                navigate("/teacher/inv_cient")
            }
        
        
    } catch (error) {
            
}})
const handleCancelar=(e)=>{
    e.preventDefault();
    navigate("/teacher/inv_cient")
}


useEffect(() => {
    setValue('descripcion',"")
    setValue('alcance',"")
    setValue('issbnn',"")
    setValue('autores',"")
    setValue('link',"")
    setValue('tipo',tipoSelect)
  switch (tipoSelect) {
    case "Proyecto":
        
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="programa">Programa</label>
                        <input type="text" className="form-control" placeholder="Programa" {...register("descripcion", { required: true })} id="programa" />
                        {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Programa es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="alcance">Alcance</label>
                        <select 
                            className="form-select " 
                            onChange={ e => {setValue('alcance',e.target.value);}}
                            {...register("alcance", { required: true })}
                            
                            >
                            <option value="" >Seleccione una Opción</option>
                            <option value="Provincial">Provincial</option>
                            <option value="Nacional">Nacional</option>
                            <option value="Internacional">Internacional</option>
                            
                        </select>
                        {errors.alcance && (
                            <p className="alert-danger rounded text-center mt-2"> Alcance es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="titulo">Programa Asociado</label>
                        <input type="text" className="form-control" {...register("issbnn", { required: true })} id="titulo" placeholder="Programa Asociado" />
                        {errors.issbnn && (
                            <p className="alert-danger rounded text-center mt-2"> El Programa Asociado es Requerido</p>
                        )}
                    </div>
                    
                </div>
                
            
            </>
        )
        break;
    case "Publicación Artículo":
       
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="grupo">Grupo</label>
                        <select 
                        className="form-select" 
                        onChange={ e => {setValue('alcance',e.target.value);
                        }}
                        id="grupo"
                        {...register("alcance", { required: true })}
                        >
                        <option value="" >Seleccione una Opción</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        
                        </select>                        
                        {errors.alcance && (
                                <p className="alert-danger rounded text-center mt-2"> Grupo es Requerida</p>
                            )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="issbnn">ISSN</label>
                        <input type="text" {...register("issbnn", { required: true })} className="form-control" id="issbnn" placeholder="ISSN" />
                        {errors.issbnn && (
                            <p className="alert-danger rounded text-center mt-2"> ISSN es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="link">Link</label>
                        <input type="url" {...register("link", { required: true })} className="form-control" id="link" placeholder="Link" />
                        {errors.link && (
                            <p className="alert-danger rounded text-center mt-2"> Link es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="autores">Autor(es)</label>
                        <textarea className="form-control" id="autores" {...register("autores",{required:true})} rows="3" placeholder="Autor(es)"></textarea>
                    </div>
                    {errors.autores && (
                            <p className="alert-danger rounded text-center mt-2"> Autor(es) es Requerido</p>
                        )}
                </div>
                
                
                
                
           
            </>)
           
        break;
    case "Publicación Libro o Capítulo":
        
        setselectores(
            <>
                
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="link">Link</label>
                        <input type="url" {...register("link", { required: true })} className="form-control" id="link" placeholder="Link" />
                        {errors.link && (
                            <p className="alert-danger rounded text-center mt-2"> Link es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    
                   
                    <div className="form-group col-md-6">
                        <label htmlFor="issbnn">ISBN</label>
                        <input type="text" {...register("issbnn", { required: true })} className="form-control" id="issbnn" placeholder="ISBN" />
                        {errors.issbnn && (
                            <p className="alert-danger rounded text-center mt-2"> ISBN es Requerido</p>
                        )}
                    </div>
                </div>
            </>
            
            
        )
        break;
    case "Premio ACC":
        setselectores(
            <>

                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="autores">Autor(es)</label>
                        <textarea className="form-control" id="autores" {...register("autores",{required:true})} rows="3" placeholder="Autor(es)"></textarea>
                    </div>
                    {errors.autores && (
                            <p className="alert-danger rounded text-center mt-2"> Autor(es) es Requerido</p>
                        )}
                </div>
            
            </>
        )
        break;
    case "Premio BTJ":
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="autores">Autor(es)</label>
                        <textarea className="form-control" id="autores" {...register("autores",{required:true})} rows="3" placeholder="Autor(es)"></textarea>
                    </div>
                    {errors.autores && (
                            <p className="alert-danger rounded text-center mt-2"> Autor(es) es Requerido</p>
                        )}
                </div>
            
            </>
        )
        break;
    case "Otro Premio":
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="alcance">Alcance</label>
                        <select 
                            className="form-select " 
                            onChange={ e => {setValue('alcance',e.target.value);}}
                            {...register("alcance", { required: true })}
                            
                            >
                            <option value="" >Seleccione una Opción</option>
                            <option value="Provincial">Provincial</option>
                            <option value="Nacional">Nacional</option>
                            <option value="Internacional">Internacional</option>
                            
                        </select>
                        {errors.alcance && (
                            <p className="alert-danger rounded text-center mt-2"> Alcance es Requerido</p>
                        )}
                    </div>
                </div>
            </>
        )
        break;
    case "Red Académica":
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
            </>
        )
        break;
    case "Fórum":
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="alcance">Alcance</label>
                        <select 
                            className="form-select " 
                            onChange={ e => {setValue('alcance',e.target.value);}}
                            {...register("alcance", { required: true })}
                            
                            >
                            <option value="" >Seleccione una Opción</option>
                            <option value="Provincial">Provincial</option>
                            <option value="Nacional">Nacional</option>
                            <option value="Internacional">Internacional</option>
                            
                        </select>
                        {errors.alcance && (
                            <p className="alert-danger rounded text-center mt-2"> Alcance es Requerido</p>
                        )}
                    </div>
                </div>
            </>
        )
        break;
    case "Participación en Evento":
        
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
                        )}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="alcance">Alcance</label>
                        <select 
                            className="form-select " 
                            onChange={ e => {setValue('alcance',e.target.value);}}
                            {...register("alcance", { required: true })}
                            
                            >
                            <option value="" >Seleccione una Opción</option>
                            <option value="Provincial">Provincial</option>
                            <option value="Nacional">Nacional</option>
                            <option value="Internacional">Internacional</option>
                            
                        </select>
                        {errors.alcance && (
                            <p className="alert-danger rounded text-center mt-2"> Alcance es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="alcance">Presencial</label>
                        <select 
                            className="form-select " 
                            onChange={ e => {setValue('issbnn',e.target.value);}}
                            {...register("issbnn", { required: true })}
                            
                            >
                            <option value="" >Seleccione una Opción</option>
                            <option value="true">Sí</option>
                            <option value="false">No</option>
                            
                        </select>
                        {errors.issbnn && (
                            <p className="alert-danger rounded text-center mt-2"> Presencial es Requerido</p>
                        )}
                    </div>
                    
                </div>
                
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="autores">Ponente</label>
                        <textarea className="form-control" id="autores" {...register("autores",{required:true})} rows="3" placeholder="Autor(es)"></textarea>
                    </div>
                    {errors.autores && (
                            <p className="alert-danger rounded text-center mt-2"> Autor(es) es Requerido</p>
                        )}
                </div>
            
            </>
        )
    break;
    case "Otro":
        setselectores(
            <>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion",{required:true})} rows="3" placeholder="Descripción"></textarea>
                    </div>
                    {errors.descripcion && (
                            <p className="alert-danger rounded text-center mt-2"> Descripción es Requerido</p>
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

const handleSelect=(e)=>{
    settipoSelect(e.target.value)
}


  return (
    <>
      <InfoNavBar 
        title={"Añadir Investigación Científica"} 
        link={"/teacher/inv_cient"}/>
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" {...register("titulo", { required: true })} id="titulo" placeholder="Título de la Investigación Científica" />
                        {errors.titulo && (
                            <p className="alert-danger rounded text-center mt-2"> El Título de la Investigación Científica es Requerido</p>
                        )}
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" className="form-control" onSelect={e=>{setValue('fecha',e.target.value);}} {...register("tipo", { required: true })} {...register("fecha", { required: true })} id="fecha" />
                        {errors.fecha && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="tipo">Tipo de Investigación Científica</label>
                        <select 
                            className="form-select" 
                            onChange={ handleSelect}
                            id="tipo"
                            value={tipoSelect}
                            //{...register("tipo", { required: true })}
                            >
                            <option value="" >Seleccione una Opción</option>
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
                        
                        {tipoSelect=="" && (
                            <p className="alert-danger rounded text-center mt-2"> Tipo de Investigación Científica es Requerido</p>
                        )}
                    </div>
                    
                </div>
                {selectores}
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
      {/* <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
        <div className=" ml-3 mr-3">
            <div className="row pt-5">
                <div className="input-group mb-3 col p-1">
                    <span className="input-group-text" id="basic-addon1">Título</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("titulo", { required: true })}
                        />
                </div>
                <div className="input-group mb-3 p-1 col ">
                    <span className="input-group-text" id="basic-addon1">Tipo de Investigación Científica</span>
                    <select 
                        className="form-select" 
                        onChange={ e => {settipoSelect(e.target.value); setValue('tipo',e.target.value)}}
                        value={tipoSelect}
                        >
                        <option value="" >Seleccione una Opción</option>
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
                    
                </div>

            </div>
            <div className="row ml-2 mr-2" >
                {errors.titulo && (
                        <p className="alert alert-danger text-center mr-2 col"> Titulo is required</p>
                    )}
                {tipoSelect==="" && (
                    <p className="alert alert-danger text-center col"> Tipo is required</p>
                )}
            </div>
            
                <div className="input-group mb-3 col">
                    <div className="row">
                        <span className="input-group-text col" id="basic-addon1">Fecha</span>
                        <input 
                            type="date" 
                            onSelect={e=>{setValue('fecha',e.target.value);
                                
                                
                            }}className="form-control  col "

                            {...register("fecha", { required: true })}
                        />
                    </div>
                    
                </div>
                    {selectores}
                
                
                
                
                    <div className="row">
                    {errors.fecha && (
                        <p className="alert alert-danger text-center"> Fecha es Requerida</p>
                    )}
                    {errors.descripcion && (
                        <p className="alert alert-danger text-center">Descripción o Programa es Requerido</p>
                    )}
                    {errors.alcance && (
                            <p className="alert alert-danger text-center"> Alcance o Grupo es Requerido</p>
                        )}
                        {errors.issbnn && (
                        <p className="alert alert-danger text-center"> Prog. Asociado, Presencial, ISBN o ISSN es Requerido</p>
                    )}
                    {errors.autores && (
                        <p className="alert alert-danger text-center"> Autor(es) o Ponente is required</p>
                    )}
                    {errors.link && (
                        <p className="alert alert-danger text-center"> Link is required</p>
                    )}
                    </div>
        </div>
            <div className="sticky-bottom bg-white p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form> */}
    </>
  )
}

export default AddInvCient
