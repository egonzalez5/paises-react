import React, {useState} from 'react'
import Error from './Error';
const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

 
    const [error, setError] = useState(false);
    // extraer valores
    const {continente} = busqueda;

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(continente.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
    

        //enviar informacion a componente principal
        setConsultar(true);
    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            
            <div className="form-group">
            
                <select 
                    className="form-control" 
                    name = "continente" 
                    id = "continente"
                    value = {continente}
                    onChange={handleChange}
                >
                    <option value="">Seleccione un continente</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                { error ? <Error mensaje="Debe seleccionar un continente" /> : null }
                <input
                    type="submit"
                    value="Buscar"
                    className="btn btn-primary btn-lg mt-3"
                />
            </div>

            
        </form>

    );
}
 
export default Formulario;