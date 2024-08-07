import axios from "./axios";


export const gettipoExtUnivesRequest=()=>axios.get(`/tipoextuniv`)

export const createtipoExtUnivRequest =(tipoExtUniv)=>axios.post(`/tipoextuniv`,tipoExtUniv);

export const gettipoExtUnivRequest=(_id)=>axios.get(`/tipoextuniv/${_id}`);

export const deletetipoExtUnivRequest=(id)=>axios.delete(`/tipoextuniv/${id}`);
