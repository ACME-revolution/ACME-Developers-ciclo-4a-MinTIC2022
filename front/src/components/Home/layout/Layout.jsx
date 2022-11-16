import { Outlet } from "react-router-dom"
//Componentes
import Header from '../Cabecera';
import Nav from '../Nav';
import Footer from '../PiePagina';
import Cart from '../../Cart/Cart'

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />   
      <Outlet />
      <Cart />  
      <Footer />
    </>
  )
}
export default Layout