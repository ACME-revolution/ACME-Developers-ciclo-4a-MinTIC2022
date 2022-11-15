//Acá vamos a crear las entidades para crear las colecciones de la base de datos Mongo
import mongoose from 'mongoose';
//Mongo asigna un id automaticamente a cada registro de la tabla
//Creando las tablas de los productos:
const productsSchema= mongoose.Schema({//el metodo Schema indica asegura la estructura de la coleccion de la tabla
    nombre:{//primer campo, agregamos caracteristicas que tendrá este campo
        type:String,//será de tipo string
        required:[true, "Por favor registra el nombre del producto"],//será un campo obligatorio
        trim:true, //elimina espacios en blanco del dato ingresado en este campo
        maxLength:[120,"El nombre dle productono debe exceder los 120 caracteres"]//establece cantidad de caracteres
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no debe superar los 99 millones"],
        default: 0.0 //colocamos un precio por default en caso de algún error de la app
    },
    descripcion:{
        type:String,
        required:[true, "Por favor registre una descripción para el producto."]
    },
    calificacion:{ //calificacion del producto
        type:Number,
        default: 0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor selecciones la categoria del producto."],
        enum:{//me permite registrar una lista de cosas y enumerarlas automaticamente
            values:[//está lista desde el frontend se envia el numero hacia el back según la elección de la lista
                "Explosivos",//1
                "Trampas",//2
                "Armas",//3
                "Venenos"//4
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor del producto"]
    },
    inventario:{//cantidad de stock
        type:Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[5, "Cantidad maxima del producto no puedosobrepasar los 99999"],
        default:0
    },
    numCalificaciones:{//nuemero de calificaciones del producto
        type:Number,
        default:0
    },
    opiniones:[//lo creamos como un arreglo para poder hacer update de las opiniones
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now //el producto se va a registrar con la fecha de ese momento de registro
    }

})

//lo exportamos como un modelo de base de datos, se llamará productos la bd y le pasamos el schema
const Producto= mongoose.model("productos", productsSchema)
export default Producto;