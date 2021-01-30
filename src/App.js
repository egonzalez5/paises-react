import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Pais from './components/Pais';
import ListadoPaises from './components/ListadoPaises';


function App() {

  const [consultaPais, setConsultaPais] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {

      const url = 'https://restcountries.eu/rest/v2/all';
      //  https://restcountries.eu/rest/v2/region/{region}
      const resultado = await axios.get(url);
      

      setConsultaPais(resultado.data);
      console.log(resultado.data);
    }
    consultarAPI();


 

  return (
    <div className="container">
      <h1>Página principal</h1>

        <div className="row mt-5">
          <h1>Filtros</h1>
          
        </div>
        <div className="col-md-12">
        <div className="col-md-12">
          <ListadoPaises
            consultaPais={consultaPais}
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
