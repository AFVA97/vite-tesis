import React, {useState, useEffect} from 'react'
import { usePlan } from '../../../context/planesContext';

const FormularioCursos = () => {

    const [plan, setPlan] = useState('');
    const{Plans,
        errors,
        getPlans,
        createsPlan,
        deletesPlan,}=usePlan()

    const handleAddCurso = async() => {
        if (plan) {
            await createsPlan({nombre:plan})
            setPlan('');
        }
    };

    const handleRemoveCurso =async (_id) => {
        await deletesPlan(_id)
    };

    useEffect(() => {
        const load=async()=>{
            await getPlans();            
          };load();
        }, [])

    return (
        <div className="col-md-6">
            <h4>Plan de Curso</h4>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Plan"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={handleAddCurso}>
                        Añadir
                    </button>
                </div>
            </div>
            <ul className="list-group">
                {Plans.map((item, index) => (
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