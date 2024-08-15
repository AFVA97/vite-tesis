import { createContext, useContext, useEffect, useState } from "react";
import {
  getAsignaturasRequest,
  deleteAsignaturaRequest,
  createAsignaturaRequest,
  getAsignaturaRequest,
  getAsignaturaProfRequest,
  getAsignaturaFacRequest,
  updateAsignaturaRequest
} from "../api/asignatura";

const AsignaturaContext = createContext();

export const useAsignatura = () => {
  const context = useContext(AsignaturaContext);
  if (!context) throw new Error("useAsignatura must be used within a AsignaturaProvider");
  return context;
};

export function AsignaturaProvider({ children }) {
  const [Asignaturas, setAsignaturas] = useState([]);
  const [AsigProf,setAsigProf]=useState([])
  const [errors, setErrors] = useState([]);

  const getAsignaturas = async () => {
    const res = await getAsignaturasRequest();
    setAsignaturas(res.data);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const createsAsignatura = async (Asignatura) => {
    try {
      const res = await createAsignaturaRequest(Asignatura);
      if(res.status===200)
        getAsignaturas();
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const deletesAsignatura = async (id) => {
    try {
      const res = await deleteAsignaturaRequest(id);
      if (res.status === 204) setAsignaturas(Asignaturas.filter((Asignatura) => Asignatura._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getAsignaturaProf = async (id) => {
    try {
      const res = await getAsignaturaProfRequest(id); 
      setAsigProf(res.data)
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  const getAsignaturaFac = async (id) => {
    try {
      const res = await getAsignaturaFacRequest(id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const getAsignatura = async (id) => {
    try {
      const res = await getAsignaturaRequest(id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const updatesAsignatura = async (Asignatura) => {
    try {
      await updateAsignaturaRequest( Asignatura);
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <AsignaturaContext.Provider
      value={{
        Asignaturas,
        errors,
        AsigProf,
        getAsignaturas,
        deletesAsignatura,
        createsAsignatura,
        getAsignatura,
        getAsignaturaFac,
        getAsignaturaProf,
        updatesAsignatura,
      }}
    >
      {children}
    </AsignaturaContext.Provider>
  );
}
