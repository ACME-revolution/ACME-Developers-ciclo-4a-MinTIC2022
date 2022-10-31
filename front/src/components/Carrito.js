import React , {Fragment}  from 'react'

function deleteProduct() {
    alert("producto sacado de la lista")
}

export const Carrito = () => {
    return (
    <Fragment>
      <div className='container-cart'>
        <div className='container-table'>
            <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>1</td>
                    <td>60000</td>
                    <td className='color-icon'>
                      <div> 
                        <svg onClick={deleteProduct} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>1</td>
                    <td>40000</td>
                    <td className='color-icon'>
                      <div>
                        <svg onClick={deleteProduct} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                      </div>
                    </td>
                </tr>
                <tr>
                    <td>Arsenal acme</td>
                    <td>2</td>
                    <td>2000</td>
                    <td className='color-icon'>
                      <div>
                        <svg onClick={deleteProduct} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='container-pago'>
            <h2>Total a pagar: $100.000</h2>
            <button onClick={deleteProduct} type="button" class="btn btn-warning">Proceder a pagar</button>
        </div>
      </div>
    </Fragment>
    )
}

export default Carrito;