import Router from "express"
import { addAccion, borrar, getAcciones, upAccion } from "../controllers/acciones.controller.js";
const router = Router();

router.get("/", getAcciones);

router.delete("/:id", borrar);

router.post("/add", addAccion);

router.patch("/:id", upAccion)


export default router;