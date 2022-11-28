import express from "express";
import { 
    getProducts, newProducts, getByIdProduct, updateProduct, deleteProduct
} from "../controllers/productoController.js";

const router = express.Router();

// Rutas Gestión Producto
router.route("/products").get(getProducts)//establecemos la ruta para listar los productos
router.route('/admin/producto/nuevo').post(newProducts); //establecemos la ruta para que el admin edite un producto. Este se crea como funcion porque nos estaba saliendo un error a diferencia de los routes de arriba


export default router;
