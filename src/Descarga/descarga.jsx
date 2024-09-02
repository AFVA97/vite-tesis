import React, { useContext } from 'react';
import {FechaContext} from '../context/fechaContext'
import { getExcelAdmin,getExcelFaculty,getExcelProfesor } from '../api/excel';

const DescargarExcel = ({userType,_id}) => {
    const {globalData}=useContext(FechaContext)
    //console.log('✅ _id    ', _id)
    
    
    const handleDownload = async () => {
        try {
            const response = (userType==0? await getExcelAdmin():(userType==1? await getExcelFaculty(_id): await getExcelProfesor()))

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Balance de Carga-${globalData==0?"Toda la Informacion":`${globalData}-${parseInt(globalData)+1}`}.xlsx`);
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