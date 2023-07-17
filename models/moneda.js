import mongoose from "mongoose";

const monedaSchema = mongoose.Schema({
    nombre: {
        type: String,
        require:true,
        trim: true
    }
},
{
    timestamps: true
}
)

const Moneda = mongoose.model("moneda", monedaSchema, "Moneda")

export default Moneda