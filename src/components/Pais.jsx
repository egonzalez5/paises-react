import React from 'react'

const Pais = ({pais}) => {

    //extraer variables
    const {name, flag} = pais;

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
            <p>{name}</p>
                <img src={flag} alt={name} className="card-img-top"></img>
            </div>
        </div>

     );
}
 
export default Pais;