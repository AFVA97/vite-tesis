import React from 'react';
import { getExcelAdmin,getExcelFaculty,getExcelProfesor } from '../api/excel';

const DescargarExcel = ({userType}) => {
    const handleDownload = async () => {
        try {
            const response = (userType==0? await getExcelAdmin():(userType==1? await getExcelFaculty(): await getExcelProfesor()))

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'datos.xlsx');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    return (
        <button onClick={handleDownload} className='btn btn-success'>
            Descargar Excel
        </button>
    );
};

export default DescargarExcel;