import axios from "./axios";


export const getCursosRequest=async()=>await axios.get(`/curso`)

export const createCursoRequest =async (Curso)=>await axios.post(`/curso`,Curso);

export const deleteCursoRequest=async(id)=>await axios.delete(`/curso/${id}`);
