import express from "express";
import { 
    createVentas,
    // getVentas,
    // getVenta,
    // updateVentas,
    // deleteVentas 
} from "../controllers/ventaController.js";

const router = express.Router();

// Rutas Gestion Ventas
router.post('/create', createVentas);
// router.get('/get', getVentas);
// router.get('/get/:id', getVenta);
// router.put('/update/:id', updateVentas);
// router.get('/delete/:id', deleteVentas);

export default router;