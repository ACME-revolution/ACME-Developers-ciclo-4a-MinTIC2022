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
import AddProductos from './components/admin/AddProductos';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import { CartProvider } from './Context/CartContext';
import { Dashboard } from './components/admin/dashboard';
import ProductsListAdmin from './components/admin/productList';
import Login from './components/Usuario/Login';
import CrearUsuarios from './components/admin/CrearUsuarios';

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
            <Route path='/admin/AgregarProductos' element={<AddProductos />}/>
            <Route path='/admin/dashboard' element={<Dashboard />}></Route>
            <Route path='/admin/ModificarElementos' element={<ProductsListAdmin />}></Route>
            <Route path='/admin/CrearUsuarios' element={<CrearUsuarios />}></Route>

            <Route path='ListaArticulos' element={<ListaArticulos/>}/>
            <Route path='Articulo/:id' element={<DetalleArticulo />}/>
            <Route path='Cart' element={<Cart />}/>
            <Route path='Products' element={<Products />}/>
            <Route path='Login' element={<Login />}/>
          </Route>
        </Routes>
      </Router>

    </div>
    </CartProvider>
    
  );
}

export default App;
