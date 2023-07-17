import Trader from "../models/trader.js";

const getTrader = async (req, res) =>{

    const trader = await Trader.find();

    res.json(trader);

}


const addTrader = async (req, res) =>{

    const trader = new Trader(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Trader.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(500)
        res.send({error: "Categoria no existe"})
    }
}

const updateT = async(req, res) =>{
    try {
        const uptrader = await Trader.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});

            res.json({uptrader})
    } catch (error) {
        console.log(error);
    }
}


export {getTrader, addTrader, borrar, updateT}