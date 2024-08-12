import axios from "./axios";


export const getInvCientesRequest=()=>axios.get(`/invcient`)

export const getInvCientProfRequest=(idProfesor)=>axios.get(`invcient/prof/${idProfesor}`)

export const createInvCientRequest =(InvCient)=>axios.post(`/invcient`,InvCient);

export const getInvCientRequest=(id)=>axios.get(`/invcient/${id}`);

export const updateInvCientRequest=(InvCient)=>axios.put(`/invcient/${InvCient._id}`,InvCient);

export const deleteInvCientRequest=(id)=>axios.delete(`/invcient/${id}`);
