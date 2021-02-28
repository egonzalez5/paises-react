import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import Navbar from './Navbar';
import ListadoPaises from './ListadoPaises';
import Formulario from './Formulario';

export const AppRouter = () => {

    return (

    <Router>
    <div className="container">
    <Navbar />

    
        <div className="row mt-5 justify-content-center">
        
        <div className="col-md-4 ">
        <Formulario
        />
        </div>
        
        
        <div className="col-md-12">

            <Switch>
                <Route exact path="/" component={ Formulario } />

                <Route exact path="/america" component={ ListadoPaises } />
            
                
                <Redirect to="/" />

            </Switch>
        </div>
    </div>

    </div>
    </Router>
    )
}