import Cripto from "../models/cripto.js";

const getCripto = async (req, res) =>{
    try {
        const cript = await Cripto.find()

        res.json(cript)
    } catch (error) {
        console.log(error);   
    }
}

const borrar = async (req, res) =>{
    try {
       await Cripto.deleteOne({_id:req.params.id});
       res.send()
    } catch (error) {
        console.log(error);
    }
}

//manera mas comoda de hacer el post!

const addCripto = async (req, res) => {
    try {
        const nuevaCript = await new Cripto(req.body)  
        nuevaCript.save();
        res.json(nuevaCript) 
    } catch (error) {
        console.log(error);
    }
}

const upCripto = async (req, res) => {
    try {
        const uptCripto = await Cripto.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new: true});

            res.json({uptCripto})
    } catch (error) {
     console.log(error);   
    }
}

export {getCripto, borrar, addCripto, upCripto}