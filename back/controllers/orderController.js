const Order=require("../model/order");//llamamos al modelo order
const Product= require("../model/products")//llamamos tambien el modelo producto porque recuerda que las ordenes/pedidos se relacionan con los productos
const catchAsyncErrors= require("../middleware/catchAsyncErrors");//llamamos nuestro capturador de errores
const ErrorHandler = require("../utils/errorHandler");

//Crear una nueva orden
const newOrder= catchAsyncErrors (async (req, res, next)=>{

    //creamos la información importante a tomar de los pedidos que vendrá en el request body del navegador (osea desde la parte del front), toda esta info se creo en los campo del modelo order.js:
    const {
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    //creamos objeto de tipo order, el de crear una orden en nuestra BD mongo, le ingresamos las propiedas que tendrá ese objeto orden/pedido:
    const order= await Order.create({
        //esta info es la misma que viene del request body
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        //esta infor es automatica o vienen dados por el sistema (default):
        fechaPago: Date.now(),
        user: req.user._id// el id del user logeado que lo sacaremos del cookie 
    })

    //respuesta
    res.status(201).json({
        success:true,
        order //enviamos la orden para que me la deje ver
    })
})

//Ver una orden
const getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    //buscamos la orden por Id pero está orden en especia nos tenemos que asegurar que coincida con el usuario que la pidio, porque un usuario no debería ver las ordenes de otro user, el sistema no debería permitirlo:
    //entonces en este caso el findById tiene que tener un restricción, osea aparte de tener el id vamos a tener 2 condiciones más para asegurarnos que la orden es del usuario como tal, entonces con populate() le metemos más parametros a la consulta que se hace en la base de datos, es como que le agregamos más condiciones en donde solicitamos que el id, el user y el email debe coincidir con le usuario logeado que pidio la orden: de está forma solo ese usuario va a poder ver la orden si tiene ese id y si está logueado con el user y el email que corresponde a esa orden:
    const order= await Order.findById(req.params.id).populate("user", "nombre email") //restriccion de usuario

    //si no hay una orden:
    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese Id",404))
    }

    //respuesta: 
    res.status(200).json({
        success:true,
        order
    })
})

//Ver todo el historial de ordenes (usuario logueado):
//recuerda que esta funcion depende del usuario que esta logeado igual de la de arriba
const myOrders= catchAsyncErrors(async(req,res, next)=>{
    //find(): me trae todas las ordenes de la BD, pero podemos obligarlo a que nos aplique un filtro
    //entonces le decimos que nos tiene que filtrar por user, cuando user sea igual al id del usuario que esta logueado. Con esto conseguimos que el listado de ordenes solo pertenezca al usuario que esta logueado:
    const orders= await Order.find({user: req.user._id});

    //respuesta:
    res.status(200).json({
        success:true,
        orders
    })
})

//Admin
//Ver todas la ordenes (Administrador)
const allOrders= catchAsyncErrors(async (req, res, next)=>{
    //traemos todas las ordenes de nuestra base de datos para que el admin las pueda ver en su dashboard:
    const orders= await Order.find()

    //con el listado de ordenes vamos a sacar un total de todo lo vendido para mostrarlo en el front en la parte del dashboard:
    let cantidadTotal= 0;
    orders.forEach(order =>{//por cada orden vamos a sumar el total del pedido
        cantidadTotal= cantidadTotal + order.precioTotal//recuerda que precioTotal viene del modelo orders
       // cantidadTotal += order.precioTotal
    })

    //respuesta para el front:
    res.status(200).json({
        success:true,
        cantidadTotal,
        orders
    })

})

//Editar una orden (admin)
//el admin no podrá editar el pedido si este ya se le envio al cliente, así el cliente ruegue en soporte, ect. esto lo sabemos con ayuda del cambio de estado del pedido (cuyo campo estado se encutra en el model orders):
//recuerda que aquí puedas agregar cosas a editar de un podido com la dirección por ejemplo:
const updateOrder= catchAsyncErrors(async(req, res, next)=>{

    //traemos la orden por medio del id que va en la ruta:
    const order= await Order.findById(req.params.id)

    //si la orden no se encuentra:
    if(!order){
        return next (new ErrorHandler("Orden no encontrada", 404))
    }

    //si se encuentra la orden y si su estado es igual a Enviado (recuerda que estado viene del model orders)
    if (order.estado==="Enviado" && req.body.estado==="Enviado"){
        return next(new ErrorHandler("Esta orden ya fue enviada", 400))
    }

    //Restamos del inventario
    if (req.body.estado!=="Procesando"){
        order.items.forEach(async item => {
            await updateStock(item.producto, item.cantidad)
        })
    }
   
    //actualizamos el estado del pedido en la BD por medio de un estado que vendra en el req.body del front
    order.estado= req.body.estado;
    order.fechaEnvio= Date.now();//tambien actualizamos la fecha de envio

    //guardamos todas las actualizaciones de ese pedido en la BD:
    await order.save()

    res.status(200).json({
        success:true,
        order
    })
})

//Actualizar un stock en la BD (osea cuando la cantidad de un producto disminuye) cuando haya una compra efectiva hecha en el front:
//id: sería el id del producto y quantity la cantidad de ese producto comprado (estos se pasan desde el front. esta función se usará desde front):
async function updateStock(id, quantity){
    //buscamos y traemos el producto por medio del id:
    const product = await Product.findById(id);

    //le restamos al inventario lo que existe en la bd menos la cantidad del producto comprado en ese pedido
    product.inventario= product.inventario-quantity;

    //actualizamos el producto en la Bd e indicamos que no nos haga validaciones porque sino nos va a pedir toda la información dle prducto y solamente necesito cambiar el inventario:
    await product.save({validateBeforeSave: false})
}


//Eliminar una orden (admin)
const deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    //traemos la orden de la BD por medio del id de la misma orden que llega en la ruta:
    const order = await Order.findById(req.params.id);

    //si esa orden no existe:
    if(!order){
        return next (new ErrorHandler("Esa orden no esta registrada", 404))
    }
    await order.remove()

    res.status(200).json({
        success:true,
        message:"Orden eliminada correctamente"
    })
})

export{
    newOrder,
    getOneOrder,
    myOrders,
    allOrders,
    updateOrder,
    deleteOrder
}