import React, {useState, useEffect} from 'react'
import { useTipoCurso } from '../../../context/tipoCursoContext';

const FormularioCursos = () => {
    const [curso, setCurso] = useState('');
    const{TipoCursos, getTipoCursos, createsTipoCurso,deletesTipoCurso,}=useTipoCurso()


    useEffect(() => {
        const load=async()=>{
            await getTipoCursos();            
          };load();
        }, [])
    const handleAddCurso = async() => {
        if (curso) {
            await createsTipoCurso({nombre:curso})
            setCurso('');
        }
    };

    const handleRemoveCurso =async (_id) => {
        await deletesTipoCurso(_id)
    };

    return (
        <div className="col-md-6">
            <h4>Tipos de Cursos</h4>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tipo de Curso"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={handleAddCurso}>
                        Añadir
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {TipoCursos.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.nombre}
                        <button className="btn btn-secondary btn-sm" onClick={() => handleRemoveCurso(item._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default FormularioCursos