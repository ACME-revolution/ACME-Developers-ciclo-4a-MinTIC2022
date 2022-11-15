//Acá crearemos los estados para el front
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, 
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_DETAILS_FAIL, CLEAR_ERRORS  } from "../components/constants/productConstants";

//la next funcion tendrá como respuesta los productos traidos desde el back y eso se guardará como un estado:
//el action es como un objeto plano de JS, es la accion que se va a ejecutar
//cuando la app crece mucho es mejor usar estas acciones en carpetas independiente
export const productsReducer= (state={ products:[]}, action)=>{

    //los tipos de accion por lo general son de tipo string
    //dependiendo del caso se ejecutara una accion:
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST://en caso de solo enviar la peticion:
            //me regresara los siguientes mensajes:
            return{
                loading:true, //indicará que la peticion esta cargando
                myProducts:[]  //este campo se va a llenar de productos
            }
        case ALL_PRODUCTS_SUCCESS://en caso de una respuesta de exito a la solicitud
            return{
                loading:false,//ya no está cargando la petición
                myProducts: action.payload.myProducts, //cargamos los productos desde el backend
                cantidad: action.payload.cantidad
            }
        case ALL_PRODUCTS_FAIL://en caso de una falla al traer los productos:
            return{
                loading:false,
                error: action.payload //se cargará el mensaje de error por default que corresponda
            }
        case CLEAR_ERRORS://borrara todos los errores que aparezcan
            return{
                ...state,//espera un estado
                error:null //borrara todos los errores
            }
    
        default:
            return state; //en caso de que ningun caso se cumpla nos devolvera el estado inicial de nuestra app osea el estado por defecto (INIT)
    }

}

//Reducer para tener todos los detalles:
/*la next funcion tendrá como respuesta un producto traido desde el back y eso se guardará como un estado para
luego usar ese producto y reflejarlo en un componenete aparte con los detalles del producto seleccionado:*/
export const productDetailsReducer= (state={ productDetails: {}}, action)=>{

    //los tipos de accion por lo general son de tipo string
    //dependiendo del caso se ejecutara una accion:
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST://en caso de solo enviar la peticion:
            //me regresara los siguientes mensajes:
            return{
                ...state, //indicará que la peticion esta cargando
                loading:true  //este campo se va a llenar de productos
            }
        case PRODUCT_DETAILS_SUCCESS://en caso de una respuesta de exito a la solicitud
            return{
                loading:false,//ya no está cargando la petición
                myProduct: action.payload, //cargamos los productos desde el backend
            }
        case PRODUCT_DETAILS_FAIL://en caso de una falla al traer los productos:
            return{
                ...state,
                error: action.payload //se cargará el mensaje de error por default que corresponda
            }
        case CLEAR_ERRORS://borrara todos los errores que aparezcan
            return{
                ...state,//espera un estado
                error:null //borrara todos los errores
            }
    
        default:
            return state; //en caso de que ningun caso se cumpla nos devolvera el estado inicial de nuestra app osea el estado por defecto (INIT)
    }

}