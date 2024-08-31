import axios from "./axios";


export const getExcelAdmin=async()=>await axios.get(`/exceladmin`, {
    responseType: 'blob',
})

export const getExcelFaculty =async()=>await axios.post(`/excelfaculty`, {
    responseType: 'blob',
});

export const getExcelProfesor =async()=>await axios.get(`/excelprofesor`, {
    responseType: 'blob',
});