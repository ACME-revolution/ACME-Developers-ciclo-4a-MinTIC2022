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
          </Route>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
