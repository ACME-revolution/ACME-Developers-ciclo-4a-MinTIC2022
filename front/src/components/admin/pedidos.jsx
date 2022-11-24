import React, { Fragment } from 'react'
import { PedidosData } from "../../Data/PedidosData";
import MetaData from '../Home/layout/metadata'
import Sidebar from './sidebar'

const Pedidos = () => {
    return (
        <Fragment>
            <MetaData title={'Pedidos registrados'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="container-products-home">
                    {PedidosData.map((pedidos, i) => (
                        <div key={i}>
                            <div className='userContainer'>
                                <div className='card p-4 rounded'>

                                    <div className='-body d-flex flex-column'>
                                        <h5 className='stock'> Factura: {pedidos.id} </h5>
                                        <h5> Producto: {pedidos.nombreproducto}</h5>
                                        <h5> Total unidades: {pedidos.totalUnits} </h5>
                                        <h5> Precio total: {pedidos.costo} </h5>
                                        <h5 className='stock'> {pedidos.estado} </h5>
                                        <button onClick="" id="view_btn" className='btn btn-block'>
                                            Aceptar solicitud
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div >
            </div>
        </Fragment>
    )
}

export default Pedidos