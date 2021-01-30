import React from 'react';
import Pais from './Pais';

const ListadoPaises = ({consultaPais}) => {
    return ( 
        <div className="col-12 p-5 row">
            {consultaPais.map(pais => (
                <Pais
                    key={pais.numericCode}
                    pais={pais}
                />
            ))}
        </div>
     );
}
 
export default ListadoPaises;