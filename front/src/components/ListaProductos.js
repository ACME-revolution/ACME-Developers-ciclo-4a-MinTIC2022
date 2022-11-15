import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function deleteProduct() {
    alert("producto eliminado")
}

const ListaProductos = () => {
  return (
    <Fragment>
        <section className='btn-admin'>
        <Link className='btn' id="view_btn" to={`/Producto/AddProductos`}>Agregar productos</Link>
        <Link to={"/carrito"} className='btn' id="view_btn">Lista de ventas</Link>
        </section>
        <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src="..\images\producto1_junke.jpg" alt="Producto1"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Yunque de hierro</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 reviews</span>
                                    <p className='stock'>10 ítems disponibles</p>
                                </div>
                                <p className='card-text'>$72.000</p>
                                <Link to={"/Change/1"} id="view_btn" className='btn btn-block'>
                                    Modificar</Link>
                                <Link to={"/ListaProductos"} onClick={deleteProduct} id="view_btn" className='btn btn-block'>
                                    Eliminar</Link>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='..\images\producto2_tornado.jpg' alt="Producto2"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Tornado KIT</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                    <p className='stock'>10 ítems disponibles</p>
                                </div>
                                <p className='card-text'>$72.000</p>
                                <Link to={"/Change/2"} id="view_btn" className='btn btn-block'>
                                    Modificar</Link>
                                <Link to={"/ListaProductos"} onClick={deleteProduct} id="view_btn" className='btn btn-block'>
                                    Eliminar</Link>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='../images/producto3_iman.jpg' alt="Producto3"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Imán</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 reviews</span>
                                    <p className='stock'>10 ítems disponibles</p>
                                </div>
                                <p className='card-text'>$72.000</p>
                                <Link to={"/Change/3"} id="view_btn" className='btn btn-block'>
                                    Modificar</Link>
                                <Link to={"/ListaProductos"} onClick={deleteProduct} id="view_btn" className='btn btn-block'>
                                    Eliminar</Link>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='../images/producto4_pills.jpg' alt="Producto4"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Somníferos en pastillas</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 7 reviews</span>
                                    <p className='stock'>10 ítems disponibles</p>  
                                </div>
                                <p className='card-text'>$72.000</p>
                                <Link to={"/Change/4"} id="view_btn" className='btn btn-block'>
                                    Modificar</Link>
                                <Link to={"/ListaProductos"} onClick={deleteProduct} id="view_btn" className='btn btn-block'>
                                    Eliminar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </Fragment>

  )
}

export default ListaProductos