import { createContext, useContext, useEffect, useState } from "react";
import {
  getExtesRequest,
  deleteExtRequest,
  createExtRequest,
  getExtRequest,
  getExtProfRequest,
  updateExtRequest
} from "../api/extuniv";

const ExtUnivContext = createContext();

export const useExtUniv = () => {
  const context = useContext(ExtUnivContext);
  if (!context) throw new Error("useExtUniv must be used within a ExtUnivProvider");
  return context;
};

export function ExtUnivProvider({ children }) {
  const [ExtUnivs, setExtUnivs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [ExtProf, setExtProf] = useState([])
  const getExtUnivs = async () => {
    const res = await getExtesRequest();
    setExtUnivs(res.data);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const createsExtUniv = async (ExtUniv) => {
    try {
      const res = await createExtRequest(ExtUniv);
      if(res.status===200)
        getExtUnivs();
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const deletesExtUniv = async (id) => {
    try {
      const res = await deleteExtRequest(id);
      if (res.status === 204) setExtUnivs(ExtUnivs.filter((ExtUniv) => ExtUniv._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const getExtUnivProf = async (id) => {
    try {
      const res = await getExtProfRequest(id); 
      setExtProf(res.data)
      console.log(res.data);      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };
  

  const getExtUniv = async (id) => {
    try {
      const res = await getExtRequest(id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const updatesExtUniv = async (ExtUniv) => {
    try {
      await updateExtRequest( ExtUniv);
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  return (
    <ExtUnivContext.Provider
      value={{
        ExtUnivs,
        errors,
        ExtProf,
        getExtUnivs,
        deletesExtUniv,
        createsExtUniv,
        getExtUniv,
        getExtUnivProf,
        updatesExtUniv,
      }}
    >
      {children}
    </ExtUnivContext.Provider>
  );
}
