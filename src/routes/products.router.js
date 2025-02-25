import { Router } from "express";
import * as controllers from "../controllers/product.controllers.js"


const router = Router();

router.get("/", controllers.getProducts);

router.get("/:id", controllers.getById);

router.post("/", controllers.create);

router.put("/:id", controllers.update);

router.delete("/:id", controllers.remove);



 

export default router;