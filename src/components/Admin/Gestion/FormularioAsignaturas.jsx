import React, {useState, useEffect} from 'react'
import { useNombreAsignatura } from '../../../context/nombreAsigContext';

const FormularioAsignaturas = () => {
    
    
    const{NombreAsignaturas, getNombreAsignaturas, createsNombreAsignatura,deletesNombreAsignatura,}=useNombreAsignatura()
    const [asignatura, setAsignatura] = useState('');
    //const [asignaturas, setAsignaturas] = useState([]);

    useEffect(() => {
        const load=async()=>{
            await getNombreAsignaturas();            
          };load();
        }, [])

    const handleAddAsignatura = async () => {
        if (asignatura) {
            await createsNombreAsignatura( {nombre:asignatura});
            setAsignatura('');
        }
    };

    const handleRemoveAsignatura =async (_id) => {
        await deletesNombreAsignatura(_id)
    };

    return (
        <div className="col-md-6">
            <h4>Asignaturas</h4>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la Asignatura"
                    value={asignatura}
                    onChange={(e) => setAsignatura(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={handleAddAsignatura}>
                        Añadir
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {NombreAsignaturas.map((item, index) => (
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.nombre}
                        <button className="btn btn-secondary btn-sm" onClick={() => handleRemoveAsignatura(item._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormularioAsignaturas
