import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'
import MetaData from '../Home/layout/metadata'



const CrearUsuarios = () => {

    return (
        <Fragment>
            <MetaData title={'Crear usuarios'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h3 className='sub-headding'>Crear usuarios</h3>
                        <section className='agregar' id='agregar'>
                            <form action="">
                                <div className='inputBox'>
                                    <span className='etiqueta'>Nombres:</span>
                                    <input className='cajon' type='text' placeholder='Escriba su nombre'></input>
                                    <span className='etiqueta'>Apellidos:</span>
                                    <input className='cajon' type='text' placeholder='Escriba sus apellidos'></input>
                                    <span className='etiqueta'>Correo electónico:</span>
                                    <input className='cajon' type='text' placeholder='Escriba su correo electónico'></input>
                                    <span className='etiqueta'>Contraseña:</span>
                                    <input className='cajon' type='password' placeholder='Escriba una contraseña'></input>
                                    <span className='etiqueta'>Celular:</span>
                                    <input className='cajon' type='text' placeholder='Escriba su número de celular'></input>
                                    <span className='etiqueta'>Dirección:</span>
                                    <input className='cajon' type='text' placeholder='Escriba su dirección de residencia'></input>
                                    <span className='etiqueta'>Rol:</span>
                                    <select className='cajon'>
                                        <option>Administrador</option>
                                        <option>Usuario general</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                        
                        <section className='btn-add-product'>
                            <Link to={"/admin/dashboard"} className='btn' id="view_btn">Guardar</Link>
                            <Link to={"/admin/dashboard"} className='btn' id="view_btn">Cancelar</Link>
                        </section>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default CrearUsuarios