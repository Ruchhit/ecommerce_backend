import { fetchUserById , updateUser } from "../controllers/user.controller.js";
import Router from "express";
const router = Router()

router.route("/:id").get(fetchUserById)
                    .patch(updateUser)

export {router as userRouter};