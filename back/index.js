import express from 'express'; //importacion del os metodos de express

//Prueba de funcionamiento
const PORT = 4000;
const app = express();
app.listen(PORT, () => {
    console.log('Servidor Inicializado');
});