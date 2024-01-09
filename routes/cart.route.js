 
import {Router} from 'express';
import { addToCart, deleteFromCart, fetchCartByUser, updateCart } from '../controllers/cart.controller.js';
const router = Router();
 router.route("/").post(addToCart).get(fetchCartByUser)
 router.route("/:id").delete(deleteFromCart).patch(updateCart)

export {router as cartRouter}