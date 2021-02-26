import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Pais from './components/Pais';
import ListadoPaises from './components/ListadoPaises';
import Formulario from './components/Formulario';
import Header from './components/Header';
import America from './components/America';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [consultaPais, setConsultaPais] = useState([]);
  const [busqueda, setBusqueda] = useState({
    continente:'',
  });
  const [consultar, setConsultar] = useState(false);
  const [search, setSearch] = useState('');


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
    setSearch(e.target.value);
  };

  const filteredCountries = consultaPais.filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
      

    <Router>
      <div className="container">
        <Navbar />
        

        
          <div className="row mt-5 justify-content-center">
            
            <div className="col-md-4 ">
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
    </Router>
  );
}
export default App;
