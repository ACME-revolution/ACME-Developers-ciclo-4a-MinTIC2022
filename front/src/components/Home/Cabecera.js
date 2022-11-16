import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

const Cabecera = () => {
  const [numeroItemsCarrito, setNumeroItemsCarrito] = useState(0);
  return (
    <Fragment>
        <header>
            <nav className="navbar row">
                    <div className="col-1 col-md-2">
                        <div className="navbar-brand">
                        <img src="..\images\logoAcme.jpg" width="120" height="130" alt= "Logo ACME Corporation"></img>
                    </div>
                </div>

                <div className="col-10 col-md-6 mt-1 mt-md-1">
                    <div className= "input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder="¿Qué producto está buscando?"></input>
                        <div className="input-group-append">
                            <button id="search-btn" className="btn">
                                <i className="fa fa-search fa-1x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center container-panel-login">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/admin/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <span><button className='btn' id="login_btn">Iniciar sesión</button></span>
                    </div>
                </div>
                
            </nav>
        </header>
    </Fragment>

  )
}

export default Cabecera