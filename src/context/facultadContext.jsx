import { createContext, useContext, useEffect, useState } from "react";
import {
  createFacRequest,
  deleteFacRequest,
  getFacRequest,
  getFacesRequest,
  updateFacRequest
} from "../api/fac";
import { set } from "react-hook-form";

const FacultadContext = createContext();

export const useFacultad = () => {
  const context = useContext(FacultadContext);
  if (!context) throw new Error("useFacultad must be used within a FacultadProvider");
  return context;
};

export function FacultadProvider({ children }) {
  const [Facultades, setFacultades] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);


  // useEffect(() => {
  //   const fetchData= async()=>{
  //     try {
  //       await getFacultades();
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData(); 
  // }, [])

  const getFacultades = async () => {
    const res = await getFacesRequest();       
    setFacultades(res.data);
  };

  

  const createsFacultad = async (Facultad) => {
    try {
      const res = await createFacRequest(Facultad);
      if(res.status===200)setFacultades([...Facultades,Facultad])
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesFacultad = async (Facultad) => {
    try {
      const res= await updateFacRequest( Facultad);
      setFacultades(Facultades.map(facultad=>(facultad._id===Facultad._id?res.data:facultad)))
   
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesFacultad = async (id) => {
    try {
      const res = await deleteFacRequest(id);
      if(res.status===204)setFacultades(Facultades.filter((Facultad) => Facultad._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  

  const getFacultad = async (_id) => {
    try {      
      const res = await getFacRequest(_id);       
      return res.data;
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
        getFacultades,
        createsFacultad,
        updatesFacultad,
        deletesFacultad,
        getFacultad,
        
      }}
    >
      {children}
    </FacultadContext.Provider>
  );
}
