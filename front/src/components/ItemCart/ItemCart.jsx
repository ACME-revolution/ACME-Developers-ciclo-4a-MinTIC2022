import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


export const ItemCart = ({ item }) => {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);

  return (
    <div className='cartItem'>
      <img className='imgCart' src={item.img} width="50" height="50" alt={item.name}></img>
      <div className='dataContainerItem'>
        <div className='left'>
          <p className='left-p'>{item.name}</p>
          <div className='buttonsCart'>
            <button className='buttonsCart1' onClick={() => addItemToCart(item)}>Agregar</button>
            <button className='buttonsCart1' onClick={() => deleteItemToCart(item)}>Eliminar</button>
          </div>
        </div>
        <div className='unidades'>
          <div className='unidades1'>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
