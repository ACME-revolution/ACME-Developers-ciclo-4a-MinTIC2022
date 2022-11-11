import mongoose from 'mongoose';

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String,
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    }
});

const Producto = mongoose.model("Producto", ProductoSchema);

export default Producto;
