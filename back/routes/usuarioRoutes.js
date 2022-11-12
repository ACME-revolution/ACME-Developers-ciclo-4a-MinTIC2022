import express from "express";
import { 
    registrar,
    confirmar 
} from "../controllers/usuarioController.js";

const router = express.Router();

// Rutas para la gestion de los usuarios
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);


export default router;