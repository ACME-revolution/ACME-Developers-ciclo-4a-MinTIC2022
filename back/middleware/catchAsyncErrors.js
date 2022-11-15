//Acá atrapamos los errores que se definieron en errors.js e indicamos que hacer con ellos
//este atrapador de errores será incluido en todo el proyecto así que lo usamos en app.js
//tambien se usará en nuestros controller para atrapar los errores de sus diferentes funciones
export default func => (req, res, next) =>
//esperamos la ejecucion de una promesa para resolver:
    Promise.resolve(func(req, res, next))//adentro le pasamos la promesa que falle (las que estan en nuestro controller)
        .catch(next) //si encuentro un error lo capturamos (será como un return del error)