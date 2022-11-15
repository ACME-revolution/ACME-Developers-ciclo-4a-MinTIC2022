import Producto from "../models/Producto.js"; //importar el modelo de productos
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
//usamos la siguiente linea para poder importar fetch cuando en un proyecto usamos el modulo commonJS el cual usa solo require, con esto podemos evitar tener que cambiar en el package.json el tipo del proyecto por module:
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=> fetch(url));


//aca listamos todos los productos
const getProducts= catchAsyncErrors( async (req, res, next) => {
    const myProducts= await Producto.find()// find me trae toda la lista de productos de la BD
    
    //si no estan los productos:
    if (!myProducts){
        return next(new ErrorHandler("información no encontrada", 404))
    }
    //respondemos:
    res.status(200).json({
        sucess: true,
        cantidad: Producto.length -1, //contamos todos los productos
        myProducts,
        message: "proceso exitoso"
    })
})

//aca listamos un producto por id
//metemos nuestra funcion dentro de catchAsyncErrors para manejar los errores de está
const getByIdProduct= catchAsyncErrors( async (req, res, next) => {
    //traemos el id de la ruta:
    const myProduct= await Producto.findById(req.params.id)// findById me trae un producto de la BD
    
    //respondemos:
    if(!myProduct){
        return next(new ErrorHandler("Producto no encontrado", 404)) //usamos el next que está en la funcion catchAsyncError
        }
    else{
        res.status(200).json({
            sucess: true,
            message: "Acá tienes tu producto",
            myProduct
        })
    }
})

//acá actualizamos un producto:
const updateProduct= catchAsyncErrors(async (req,res,next) =>{

    if (!req.params.id || !req.body) return res.status(400).send({ message: 'Client has not sent params' });
    //primero verificamos si el producto existe:
    let myProduct= await Producto.findById(req.params.id)// findById me trae un producto de la BD
    //respondemos:
    if (!myProduct){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    //si el producto existe procedemos a actualizar sus datos:
    myProduct= await Producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //indicamos que registre solo los datos nuevos del producto
        runValidators:true //indicamos que valide la data nueva que va actualizar
    });
    //respondemos:
    res.status(200).json({
        success:true,
        message:"Producto actualizado con exito",
        myProduct
    })

})

//acá eliminamos un producto:
const deleteProduct= catchAsyncErrors( async(req,res,next) => {

    if (!req.params.id || !req.body) return res.status(400).send({ message: 'Client has not sent params' });
    //primero verificamos si el producto existe:
    const myProduct= await Producto.findById(req.params.id)// findById me trae un producto de la BD
    //si el producto no está por ese id respondemos::
    if(!myProduct){
        return res.status(404).json({
            sucess: false,
            message: "No se encuentra el producto que quieres eliminar"
        })
    }
    //removemos el producto:
    await Producto.remove();
    res.status(200).json({
        sucess:true,
        message: "Producto eliminado correctamente"
    })
})

//acá creamos los productos
const newProducts= catchAsyncErrors( async(req,res,next) => {
    const myProduct= await Producto.create(req.body)
    
    //respondemos:
    res.status(201).json({
        sucess:true,
        myProduct //devolvemos le producto
    })
})

export { 
    getProducts,
    newProducts,
    updateProduct,
    deleteProduct,
    getByIdProduct 
};