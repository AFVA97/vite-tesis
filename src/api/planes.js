import axios from "./axios";


export const getPlanRequest=async()=>await axios.get(`/planes`)

export const createPlanRequest =async (Plan)=>await axios.post(`/planes`,Plan);

export const deletePlanRequest=async(id)=>await axios.delete(`/planes/${id}`);
