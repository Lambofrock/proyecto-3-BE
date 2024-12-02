import { Router } from "express";
import productManager from "../managers/product.manager.js";
const router = Router();



router.get("/realtimeproducts", async (req, res) => {
    const products= await productManager.getAll();
  res.render("realtimeproducts" , {products} );
});

router.get("/home", (req, res) => {
    res.render("home", );
  });


export default router;
