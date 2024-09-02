import React, { useContext, useEffect, useState } from "react"
import {useForm} from 'react-hook-form'
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"

function login() {
    
  const{register,handleSubmit, formState:{errors}}=useForm();
  const {signin, errors:signinErrors,isAuthenticated,user}=useAuth();
  
  const onSubmit=handleSubmit(data=>{
    signin(data);
    
  })
 //const {globalData, setGlobalData}=useContext(FechaContext)
  const navigate=useNavigate();
  
  

useEffect(()=>{
  if(isAuthenticated){
    if(user.ciuser) 
      navigate('/teacher/inicio')
    else if(user.facuser)
      navigate('/faculty/inicio')
    else
    navigate('/admin/inicio') 
  }
},[isAuthenticated])
    
    return (
      <>
      <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="card" style={{width: "125rem"}}>
            <div className="card-header">
                Bienvenido al Balance de Carga Docente
            </div>
            {signinErrors.length>0 &&
                  <p className="alert-danger rounded text-center mt-2"> {signinErrors[0]}</p>
                }
            
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  label="Escribe tu Usuario"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Nombre de Usuario"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="form-label"> username is required</p>
                )}

                <input
                  type="password"
                  name="password"
                  className="form-control mb-3"
                  placeholder="Write your password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <p className="form-label"> password is required</p>
                )}

                <button type="submit" className="btn btn-primary mb-3">Login</button>
              </form>
            </div>
        </div>
    </div>
      <div className="container card mt-3 d-flex p-6  justify-content-center">
        
          <div className="mb-3 card-body">
                
        
          </div>
            
      </div> 
          

        
        
      </>
    )
  }
import { FechaContext } from "../context/fechaContext";
  
  export default login