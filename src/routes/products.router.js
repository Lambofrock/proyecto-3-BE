import { Router } from "express";
import * as controllers from "../controllers/product.controllers.js"


const router = Router();

// router.post('/products',async (req,res )=>{
//     try {
//         await productManager.createProd(req.body);
//         res.redirect('/products');
//     } catch (error) {
//      console.log(error);
//     }
// })

router.get("/", controllers.getProducts);

router.get("/:id", controllers.getById);

router.post("/", controllers.create);

router.put("/:id", controllers.update);

router.delete("/:id", controllers.remove);



 

export default router;