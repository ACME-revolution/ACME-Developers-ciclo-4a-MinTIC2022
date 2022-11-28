import {  
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Layout from './components/Home/layout/Layout';
//Componentes usuario
import './styles/App.css';
import ListaArticulos from './components/ListaArticulos';
import DetalleArticulo from './components/DetalleArticulo';

import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import { CartProvider } from './Context/CartContext';
import { Dashboard } from './components/admin/dashboard';
import ProductsListAdmin from './components/admin/productList';
import Login from './components/Usuario/Login';
import CrearUsuarios from './components/admin/CrearUsuarios';
import Users from '../src/components/admin/Users';
import Pedidos from './components/admin/pedidos';
import NewProduct from './components/admin/newProduct';

//Componentes administrador

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<Products />}/>
            <Route path='/admin/AgregarProductos' element={<NewProduct />}></Route>
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
            <Route path='/admin/ModificarElementos' element={<ProductsListAdmin />}></Route>
            <Route path='/admin/CrearUsuarios' element={<CrearUsuarios />}></Route>
            <Route path='/admin/UsuariosRegistrados' element={<Users />}></Route>
            <Route path='/admin/Pedidos' element={<Pedidos />}></Route>

            <Route path='/listaArticulos' element={<ListaArticulos/>}/>
            <Route path='/articulo/:id' element={<DetalleArticulo />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/admin/agregarProductos' element={<NewProduct />}></Route>
          </Route>
        </Routes>
      </Router>

    </div>
    </CartProvider>
    
  );
}

export default App;
