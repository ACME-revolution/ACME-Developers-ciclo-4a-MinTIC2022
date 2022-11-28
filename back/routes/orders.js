//acá crearemos las rutas de las ordenes/pedidos
const express=require("express");
const router=express.Router();
import { newOrder, 
    getOneOrder, 
    myOrders,
} from "../controllers/orderController";

router.route("/order/newOrder").post(isAuthenticatedUser, newOrder)//creamos la ruta para que el usuario logeado pueda crear una nueva orden
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)//creamos la ruta para que el usuario logueado pueda ver una orden
router.route("/orders/usuario").get(isAuthenticatedUser, myOrders)//creamos la ruta para que el usuario logueado pueda ver su historial de ordenes

//rutas de admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), allOrders)//ruta para que el admin pueda ver todas las ordenes que han hecho en su tienda
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)//ruta para que el admin pueda ver una orden/pedido y editarlo
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)//ruta para que el admin pueda borrar una orden

export default router;
