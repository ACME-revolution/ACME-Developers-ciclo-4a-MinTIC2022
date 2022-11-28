//Acá crearemos los estados para el front
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, 
    NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_RESET
    , CLEAR_ERRORS  } from "../components/constants/productConstants";

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

//reducer para crear un producto nuevo:
//lectura de la linea de abajo: el producer va a generar un estado que produce un producto que llegará en formato json. Y agregamos una accion:
export const newProductReducer = (state={ product:{} }, action )=>{
    
    switch(action.type){

        case NEW_PRODUCT_REQUEST:
            return{
                //Nota: los reducer necesitan que hayan almenos un estado, sino no funcionará porque el el reduce necesita reportarle al navegador lo que pasa en nuestro aplicativo
                ...state,//retornaremos un estado
                loading: true
            }

        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product //retornará tambien el producto por medio del payload
            }

        case NEW_PRODUCT_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case NEW_PRODUCT_RESET: //tener encuenta que este rest se va a usar directamente en el componente que crea un producto nuevo
            return{
                ...state,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }

}