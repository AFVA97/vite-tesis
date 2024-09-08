import { createContext, useContext, useEffect, useState } from "react";
import {
  createPlanRequest,
  deletePlanRequest,
  getPlanRequest
} from "../api/planes";

const PlanContext = createContext();

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used within a PlanProvider");
  return context;
};

export function PlanProvider({ children }) {
  const [Plans, setPlans] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getPlans = async () => {
    const res = await getPlanRequest();       
    setPlans(res.data);
  };

  const createsPlan = async (Plan) => {
    try {
      const res = await createPlanRequest(Plan);
      if(res.status===200)setPlans([...Plans,Plan])
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  

  const deletesPlan = async (_id) => {
    try {
      const res = await deletePlanRequest(_id);
      if(res.status===204)setPlans(Plans.filter((asig) => asig._id !== _id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

 

  return (
    <PlanContext.Provider
      value={{
        Plans,
        errors,
        getPlans,
        createsPlan,
        deletesPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
