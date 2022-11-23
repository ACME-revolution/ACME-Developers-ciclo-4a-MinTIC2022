import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'
import MetaData from '../Home/layout/metadata'



const AddProductos = () => {
    const handleClickSave = () => {
        alert('Producto guardado');
    }

    return (
        <Fragment>
            <MetaData title={'Agregar nuevos productos'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h3 className='sub-headding'>Agregar nuevos productos</h3>
                        <section className='agregar' id='agregar'>
                            <form action="">
                                <div className='inputBox'>
                                    <span className='etiqueta'>Fecha de ingreso:</span>
                                    <input className='cajon' type='date'></input>
                                    <span className='etiqueta'>Agregar imagen:</span>
                                    <input  accept="image/*" type="file" multiple></input>
                                    <span className='etiqueta'>Nombre del producto:</span>
                                    <input className='cajon' type='text' placeholder='Escriba el nombre del producto'></input>
                                    <span className='etiqueta'>Descripción:</span>
                                    <input className='cajon1' type='text' placeholder='Escriba una breve descripción del producto'></input>
                                    <span className='etiqueta'>Precio:</span>
                                    <input className='cajon' type='number' placeholder='Escriba el precio unitario del producto'></input>
                                    <span className='etiqueta'>Stock:</span>
                                    <input className='cajon' type='number' placeholder='Total de ítems a almacenar'></input>
                                    <span className='etiqueta'>Categoria:</span>
                                    <select className='cajon'>
                                        <option>Explosivos</option>
                                        <option>Trampas</option>
                                        <option>Armas</option>
                                        <option>Venenos</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                        
                        <section className='btn-add-product'>
                            <Link to={'/admin/ModificarElementos'} onClick={handleClickSave} className='btn' id="view_btn">Guardar</Link>
                            <Link to={"/admin/dashboard"} className='btn' id="view_btn">Cancelar</Link>
                        </section>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default AddProductos