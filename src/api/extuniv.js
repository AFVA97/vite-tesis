import axios from "./axios";


export const getExtesRequest=()=>axios.get(`/extuniv`)

export const getExtProfRequest=(idProfesor)=>axios.get(`extuniv/${idProfesor}`)

export const createExtRequest =(Ext)=>axios.post(`/extuniv`,Ext);

export const getExtRequest=(id)=>axios.get(`/extuniv/${id}`);

export const updateExtRequest=(ext)=>axios.put(`/extuniv/${ext._id}`,ext);

export const deleteExtRequest=(id)=>axios.delete(`/extuniv/${id}`);
