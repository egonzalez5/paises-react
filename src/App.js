import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Pais from './components/Pais';
import ListadoPaises from './components/ListadoPaises';
import Formulario from './components/Formulario';


function App() {

  const [consultaPais, setConsultaPais] = useState([]);
  const [busqueda, setBusqueda] = useState({
    continente:'',
  });
  const [consultar, setConsultar] = useState(false);
  const [input, setInput] = useState("");


  const {continente} = busqueda;

  useEffect(() => {

    const consultarAPI = async () => {

      if(consultar){
      //const url = 'https://restcountries.eu/rest/v2/all';
      const url =  `https://restcountries.eu/rest/v2/region/${continente}`;
      const resultado = await axios.get(url);
      
      //setConsultaPais(consultaPais.data);
      setConsultaPais(resultado.data);
      setConsultar(false);
      console.log(resultado.data);

    }
  }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar])

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
  };

function search(){}

  return (
    
    <div className="container">
      <h1>Buscador de paises</h1>
        <div className="row mt-5">

          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar"
              onChange={handleChange}
              value={input}/>
            
          </div>

          <div className="col-md-6">
          <Formulario
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsultar={setConsultar}
          />
          </div>

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
