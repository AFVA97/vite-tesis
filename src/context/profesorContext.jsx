import { createContext, useContext, useEffect, useState } from "react";
import {
  createProfesorRequest,
  deleteProfesorRequest,
  getProfesoresRequest,
  getProfesorRequest,
  updateProfesorRequest
} from "../api/profesor";

const ProfesorContext = createContext();

export const useProfesor = () => {
  const context = useContext(ProfesorContext);
  if (!context) throw new Error("useProfesor must be used within a ProfesorProvider");
  return context;
};

export function ProfesorProvider({ children }) {
  const [Profesors, setProfesors] = useState([]);
  const [errors, setErrors] = useState([]);

  const getProfesors = async () => {
    const res = await getProfesoresRequest();
    setProfesors(res.data);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const createsProfesor = async (Profesor) => {
    try {
      const res = await createProfesorRequest(Profesor);
      if(res.status===200){
        getProfesors();
        
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const deletesProfesor = async (id) => {
    try {
      const res = await deleteProfesorRequest(id);
      if (res.status === 204) setProfesors(Profesors.filter((Profesor) => Profesor._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  

  const getProfesor = async (_id) => {
    try {
      const res = await getProfesorRequest(_id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const updatesProfesor = async (Profesor) => {
    try {
      await updateProfesorRequest( Profesor);
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <ProfesorContext.Provider
      value={{
        Profesors,
        errors,
        getProfesors,
        deletesProfesor,
        createsProfesor,
        getProfesor,
        updatesProfesor,
      }}
    >
      {children}
    </ProfesorContext.Provider>
  );
}
