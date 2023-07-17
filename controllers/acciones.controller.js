import Acciones from "../models/acciones.js";

const getAcciones = async (req, res)=>{
    try {
        const accion = await Acciones.find()

        res.json(accion)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Acciones.deleteOne({_id:req.params.id})
        res.send()
    } catch (error) {
        console.log(error);
    }
}

const addAccion = async (req, res) =>{
    try {
        const nuevaAccion = await new Acciones(req.body);
        nuevaAccion.save()

        res.json(nuevaAccion)
    } catch (error) {
        console.log(error);
    }
}

const upAccion = async (req, res) =>{
    try {
        const updAccion = await Acciones.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updAccion);
    } catch (error) {
        
    }
}

export {getAcciones, borrar, addAccion, upAccion}