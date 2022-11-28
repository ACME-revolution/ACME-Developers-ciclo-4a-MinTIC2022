//acá vamos a manejar el modelo para las ordenes o pedidos, recuerda que los productos y usuarios estan relacionados para cada orden:
import mongoose from "mongoose";


//creamos nuestra colección:
const orderSchema = mongoose.Schema({
    //crearemos la información del envio:
    envioInfo: {
        direccion: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
    },
    //acá comenzamos a relacionar el usuario con los pedidos, por ello cremos un campo para usuarios:
    user:
    {
        //el sabe que el atributo Objectid corresponde al Id de otro objeto que está creado en mi proyecto el cual es el del usuario en mongo:
        type: mongoose.Schema.Types.ObjectId,//acá establecemos la relación
        required: true,
        ref: "auth" //colocamos cual sera la referencia de los usuarios (está estará en el model auth.js)
    },
    //acá colocamos la info de los productos que se pidieron en el pedido:
    //el valor lo colocamos como un arreglo porque recuerda que podemos pedir varios productos a la vez:
    items: [{
        nombre: {
            type: String,
            required: true
        },
        cantidad: {//la cantidad de veces que pedí del mismo producto
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        //ahora acá hacemos la relación de los pedidos con los productos:
        producto: {
            //el producto lo va a sacar de la bd
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "productos"//colocamos cual sera la referencia de los productos (está estará en el model products.js):
        }
    }
    ],
    //información del pago, cada pago debe tener un id: este id en procesos con pasarelas de pagos será util
    pagoInfo: {
        id: {
            type: String
        },
        estado: {//el estado del pago, osea si es aprovado, cancelado, o negado. esto lo usarás en los procesos de pasarelas de pagos
            type:String
        }
    },
    fechaPago:{
        type: Date
    },
    precioItems:{//este será el precio de todos los productos comprados
        type:Number,
        required: true,
        default: 0.0 //este será el default mientras la orden/pedido este vacio
    },
    precioImpuesto:{
        type:Number,
        required: true,
        defautl: 0.0
    },
    precioEnvio:{//precio del envio de los productos
        type:Number,
        required: true,
        default: 0.0
    },
    precioTotal:{//este será el valor total de la compra
        type:Number,
        required:true,
        default:0.0
    },
    estado:{//este será el estado de la orden/pedido
        type: String,
        required: true,
        default:"Procesando"
    },
    fechaEnvio:{
        type:Date
    },
    fechaCreacion:{//está será la fecha de creación del pedido
        type:Date,
        default: Date.now
    }
})

const Order=mongoose.model("order",orderSchema)
export default Producto;