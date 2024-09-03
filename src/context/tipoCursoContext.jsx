import { createContext, useContext, useEffect, useState } from "react";
import {
  createTipoCursoRequest,
  deleteTipoCursoRequest,
  getTipoCursoRequest,
  getTipoCursosRequest,
  updateTipoCursoRequest
} from "../api/tipoCurso";

const TipoCursoContext = createContext();

export const useTipoCurso = () => {
  const context = useContext(TipoCursoContext);
  if (!context) throw new Error("useTipoCurso must be used within a TipoCursoProvider");
  return context;
};

export function TipoCursoProvider({ children }) {
  const [TipoCursos, setTipoCursos] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getTipoCursos = async () => {
    const res = await getTipoCursosRequest();       
    setTipoCursos(res.data);
  };

  const createsTipoCurso = async (TipoCurso) => {
    try {
      const res = await createTipoCursoRequest(TipoCurso);
      if(res.status===200)setTipoCursos([...TipoCursos,TipoCurso])
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesTipoCurso = async (TipoCurso) => {
    try {
      const res= await updateTipoCursoRequest( TipoCurso);
      setTipoCursos(TipoCursos.map(asig=>(asig._id===TipoCurso._id?res.data:asig)))
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesTipoCurso = async (_id) => {
    try {
      const res = await deleteTipoCursoRequest(_id);
      if(res.status===204)setTipoCursos(TipoCursos.filter((asig) => asig._id !== _id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getTipoCurso = async (id) => {
    try {      
      const res = await getTipoCursoRequest(id);       
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <TipoCursoContext.Provider
      value={{
        TipoCursos,
        errors,
        getTipoCursos,
        createsTipoCurso,
        updatesTipoCurso,
        deletesTipoCurso,
        getTipoCurso,
      }}
    >
      {children}
    </TipoCursoContext.Provider>
  );
}
