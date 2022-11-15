import express from "express";
import { 
    getProducts, newProducts, getByIdProduct, updateProduct, deleteProduct
} from "../controllers/productoController.js";

const router = express.Router();

// Rutas Gestión Producto
router.get('/get', getProducts);
router.get('/get/:id', getByIdProduct);
router.post('/AddProducto', newProducts);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);


export default router;
