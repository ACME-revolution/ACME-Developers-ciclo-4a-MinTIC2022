import React, { Fragment} from 'react'
import MetaData from '../Home/layout/metadata'
import Sidebar from './sidebar'
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ProductData } from "../../Data/ProductsData";
import { CartContext } from "../../Context/CartContext";


const ProductsListAdmin = () => {
    const { addItemToCart } = useContext(CartContext)
   

    return (
        <Fragment>
        <MetaData title={'All Products'} />
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>

            <div className="col-12 col-md-10">
            <Fragment>    
            <div className="container-products-home">
            {ProductData.map((product, i) => (
                <div key={i}>
                    <div className='productsContainer'>
                        <div className='card p-4 rounded'>
                            <img className='card-img-top mx-auto' src={product.img} alt={product.name}></img>
                            <div className='-body d-flex flex-column'>
                                <h5 id="titulo_producto">
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> {product.reviews} reviews</span>
                                    <p className='stock'>{product.amount} ítems disponibles</p>
                                </div>
                                <p className='card-text'>${product.price} COP</p>
                                <button onClick={() => addItemToCart(product)} id="view_btn" className='btn btn-block'>
                                    Agregar a carrtito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
               </div >
               </Fragment>
            </div>
        </div>

    </Fragment>
    )
}

export default ProductsListAdmin
