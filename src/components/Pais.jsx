import React from 'react'

const Pais = ({pais}) => {

    //extraer variables
    const {name, flag, population, capital} = pais;

    const formatearNumero = new Intl.NumberFormat('us');

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
            
                
            
                <img src={flag} alt={name} className="card-img-top"></img>
                <h5>{name}</h5>
                    <p className="mt-4"><b>Capital: </b>{capital}</p> 
                    <p><b>Población: </b>{formatearNumero.format(population)}</p>
    
            </div>
        </div>

     );
}
 
export default Pais;