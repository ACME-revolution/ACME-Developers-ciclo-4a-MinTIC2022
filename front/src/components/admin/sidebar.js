/*este será el sidebar de nuestro dashboard administrativo*/
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components sidebar">
                    <li>
                        <Link to="/admin/dashboard"><i className="fa fa-tachometer"></i> Administración</Link>
                    </li>

                    <li>
                        <Link to="/admin/productListAdmin"><i className="fa fa-clipboard"></i> Lista de Productos </Link>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Opiniones</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
