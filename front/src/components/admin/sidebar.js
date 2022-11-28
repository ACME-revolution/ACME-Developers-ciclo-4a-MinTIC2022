/*este será el sidebar de nuestro dashboard administrativo*/
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components sidebar">

                    <li>
                        <Link to="/"><i className="fa fa-home"></i> Home</Link>
                    </li>

                    <li>
                        <Link to="/admin/dashboard"><i className="fa fa-tachometer"></i> Estadísticas de ventas</Link>
                    </li>

                    <li>
                        <Link to="/admin/ModificarElementos"><i className="fa fa-clipboard"></i> Total inventario </Link>
                    </li>

                    <li>
                        <Link to="/admin/agregarProductos"><i className="fa fa-plus-square"></i> Agregar productos </Link>
                    </li>

                    <li>
                        <Link to="/admin/Pedidos"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/admin/CrearUsuarios"><i className="fa fa-users"></i> Crear usuarios</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-comments"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
