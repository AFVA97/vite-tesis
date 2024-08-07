import axios from "./axios";


export const gettipoInvCientesRequest=()=>axios.get(`/tipoinvcient`)

export const createtipoInvCientRequest =(tipoInvCient)=>axios.post(`/tipoinvcient`,tipoInvCient);

export const gettipoInvCientRequest=(_id)=>axios.get(`/tipoinvcient/${_id}`);

export const deletetipoInvCientRequest=(id)=>axios.delete(`/tipoinvcient/${id}`);
