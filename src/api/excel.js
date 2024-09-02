import axios from "./axios";


export const getExcelAdmin=async()=>await axios.get(`/exceladmin`, {
    responseType: 'blob',
})

export const getExcelFaculty =async(_id)=>await axios.get(`/excelfaculty/${_id}`, {
    responseType: 'blob',
});

export const getExcelProfesor =async()=>await axios.get(`/excelprofesor`, {
    responseType: 'blob',
});