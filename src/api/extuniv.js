import axios from "./axios";


export const getExtesRequest=async()=>await axios.get(`/extuniv`)

export const createExtRequest =async(Ext)=>await axios.post(`/extuniv`,Ext);

export const getExtRequest=async(id)=>await axios.get(`/extuniv/${id}`);

export const updateExtRequest=async(ext)=>await axios.put(`/extuniv/${ext._id}`,ext);

export const deleteExtRequest=async(id)=>await axios.delete(`/extuniv/${id}`);
