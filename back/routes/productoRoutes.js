import express from "express";
import { 
    deleteProductos, 
    getProducto, 
    getProductos, 
    createProductos, 
    updateProductos
} from "../controllers/productoController.js";

const router = express.Router();

// Rutas Gestión Producto
router.get('/get', getProductos);
router.get('/get/:id', getProducto);
router.post('/AddProducto', createProductos);
router.put('/update/:id', updateProductos);
router.delete('/delete/:id', deleteProductos);


export default router;
