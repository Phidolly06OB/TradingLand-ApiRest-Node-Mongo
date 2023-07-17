import Router from "express";
import { getMoneda, borrar, addMoneda, upMoneda} from "../controllers/moneda.controller.js";

const router = Router();

router.get("/", getMoneda);

router.delete("/:id", borrar);

router.post("/add", addMoneda);

router.patch("/:id", upMoneda)


export default router