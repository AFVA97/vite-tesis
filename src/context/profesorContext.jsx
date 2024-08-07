import { createContext, useContext, useState } from "react";
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

  const deletesProfesor = async (id) => {
    try {
      const res = await deleteProfesorRequest(id);
      if (res.status === 204) setProfesors(Profesors.filter((Profesor) => Profesor._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const createsProfesor = async (Profesor) => {
    try {
      const res = await createProfesorRequest(Profesor);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getProfesor = async (id) => {
    try {
      const res = await getProfesorRequest(id); 
      
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
