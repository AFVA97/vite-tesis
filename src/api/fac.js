import axios from "./axios";


export const getFacesRequest=()=>axios.get(`/facultad`);

export const getFacRequest=(id)=>axios.get(`/facultad/${id}`);

export const createFacRequest=(Fac)=>axios.post(`/facultad`,Fac);

export const updateFacRequest=(Fac)=>axios.put(`/facultad/${Fac._id}`,Fac);

export const deleteFacRequest=(id)=>axios.delete(`/facultad/${id}`);
