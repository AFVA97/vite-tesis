import axios from "./axios";


export const getExcelAdmin=async()=>await axios.get(`/exceladmin`, {
    responseType: 'blob',
})

export const getExcelFaculty =async(_id)=>await axios.get(`/excelfaculty/${_id}`, {
    responseType: 'blob',
});

export const getExcelProfesor =async(_id)=>await axios.get(`/excelprofesor/${_id}`, {
    responseType: 'blob',
});