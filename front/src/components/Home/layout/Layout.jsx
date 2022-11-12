import {Outlet} from "react-router-dom"
//Componentes
import Header from '../Cabecera';
import Nav from '../Nav';
import Footer from '../PiePagina';

const Layout = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}
export default Layout