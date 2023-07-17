import Router from "express";
import { getTrader, addTrader, borrar, updateT } from "../controllers/trader.controller.js";

const router = Router()

router.get("/", getTrader)

router.delete("/:id", borrar)

router.post("/add", addTrader)

router.patch("/:id", updateT)



export default router;