//la carpeta actions va a tener todas las actions para usarlas en el protocolo http y traer la info del back
//lo que hagamos aquí tenemos que unirlo con nuestro back y eso lo hacemos desde el package.json del front
//donde tenemos que agregarle al final la url del server donde corre el back como valor a una clave proxy
import axios from "axios";//axios me va a permitir consumir el api que tenemos en el back
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL,NEW_PRODUCT_REQUEST, 
    NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL,CLEAR_ERRORS } from "../components/constants/productConstants";

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

//CON ESTÁ FUNCION SE BUSCA CREAR UN PRODUCTO DESDE EL FRONT HACIA EL BACK (solo lo podrá hacer el admin):
//para crear un nuevo producto necesitamos un formData (lo llamaremos productData) 
export const newProduct = ( productData ) => async (dispatch)=>{
    try {
        dispatch({type: NEW_PRODUCT_REQUEST})//este envio compete a la solicitud de crear un nuevo producto

        const config ={ //la información me llegará en un header
            header: { 
                'Content-Type':'application/json'//cuyo contenido llegará en formato json. Cuando se escoge que la info llegue en formato json es porque se va a manipular mucha información, en otro caso puedes usar el formato para formData ("multipart/form-data") el cual es para poca información como solo cambiar un password o un email.
            }
        }

        //llevaremos está informacion por medio de un post hacia el backend para ello usamos axio para llevar la información a la ruta que esta establecida en el back para crear un nuevo producto. le pasamos el product data que es lo que va a llevar esa información y el config para la configuración de ese envio
        const {data} = await axios.post('/api/admin/producto/nuevo', productData, config)

        
        //esta será la respuesta en caso de que el movimiento de la informacion para crear el producto sea un exito:
        dispatch({
            type: NEW_PRODUCT_SUCCESS, //este será el tipo/estado de este dispatch
            payload: data //el payload será la data que se movio
        })
    
    //si hubo un error:
    }catch(error){
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message//enviamos la respuesta por el error
        })
    }
}

//clear error, limpiamos los errores que hayan ocurrido en la peticion
export const clearErrors= () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}