import {Outlet} from "react-router-dom"
//Componentes
import Header from '../components/Cabecera';
import Nav from '../components/Nav';
import Footer from '../components/PiePagina';

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