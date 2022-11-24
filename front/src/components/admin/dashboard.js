import React, { Fragment } from 'react'
import MetaData from '../Home/layout/metadata'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Fragment>
        <div className='row'>{/*dividimos por columnas el espacio a manejar*/}
            <div className='col-12 col-md-2'>{/*el sidebar tendra 2 columnas de las 12*/}
                <Sidebar></Sidebar>
            </div>
            <div className="col-12 col-md-10">
                    <h1 className="my-4" id="TitleDashBoard">Dashboard</h1>

                        <Fragment>
                            <MetaData title={'Administracion'} />

                            <div className="row pr-4">
                                <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card text-white bg-primary o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Monto Total<br /> <b>$0</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pr-4">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-success o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Productos<br /> <b>4</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/ModificarElementos">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-danger o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Pedidos<br /> <b>2</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/Pedidos">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-info o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Usuarios<br /> <b>2</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to='/admin/UsuariosRegistrados'>
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Agotados<br /> <b>0</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/agotados">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                </div>
            </div>
    </Fragment>
  )
}
