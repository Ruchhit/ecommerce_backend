 import {Router} from 'express'
import { createCategory, fetchCategories } from '../controllers/category.controller.js';
const router =  Router();
//  /categories is already added in base path

router.route ('/').get(fetchCategories).post(createCategory)

 export{router}