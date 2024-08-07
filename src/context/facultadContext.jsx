import { createContext, useContext, useEffect, useState } from "react";
import {
  createFacRequest,
  deleteFacRequest,
  getFacRequest,
  getFacesRequest,
  updateFacRequest
} from "../api/fac";

const FacultadContext = createContext();

export const useFacultad = () => {
  const context = useContext(FacultadContext);
  if (!context) throw new Error("useFacultad must be used within a FacultadProvider");
  return context;
};

export function FacultadProvider({ children }) {
  const [Facultades, setFacultads] = useState([]);
  const [errors, setErrors] = useState([]);

  const getFacultads = async () => {
    const res = await getFacesRequest();
       
    setFacultads(res.data);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const createsFacultad = async (Facultad) => {
    try {
      const res = await createFacRequest(Facultad);
      if(res.status===200)
        getFacultads();
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const deletesFacultad = async (id) => {
    try {
      const res = await deleteFacRequest(id);
      if (res.status === 204) setFacultads(Facultades.filter((Facultad) => Facultad._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  

  const getFacultad = async (id) => {
    try {      
      const res = await getFacRequest(id);       
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const updatesFacultad = async (Facultad) => {
    try {
      await updateFacRequest( Facultad);
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <FacultadContext.Provider
      value={{
        Facultades,
        errors,
        getFacultads,
        deletesFacultad,
        createsFacultad,
        getFacultad,
        updatesFacultad,
      }}
    >
      {children}
    </FacultadContext.Provider>
  );
}
