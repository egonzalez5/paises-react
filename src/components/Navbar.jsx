import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
             <Link className="navbar-brand" to="/"> APP PAISES</Link>
            <div className="d-frex">
                <NavLink className="btn btn-dark mt-2" to="/" exact>Inicio</NavLink>
                <NavLink className="btn btn-dark mt-2" to="/america">America</NavLink>
            </div> 
        </div>
    )        
}

export default Navbar
