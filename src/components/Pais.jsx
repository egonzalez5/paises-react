import React from 'react'

const Pais = ({pais}) => {

    //extraer variables
    const {name, flag, population, capital} = pais;

    const formatearNumero = new Intl.NumberFormat('us');

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
            <h5 className="card-title">{name}</h5>
                <img src={flag} alt={name} className="card-img-top"></img>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Capital: {capital}</li>
                    <li className="list-group-item" type="number">Población: {formatearNumero.format(population)}</li>
                    
                </ul>
            </div>
        </div>

     );
}
 
export default Pais;