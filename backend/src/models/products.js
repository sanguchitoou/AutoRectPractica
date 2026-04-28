import { Schema, model } from "mongoose"; // importamos Schema y model de Mongoose

// Definimos el esquema de productos con los campos name, description, price y stock
const productsSchema = new Schema({
    name:{ // el nombre del producto es un string requerido
        type: String,
        required: true
    },
    category: { // la categoría del producto
        type: String,
        required: true
    },
    stock: { // el stock del producto es un número requerido
        type: Number,
        required: true
    },
    price: { // el precio del producto es un Decimal128 requerido
        type: Schema.Types.Decimal128,
        required: true
    }, 
    status: { // el stock del producto es un número requerido
        type: String,
        required: true
    }, 
    sku: { // el stock del producto es un número requerido
        type: String,
        required: true
    }, 
    supplier: { // el stock del producto es un número requerido
        type: String,
        required: true
    }
}, {
    timestamps: true, // agrega campos createdAt y updatedAt automáticamente
    strict: false // permite guardar campos adicionales que no estén definidos en el esquema (opcional)
})

export default model("products", productsSchema) // exportamos el modelo de productos para usarlo en los controladores y rutas