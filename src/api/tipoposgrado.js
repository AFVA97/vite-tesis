import axios from "./axios";


export const gettipoPosgradoesRequest=()=>axios.get(`/tipoposgrado`)

export const createtipoPosgradoRequest =(tipoPosgrado)=>axios.post(`/tipoposgrado`,tipoPosgrado);

export const gettipoPosgradoRequest=(_id)=>axios.get(`/tipoposgrado/${_id}`);

export const deletetipoPosgradoRequest=(id)=>axios.delete(`/tipoposgrado/${id}`);
