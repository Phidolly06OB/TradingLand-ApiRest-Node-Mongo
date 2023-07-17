import Router from "express";
import { addCripto, borrar, getCripto, upCripto } from "../controllers/cripto.controller.js";

const router = Router();

router.get("/", getCripto);

router.delete("/:id", borrar);

router.post("/add", addCripto);

router.patch("/:id", upCripto);



export default router