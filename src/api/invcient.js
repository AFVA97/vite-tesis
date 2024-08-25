import axios from "./axios";


export const getInvCientesRequest=async()=>await axios.get(`/invcient`)

export const createInvCientRequest =async(InvCient)=>await axios.post(`/invcient`,InvCient);

export const getInvCientRequest=async(_id)=>await axios.get(`/invcient/${_id}`);

export const updateInvCientRequest=async(InvCient)=>await axios.put(`/invcient/${InvCient._id}`,InvCient);

export const deleteInvCientRequest=async(id)=>await axios.delete(`/invcient/${id}`);
