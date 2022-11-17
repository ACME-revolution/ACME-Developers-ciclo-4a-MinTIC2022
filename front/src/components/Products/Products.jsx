import React from "react";
import { useContext } from "react";
import { ProductData } from "../../Data/ProductsData";
import { CartContext } from "../../Context/CartContext";

const Products = () => {
    const { addItemToCart } = useContext(CartContext)

    return (
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
    )
}

export default Products