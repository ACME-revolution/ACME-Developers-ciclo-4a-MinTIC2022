import React, { Fragment } from 'react'

const Cabecera = () => {
  return (
    <Fragment>
        <nav className= 'barra navegacion'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src=".\images\logoAcme.jpg" alt= "Logo ACME Corporation"></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className='cajon-busqueda'>
                    <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='¿Qué producto está buscando?'></input>

                </div>
            </div>


        </nav>                
    </Fragment>
  )
}

export default Cabecera