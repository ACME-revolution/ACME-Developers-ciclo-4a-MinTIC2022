import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section>
        <ul className = "navegation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="ListaProductos">Lista de productos</Link></li>
            <li><Link to="ListaVentas">Lista de ventas</Link></li>
            <li><Link to="ListaArticulos">Lista de Articulos</Link></li>                     
        </ul>
    </section>
  )
}

export default Nav