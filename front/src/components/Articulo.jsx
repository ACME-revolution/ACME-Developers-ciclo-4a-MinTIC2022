import React from 'react'

const Articulo = ({articulo}) => {

  const {_id, nombre, reviews, precio, imagen, stock} = articulo;



  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto' src={`${imagen}`} alt={`${nombre}`}></img>
            <div className='card-body d-flex flex-column'>
                <h5 id="titulo_producto"><a href='http://localhost:3000'>{nombre}</a></h5>
                <div className='rating mt-auto'>
                    <div className='rating-outer'>
                        <div className='rating-inner'></div>
                    </div>
                    <span id="No_de_opiniones"> {reviews} reviews</span>
                    <p className='stock'>{stock} ítems disponibles</p>
                </div>
                <p className='card-text'>${precio}</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                    Agregar
                </a>
            </div>
        </div>
    </div>
  )
}

export default Articulo