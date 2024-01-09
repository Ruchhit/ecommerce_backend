import { createUser } from "../controllers/auth.controller.js";
import {Router} from 'express';
const router = Router();

router.route('/signup').post(createUser);

export {router as authRouter}