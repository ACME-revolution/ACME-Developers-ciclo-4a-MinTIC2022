import React, { Fragment } from 'react'
import { UserData } from "../../Data/UserData";
import MetaData from '../Home/layout/metadata'
import Sidebar from './sidebar'

const Users = () => {
    return (
        <Fragment>
            <MetaData title={'Usuarios registrados'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="container-products-home">
                    {UserData.map((user, i) => (
                        <div key={i}>
                            <div className='userContainer'>
                                <div className='card p-4 rounded'>

                                    <div className='-body d-flex flex-column'>
                                        <h5 className='stock'> Código: {user.id} </h5>
                                        <h5> Nombre: {user.nombre} {user.apellido}</h5>
                                        <h5> Email: {user.email} </h5>
                                        <h5>Teléfono: {user.telefono} </h5>
                                        <h5 className='stock'> {user.rol} </h5>
                                        <button onClick="" id="view_btn" className='btn btn-block'>
                                            Modificar
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

export default Users