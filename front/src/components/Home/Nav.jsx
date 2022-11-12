import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section>
        <ul className = "navegation">
            <li><Link to="ListaArticulos">Home usuario</Link></li>  
            <li><Link to="ListaProductos">Home administrador</Link></li>
        </ul>
    </section>
  )
}

export default Nav