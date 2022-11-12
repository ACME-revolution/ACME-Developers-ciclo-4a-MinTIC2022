import React from 'react';
import { Link } from 'react-router-dom'

const Articulo = ({ articulo }) => {

    const { _id, nombre, reviews, precio, imagen, stock } = articulo;

    const handleClick = () => {
        alert("Producto agregado al carrito")
    }


    return (
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className='card p-3 rounded'>
                <img className='card-img-top mx-auto' src={`${imagen}`} alt={`${nombre}`}></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id="titulo_producto">
                        <Link
                            id={`${_id}`}
                            to={`/Articulo/${_id}`}
                        >
                            {nombre}
                        </Link>
                    </h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id="No_de_opiniones"> {reviews} reviews</span>
                        <p className='stock'>{stock} ítems disponibles</p>
                    </div>
                    <p className='card-text'>${precio}</p>
                    <button onClick={handleClick} id="view_btn" className='btn btn-block'>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Articulo