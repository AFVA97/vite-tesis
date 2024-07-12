import React from "react"
import { Routes, Route, Link } from "react-router-dom"

function login() {

    
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
          
          <Link
            to="/admin/inicio"
          >
            <button
            type="submit"
            className="btn btn-primary"
            
            >
              Sign in Admin
            </button>
          </Link>
          <Link
            to="/teacher/inicio"
          >
            <button
            type="submit"
            className="btn btn-primary"
            
            >
              Sign in Prof
            </button>
          </Link>
          <Link
            to="/faculty/inicio"
          >
            <button
            type="submit"
            className="btn btn-primary"
            
            >
              Sign in Fac
            </button>
          </Link>
          
        
        </div>
      </>
    )
  }
  
  export default login