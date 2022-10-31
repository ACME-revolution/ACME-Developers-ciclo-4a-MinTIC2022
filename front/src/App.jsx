import {  
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
// Layout
import Layout from './layout/Layout';
//Componentes
import './styles/App.css';
import ListaProductos from './components/ListaProductos';
import ListaArticulos from './components/ListaArticulos';
import DetalleArticulo from './components/DetalleArticulo';
import AddProductos from './components/AddProductos';
import Carrito from './components/Carrito';
// estos 4 componentes estas quemados pero solo es a modo de plantilla
import ChangeProducto1 from './components/ChangeProducto1';
import ChangeProducto2 from './components/ChangeProducto2';
import ChangeProducto3 from './components/ChangeProducto3';
import ChangeProducto4 from './components/ChangeProducto4';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<ListaArticulos />}/>
            <Route path='ListaProductos' element={<ListaProductos/>}/>
            <Route path='ListaArticulos' element={<ListaArticulos/>}/>
            <Route path='Articulo/:id' element={<DetalleArticulo />}/>
            <Route path='AddProductos' element={<AddProductos />}/>
            <Route path='carrito' element={<Carrito />}/>
            {/* estas 4 rutas estan quemadas pero solo es a modo de plantilla */}
            <Route path='Change/1' element={<ChangeProducto1 />}/>
            <Route path='Change/2' element={<ChangeProducto2 />}/>
            <Route path='Change/3' element={<ChangeProducto3 />}/>
            <Route path='Change/4' element={<ChangeProducto4 />}/>
          </Route>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
