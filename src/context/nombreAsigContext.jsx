import { createContext, useContext, useEffect, useState } from "react";
import {
  createNombreAsignaturaRequest,
  deleteNombreAsignaturaRequest,
  getNombreAsignaturasRequest,
  updateNombreAsignaturaRequest
} from "../api/nombreAsignaturas";

const NombreAsignaturaContext = createContext();

export const useNombreAsignatura = () => {
  const context = useContext(NombreAsignaturaContext);
  if (!context) throw new Error("useNombreAsignatura must be used within a NombreAsignaturaProvider");
  return context;
};

export function NombreAsignaturaProvider({ children }) {
  const [NombreAsignaturas, setNombreAsignaturas] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getNombreAsignaturas = async () => {
    const res = await getNombreAsignaturasRequest();       
    setNombreAsignaturas(res.data);
  };

  const createsNombreAsignatura = async (NombreAsignatura) => {
    try {
      const res = await createNombreAsignaturaRequest(NombreAsignatura);
      if(res.status===200)setNombreAsignaturas([...NombreAsignaturas,NombreAsignatura])
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesNombreAsignatura = async (NombreAsignatura) => {
    try {
      const res= await updateNombreAsignaturaRequest( NombreAsignatura);
      setNombreAsignaturas(NombreAsignaturas.map(asig=>(asig._id===NombreAsignatura._id?res.data:asig)))
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesNombreAsignatura = async (id) => {
    try {
      const res = await deleteNombreAsignaturaRequest(id);
      if(res.status===204)setNombreAsignaturas(NombreAsignaturas.filter((asig) => asig._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getNombreAsignatura = async (id) => {
    try {      
      const res = await getNombreAsignatura(id);       
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  

  return (
    <NombreAsignaturaContext.Provider
      value={{
        NombreAsignaturas,
        errors,
        getNombreAsignaturas,
        createsNombreAsignatura,
        updatesNombreAsignatura,
        deletesNombreAsignatura,
        getNombreAsignatura,
      }}
    >
      {children}
    </NombreAsignaturaContext.Provider>
  );
}
