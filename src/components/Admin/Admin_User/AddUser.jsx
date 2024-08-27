import { useForm } from "react-hook-form"
import { useAuth } from "../../../context/authContext"
import InfoInicio from "../Info/infoNavBar"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useProfesor } from "../../../context/profesorContext"
import { useFacultad } from "../../../context/facultadContext"
import SearchBar from "./SearchBar"

const AddUser = () => {
    const params =useParams();
    const { users, getUser, getUsers, signup, deleteUser,}=useAuth()
    const { Profesores, getProfesores } = useProfesor();
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()    
    const {Facultades, getFacultades }=useFacultad()

    const [modificando, setmodificando] = useState(false)
    const [usuario, setUsuario] = useState(null)  
    const [active, setactive] = useState(true)
    const [tipoSelect, settipoSelect] = useState("")
    const [selectores, setselectores] = useState("")
    const [error, seterror] = useState([])
    let facultadfiltrad = []
    let profesorfiltrado = []
    
    
    const checkPassword=()=>{
        return (register.password===register.confirmacion)
    }
    
    const onSubmit=handleSubmit(async data=>{        
        try {
            if(!params._id){ 
                if(tipoSelect===""){
                    seterror(['Seleccione un Tipo de Usuario'])
                    return;
                }
                else if(tipoSelect!=="" && !data.ciuser && !data.facuser){
                    if(tipoSelect==="2")
                        seterror(['Seleccione un Profesor para este Usuario'])
                    else 
                        seterror(['Seleccione una Facultad para este Usuario'])
                    return;
                }
                else{
                    if(checkPassword()){
                        const userTemp=users.filter((temp)=>temp.username===data.username)
                        if(userTemp.length==0){
                            signup(data);
                            navigate("/admin/users")}
                        else{
                            seterror(['Nombre de Usuario en uso, rectifique su Información'])
                        }
                    }
                    else{seterror(['La Contrase;a y la Confirmación no Coinciden'])}
                }
            }
            else{
                if(checkPassword()){
                    await deleteUser(params._id);
                    await signup(data)
                    navigate("/admin/users")
                }
            }
        } catch (error) {
                
    }})
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/admin/users")
    }

    function handleOnChange(){
        setactive(!active) 
    }

    const handleSelect = (profesor) => {
        if(!modificando){
            if(tipoSelect==="2"){
                setValue('ciuser',profesor._id)
                setValue('facuser',null)
                return
            }
            else if(tipoSelect==="3"){
                setValue('ciuser',null)
                setValue('facuser',profesor._id)  
                            
                return
            }
            setValue('ciuser',null)
            setValue('facuser',null)
        }
    };
    
    useEffect(() => {
        if (error.length > 0) {
            const timer = setTimeout(() => {
            seterror([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        setValue('active',active)
    }, [active])

    useEffect(() => {
    async function loadUser() {
        await getProfesores();
        await getUsers();
        await getFacultades();
        if(params._id)
            setUsuario(await getUser(params._id))  
    };
    loadUser()
    setValue('active',active)
    }, [])
    
    useEffect(() => {
        if(usuario){
            setValue('_id',usuario._id)
            setValue('username',usuario.username)
            setValue('ciuser',usuario.ciuser)
            setValue('facuser',usuario.facuser)
            setValue('active',usuario.active)
            setactive(usuario.active)
            setValue('password',"")
            setValue('confirmacion',"")
            setmodificando(true)
            if(usuario.ciuser)
                settipoSelect("2")
            else if(usuario.facuser)
                settipoSelect("3")
            else
                settipoSelect("1")
        }
    }, [usuario])

    useEffect(() => {
        async function informacion() {
        if(tipoSelect==="1"|| tipoSelect===""){
            setValue('ciuser',null)
            setValue('facuser',null)
            setselectores(
                <div className="col">{""} </div>
            )
            return
        }
        else if(tipoSelect==="2"){
            
            if(Array.isArray(Profesores)){
                
                for (let index = 0; index < Profesores.length; index++) {
                    let flag=false;
                    for (let index2 = 0; index2 < users.length; index2++) {
                        if(users[index2].ciuser===Profesores[index]._id)
                            flag=true;                                
                    }
                    if(!flag)
                        profesorfiltrado.push(Profesores[index])
                }
            }
            setselectores(
                <>
                    {!modificando&& (
                        <SearchBar Profesores={profesorfiltrado} onSelect={handleSelect} />
                    )}
                </>
            )
            if(profesorfiltrado[0])
                setValue('ciuser',profesorfiltrado[0]._id)
            return
        }
        else{
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
                    {!modificando && (
                        <SearchBar Profesores={facultadfiltrad} onSelect={handleSelect} />
                    )}
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
                <div className="row">
                    <div className="input-group mb-3 p-1 col">
                        <span className="input-group-text" id="basic-addon1">Nombre de Usuario</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            {...register("username", { required: true })}
                            disabled={(params._id)?"disabled":""}
                        />                        
                    </div>
                    <div className="input-group mb-3 p-1 col">
                    <span className="input-group-text" id="basic-addon1">Tipo de Usuario</span>
                    <select 
                        className="form-select" 
                        onChange={ e => settipoSelect(e.target.value)}
                        value={tipoSelect}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="1">Administrador</option>
                        <option value="2">Profesor</option>
                        <option value="3">Facultad</option>
                    </select>
                        
                    </div>
                </div>
                <div className="row">
                    {errors.username && (
                                <p className="alert alert-danger text-center col-6"> El Nombre de Usuario es Requerido</p>
                            )}
                    {errors.tipo && (
                            <p className="alert alert-danger text-center col-6"> Tipo de Usuario es Requerido</p>
                        )}
                </div>
                <div className="row">
                    <div className=" mb-3 mw-100">
                        {selectores}
                    </div>
                </div>
                <div className="row justify-content-around  m-2 container  ">
                        <span className="input-group-text col " id="basic-addon1">Activo</span>
                        <div className="form-check col m-2 justify-content-around">
                            <input className="form-check-input " type="checkbox" value="Sí" id="activesi" checked={active} onChange={()=>handleOnChange()}/>
                            <label className="form-check-label" htmlFor="activesi">
                                Sí
                            </label>
                        </div>
                        <div className="form-check col m-2 justify-content-around">
                            <input className="form-check-input " type="checkbox" value="No" id="activeno" checked={!active} onChange={()=>handleOnChange()}/>
                            <label className="form-check-label" htmlFor="activeno">
                                No
                            </label>
                        </div>
                </div>
                <div className="row">
                    <div className="input-group mb-3 p-1 col">
                        <span className="input-group-text" id="basic-addon1">Contraseña</span>
                        <input 
                            type="password" 
                            className="form-control" 
                            {...register("password", { required: true })}
                        />
                        
                    </div>
                    <div className="input-group mb-3 p-1 col">
                        <span className="input-group-text" id="basic-addon1">Confirme su Contraseña</span>
                        <input 
                            type="password" 
                            className="form-control" 
                            {...register("confirmacion", { required: true })}
                        />
                        
                    </div>
                </div>
                <div className="row">
                    {errors.password ? (
                                <p className="alert alert-danger mr-2 text-center col"> La Contraseña es Requerida</p>
                            ):<div className="col-6"></div>}
                    {errors.confirmacion && (
                            <p className="alert alert-danger text-center col"> La Confirmación de Contraseña es Requerida</p>
                        )}
                </div>
            </div>
            {error.length>0 ? (
                <>
                {error.map((errores,i)=>(
                        <p key={i} className="alert alert-danger text-center"> {errores} </p>
                    ))}
              
                </>
            ):<div></div>}  
            <div className="fixed-bottom p-2 bg-white row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddUser
