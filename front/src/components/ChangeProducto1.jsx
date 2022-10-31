import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const ChangeProducto1 = () => {
    const handleClickSave = () => {
        alert('Producto actualizado');
    }

    return (
        <Fragment>
            <h3 className='sub-headding'><center>Agregar nuevos productos</center></h3>
            <section className='agregar' id='agregar'>
                <form action="">
                    <div className='inputBox'>
                        <span className='etiqueta'>Agregar imagen:</span>
                        <input accept="image/*" type="file" multiple></input>
                        <span className='etiqueta'>Nombre del producto:</span>
                        <input className='cajon' type='text' placeholder="Yunque de hierro"></input>
                        <span className='etiqueta'>Descripción:</span>
                        <input className='cajon1' type='text' placeholder="Yunque de hierro"></input>
                        <span className='etiqueta'>Costo:</span>
                        <input className='cajon'  type='number' placeholder='72000'></input>
                        <span className='etiqueta'>Stock:</span>
                        <input className='cajon' type='number' placeholder='10'></input>
                    </div>
                </form>
            </section>

            <section className='btn-add-product'>
                <Link to={"/ListaProductos"} onClick={handleClickSave} className='btn' id="view_btn">Actualizar</Link>
                <Link to={"/ListaProductos"} className='btn' id="view_btn">Cancelar</Link>
            </section>
        </Fragment>
  
    )
  }

export default ChangeProducto1