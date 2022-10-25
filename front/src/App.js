
import './styles/App.css';
import React from 'react';
import Cabecera from './components/Cabecera';
import PiePagina from './components/PiePagina';
import ListaProductos from './components/ListaProductos';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <ListaProductos />
      <PiePagina />
    </div>
    
  );
}

export default App;
