import mongoose from "mongoose";

const criptoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require:true,
        trim:true
    }
},
{
    timestemps:true
}        
)

const Cripto = mongoose.model("cripto", criptoSchema, "CriptoMoneda")

export default Cripto