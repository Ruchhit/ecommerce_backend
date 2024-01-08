import {Router} from 'express'
import { createBrand, fetchBrands } from '../controllers/brand.controller.js';
 const router =  Router();
//  /brands is already added in base path

router.route ('/').get(fetchBrands).post(createBrand)

 export{router}