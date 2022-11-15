import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';//con esto podemos hacer todo lo que tenga que ver con proovedores, adquirir, ser, interactuar con proovedores ect..
import store from './store';//importamos la tienda 
//1. positions y transitions: serviran como criterios esteticos
//2. provider: nos ayudará a que la alerta funcione
import {positions, transitions, Provider as AlertProvider} from 'react-alert';//sirve para que nuestra app genere alarmas en caso de errores
import AlertTemplate from 'react-alert-template-basic';

//options: estás son las caracteristicas que tendrá las alertas que lanzaremos en nuestra aplicación
const options={
  timeout: 3000, //la alerta va a durar 3 segundos
  position: positions.BOTTOM_CENTER, //indicamos que la alerta se muestre en el centro abajo
  transitions: transitions.SCALE //la alerta tendrá una transición
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //acá se enlaza React con el archivo App.js para que se ejecute en el index.html
  //creamos un provedor que será de tipo tienda (esto será como un proveedor de servicios)
  <Provider store={store}>
    {/*indicaremos a nuetra app que cuenta con el recurso de generar alertas por ello la envolvemos con
    AlertProvider:*/}
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>
);


