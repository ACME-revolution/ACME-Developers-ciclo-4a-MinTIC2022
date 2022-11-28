// https://expressjs.com/es/
import express from "express"; //importar todas las funciones necesarias
import dotenv from "dotenv"; //importar todas las funciones necesarias
import cors from "cors"; //importar todas las funciones necesarias
import fileupload from 'express-fileupload';

import conectarDB from "./config/db.js"; //importar todas las funciones necesarias
import usuarioRoutes from "./routes/usuarioRoutes.js"; //importar todas las funciones necesarias

import ordersRoutes from "./routes/orders"; //importar todas las funciones necesarias
import products from "./routes/productoRoutes.js"//importamos la ruta de los productos
//import errorMiddleware from "./middleware/errors.js"//usamos acá nuestro atrapador de errores


dotenv.config(); //para aceptar variables de entorno

const PORT = process.env.PORT || 4000;

// Se le agrega toda la funcionalidad del servidor de express
const app = express();
app.use(express.json()); //se le indica al servidor que se envia y recibe informacion por JSON

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './files'
}));

conectarDB(); //funcion que se encarga de la conexion de BDs
// middlewares
// Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend

const dominiosPermitidos = [process.env.FRONTEND_URL]; //permite el acceso a dominos que se establezcan en el frontend
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del Request esta permitido
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
};
app.use(cors(corsOptions));

// Gestion de usuarios (rutas)
app.use("/api/", usuarioRoutes);

// Gestion de productos (rutas)
app.use("/api", products)//ruta en el navegador, tomará en cuenta las rutas de los products

// Gestion de ventas (rutas)
app.use("/api/", ordersRoutes);

//Middleware para manejar errores:
//app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT} `);
});