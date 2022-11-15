//la carpeta actions va a tener todas las actions para usarlas en el protocolo http y traer la info del back
//lo que hagamos aquí tenemos que unirlo con nuestro back y eso lo hacemos desde el package.json del front
//donde tenemos que agregarle al final la url del server donde corre el back como valor a una clave proxy
import axios from "axios";//axios me va a permitir consumir el api que tenemos en el back
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST,
PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, CLEAR_ERRORS } from "../constants/productConstants";

//Vamos a comunicarnos con nuestro backend para traer toda la información:

//con esta funcion vamos a traer todos los productos desde el back hacia nuestro frontend:
//0. dispatch significa despachar o enviar
export const getProducts =()=> async(dispatch)=>{

    try{
        dispatch({type: ALL_PRODUCTS_REQUEST})//este envio compete a la solicitud de todos los products

        //axios se va a comunicar por medio de un get a la ruta de nuestro api que toma todos los productos
        //de la base de datos mongo y nos la va a traer acá en el front almacenandolo en esta constante data:
        const {data}= await axios.get("/api/products")

        //esta será la respuesta en caso de traer los productos con exito
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,//acá va el posible estado
            payload: data //acá almacenamos la data que trajimos
        })
    }catch(error){//en caso de que el request falle:
        dispatch({
            type:ALL_PRODUCTS_FAIL,//acá almacenamos el posible estado
            payload: error.response.data.message //acá mostramos el mensaje por defecto de error que se trae desde el backend
        })
    }
}

//TRAEMOS UN PRODUCTO DESDE EL BACK HACIA EL FORM PARA REFLEJARLO EN LOS DETALLES DE UN PRODUCT:
//el producto que se va a traer será según el Id
export const getProductDetails =(id)=> async(dispatch)=>{

    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})//este envio compete a la solicitud del products por id

        //axios se va a comunicar por medio de un get a la ruta de nuestro api que toma el producto por id
        //de la base de datos mongo y nos la va a traer acá en el front almacenandolo en esta constante data:
        const {data}= await axios.get(`/api/products/${id}`)//axios a diferencia de router no necesitas que agregues :${id}

        //esta será la respuesta en caso de traer los productos con exito
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,//acá va el posible estado
            payload: data.myProduct //acá almacenamos la data que tragimos
        })
    }catch(error){//en caso de que el request falle:
        dispatch({
            type:PRODUCT_DETAILS_FAIL,//acá almacenamos el posible estado
            payload: error.response.data.message //acá mostramos el mensaje por defecto de error que se trae desde el backend
        })
    }
}

//clear error, limpiamos los errores que hayan ocurrido en la peticion
export const clearErrors= () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}