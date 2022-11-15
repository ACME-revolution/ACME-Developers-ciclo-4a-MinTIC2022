//clase para manejar errores:
/*esta clase se la mandamos al middelware (osea a mi comunicador, el que comunica al back con le front y viceversa)
para que nuestro Handler pueda tratar esos errores*/
class ErrorHandler extends Error{//Error es una clase interna 
    constructor (message, statusCode){//el constructor recibe un mensaje y un status code
        super(message);//el mensaje sube a la clase principal
        this.statusCode= statusCode

        //generamos una trasabilidad del error:
        Error.captureStackTrace(this, this.constructor)
    }
}

export default ErrorHandler