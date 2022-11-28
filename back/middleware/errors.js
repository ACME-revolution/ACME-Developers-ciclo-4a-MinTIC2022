//definimos tipos de errores generales que se los enviaremos a nuestro ErrorHandler para que este se ocupe de crearlo en el sistema y que haya una trazabilidad del error y el programador pueda saber que está pasando

/*Recuerda que el middleware es la herramienta que se comunica del front al back y del back al front
por consiguiente todas las clases que estan adentro tienen esta misma caracteristica*/



//definiremos el error 500 para cuando aparezca en nuestra app:
/*sin embargo haremos el siguiente modulo para tratar todos los posibles estados de error que lanza nuestra app, pero si queremos podemos crear cada status error por aparte en diferentes modulos exportables*/
/*module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500; //el error tendra un statusCode al error que nos manda nuestro aplicativo que puede ser 400, 404, 300, ect.. O a un error 500 
    err.message= err.message || "Internal Server Error"//creamos tambien un mensaje de error

    //generamos una respuesta con el error:
    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })

}*/