import axios from "./axios";


export const getInvCientesRequest=async()=>await axios.get(`/invcient`)

//export const getInvCientProfRequest=async(idProfesor)=>await axios.get(`invcient/prof/${idProfesor}`)

export const createInvCientRequest =async(InvCient)=>await axios.post(`/invcient`,InvCient);

export const getInvCientRequest=async(id)=>await axios.get(`/invcient/${id}`);

export const updateInvCientRequest=async(InvCient)=>await axios.put(`/invcient/${InvCient._id}`,InvCient);

export const deleteInvCientRequest=async(id)=>await axios.delete(`/invcient/${id}`);
