import axios from "./axios";


export const getTipoCursosRequest=async()=>await axios.get(`/tipocurso`)

export const createTipoCursoRequest =async (tipocurso)=>await axios.post(`/tipocurso`,tipocurso);

export const getTipoCursoRequest=async(id)=>await axios.get(`/tipocurso/${id}`);

export const updateTipoCursoRequest=async(tipocurso)=>await axios.put(`/tipocurso/${tipocurso._id}`,tipocurso);

export const deleteTipoCursoRequest=async(_id)=>await axios.delete(`/tipocurso/${_id}`);
