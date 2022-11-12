import Venta from '../models/Venta.js';

const createVentas = async (req, res)=>{

    try {

        const venta = new Venta(req.body);
        const ventaGuardado = await venta.save();
        
        res.json(ventaGuardado);

    } catch (error) {
        console.error(error.message);
    };
};

export { 
    createVentas,
    // getVenta,
    // getVentas,
    // updateVentas,
    // deleteVentas 
};
