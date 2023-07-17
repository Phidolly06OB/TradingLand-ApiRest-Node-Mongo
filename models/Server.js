import express from 'express';
import cors from 'cors';
import conectarDB from '../config/config.js';
import  TradersRoutes  from "../routes/trader.routes.js";
import MonedaRoutes from "../routes/moneda.routes.js"
import CriptoRoutes from "../routes/cript.routes.js"
import AccionesRoutes from "../routes/acciones.routes.js"

class Server{
    
    constructor(){
        this.app = express();
        this.mongoDB();
        this.port = process.env.PORT

        this.traderPatch = "/api/Trader"
        this.monedaPatch = "/api/Moneda"
        this.criptoPatch = "/api/Cripto"
        this.accionesPatch = "/api/Acciones"
        
        this.middleware();

        this.routes();


    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json())

    }

    async mongoDB(){
       await conectarDB();
    }

    routes(){
        this.app.use(this.traderPatch, TradersRoutes)
        this.app.use(this.monedaPatch, MonedaRoutes)
        this.app.use(this.criptoPatch, CriptoRoutes)
        this.app.use(this.accionesPatch, AccionesRoutes)
    }
T
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listening on Port: ${this.port}`);
        });
    }

}

export default Server