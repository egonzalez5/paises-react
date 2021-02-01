import React from 'react'

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

 

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

        //enviar informacion a componente principal
        setConsultar(true);
    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="continente">Continente</label>
                <select 
                    className="form-control" 
                    name = "continente" 
                    id = "continente"
                    value = {continente}
                    onChange={handleChange}
                >
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="">
                <input
                    type="submit"
                    value="Buscar paises"
                    className="btn btn-primary"
                />
            </div>
        </form>

    );
}
 
export default Formulario;