import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    nombre:{
    type:String,
    require:true,
    trim:true
  }
},
{
    timestemps:true
}
)

const Acciones = mongoose.model("acciones", accionesSchema, "Acciones")

export default Acciones