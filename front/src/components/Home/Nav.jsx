import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section>
        <ul className = "navegation">
            <li><Link to="Products">Home</Link></li>  
        </ul>
    </section>
  )
}

export default Nav