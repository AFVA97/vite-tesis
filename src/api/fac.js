import axios from "./axios";


export const getFacesRequest=async()=>await axios.get(`/facultad`);

export const getFacRequest=async(id)=>await axios.get(`/facultad/${id}`);

export const createFacRequest=async(Fac)=>await axios.post(`/facultad`,Fac);

export const updateFacRequest=async(Fac)=>await axios.put(`/facultad/${Fac._id}`,Fac);

export const deleteFacRequest=async(id)=>await axios.delete(`/facultad/${id}`);
