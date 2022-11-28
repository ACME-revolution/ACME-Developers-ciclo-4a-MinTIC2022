//reductor: cuando ejecutamos una acción la accion llega a un resultado pero no nos dice como paso, un redux 
//es el que se encarga de rastrear el como de esa acción en un reductor osea que coge un estado pasado, lo 
//opera contra un estado actual y me da un resultado. Acá vamos a crear nuestra tienda y agregarle los reducer
//que hayamos creado.
//1.createStore= nos permite indicarle a nuestros navegadores que nuestra pagina es una aplicación
//2. combineReducers: nos permite rastrear la accion de un stado
//3. applyMiddleware: nos va ayudar a consumir recursos
//4. thunk: su funcion es ir y tocar algo y espera una respuesta como por ejemplo información de un producto, ect.
import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsReducer, newProductReducer} from './reducer/productReducer';

//Reducers
const reducer= combineReducers({
    //1. nuestro primer reductor funcionando
    products:productsReducer,//los productos van a ser iguales a los que se consiga en productsReducer
    //2. segundo reductor funcionando
    newProduct: newProductReducer //el producto a crear va a ser igual a lo que se consiga en productReducer.js
})
let initialState = {} //indicamos un estado inicial

const middleware= [thunk]
//0. en store creamos la tienda:
//1.composeWithDevTools: se usa para poder ver respuestas en pantalla (lo usaremos como un recurso)
//2. adentro usaremos el applyMiddleware y usaremos el middleware de forma pausada (por eso inidicamos ...)
const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store; //la tienda lo usaremos en el index.js