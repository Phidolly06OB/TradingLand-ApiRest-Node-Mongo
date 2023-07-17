import Moneda from "../models/moneda.js";

const getMoneda = async (req, res) =>{
    try {
        const moneda = await Moneda.find();

        res.json(moneda)
    } catch (error) {
        console.log(error);
    }
}

const addMoneda = async (req, res)=>{
    const moneda = new Moneda(req.body);
    try {
        const nuevaMoneda = await moneda.save();
        res.json(nuevaMoneda)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Moneda.deleteOne({_id:req.params.id})
        res.send()
    } catch (error) {
        console.log(error);
    }
}

const upMoneda = async (req, res) =>{
    try {
        const updMoneda = await Moneda.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});

            res.json({updMoneda})
    } catch (error) {
        
    }
}

export {getMoneda, addMoneda, borrar, upMoneda}