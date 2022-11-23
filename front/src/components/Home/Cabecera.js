import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const Cabecera = () => {

    const [numeroItemsCarrito, setNumeroItemsCarrito] = useState(0);
    return (
        <Fragment>
            <header>
                <nav className="nav">
                    <img className="nav_title" src="..\images\logoAcme.jpg" width="100" height="90" alt="Logo ACME Corporation"></img>

                    <ul className="nav_list">

                        <li className="nav_item1">
                            <input
                                type="text"
                                id="search_field"
                                className="input-group"
                                placeholder="¿Qué producto está buscando?">
                            </input>
                            <button id="search-btn" className="btn">
                                <i className="fa fa-search fa-1x text-white" aria-hidden="true"></i>
                            </button>
                        </li>

                        {/* <li className="nav_item">
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
                        </li> */}

                        <li className="nav_item">
                            <Link Link to="/Login" className='btn' id="login_btn">Iniciar sesión</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>

    )
}

export default Cabecera