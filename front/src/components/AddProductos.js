import React, { Fragment } from 'react'

const AddProductos = () => {
    return (
        <Fragment>
            <h3 className='sub-headding'><center>Agregar nuevos productos</center></h3>
            <section className='agregar' id='agregar'>
                <form action="">
                    <div className='inputBox'>
                        <span className='etiqueta'>Agregar imagen:</span>
                        <input accept="image/*" type="file" multiple></input>
                        <span className='etiqueta'>Nombre del producto:</span>
                        <input className='cajon' type='text' placeholder='Escriba el nombre del producto'></input>
                        <span className='etiqueta'>Descripción:</span>
                        <input className='cajon1' type='text' placeholder='Escriba una breve descripción del producto'></input>
                        <span className='etiqueta'>Costo:</span>
                        <input className='cajon'  type='number' placeholder='Escriba el precio unitario del producto'></input>
                        <span className='etiqueta'>Stock:</span>
                        <input className='cajon' type='number' placeholder='Total de ítems a almacenar'></input>
                    </div>
                </form>
            </section>

            <section className='btn-add-product'>
                <button href='http://localhost:3000/AddProductos' className='btn' id="view_btn">Guardar</button>
                <button href='http://localhost:3000/ListaProductos' className='btn' id="view_btn">Cancelar</button>
            </section>
        </Fragment>
  
    )
  }
  
export default AddProductos