import React, { useState } from "react"
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom"

function login() {
    
    const [activeadmin, setactiveadmin] = useState(false)
    const [activefaculty, setactivefaculty] = useState(false)
    const [activeteacher, setactiveteacher] = useState(false)
    return (
      <>
      <div className="container m-20 ">
        
          {/* <div className="row mb-3">
            <label  className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3"/>
            </div>
          </div>
          <div className="row mb-3">
            <label  className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3"/>
            </div>
          </div> */}
          
          {/* <Link
            to="/admin/inicio"
          > */}
          {activeadmin && (<Navigate to="/admin/inicio" replace={true} />)}
            <button
            type="submit"
            className="btn btn-primary"
            onClick={()=>setactiveadmin(true)}
            >
              Sign in Admin
            </button>
          {/* </Link> */}
          {/* <Link
            to="/teacher/inicio"
          > */}
            {activeteacher && (<Navigate to="/teacher/inicio" replace={true} />)}
            <button
            type="submit"
            className="btn btn-primary"
            onClick={()=>setactiveteacher(true)}
            >
              Sign in Prof
            </button>
          {/* </Link>
          <Link
            to="/faculty/inicio"
          > */}
            {activefaculty && (<Navigate to="/faculty/inicio" replace={true} />)}
            <button
            type="submit"
            className="btn btn-primary"
            onClick={()=>setactivefaculty(true)}
            >
              Sign in Fac
            </button>
          {/* </Link> */}
          
        
        </div>
      </>
    )
  }
  
  export default login