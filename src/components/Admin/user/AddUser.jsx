import { useForm } from "react-hook-form"
import { useAuth } from "../../../context/authContext"
import InfoInicio from "../Info/infoNavBar"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useProfesor } from "../../../context/profesorContext"
import { useFacultad } from "../../../context/facultadContext"




const AddUser = () => {
    const params =useParams();
    const { user,
        users,
        getUser,
        getUsers,
        signup,
        signin,
        logout,
        deleteUser,
        isAuthenticated,
        errors:userErrors,
        loading,}=useAuth()
        const { Profesors, getProfesors } = useProfesor();
        const {Facultades, getFacultads }=useFacultad()

        const{register,handleSubmit, formState:{errors}, setValue}=useForm();
  
        const navigate=useNavigate()
        const [tipoSelect, settipoSelect] = useState("Default")
        

        useEffect(() => {
          async function loadUser() {
            if(params._id){
                const usuario=await getUser(params._id)                
                setValue('_id',usuario._id)
                setValue('username',usuario.username)
                setValue('ciuser',usuario.ciuser)
                setValue('facuser',usuario.facuser)
                setValue('active',usuario.active)
                setValue('password',"")
                setValue('confirmacion',"")
                
                if(usuario.ciuser)
                    settipoSelect("2")
                else if(usuario.facuser)
                    settipoSelect("3")
                else
                    settipoSelect("1")
                
            }
          }
          loadUser()
          
        }, [])
        const checkPassword=()=>{
            return (register.password===register.confirmacion)
        }
        
        const onSubmit=handleSubmit(data=>{        
            try {
                if(!params._id){ 
                    if(checkPassword()){
                        signup(data);
                        handleCancelar();
                    }
                }
                else{
                    if(checkPassword()){
                        deleteUser(params._id);
                        signup(data)
                        handleCancelar();
                    }
                }
            } catch (error) {
                    
        }})


        const handleCancelar=()=>{
            navigate("/admin/users")
        }


        const [active, setactive] = useState(true)
        setValue('active',active)
        const handleOnChange=()=>{
            setactive(!active) 
            
            setValue('active',active)
                           
        }
        const [facuser, setfacuser] = useState(null)
        const [ciuser,setciuser]=useState(null);
        const [selectores, setselectores] = useState("")
        let facultadfiltrad = []
        let profesorfiltrado = []
        
        const [dropVisible, setdropVisible] = useState(false)
        const handleDrop=()=>{
            if(register.search!=""){
                setdropVisible(true)
                return
            }
            setdropVisible(false)
        }

        const handleClick=(text,_id)=>{
            setValue('search',text)
            if(tipoSelect==="2"){
                setciuser(_id)
                setfacuser(null)
                return
            }
            else if(tipoSelect==="2"){
                setciuser(null)
                setfacuser(_id)
                return
            }
            
            setciuser(null)
            setfacuser(null)
            
           }

        useEffect(() => {
          async function informacion() {
            if(tipoSelect==="1"|| tipoSelect==="Default"){
                setfacuser(null)
                setciuser(null)
                setValue('ciuser',null)
                setValue('facuser',null)
                setselectores(
                    <div className="col">{""} </div>
                )
                return
            }
                
            else if(tipoSelect==="2"){
                getProfesors();
                getUsers();
                if(Array.isArray(Profesors)){
                    
                    for (let index = 0; index < Profesors.length; index++) {
                        let flag=false;
                        
                            for (let index2 = 0; index2 < users.length; index2++) {
                                if(users[index2].ciuser===Profesors[index]._id)
                                    flag=true;                                
                            }
                            if(!flag)
                                profesorfiltrado.push(Profesors[index])
                        
                    }
                }
                setselectores(
                    <>
                     <div className="btn-group pl-3">
                        <input 
                                type="button" 
                                className="btn btn-secundary" 
                                {...register("search", { required: true })}
                                placeholder="Buscar"
                                onChange={handleDrop()}></input>
                        <button type="button" className="btn btn-secundary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded={`${dropVisible}`}>
                            
                        
                        </button>
                        <ul className="dropdown-menu">
                        {profesorfiltrado.map((profesor,i)=>(
                            <li key={profesor._id} value={profesor._id}><a className="dropdown-item" onClick={()=>handleClick(profesor.nombre,profesor._id)}>{profesor.nombre}</a></li>
                            
                        ))}
                            
                            
                        </ul>
                    </div>
                        
                    </>
                )
                if(profesorfiltrado[0])
                    setValue('ciuser',profesorfiltrado[0]._id)
                            
                return
            }
            else{
                getFacultads();
                getUsers();
                if(Array.isArray(Facultades)){
                    
                    for (let index = 0; index < Facultades.length; index++) {
                        let flag=false;
                        
                            for (let index2 = 0; index2 < users.length; index2++) {
                                if(users[index2].facuser===Facultades[index]._id)
                                    flag=true;                                
                            }
                            if(!flag)
                                facultadfiltrad.push(Facultades[index])
                        
                    }
                }
                setselectores(
                    <>
                     <div className="btn-group pl-3">
                        <input 
                                type="text" 
                                className="btn btn-secundary" 
                                {...register("search", { required: true })}
                                placeholder="Buscar"></input>
                        <button type="button" className="btn btn-secundary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            
                        
                        </button>
                        <ul className="dropdown-menu">
                        {facultadfiltrad.map((facultad,i)=>(
                            <li key={facultad._id} value={facultad._id}><a className="dropdown-item" onClick={()=>handleClick(facultad.nombre,facultad._id)}>{facultad.nombre}</a></li>
                            
                        ))}
                            
                            
                        </ul>
                    </div>
                        
                    </>
                )
                if(facultadfiltrad[0])
                    setValue('facuser',facultadfiltrad[0]._id)
                return
            }
          }informacion()
        }, [tipoSelect])
        
       
  return (
    <>
      <InfoInicio title={"Añadir Usuario"}/>
      <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                
                
            
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Nombre de Usuario</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("username", { required: true })}
                    />
                    {errors.username && (
                        <p className="form-label"> El Nombre is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6">
                <span className="input-group-text" id="basic-addon1">Tipo de Usuario</span>
                <select 
                    className="form-select" 
                    onChange={ e => settipoSelect(e.target.value)}
                    value={tipoSelect}
                >
                    <option value="Default" >Seleccione una Opción</option>
                    <option value="1">Administrador</option>
                    <option value="2">Profesor</option>
                    <option value="3">Facultad</option>
                </select>
                    {errors.tipo && (
                        <p className="form-label"> Tipo is required</p>
                    )}
                </div>
                <div className="col-12">
                    <div className=" mb-3 mw-100">
                        {selectores}
                    </div>
                </div>

                <div className="row justify-content-around container ">
                    
                        <span className="input-group-text" id="basic-addon1">Activo</span>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="Sí" id="activesi" checked={active} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="activesi">
                                Sí
                            </label>
                        
                        </div>
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="No" id="activeno" checked={!active} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="activeno">
                                No
                            </label>
                        
                        </div>
                        
                        
                    
                        
                    
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Contraseña</span>
                    <input 
                        type="password" 
                        className="form-control" 
                        {...register("password", { required: true })}
                    />
                    {errors.username && (
                        <p className="form-label"> La Contraseña is required</p>
                    )}
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Confirme su Contraseña</span>
                    <input 
                        type="password" 
                        className="form-control" 
                        {...register("confirmacion", { required: true })}
                    />
                    {errors.tipo && (
                        <p className="form-label"> Confirmación is required</p>
                    )}
                </div>
                
            </div>
           
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddUser
