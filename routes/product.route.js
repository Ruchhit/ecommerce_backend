import { Router } from "express";
import { createProduct, fetchAllProducts } from "../controllers/product.controller.js";
const router = Router();

router.route("/").post(createProduct)
                 .get(fetchAllProducts)
export {router}