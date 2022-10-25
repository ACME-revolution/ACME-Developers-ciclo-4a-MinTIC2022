import React, { Fragment } from 'react'

const Cabecera = () => {
  return (
    <Fragment>
        <header>
            <nav className="navbar row">
                    <div className="col-10 col-md-1">
                        <div className="navbar-brand">
                        <img src=".\images\logoAcme.jpg" width="200" height="200" alt= "Logo ACME Corporation"></img>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-1 mt-md-0">
                    <div class= "input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder="¿Qué producto está buscando?"></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search fa-1x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Iniciar sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <i class="fa fa-shopping-cart fa-1x text-white" aria-hidden="false"></i>
                    &nbsp;
                    <span className='ml-1' id="cart_count">2</span>
                </div>
            </nav>
        </header>
    </Fragment>

  )
}

export default Cabecera