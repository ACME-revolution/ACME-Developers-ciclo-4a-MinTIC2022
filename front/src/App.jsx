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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path='/' element={<Layout/>}>
            <Route path='ListaProductos' element={<ListaProductos/>}/>
            {/* <Route path='ListaVentas' element={<ListaVentas/>}/> */}
            <Route path='ListaArticulos' element={<ListaArticulos/>}/>
          </Route>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
