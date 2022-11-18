import React, { Fragment } from 'react'
import MetaData from '../Home/layout/metadata'
import Sidebar from './sidebar'
import { ProductData } from "../../Data/ProductsData";



const ProductsListAdmin = () => {

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
                                                <h5 id="titulo_producto"> {product.name} </h5>
                                                <div className='rating mt-auto'>
                                                    <div className='rating-outer'>
                                                        <div className='rating-inner'></div>
                                                    </div>
                                                    <span id="No_de_opiniones"> {product.reviews} reviews</span>
                                                </div>
                                                <p className='stock'>{product.amount} ítems disponibles</p>
                                                <p className='card-text'>${product.price} COP</p>
                                                <button id="view_btn" className='btn btn-block'>
                                                    Modificar producto
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
