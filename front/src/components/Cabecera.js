import React, { Fragment, useState } from 'react'

const Cabecera = () => {
  const [numeroItemsCarrito, setNumeroItemsCarrito] = useState(0);
  return (
    <Fragment>
        <header>
            <nav className="navbar row">
                    <div className="col-10 col-md-1">
                        <div className="navbar-brand">
                        <img src=".\images\logoAcme.jpg" width="200" height="200" alt= "Logo ACME Corporation"></img>
                    </div>
                </div>

                <div className="col-13 col-md-6 mt-1 mt-md-0">
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

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Iniciar sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i className="fa fa-shopping-cart fa-1x text-white" aria-hidden="false"></i>
                    &nbsp;
                    <span className='ml-1' id="cart_count">{numeroItemsCarrito}</span>
                </div>
            </nav>
        </header>
    </Fragment>

  )
}

export default Cabecera