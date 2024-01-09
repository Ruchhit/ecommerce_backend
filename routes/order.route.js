 
import {Router} from 'express';
import { createOrder, deleteOrder, fetchOrderByUser, updateOrder } from '../controllers/order.controller.js';
const router = Router();
 router.route("/").post(createOrder)
 .get(fetchOrderByUser)
 router.route("/:id").delete(deleteOrder).patch(updateOrder)

export {router as orderRouter}